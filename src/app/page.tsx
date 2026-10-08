import Button from "@/app/Components/ui/Button";

export default function Home() {
  return (
    <div className="flex gap-4 p-8">
      <Button>সব পণ্য দেখুন</Button>
      <Button variant="outline">সাইন আউট</Button>
    </div>
  );
}