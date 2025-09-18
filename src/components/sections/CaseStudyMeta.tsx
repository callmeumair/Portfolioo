import type { StrList } from "@/types"

export function CaseStudyMeta(props: {
  role: string
  stack: StrList
  outcomes: Array<{ label: string; value: string }>
  links?: Array<{ label: string; href: string }>
}) {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-5 border">
            <h3 className="font-semibold mb-2">Role</h3>
            <p className="text-muted-foreground">{props.role}</p>
          </div>
          <div className="glass rounded-xl p-5 border">
            <h3 className="font-semibold mb-2">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {props.stack.map(s => (
                <span key={s} className="px-2 py-1 text-xs rounded-full border">{s}</span>
              ))}
            </div>
          </div>
          <div className="glass rounded-xl p-5 border">
            <h3 className="font-semibold mb-2">Outcomes</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              {props.outcomes.map(o => (
                <li key={o.label}><span className="text-foreground font-medium">{o.value}</span> {o.label}</li>
              ))}
            </ul>
          </div>
        </div>
        {props.links && props.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {props.links.map(l => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-sm rounded-md border hover:bg-muted">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default CaseStudyMeta


