import { FileNode } from "@/types"

export const fileSystem: FileNode = {
  name: "~",
  type: "directory",
  children: [
    {
      name: "about.txt",
      type: "file",
      content: [
        "╔══════════════════════════════════════════════╗",
        "║             Xavier Collantes                 ║",
        "╚══════════════════════════════════════════════╝",
        "",
        "Software Engineer with experience building",
        "scalable web applications and cloud services.",
        "",
        "Passionate about clean code, developer tools,",
        "and creating great user experiences.",
        "",
        "Currently based in the Seattle area.",
      ],
    },
    {
      name: "skills.txt",
      type: "file",
      content: [
        "LANGUAGES",
        "  Python, TypeScript, JavaScript, Java, SQL, Go",
        "",
        "FRAMEWORKS",
        "  React, Next.js, FastAPI, Flask, Angular",
        "",
        "CLOUD & INFRA",
        "  GCP, AWS, Docker, Kubernetes, Terraform",
        "",
        "DATABASES",
        "  PostgreSQL, MongoDB, Redis, BigQuery",
        "",
        "TOOLS",
        "  Git, CI/CD, Linux, REST APIs, GraphQL",
      ],
    },
    {
      name: "contact.txt",
      type: "file",
      content: [
        "EMAIL     xavier.collantes@gmail.com",
        "GITHUB    github.com/xcollantes",
        "LINKEDIN  linkedin.com/in/xcollantes",
        "WEBSITE   xcollantes.github.io",
      ],
    },
    {
      name: "education.txt",
      type: "file",
      content: [
        "UNIVERSITY OF WASHINGTON",
        "  B.S. Informatics",
        "  Focus: Software Engineering & Data Science",
      ],
    },
    {
      name: "projects",
      type: "directory",
      children: [
        {
          name: "journal-ai.txt",
          type: "file",
          content: [
            "PROJECT   Journal AI",
            "STACK     Python, FastAPI, React, GCP",
            "DESC      AI-powered journaling application that",
            "          provides insights and summaries from",
            "          daily journal entries.",
          ],
        },
        {
          name: "portfolio-terminal.txt",
          type: "file",
          content: [
            "PROJECT   Portfolio Terminal",
            "STACK     Next.js, TypeScript, Tailwind CSS",
            "DESC      This website! An interactive terminal-",
            "          style portfolio that simulates a Unix",
            "          shell for exploring resume content.",
          ],
        },
        {
          name: "recipe-search.txt",
          type: "file",
          content: [
            "PROJECT   Recipe Search",
            "STACK     Python, Angular, Firebase",
            "DESC      Full-stack recipe search engine with",
            "          ingredient-based filtering and user",
            "          saved collections.",
          ],
        },
      ],
    },
    {
      name: "experience",
      type: "directory",
      children: [
        {
          name: "google.txt",
          type: "file",
          content: [
            "COMPANY   Google",
            "ROLE      Software Engineer",
            "",
            "- Built internal tools and services for",
            "  Google Cloud Platform",
            "- Developed automation pipelines improving",
            "  team productivity",
            "- Collaborated with cross-functional teams",
            "  on large-scale systems",
          ],
        },
        {
          name: "freelance.txt",
          type: "file",
          content: [
            "COMPANY   Freelance / Contract",
            "ROLE      Full Stack Developer",
            "",
            "- Built web applications for clients using",
            "  React, Python, and cloud services",
            "- Designed and implemented RESTful APIs",
            "- Managed deployments on GCP and AWS",
          ],
        },
      ],
    },
  ],
}
