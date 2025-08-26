import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Globe, Server, Palette } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: ["ReactJS", "NextJS", "Material UI", "Tailwind CSS", "TanStack Query"],
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: ["Java Spring Boot", "Quarkus", "Python FastAPI", "Spring Security", "Apache Kafka"],
    },
    {
      title: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["PostgreSQL", "MongoDB", "Azure Cosmos DB", "Hibernate", "Flyway"],
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git/GitHub", "Docker", "VS Code", "Postman", "pgAdmin"],
    },
    {
      title: "Other Skills",
      icon: <Palette className="h-5 w-5" />,
      skills: ["Data Structures & Algorithms", "AI Research", "Database Design", "UML Diagrams", "LaTeX"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-primary mb-8">{"> cat skills.json | jq ."}</div>

          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="retro-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-primary">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="font-mono text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block retro-hover">
              <CardContent className="p-6">
                <div className="font-mono text-sm text-muted-foreground mb-2">{"> system.getOperatingSystems()"}</div>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" className="font-mono">
                    Linux (Ubuntu)
                  </Badge>
                  <Badge variant="secondary" className="font-mono">
                    macOS
                  </Badge>
                  <Badge variant="secondary" className="font-mono">
                    Windows
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
