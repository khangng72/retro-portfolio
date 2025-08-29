"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Mail,
  ExternalLink,
  ArrowDownToLine,
  CameraIcon,
  Download,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer";

  const [showDownloadAva, setShowDownloadAva] = useState(false);

  const getAvatar = () => {
    const link = document.createElement("a");
    link.href = "./ava.jpg";
    link.download = "ava.jpg";
    link.click();
  };

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-40 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-sm text-muted-foreground mb-4">
            {"> git checkout portfolio"}
          </div>

          <button
            className="relative w-fit mx-auto hover:cursor-pointer p-3 rounded-full bg-primary"
            onPointerEnter={() => setShowDownloadAva(true)}
            onPointerLeave={() => setShowDownloadAva(false)}
            onClick={getAvatar}
          >
            <div className="bg-white rounded-full">
              <Image
                src="./ava.jpg"
                alt="Avatar"
                width={250}
                height={250}
                objectFit="cover"
                quality={200}
                className={cn("mx-auto rounded-full ", {
                  "opacity-30": showDownloadAva,
                })}
              />
            </div>
            {showDownloadAva && (
              <>
                <div className="rounded-md bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1">
                  <Download className="w-5 h-5" />
                </div>
                <div className="absolute bottom-22 left-1/2 -translate-x-1/2 w-[200px]">
                  <span className="text-xs text-primary font-mono font-bold">
                    {"> git clone handsomeness :)"}
                  </span>
                </div>
              </>
            )}
          </button>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Nguyen Huu Khang
          </h1>

          <div className="font-mono text-xl md:text-2xl text-primary mb-8 h-8">
            {displayText}
            <span className="terminal-cursor">|</span>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer with 1+ years of experience building scalable
            systems. Passionate about Java, Python, TypeScript, and creating
            high-performance applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="lg"
                  className="retro-glow retro-hover font-mono hover:cursor-pointer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View my works
                </Button>
              </TooltipTrigger>
              <TooltipContent>Coming soon...</TooltipContent>
            </Tooltip>

            <a href="/cv/Huu_Khang_Resume.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="retro-hover font-mono bg-transparent hover:cursor-pointer"
              >
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                <span>git clone resume</span>
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/khangng72"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors retro-hover"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:nhkhang.dev@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors retro-hover"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
