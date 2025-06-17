"use client";

import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DialogServiceFormData,
  useDialogServiceForm,
} from "./dialog-service-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function DialogService() {
  const form = useDialogServiceForm();

  async function onSubmit(values: DialogServiceFormData) {
    console.log(values);
  }

  return (
    <>
      <DialogHeader className="flex flex-col justify-center items-center">
        <DialogTitle className="font-bold">Novo Serviço</DialogTitle>
        <DialogDescription className="text-sm text-gray-400">
          Adicione um novo serviço
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="name"
              render={(field) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">
                    Nome do serviço:
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite o nome do serviço" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={(field) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">
                    Valor do serviço:
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ex: 120,00" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="font-semibold">Tempo de duração do serviço:</p>
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="hours"
                render={(field) => (
                  <FormItem className="my-2">
                    <FormLabel className="font-semibold">Horas:</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="1" min="0" type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="minutes"
                render={(field) => (
                  <FormItem className="my-2">
                    <FormLabel className="font-semibold">Minutos:</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="0" min="0" type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit" className="w-full font-semibold text-white">
            Adicionar serviço
          </Button>
        </form>
      </Form>
    </>
  );
}
