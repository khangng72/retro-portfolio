"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-primary mb-8">{'> echo "Let\'s connect!" > contact.txt'}</div>

          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="retro-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href="mailto:nhkhang.dev@gmail.com" className="text-primary hover:underline font-mono">
                      nhkhang.dev@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Github className="h-4 w-4 text-muted-foreground" />
                    <a
                      href="https://github.com/khangng720904473064"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-mono"
                    >
                      github.com/khangng720904473064
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-mono">Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I'm always interested in new opportunities and collaborations. Whether you have a project in mind or
                    just want to chat about technology, feel free to reach out!
                  </p>
                </div>

                <div className="font-mono text-xs text-muted-foreground bg-card p-3 rounded border-l-4 border-primary">
                  <div>$ whoami</div>
                  <div className="text-primary">Software Engineer</div>
                  <div>$ status</div>
                  <div className="text-secondary">Available for opportunities</div>
                </div>
              </CardContent>
            </Card>

            <Card className="retro-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="font-mono"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="font-mono"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="font-mono min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full retro-glow retro-hover font-mono">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-4 font-mono text-xs text-muted-foreground">
                  <div>$ send_message --to khang --priority high</div>
                  <div className="text-primary">Message queued for delivery...</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
