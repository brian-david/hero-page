import { IBM_Plex_Sans, Poppins } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-ibm-plex-sans",
    weight: "400"
});

export const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: "400"
})