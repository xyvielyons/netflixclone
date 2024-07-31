import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import ReduxProviders from "@/lib/reduxProvider";
import IsUserLoggedIn from "@/lib/IsUserLoggedIn";
import ReactQueryProvider from "@/lib/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix",
  description: "Get your popcorn its about to go down",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 h-screen`}>
        <ReduxProviders>
          <NextUIProvider>
            <IsUserLoggedIn>
              <ReactQueryProvider>
              {children}
              </ReactQueryProvider>           
            </IsUserLoggedIn>
          </NextUIProvider>
        </ReduxProviders>
        
      </body>
    </html>
  );
}
