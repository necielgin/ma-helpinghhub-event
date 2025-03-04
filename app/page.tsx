import HomePage from "@/app/components/HomePage";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div style={{ backgroundImage: `url(/background.png)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      fontFamily: inter.style.fontFamily,
      height: "100vh", // Ensure full viewport height
      width: "100%", // Ensure full width
      }}>
        <HomePage />
    </div>
);
}
