"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function UserMenu() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (isPending) {
    return <div className="h-10 w-28 animate-pulse rounded-lg bg-base-200" />;
  }

  if (!session) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/signin"
          className="flex h-9 items-center rounded-lg border border-base-300 px-3 text-xs font-semibold text-base-content transition-colors hover:bg-base-200 sm:h-10 sm:px-[17px] sm:text-sm"
        >
          সাইন ইন
        </Link>
        <Link
          href="/signup"
          className="flex h-9 items-center rounded-lg border border-primary-strong bg-primary px-3 text-xs font-semibold text-primary-content shadow-[0_3px_1px_rgba(5,137,62,0.3)] sm:h-10 sm:px-[17px] sm:text-sm"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  const { name, email, image } = session.user;

  async function handleSignOut() {
  const { error } = await authClient.signOut();

  if (error) {
    toast.error("সাইন আউট করা যায়নি, আবার চেষ্টা করুন।");
    return;
  }

  setOpen(false);
  toast.success("সাইন আউট হয়েছে।");
  router.push("/");
  router.refresh();
}

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 items-center gap-2 rounded-lg px-2 transition-colors hover:bg-base-200 sm:px-[17px]"
      >
        <span className="flex size-9 items-center justify-center overflow-hidden rounded-[10.5px] bg-primary text-sm font-semibold text-primary-content">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="" className="size-full object-cover" />
          ) : (
            name?.charAt(0).toUpperCase()
          )}
        </span>
        <span className="hidden max-w-32 truncate text-sm font-medium text-base-content sm:block">
          {name}
        </span>
        <span className="text-xs opacity-60">▾</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-30 mt-2 w-64 rounded-2xl border border-base-300 bg-base-100 p-[9px] shadow-lg"
        >
          <div className="flex flex-col overflow-hidden px-3 py-2 text-base-content">
            <span className="truncate text-sm font-semibold leading-[21px]">
              {name}
            </span>
            <span className="truncate text-xs leading-4 opacity-70">
              {email}
            </span>
          </div>

          <Link
            href="/profile"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex h-[33px] items-center rounded-lg px-3 text-sm leading-[21px] text-base-content transition-colors hover:bg-base-200"
          >
            👤 আমার প্রোফাইল
          </Link>

          <button
            type="button"
            role="menuitem"
            onClick={handleSignOut}
            className="flex h-[33px] w-full items-center rounded-lg px-3 text-left text-sm leading-[21px] text-error transition-colors hover:bg-base-200"
          >
            ↩ সাইন আউট
          </button>
        </div>
      )}
    </div>
  );
}
