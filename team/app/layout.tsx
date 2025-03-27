import {Poppins} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Traversy Media",
  description: "Web development tutorials and courses",
  keywords:
    "web development, web design, javascript, react, node, angular, vue, html, css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
