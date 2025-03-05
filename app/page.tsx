import HomePage from "@/app/components/HomePage";
import { Inter } from "next/font/google";
import "./style/index.css";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div className="background-style" style={{ backgroundImage: `url(/background.png)`, fontFamily: inter.style.fontFamily}}>
        <HomePage />
    </div>
);
}
