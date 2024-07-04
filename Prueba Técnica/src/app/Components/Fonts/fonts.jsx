import { Montserrat, Margarine, Lilita_One, Abril_Fatface } from "next/font/google";

export const monserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const margarine = Margarine({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-margarine",
});

export const LilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita",
});

export const AbrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abril",
})