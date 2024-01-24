import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./components/StoreProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <StoreProvider>
            <Header />
            <div className="w-full">{children}</div>
            <Footer/>
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
