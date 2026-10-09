"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "@heroui/react";
import FormField from "@/app/Components/ui/Formfield";
import SocialButtons from "@/app/Components/ui/SocialButtons";
import { authClient } from "@/lib/auth-client";

export default function SignInForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    setPending(true);
    const { error } = await authClient.signIn.email({ email, password });
    setPending(false);

    if (error) {
      setError("ইমেইল বা পাসওয়ার্ড ভুল।");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label="ইমেইল" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
      <FormField label="পাসওয়ার্ড" name="password" type="password" placeholder="আপনার পাসওয়ার্ড" autoComplete="current-password" />

      {error && (
        <p role="alert" className="text-sm text-error">
          {error}
        </p>
      )}

      <Button
        type="submit"
        fullWidth
        isPending={pending}
        className="h-10 rounded-lg border border-[#047f39] bg-primary text-sm font-semibold text-primary-content shadow-[0_3px_1px_rgba(5,137,62,0.3)]"
      >
        সাইন ইন
      </Button>

      <div className="flex items-center gap-4 text-xs leading-4 text-base-content">
        <span className="h-px flex-1 bg-base-300" />
        অথবা
        <span className="h-px flex-1 bg-base-300" />
      </div>

     
      <SocialButtons />

      <p className="text-center text-sm leading-5 text-base-content">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="text-primary hover:underline">
          সাইন আপ করুন
        </Link>
      </p>
    </Form>
  );
}