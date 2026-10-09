"use client";

import { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};

const labelClass = "text-sm font-medium leading-[21px] text-base-content";

function PasswordField({ label, name, placeholder, autoComplete }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField name={name} isRequired className="flex flex-col gap-1">
      <Label className={labelClass}>{label}</Label>
      <InputGroup
        fullWidth
        className="h-10 rounded-lg border border-base-300 bg-base-100 shadow-none"
      >
        <InputGroup.Input
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="px-[13px] text-sm text-base-content"
        />
        <InputGroup.Suffix className="pr-1">
          <Button
            isIconOnly
            size="sm"
            variant="ghost"
            aria-label={isVisible ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখান"}
            onPress={() => setIsVisible((v) => !v)}
          >
            {isVisible ? (
              <EyeSlash className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  );
}

export default function FormField(props: Props) {
  const { label, name, type = "text", placeholder, autoComplete } = props;

  if (type === "password") {
    return <PasswordField {...props} />;
  }

  return (
    <TextField
      name={name}
      type={type}
      isRequired
      className="flex flex-col gap-1"
    >
      <Label className={labelClass}>{label}</Label>
      <Input
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-10 rounded-lg border border-base-300 bg-base-100 px-[13px] text-sm text-base-content"
      />
    </TextField>
  );
}