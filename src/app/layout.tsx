import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '700'], // Escolha os pesos que você usa (regular, medium, bold)
  subsets: ['latin'], // Geralmente 'latin' para português
  display: 'swap', // Garante que o texto seja visível durante o carregamento da fonte
  variable: '--font-roboto', // Opcional: para usar como variável CSS
});


export const metadata: Metadata = {
  title: "Empresa Solução - Serviços de Facilities e Manutenção no Rio Grande do Sul",
  description: "Oferecemos soluções completas em serviços de facilities, como limpeza, portaria, jardinagem, detetização e manutenção. Atendemos em todo Rio Grande do Sul.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
