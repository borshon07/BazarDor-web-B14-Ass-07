import { Button as HeroButton } from "@heroui/react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({ children, variant = "primary" }: Props) {
  return (
    <HeroButton
      className={
        variant === "primary"
          ? "bg-primary text-primary-content rounded-lg"
          : "border border-base-300 bg-transparent text-base-content rounded-lg"
      }
    >
      {children}
    </HeroButton>
  );
}