import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TimeZonesFilter } from "../_actions/timeZonesFilter";

export function ProfileTimeDialog() {
  const [selectedHours, setSelectedHours] = useState<string[]>([]);
  const [dialogisOpen, setDialogisOpen] = useState(false);

  function generateTimeSlots(): string[] {
    const hours: string[] = [];
    for (let i = 8; i <= 24; i++) {
      const hour = i.toString().padStart(2, "0");
      hours.push(`${hour}:00`);
      hours.push(`${hour}:30`);
    }
    return hours;
  }
  function toggleHour(hour: string) {
    setSelectedHours((prev) =>
      prev.includes(hour)
        ? prev.filter((h) => h !== hour)
        : [...prev, hour].sort()
    );
  }
  const hours = generateTimeSlots();
  return (
    <div className="space-y-2">
      <Label className="semibold">Selecione a zona horaria da clinica</Label>

      <Dialog open={dialogisOpen} onOpenChange={setDialogisOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Clique aqui para selecionar horários
            <ArrowRight className="w-5 h-5" />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Horários da clinica</DialogTitle>
            <DialogDescription>
              Selecione abaixo os horários de funcionamento da clinica
            </DialogDescription>
          </DialogHeader>

          <section className="py-4 ">
            <p className="text-sm text-muted-foreground">
              Clique nos horarios abaixo para marcar ou desmarcar
            </p>
            <div className="grid grid-cols-5 gap-2 mb-2">
              {hours.map((hour) => (
                <Button
                  className={cn(
                    "h-10",
                    selectedHours.includes(hour) &&
                      "border-2 border-emerald-500 text-primary"
                  )}
                  key={hour}
                  variant="outline"
                  onClick={() => toggleHour(hour)}
                >
                  {hour}
                </Button>
              ))}
            </div>
          </section>

          <Button
            onClick={() => setDialogisOpen(!dialogisOpen)}
            className="w-full"
          >
            Fechar modal
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
