import "./globals.css";
import { Nunito } from "next/font/google";

const NunitoFont = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Wander Social",
  description:
    "Explore a diverse range of trending topics within your community, where you can engage directly with your peers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/wander.png" />
      </head>
      <body className={NunitoFont.className}>{children}</body>
    </html>
  );
}
