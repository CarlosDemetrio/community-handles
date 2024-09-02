import { ArrowRight } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Stage } from "@/components/stage"

export const metadata = {
  title: "Crie um Identificador de Comunidade para sua comunidade",
  description: "Hospede sua própria ferramenta",
}

export default function CommunityPage() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Crie um Identificador de Comunidade <br className="hidden sm:inline" />
          para sua comunidade
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Quer um identificador de comunidade personalizado para sua comunidade, como
          @alex.bsky.london, @jay.swifties.social, ou @jane.bsky.paris? Siga
          estes passos para obter um.
        </p>
      </div>
      <div>
        <Stage title="Compre um domínio" number={1}>
          <p className="max-w-lg">
            Compre um domínio de um registrador de domínios. Nós usamos{" "}
            <a
              href="https://namecheap.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Namecheap
            </a>
            , mas não importa qual você use. Apenas certifique-se de que
            você pode alterar onde aponta os servidores de nomes.
          </p>
        </Stage>
        <Stage title="Hospede a ferramenta de Identificadores de Comunidade" number={2} last>
          <p className="max-w-lg">Você então precisa hospedar a ferramenta.</p>
          <p className="mt-4 max-w-lg">
            Se você quiser hospedar por conta própria,{" "}
            <a
              href="https://github.com/mozzius/community-handles"
              className="underline"
            >
              faça um fork do projeto no GitHub
            </a>
            . É um projeto Next.js, então você pode implantá-lo como preferir.
            Confira o README para a solução recomendada, usando Vercel e
            Railway.
          </p>
          <p className="mt-8 max-w-lg text-sm text-muted-foreground">
            Usando a versão hospedada? (não mais disponível){" "}
            <a
              href="https://billing.stripe.com/p/login/6oEbJccQOh2Rdji4gg"
              className="underline"
            >
              Vá para o portal de cobrança
            </a>
            .
          </p>
        </Stage>
      </div>
    </main>
  )
}
