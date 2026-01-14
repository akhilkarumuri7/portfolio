import { useEffect, useMemo, useState } from "react"
import { Sun, Moon } from "lucide-react"

const LINKS = [
  { id: "about", label: "About", href: "#about" },
  { id: "career", label: "Career", href: "#career" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
]

function getInitialTheme() {
  const saved = localStorage.getItem("theme")
  if (saved === "dark") return true
  if (saved === "light") return false
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [active, setActive] = useState("about")
  const [isMobile, setIsMobile] = useState(false)

  const ids = useMemo(() => LINKS.map((l) => l.id), [])

  // mobile detection (< md)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const update = () => setIsMobile(mq.matches)
    update()

    if (mq.addEventListener) mq.addEventListener("change", update)
    else mq.addListener(update)

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update)
      else mq.removeListener(update)
    }
  }, [])

  // theme init
  useEffect(() => {
    const initial = getInitialTheme()
    setIsDark(initial)
    document.documentElement.classList.toggle("dark", initial)
  }, [])

  // scroll -> compact on desktop only
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scroll spy
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) setActive(visible[0].target.id)
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65, 0.8],
      }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  function onNavClick(id) {
    setActive(id)
  }

  // ✅ THIS is the key: on mobile we force compact layout
  const compact = isMobile || isScrolled

  const pillBase =
    "mx-auto w-full border backdrop-blur bg-white/70 dark:bg-zinc-950/60 " +
    "border-zinc-200/60 dark:border-zinc-800/70 overflow-hidden " +
    "transition-[max-width,border-radius,box-shadow] duration-500 ease-in-out"

  const iconBtn =
    "h-9 w-9 rounded-full grid place-items-center transition-colors border border-zinc-200/60 dark:border-zinc-800/70 " +
    "bg-white/40 dark:bg-zinc-900/40 hover:bg-white/70 dark:hover:bg-zinc-900/70 " +
    "active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50"

  const baseLink =
    "px-3.5 py-1.5 text-[15px] font-medium tracking-tight transition-colors rounded-full"

  const activeWrap =
    "rounded-full ring-1 ring-zinc-900/12 dark:ring-white/12 bg-white/70 dark:bg-zinc-800/40"

  const activeLink = "text-zinc-900 dark:text-white"
  const inactiveLink =
    "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"

  const ThemeIcon = () => (
    <div className="relative h-4 w-4">
      <Sun
        className={[
          "absolute inset-0 h-4 w-4 transition-all duration-300",
          "text-zinc-900 dark:text-zinc-100",
          isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        ].join(" ")}
      />
      <Moon
        className={[
          "absolute inset-0 h-4 w-4 transition-all duration-300",
          "text-zinc-900 dark:text-zinc-100",
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0",
        ].join(" ")}
      />
      <span className="sr-only">Toggle theme</span>
    </div>
  )

  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <div className="w-full px-4">
        <nav
          className={[
            pillBase,
            compact
              ? "max-w-[26rem] rounded-full shadow-md"
              : "max-w-[70rem] rounded-2xl shadow-sm",
          ].join(" ")}
        >
          <div
            className={[
              "relative flex items-center justify-center",
              compact ? "h-11" : "h-13",
            ].join(" ")}
          >
            {/* FULL layout (desktop + NOT compact only) */}
            <div
              className={[
                "absolute inset-0 flex items-center justify-between px-3",
                "transition-all duration-500 ease-in-out",
                compact
                  ? "opacity-0 scale-[0.99] -translate-y-0.5 pointer-events-none"
                  : "opacity-100 scale-100 translate-y-0",
              ].join(" ")}
            >
              <a href="#about" className="flex items-center gap-3 shrink-0">
                <div className="h-8 w-8 rounded-xl border border-zinc-200/60 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-900/60 grid place-items-center">
                  <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    AK
                  </span>
                </div>
                <span className="hidden sm:block text-[15px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Akhil Karumuri
                </span>
              </a>

              {/* Center nav (NO inner pill) */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                <ul className="flex items-center gap-1">
                  {LINKS.map((l) => (
                    <li
                      key={l.id}
                      className={[
                        "flex items-center",
                        active === l.id ? activeWrap : "",
                      ].join(" ")}
                    >
                      <a
                        href={l.href}
                        onClick={() => onNavClick(l.id)}
                        className={[
                          baseLink,
                          active === l.id ? activeLink : inactiveLink,
                        ].join(" ")}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                type="button"
                className={iconBtn}
              >
                <ThemeIcon />
              </button>
            </div>

            {/* COMPACT layout (always on mobile, and on scroll for desktop) */}
            <div
              className={[
                "absolute inset-0 flex items-center justify-center gap-3 px-2",
                "transition-all duration-500 ease-in-out",
                compact
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-[0.99] -translate-y-0.5 pointer-events-none",
              ].join(" ")}
            >
              <ul className="flex items-center gap-1">
                {LINKS.map((l) => (
                  <li
                    key={l.id}
                    className={[
                      "flex items-center",
                      active === l.id ? activeWrap : "",
                    ].join(" ")}
                  >
                    <a
                      href={l.href}
                      onClick={() => onNavClick(l.id)}
                      className={[
                        baseLink,
                        active === l.id ? activeLink : inactiveLink,
                      ].join(" ")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                type="button"
                className={iconBtn}
              >
                <ThemeIcon />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
