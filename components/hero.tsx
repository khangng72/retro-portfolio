"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, ExternalLink, ArrowDownToLine } from "lucide-react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer";

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
            {"> initializing portfolio..."}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Nguyễn Hữu Khang
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
            <Button
              size="lg"
              className="retro-glow retro-hover font-mono hover:cursor-pointer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="retro-hover font-mono bg-transparent hover:cursor-pointer"
            >
              <ArrowDownToLine className="mr-2 h-4 w-4" />
              <span>Clone my Resume</span>
            </Button>
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
