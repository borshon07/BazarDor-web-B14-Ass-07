import AuthShell from "@/app/Components/auth/AuthShell";
import SignInForm from "@/app/Components/auth/SignInForm";

export default function SignInPage() {
  return (
    <AuthShell
      title="সাইন ইন"
      subtitle="বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে সাইন ইন করুন।"
    >
      <SignInForm />
    </AuthShell>
  );
}