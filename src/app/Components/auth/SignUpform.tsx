"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "@heroui/react";
import FormField from "@/app/Components/ui/Formfield";
import GoogleButton from "@/app/Components/ui/GoogleButton";
import { authClient } from "@/lib/auth-client";

export default function SignUpForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const confirm = String(data.get("confirm") ?? "");

    if (password.length < 8) {
      setError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }
    if (password !== confirm) {
      setError("দুটি পাসওয়ার্ড মিলছে না।");
      return;
    }

    setPending(true);
    const { error } = await authClient.signUp.email({ name, email, password });
    setPending(false);

    if (error) {
      setError(error.message ?? "অ্যাকাউন্ট তৈরি করা যায়নি।");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label="নাম" name="name" placeholder="যেমন: রহিম উদ্দিন" autoComplete="name" />
      <FormField label="ইমেইল" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
      <FormField label="পাসওয়ার্ড" name="password" type="password" placeholder="কমপক্ষে ৮ অক্ষর" autoComplete="new-password" />
      <FormField label="পাসওয়ার্ড নিশ্চিত করুন" name="confirm" type="password" placeholder="আবার লিখুন" autoComplete="new-password" />

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
        অ্যাকাউন্ট তৈরি করুন
      </Button>

      <div className="flex items-center gap-4 text-xs leading-4 text-base-content">
        <span className="h-px flex-1 bg-base-300" />
        অথবা
        <span className="h-px flex-1 bg-base-300" />
      </div>

      <GoogleButton />

      <p className="text-center text-sm leading-5 text-base-content">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="text-primary hover:underline">
          সাইন ইন করুন
        </Link>
      </p>
    </Form>
  );
}