"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handlePress() {
    setPending(true);
    const { error } = await authClient.signOut();

    if (error) {
      setPending(false);
      toast.error("সাইন আউট করা যায়নি, আবার চেষ্টা করুন।");
      return;
    }

    toast.success("সাইন আউট হয়েছে।");
    router.push("/");
    router.refresh();
  }

  return (
    <Button
      variant="outline"
      isPending={pending}
      onPress={handlePress}
      className="h-10 shrink-0 rounded-lg border-error px-[17px] text-sm font-semibold text-error"
    >
      ↩ সাইন আউট
    </Button>
  );
}