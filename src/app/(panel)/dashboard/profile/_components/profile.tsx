"use client";

import { useProfileForm } from "./profileForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import imgTest from "../../../../../../public/foto1.png";
import { Button } from "@/components/ui/button";

import { TimeZonesFilter } from "../_actions/timeZonesFilter";
import { ProfileFieldForm } from "./profileField";
import { ProfileTimeDialog } from "./profileTimeDialog";
import { TimeZoneField } from "./timeZoneField";

export function ProfileContent() {
  const form = useProfileForm();

  const timeZones = TimeZonesFilter();

  return (
    <div className="mx-auto">
      <Form {...form}>
        <form>
          <Card>
            <CardHeader>
              <CardTitle>Meu Perfil</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center ">
                <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={imgTest}
                    alt="Foto da clinica"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <ProfileFieldForm
                name="name"
                label="Nome"
                placeholder="Digite o nome da clinica"
              />

              <ProfileFieldForm
                name="address"
                label="Endereço"
                placeholder="Digite o endereço da clinica"
              />

              <ProfileFieldForm
                name="phone"
                label="Telefone"
                placeholder="Digite o telefone "
              />

              <ProfileFieldForm
                type="select"
                name="status"
                label="Status"
                items={[
                  { value: "active", text: "Ativo" },
                  { value: "inactive", text: "Inativo" },
                ]}
              />

              <ProfileTimeDialog />

              <TimeZoneField />

              <Button
                className="font-semibold w-full bg-emerald-500 hover:bg-emerald-400"
                type="submit"
              >
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}
