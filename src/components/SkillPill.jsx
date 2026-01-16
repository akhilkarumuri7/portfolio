export default function SkillPill({ label, icon, Icon, size = "md" }) {
  const isSm = size === "sm"

  const base =
    "inline-flex items-center rounded-full font-medium ring-1 ring-zinc-900/10 dark:ring-white/10 " +
    "bg-zinc-900/5 dark:bg-white/5 text-zinc-900 dark:text-zinc-100"

  const md = "gap-2 px-3 py-1.5 text-sm"
  const sm = "gap-1.5 px-2.5 py-1 text-xs"

  const iconSize = isSm ? "h-3.5 w-3.5" : "h-4 w-4"

  return (
    <span className={`${base} ${isSm ? sm : md}`}>
      {/* Lucide / React icon */}
      {Icon ? <Icon className={`${iconSize} shrink-0 opacity-80`} /> : null}

      {/* Image icon */}
      {!Icon && icon ? (
        <img
          src={icon}
          alt=""
          className={`${iconSize} shrink-0 object-contain`}
          draggable="false"
        />
      ) : null}

      <span>{label}</span>
    </span>
  )
}
