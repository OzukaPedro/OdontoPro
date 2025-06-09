import { Card, CardContent } from "@/components/ui/card";
import fotoImg from "@/../../public/foto1.png";
import Image from "next/image";
import Link from "next/link";
export function Professionals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center text-black mb-12">
          Clinicas disponiveis
        </h2>
      </div>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-4 ">
        <Card className="pt-0 overflow-hidden">
          <CardContent className="p-0">
            <div>
              <div className="relative h-48">
                <Image
                  className="object-cover"
                  src={fotoImg}
                  alt="Foto da clinica"
                  fill
                />
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3>Clinica centro</h3>

                    <p>Rua x, centro, Campo Grande - MS</p>
                  </div>

                  <div className="bg-emerald-500 w-2.5 h-2.5 rounded-full"></div>
                </div>

                <Link
                  href="/clinica/123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white 
                  flex items-center justify-center py-2 rounded-md text-sm font-medium md:text-base"
                >
                  Agendar horário
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="pt-0 overflow-hidden">
          <CardContent className="p-0">
            <div>
              <div className="relative h-48">
                <Image
                  className="object-cover"
                  src={fotoImg}
                  alt="Foto da clinica"
                  fill
                />
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3>Clinica centro</h3>

                    <p>Rua x, centro, Campo Grande - MS</p>
                  </div>

                  <div className="bg-emerald-500 w-2.5 h-2.5 rounded-full"></div>
                </div>

                <Link
                  href="/clinica/123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white 
                  flex items-center justify-center py-2 rounded-md text-sm font-medium md:text-base"
                >
                  Agendar horário
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="pt-0 overflow-hidden">
          <CardContent className="p-0">
            <div>
              <div className="relative h-48">
                <Image
                  className="object-cover"
                  src={fotoImg}
                  alt="Foto da clinica"
                  fill
                />
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3>Clinica centro</h3>

                    <p>Rua x, centro, Campo Grande - MS</p>
                  </div>

                  <div className="bg-emerald-500 w-2.5 h-2.5 rounded-full"></div>
                </div>

                <Link
                  href="/clinica/123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white 
                  flex items-center justify-center py-2 rounded-md text-sm font-medium md:text-base"
                >
                  Agendar horário
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
