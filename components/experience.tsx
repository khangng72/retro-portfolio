import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Katalon",
      period: "April 2025 - Current",
      location: "Ho Chi Minh City",
      description:
        "Working on Katalon TestOps with microfrontend architecture and cloud-native microservices.",
      highlights: [
        "Applied Microfrontend architecture for flexible, modular front-end components",
        "Developed cloud-native microservices using Java, Kotlin and Quarkus framework",
        "Integrated Apache Kafka for reliable, asynchronous communication",
        "Built scalable, cloud-based platform for manual testing workflows",
      ],
      technologies: [
        "ReactJS",
        "TanStack Query",
        "Material UI",
        "Quarkus",
        "Apache Kafka",
        "Java",
        "Kotlin",
      ],
    },
    {
      title: "Content Creator Online (Capstone Project)",
      company: "University Project",
      period: "February 2025 - April 2025",
      location: "Ho Chi Minh City",
      description:
        "Led a team of 3 members to develop a full-stack platform for creating and sharing stories.",
      highlights: [
        "Developed responsive front-end using Next.js and Tailwind CSS",
        "Designed and optimized PostgreSQL database schemas with Flyway migrations",
        "Implemented authentication with Spring Security",
        "Integrated GPT-powered image generation for creative content",
      ],
      technologies: [
        "Java Spring",
        "Spring Security",
        "Hibernate",
        "Flyway",
        "NextJS",
        "PostgreSQL",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Team Solutions",
      period: "June 2024 – March 2025",
      location: "Ho Chi Minh City",
      description:
        "Worked on ThirdAI Supporter and ThirdAI Minutes Agent projects.",
      highlights: [
        "Built front-end features using React.js and Next.js",
        "Developed backend APIs using FastAPI",
        "Designed database schemas for scalability and integrity",
        "Participated in Agile-Scrum development process",
      ],
      technologies: [
        "FastAPI",
        "ReactJS",
        "NextJS",
        "Azure Cosmos DB",
        "PostgreSQL",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "VUS (digiDation, digiConnection)",
      period: "Nov 2022 – Nov 2023",
      location: "Ho Chi Minh City",
      description:
        "Assisted teachers and explained algorithms and code to students.",
      highlights: [
        "Taught data structures and algorithms concepts",
        "Helped students with HTML, CSS, and low-code platforms",
        "Developed presentation and communication skills",
      ],
      technologies: ["HTML", "CSS", "HatchXr", "Data Structures & Algorithms"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-primary mb-8">
            {"> git checkout experience"}
          </div>

          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="retro-hover">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-primary font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Contributions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
