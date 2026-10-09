import { headers } from "next/headers";
import { redirect } from "next/navigation";
import AuthShell from "@/app/Components/auth/AuthShell";
import UpdateProfileForm from "@/app/Components/auth/UpdateProfileForm";
import { auth } from "@/lib/auth";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/signin?reason=login-required");

  return (
    <AuthShell
      title="তথ্য আপডেট করুন"
      subtitle="আপনার নাম পরিবর্তন করুন।"
      backHref="/profile"
      backLabel="← প্রোফাইলে ফিরে যান"
    >
      <UpdateProfileForm defaultName={session.user.name} />
    </AuthShell>
  );
}