import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { TimeZonesFilter } from "../_actions/timeZonesFilter";
import { useProfileForm } from "./profileForm";

export function TimeZoneField() {
  const timeZones = TimeZonesFilter();
  const form = useProfileForm();
  return (
    <div>
      <FormField
        control={form.control}
        name="status"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold">
              Selecione seu fuso horário
            </FormLabel>

            <FormControl>
              <Select
                onValueChange={field.onChange}
                defaultValue={Intl.DateTimeFormat().resolvedOptions().timeZone}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                  <SelectContent>
                    {timeZones.map((zone) => (
                      <SelectItem key={zone} value={zone}>
                        {zone}
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
  );
}
