import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-primary mb-8">{"> cat about.txt"}</div>

          <Card className="retro-hover">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a Software Engineer with over 1 year of experience working in professional environments. I
                  specialize in Java, Python, and TypeScript, enjoying work across both backend and frontend
                  development, which makes me a bit of an all-rounder.
                </p>

                <p>
                  I'm especially passionate about building scalable, high-performance systems and love diving deep into
                  a product to understand it fully so I can deliver the best solutions. My long-term goal is to keep
                  growing as a software engineer, with a strong focus on SaaS systems.
                </p>

                <div className="mt-8 p-4 bg-card rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-foreground mb-2">Education</h3>
                  <p className="font-mono text-sm">
                    <span className="text-primary">$</span> Ho Chi Minh University of Technology (Bach Khoa University)
                  </p>
                  <p className="text-sm">Bachelor of Computer Science</p>
                </div>

                <div className="mt-6 p-4 bg-card rounded-lg border-l-4 border-secondary">
                  <h3 className="font-semibold text-foreground mb-2">Languages</h3>
                  <p className="font-mono text-sm">
                    <span className="text-secondary">$</span> English - TOEIC (Reading, Listening) 870
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
