"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

type Provider = "google" | "github";

const providers: { id: Provider; label: string; icon: React.ReactNode }[] = [
  {
    id: "google",
    label: "Google দিয়ে চালিয়ে যান",
    icon: <FcGoogle className="size-4" />,
  },
  {
    id: "github",
    label: "GitHub দিয়ে চালিয়ে যান",
    icon: <FaGithub className="size-4" />,
  },
];

export default function SocialButtons() {
  const [pending, setPending] = useState<Provider | null>(null);

  async function handlePress(provider: Provider) {
    setPending(provider);

    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/?auth=success",
    });

    if (error) {
      setPending(null);
      toast.error(
        error.message || `সাইন ইন করা যায়নি (${error.status ?? "?"})`,
      );
    }
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      {providers.map((provider) => (
        <Button
          key={provider.id}
          variant="outline"
          isPending={pending === provider.id}
          onPress={() => handlePress(provider.id)}
          className="h-9 min-w-0 flex-1 rounded-lg border-base-300 px-3 text-xs font-semibold text-base-content sm:h-10 sm:text-sm"
        >
          {provider.icon}
          {provider.label}
        </Button>
      ))}
    </div>
  );
}