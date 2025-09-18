export function CaseStudyHeader(props: {
  title: string
  subtitle: string
  coverEmoji?: string
}) {
  return (
    <header className="section-y">
      <div className="container-x">
        <div className="flex items-start gap-4">
          {props.coverEmoji && (
            <div className="text-5xl select-none" aria-hidden>{props.coverEmoji}</div>
          )}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{props.title}</h1>
            <p className="text-muted-foreground max-w-2xl">{props.subtitle}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default CaseStudyHeader


