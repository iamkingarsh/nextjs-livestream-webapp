import Link from "next/link";
import Image from "next/image";
import { Exo, Exo_2, Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Exo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className=" rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="https://gromer.web.app/Images/LandingPage/SVG/Symbol.svg"
            alt="Gamehub"
            height="32"
            width="32"
          />
        </div>
        <div className={cn(
          "hidden lg:block",
          font.className
        )}>
          <p className="text-lg font-semibold">
            Gromer Streams
          </p>
          <p className="text-xs text-muted-foreground">
            Let&apos;s Game
          </p>
        </div>
      </div>
    </Link>
  );
};
