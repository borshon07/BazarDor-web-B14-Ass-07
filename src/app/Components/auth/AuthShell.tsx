import Link from "next/link";
import { Card } from "@heroui/react";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
};

export default function AuthShell({
  title,
  subtitle,
  children,
  backHref = "/",
  backLabel = "← হোম পেজে ফিরে যান",
}: Props) {
  return (
    <div className="mx-auto flex w-full max-w-[448px] flex-col gap-6 px-4 py-10">
      <div className="flex flex-col items-center gap-1 text-center text-base-content">
        <h1 className="text-2xl font-bold leading-8">{title}</h1>
        <p className="text-sm leading-5">{subtitle}</p>
      </div>

      <Card className="gap-0 rounded-2xl border border-base-300 bg-base-100 p-0 shadow-none">
        <Card.Content className="p-6">{children}</Card.Content>
      </Card>

      <Link
        href={backHref}
        className="text-center text-sm leading-5 text-base-content hover:underline"
      >
        {backLabel}
      </Link>
    </div>
  );
}