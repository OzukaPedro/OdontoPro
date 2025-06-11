"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import { handleRegister } from "../_actions/login";

export function Header() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  console.log(session);
  console.log(status);
  const navItems = [{ href: "#profissionais", label: "Profissionais" }];

  async function handleLogin() {
    await handleRegister("github");
  }
  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          asChild
          onClick={() => setIsOpen(false)}
          className="bg-transparent hover:bg-transparent text-black shadow-none"
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}

      {status === "loading" ? (
        <></>
      ) : session ? (
        <Link href="/dashboard">Acessar clinica</Link>
      ) : (
        <Button onClick={handleLogin}>
          <LogIn />
          Portal da clinica
        </Button>
      )}
    </>
  );
  return (
    <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900">
          Odonto <span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden md:flex gap-2 items-center">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-black hover:bg-transparent"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="fixed inset-y-0 right-0 w-[240px] sm:w-[300px] z-[9999] bg-white p-4 shadow-lg"
          >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="mb-4 text-sm text-gray-500">
                Teste
              </SheetDescription>
            </SheetHeader>
            <nav className=" flex flex-col space-y-2 mt-6">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
