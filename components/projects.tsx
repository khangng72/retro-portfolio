import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Katalon TestOps",
      description:
        "Cloud-native testing platform with microfrontend architecture. Built scalable microservices for manual testing workflows with real-time communication.",
      image: "/testing-platform-dashboard-interface.png",
      technologies: ["ReactJS", "Material UI", "Quarkus", "Apache Kafka", "Java", "Kotlin"],
      highlights: [
        "Microfrontend architecture implementation",
        "Cloud-native microservices with Quarkus",
        "Real-time event streaming with Kafka",
        "Comprehensive testing suite with Jest and JUnit",
      ],
      status: "Professional Project",
    },
    {
      title: "Content Creator Platform",
      description:
        "Full-stack storytelling platform inspired by Wattpad. Features user authentication, story creation, and AI-powered image generation for creative content.",
      image: "/creative-writing-platform-with-stories-and-books.png",
      technologies: ["NextJS", "Spring Boot", "PostgreSQL", "Spring Security", "Tailwind CSS"],
      highlights: [
        "Led team of 3 developers",
        "GPT-powered image generation integration",
        "Responsive design with mobile-first approach",
        "Database schema optimization with Flyway",
      ],
      github: "#",
      demo: "#",
      status: "Capstone Project",
    },
    {
      title: "ThirdAI Minutes Agent",
      description:
        "AI-powered meeting assistant that automatically generates meeting summaries and action items. Built with FastAPI backend and React frontend.",
      image: "/ai-meeting-assistant-dashboard-with-transcription.png",
      technologies: ["FastAPI", "ReactJS", "Azure Cosmos DB", "Python", "AI Integration"],
      highlights: [
        "Real-time meeting transcription",
        "Automated summary generation",
        "RESTful API design with FastAPI",
        "Cloud database integration",
      ],
      status: "Professional Project",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-primary mb-8">{'> find ./projects -type f -name "*.md" | head -3'}</div>

          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="retro-hover flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {project.github && (
                      <Button size="sm" variant="outline" className="flex-1 font-mono bg-transparent">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="flex-1 font-mono">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                    )}
                    {!project.github && !project.demo && (
                      <Badge variant="secondary" className="font-mono text-xs mx-auto">
                        Professional Work
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
