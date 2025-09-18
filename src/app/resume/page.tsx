import { NextSeo } from "next-seo"

export default function ResumePage() {
  return (
    <div className="section-y">
      <NextSeo title="Resume" canonical="https://umerpatel1.vercel.app/resume" />
      <div className="container-x">
        <h1 className="text-3xl font-bold mb-6">Resume</h1>
        <div className="glass rounded-xl overflow-hidden border">
          <iframe src="/resume.pdf" className="w-full h-[80vh]" title="Resume PDF" />
        </div>
      </div>
    </div>
  )
}


