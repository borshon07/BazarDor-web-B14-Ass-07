"use client";

import { ListBox, Select } from "@heroui/react";
import { sortOptions, type SortKey } from "@/lib/sort";

type Props = {
  value: SortKey;
  onChange: (value: SortKey) => void;
};

export default function SortSelect({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm leading-5 text-base-content">সাজান</span>

      <Select
        aria-label="সাজান"
        value={value}
        onChange={(key) => {
          if (typeof key === "string") onChange(key as SortKey);
        }}
        className="w-52"
      >
        <Select.Trigger className="h-8 rounded-lg border border-base-300 bg-base-100 px-3 text-sm text-base-content shadow-none">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox>
            {sortOptions.map((option) => (
              <ListBox.Item
                key={option.id}
                id={option.id}
                textValue={option.label}
              >
                {option.label}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
}