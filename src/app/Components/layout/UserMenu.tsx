"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function UserMenu() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [open, setOpen] = useState(false);

  if (isPending) {
    return <div className="h-10 w-28 animate-pulse rounded-lg bg-base-200" />;
  }

  if (!session) {
    return (
      <Link
        href="/signin"
        className="flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-content"
      >
        সাইন ইন
      </Link>
    );
  }

  const { name, image } = session.user;

  async function handleSignOut() {
    await authClient.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 items-center gap-2 rounded-lg px-[17px] hover:bg-base-200"
      >
        <span className="flex size-9 items-center justify-center overflow-hidden rounded-[10.5px] bg-primary text-sm font-semibold text-primary-content">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="" className="size-full object-cover" />
          ) : (
            name?.charAt(0).toUpperCase()
          )}
        </span>
        <span className="text-sm font-medium text-base-content">{name}</span>
        <span className="text-xs opacity-60">▾</span>
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-44 rounded-xl border border-base-300 bg-base-100 p-1 shadow-md">
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm hover:bg-base-200"
          >
            প্রোফাইল
          </Link>
          <button
            onClick={handleSignOut}
            className="block w-full rounded-lg px-3 py-2 text-left text-sm text-error hover:bg-base-200"
          >
            সাইন আউট
          </button>
        </div>
      )}
    </div>
  );
}