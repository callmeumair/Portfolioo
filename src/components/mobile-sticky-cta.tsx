"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden p-3">
      <div className="glass border border-border/50 rounded-xl shadow-elevated flex gap-3 p-3">
        <Button className="flex-1" asChild onClick={() => trackEvent('cta_mobile_hire_click')}>
          <a href="#contact" aria-label="Hire me">Hire me</a>
        </Button>
        <Button variant="outline" className="flex-1" asChild onClick={() => trackEvent('cta_mobile_resume_click')}>
          <a href="/resume.pdf" download aria-label="Download resume"><Download className="mr-2 h-4 w-4" />Resume</a>
        </Button>
      </div>
    </div>
  )
}

export default MobileStickyCTA


