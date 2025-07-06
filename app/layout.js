import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import styles from "./Sidebar.module.css";
import Sidebar from "./Sidebar";
import { Container } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import MobileNav from "@/components/MobileNav/MovileNav";
import MobileMenuToggle from "@/components/MobileNav/MobileMenuToggle";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ernstudy | SAINGILLES ERNST | UI/UX designer & Web development",
  description:
    "Discover the creative work of SAINGILLES ERNST, a passionate web designer focused on creating website, responsive layouts, elegant animations, and user-friendly digital experiences.",
  openGraph: {
    images: [
      {
        url: "/images/profile1.png",
        width: 800,
        height: 700,
        alt: "SAINGILLES ERNST UI/UX Designer & web development",
      },
      {
        url: "/images/profile.png",
        width: 1200,
        height: 700,
        alt: "SAINGILLES ERNST UI/UX Designer & web development",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Container component="div" maxWidth="lg">
          <div className="container-all">
            {/* Sidebar only visible on md and up */}
            <aside className={`${styles.sidebar}`}>
              <Sidebar />
            </aside>

            {/* Page content */}

            <main className="container">{children}</main>
          </div>

          {/* footer */}
          <div className="block md:hidden">
            <Footer />
          </div>

          {/* Mobile nav bar */}

          {/* Visible solo en mobile */}
        </Container>

        <div className="block md:hidden">
          {" "}
          <MobileMenuToggle />
        </div>
      </body>
    </html>
  );
}
