import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { buttonVariants } from "@heroui/react";
import SignOutButton from "@/app/Components/auth/SignOutButton";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/signin?reason=login-required");

  const { name, email, image } = session.user;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-6 text-base-content">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold leading-8">আমার প্রোফাইল</h1>
        <p className="text-sm leading-5">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      <section className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-[25px] sm:flex-row sm:items-center">
        <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-primary text-3xl font-semibold text-primary-content">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="" className="size-full object-cover" />
          ) : (
            name?.charAt(0).toUpperCase()
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-xl font-semibold leading-7">
            {name}
          </span>
          <span className="truncate text-base leading-6">{email}</span>
        </div>

        <SignOutButton />
      </section>

      <section className="flex flex-col gap-3 rounded-2xl border border-base-300 bg-base-100 p-[21px]">
        <h2 className="text-lg font-semibold leading-7">তথ্য</h2>

        <div className="flex flex-col gap-4 sm:p-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium leading-[21px]">নাম</span>
            <div className="flex h-10 items-center rounded-lg border border-base-300 bg-base-100 px-[13px] text-sm">
              {name}
            </div>
          </div>

          <Link
            href="/profile/update"
            className={buttonVariants({
              className:
                "h-10 w-full rounded-lg border border-[#047f39] bg-primary px-[17px] text-sm font-semibold text-primary-content shadow-[0_3px_1px_rgba(5,137,62,0.3)]",
            })}
          >
            আপডেট
          </Link>
        </div>
      </section>
    </div>
  );
}