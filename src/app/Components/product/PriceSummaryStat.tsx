import { bnNumber } from "@/lib/format";

const tones = {
  success: "text-success",
  error: "text-error",
  primary: "text-primary",
};

type Props = {
  label: string;
  value: number;
  caption: string;
  tone: keyof typeof tones;
};

export default function PriceSummaryStat({ label, value, caption, tone }: Props) {
  return (
    <div className="flex flex-col rounded-2xl border border-base-300 bg-base-100 px-[25px] py-[17px] text-base-content">
      <span className="text-xs leading-[18px]">{label}</span>
      <span className={tones[tone]}>
        <span className="text-2xl font-bold leading-8">{bnNumber(value)}</span>
        <span className="text-sm font-medium leading-8"> টাকা</span>
      </span>
      <span className="text-xs leading-[18px]">{caption}</span>
    </div>
  );
}