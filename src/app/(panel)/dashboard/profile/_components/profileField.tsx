"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldPath } from "react-hook-form";
import { ProfileFormData, useProfileForm } from "./profileForm"; // z.infer<typeof profileSchema>
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ProfileFieldProps = {
  name: FieldPath<ProfileFormData>;
  label: string;
  placeholder?: string;
  type?: "input" | "select";
  defaultValue?: string;
  items?: { value: string; text: string }[];
};
export function ProfileFieldForm({
  name,
  label,
  placeholder,
  type,
  defaultValue,
  items,
}: ProfileFieldProps) {
  const form = useProfileForm();

  return type === "select" ? (
    <div className="space-y-4 w-full">
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Status da clinica</FormLabel>

            <FormControl>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value ? field.value : defaultValue}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                  <SelectContent>
                    {items?.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.text}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  ) : (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input {...field} placeholder={placeholder} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
