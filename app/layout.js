import { Inter } from "next/font/google";
import "./globals.css";
import { SalaryProvider } from "./globalContext/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SalaryProvider>
        <body className={inter.className}>{children}</body>
      </SalaryProvider>
    </html>
  );
}
