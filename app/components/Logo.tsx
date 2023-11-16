"use client"
import Link from "next/link";
import LogoImage from "../images/logos/logo.png";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function Logo() {
  return (
    <Link href="/" prefetch={false}>
        <div className="flex items-center w-72 h-14">
            <AspectRatio
                ratio={16/9}

            >
                <Image 
                    priority
                    src={LogoImage}
                    alt="logo"
                    className="dark:filter dark:invert"
                />
            </AspectRatio>
        </div>
    </Link>
  )
}
