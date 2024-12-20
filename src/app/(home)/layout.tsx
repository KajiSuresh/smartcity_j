import type { Metadata } from "next";
import Header from "../layout/header";
import Footer from "../layout/footer";






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
   
    <> <Header />
    <main>{children}</main>
    <Footer/>
  </>
           
   
  );
}
