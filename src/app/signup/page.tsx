import AuthShell from "@/app/Components/auth/AuthShell";
import SignUpForm from "@/app/Components/auth/SignUpform";

export default function SignUpPage() {
  return (
    <AuthShell
      title="অ্যাকাউন্ট তৈরি করুন"
      subtitle="বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।"
    >
      <SignUpForm />
    </AuthShell>
  );
}