import EmptyState from "@/app/Components/ui/EmptyState";

export default function NotFound() {
  return (
    <div className="px-4 py-16">
      <EmptyState
        icon="🔍"
        title="৪০৪ — পাতাটি পাওয়া যায়নি"
        description="আপনি যে পাতাটি খুঁজছেন সেটি নেই বা সরিয়ে ফেলা হয়েছে।"
      />
    </div>
  );
}