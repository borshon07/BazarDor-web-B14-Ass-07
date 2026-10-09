"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "@heroui/react";
import toast from "react-hot-toast";
import FormField from "@/app/Components/auth/FormField";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm({
  defaultName,
}: {
  defaultName: string;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();

    if (!name) {
      toast.error("নাম লিখুন।");
      return;
    }

    setPending(true);
    const { error } = await authClient.updateUser({ name });
    setPending(false);

    if (error) {
      toast.error(error.message ?? "তথ্য আপডেট করা যায়নি।");
      return;
    }

    toast.success("তথ্য সফলভাবে আপডেট হয়েছে।");
    router.push("/profile");
    router.refresh();
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField
        label="নাম"
        name="name"
        defaultValue={defaultName}
        placeholder="আপনার নাম"
        autoComplete="name"
      />

      <Button
        type="submit"
        fullWidth
        isPending={pending}
        className="h-10 rounded-lg border border-[#047f39] bg-primary text-sm font-semibold text-primary-content shadow-[0_3px_1px_rgba(5,137,62,0.3)]"
      >
        তথ্য আপডেট করুন
      </Button>

      <Link
        href="/profile"
        className="text-center text-sm leading-5 text-base-content hover:underline"
      >
        বাতিল করুন
      </Link>
    </Form>
  );
}