"use client";

import { useProfileForm } from "./profile-form";
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
import { Label } from "@/components/ui/label";
import Image from "next/image";
import imgTest from "../../../../../../public/foto1.png";

export function ProfileContent() {
  const form = useProfileForm();

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

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Digite o nome da clinica..."
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereçoo completo</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Digite o endereço da clinica..."
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Digite o telefone..." />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4 w-full">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status da clinica</FormLabel>

                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value ? "active " : "inactive"}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione" />
                            <SelectContent>
                              <SelectItem value="active">
                                Ativo (clinica aberta)
                              </SelectItem>
                              <SelectItem value="inactive">
                                Inativo (clinica fechada)
                              </SelectItem>
                            </SelectContent>
                          </SelectTrigger>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}
