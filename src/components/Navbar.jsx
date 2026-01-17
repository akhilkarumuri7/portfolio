import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

const LINKS = [
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
]

function getInitialTheme() {
  if (typeof window === "undefined") return false
  const saved = localStorage.getItem("theme")
  if (saved === "dark") return true
  if (saved === "light") return false
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false
}

function ThemeIcon({ isDark }) {
  return (
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
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(getInitialTheme)
  const [active, setActive] = useState("about")
  const [isMobile, setIsMobile] = useState(false)

  const ids = LINKS.map((l) => l.id)

  // Apply theme whenever isDark changes (no extra setState in effect)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

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

  // scroll -> compact on desktop only
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scroll spy (with top + bottom edge-case fixes)
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (els.length === 0) return

    const firstId = ids[0]
    const lastId = ids[ids.length - 1]

    const observer = new IntersectionObserver(
      (entries) => {
        // Top edge case
        if (window.scrollY < 10) {
          setActive(firstId)
          return
        }

        // Bottom edge case
        const atBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2

        if (atBottom) {
          setActive(lastId)
          return
        }

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) setActive(visible[0].target.id)
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.65],
      }
    )

    els.forEach((el) => observer.observe(el))

    // Make sure initial state is correct on load
    if (window.scrollY < 10) setActive(firstId)

    return () => observer.disconnect()
  }, [ids])

  function toggleTheme() {
    setIsDark((d) => !d)
  }

  // On click, let the observer do the final say,
  // but setting active immediately feels snappy
  function onNavClick(id) {
    setActive(id)
  }

  const compact = isMobile || isScrolled

  const pillBase =
    "mx-auto w-full border backdrop-blur-xl backdrop-saturate-150 " +
    "bg-white/35 dark:bg-zinc-950/25 " +
    "border-zinc-200/50 dark:border-zinc-800/60 " +
    "shadow-[0_8px_30px_rgba(0,0,0,0.10)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.45)] " +
    "transition-[max-width,border-radius,box-shadow] duration-500 ease-in-out"

  const iconBtn =
    "h-9 w-9 rounded-full grid place-items-center transition-colors border border-zinc-200/60 dark:border-zinc-800/70 " +
    "bg-white/40 dark:bg-zinc-900/40 hover:bg-white/70 dark:hover:bg-zinc-900/70 " +
    "active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50"

  const baseLink =
    "px-2.5 sm:px-3.5 py-1 text-[13px] sm:text-[15px] font-medium tracking-tight transition-colors rounded-full"


  const activeWrap =
    "rounded-full ring-1 ring-zinc-900/12 dark:ring-white/12 bg-white/70 dark:bg-zinc-800/40"

  const activeLink = "text-zinc-900 dark:text-white"
  const inactiveLink =
    "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"

  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <div className="w-full px-4">
        <nav
          className={[
            pillBase,
            compact
              ? "max-w-[30rem] rounded-full"
              : "max-w-[70rem] rounded-2xl",
          ].join(" ")}
        >
          <div
            className={[
              "relative flex items-center justify-center",
              compact ? "h-11" : "h-14",
            ].join(" ")}
          >
            {/* FULL layout */}
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
                <ThemeIcon isDark={isDark} />
              </button>
            </div>

            {/* COMPACT layout */}
            <div
              className={[
                "absolute inset-0 flex items-center justify-center gap-3 px-2",
                "transition-all duration-500 ease-in-out",
                compact
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-[0.99] -translate-y-0.5 pointer-events-none",
              ].join(" ")}
            >
              <ul className="flex items-center gap-0.5 sm:gap-1">
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
                <ThemeIcon isDark={isDark} />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
