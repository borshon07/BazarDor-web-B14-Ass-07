"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form, toast } from "@heroui/react";
import FormField from "@/app/Components/ui/Formfield";
import SocialButtons from "@/app/Components/ui/SocialButtons";
import { authClient } from "@/lib/auth-client";

export default function SignUpForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const confirm = String(data.get("confirm") ?? "");

    if (password.length < 8) {
      toast.danger("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }
    if (password !== confirm) {
      toast.danger("দুটি পাসওয়ার্ড মিলছে না।");
      return;
    }

    setPending(true);
    const { error } = await authClient.signUp.email({ name, email, password });
    setPending(false);

    if (error) {
      toast.danger(error.message ?? "অ্যাকাউন্ট তৈরি করা যায়নি।");
      return;
    }

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে। এখন সাইন ইন করুন।");
    router.push("/signin");
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label="নাম" name="name" placeholder="যেমন: রহিম উদ্দিন" autoComplete="name" />
      <FormField label="ইমেইল" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
      <FormField label="পাসওয়ার্ড" name="password" type="password" placeholder="কমপক্ষে ৮ অক্ষর" autoComplete="new-password" />
      <FormField label="পাসওয়ার্ড নিশ্চিত করুন" name="confirm" type="password" placeholder="আবার লিখুন" autoComplete="new-password" />

      <Button
        type="submit"
        fullWidth
        isPending={pending}
        className="h-10 rounded-lg border border-[#047f39] bg-primary text-sm font-semibold text-primary-content shadow-[0_3px_1px_rgba(5,137,62,0.3)]"
      >
        অ্যাকাউন্ট তৈরি করুন
      </Button>

      <div className="flex items-center gap-4 text-xs leading-4 text-base-content">
        <span className="h-px flex-1 bg-base-300" />
        অথবা
        <span className="h-px flex-1 bg-base-300" />
      </div>

      <SocialButtons />

      <p className="text-center text-sm leading-5 text-base-content">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="text-primary hover:underline">
          সাইন ইন করুন
        </Link>
      </p>
    </Form>
  );
}