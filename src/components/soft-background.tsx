"use client"

type SoftBackgroundProps = {
  className?: string
}

export default function SoftBackground({ className }: SoftBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 -z-10 pointer-events-none overflow-hidden ${className ?? ""}`}
    >
      <div className="soft-bg-gradient" />
    </div>
  )
}


