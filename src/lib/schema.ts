export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Umer Patel",
    url: "https://umerpatel1.vercel.app",
    jobTitle: "Frontend Engineer",
    sameAs: [
      "https://github.com/callmeumair",
      "https://www.linkedin.com/in/umerpatel",
      "https://x.com/Umerpatel11",
    ],
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

import type { StrList } from "@/types"

export function projectSchema(params: {
  name: string
  url: string
  description: string
  technologies: StrList
  metrics?: ReadonlyArray<{ label: string; value: string }>
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: params.name,
    url: params.url,
    description: params.description,
    programmingLanguage: params.technologies.join(", "),
    image: params.image,
    about: params.metrics?.map(m => `${m.label}: ${m.value}`),
  }
}


