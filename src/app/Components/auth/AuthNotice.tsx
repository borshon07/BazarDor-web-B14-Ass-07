"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function AuthNotice() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const reason = params.get("reason");
  const auth = params.get("auth");

  useEffect(() => {
    if (reason === "login-required") {
      toast.error("এই পাতা দেখতে আগে সাইন ইন করুন।", { id: "login-required" });
      router.replace(pathname);
    }
    if (auth === "success") {
      toast.success("সাইন ইন সফল হয়েছে।", { id: "auth-success" });
      router.replace(pathname);
    }
  }, [reason, auth, pathname, router]);

  return null;
}