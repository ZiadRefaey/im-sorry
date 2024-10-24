import { VT323 } from "next/font/google";
import "./globals.css";
const vt323 = VT323({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${vt323.className} antialiased overflow-hidden bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
