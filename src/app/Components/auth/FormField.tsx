"use client";

import { Input, Label, TextField } from "@heroui/react";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
}: Props) {
  return (
    <TextField name={name} type={type} isRequired className="flex flex-col gap-1">
      <Label className="text-sm font-medium leading-[21px] text-base-content">
        {label}
      </Label>
      <Input
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-10 rounded-lg border border-base-300 bg-base-100 px-[13px] text-sm text-base-content"
      />
    </TextField>
  );
}