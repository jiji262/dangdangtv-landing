import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Copy,
  Cpu,
  ExternalLink,
  Film,
  Flame,
  Github,
  Layers,
  Lock,
  Maximize2,
  MonitorPlay,
  Moon,
  Play,
  QrCode,
  Radio,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Terminal,
  Tv,
  X,
} from 'lucide-react'
import { COPY, type FeatureItem, type Lang, type ScreenshotItem } from './i18n'

const GITHUB_REPO_URL = 'https://github.com/jiji262/DangDangTV'

function FeatureIcon({ iconKey }: { iconKey: FeatureItem['iconKey'] }) {
  switch (iconKey) {
    case 'search':
      return <Search className="h-6 w-6" />
    case 'play':
      return <Play className="h-6 w-6" />
    case 'drama':
      return <Flame className="h-6 w-6" />
    case 'live':
      return <Radio className="h-6 w-6" />
    case 'devices':
      return <Tv className="h-6 w-6" />
    case 'qrcode':
      return <QrCode className="h-6 w-6" />
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>('zh')
  const [isDark, setIsDark] = useState<boolean>(true)
  const [activeShotIndex, setActiveShotIndex] = useState<number>(0)
  const [lightboxShot, setLightboxShot] = useState<ScreenshotItem | null>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const t = COPY[lang]
  const shots = t.screenshotsSection.items
  const currentShot = shots[activeShotIndex] ?? shots[0]

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  useEffect(() => {
    if (!lightboxShot) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxShot(null)
      } else if (e.key === 'ArrowRight') {
        const idx = shots.findIndex((s) => s.id === lightboxShot.id)
        const next = shots[(idx + 1) % shots.length]
        if (next) setLightboxShot(next)
      } else if (e.key === 'ArrowLeft') {
        const idx = shots.findIndex((s) => s.id === lightboxShot.id)
        const prev = shots[(idx - 1 + shots.length) % shots.length]
        if (prev) setLightboxShot(prev)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxShot, shots])

  const handleCopy = async (cmd: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(cmd)
      setCopiedIndex(idx)
      window.setTimeout(() => {
        setCopiedIndex((prev) => (prev === idx ? null : prev))
      }, 1800)
    } catch {
      // Clipboard fallback ignored
    }
  }

  const prevSlide = () => {
    setActiveShotIndex((prev) => (prev - 1 + shots.length) % shots.length)
  }

  const nextSlide = () => {
    setActiveShotIndex((prev) => (prev + 1) % shots.length)
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">
      {/* Sticky Header — hapi.run style */}
      <header className="sticky top-0 z-40 w-full border-b-2 border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border-2 border-[var(--border)] bg-[#eef7e8] shadow-hard-sm transition-transform group-hover:translate-y-0.5">
              <img
                src="/icons/catie_logo.png"
                alt="当当TV 图标"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black tracking-tight">当当TV</span>
              <span className="hidden font-mono text-xs font-bold text-[var(--muted-foreground)] sm:inline">
                DangDangTV
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
            <a
              href="#screenshots"
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              {t.nav.screenshots}
            </a>
            <a
              href="#features"
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              {t.nav.features}
            </a>
            <a
              href="#experience"
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              {t.nav.experience}
            </a>
            <a
              href="#install"
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              {t.nav.install}
            </a>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'))}
              className="btn-brutal-sm inline-flex h-9 w-11 cursor-pointer items-center justify-center rounded-xl bg-[var(--card)] text-xs font-extrabold"
              aria-label="Switch language"
            >
              {t.nav.langBtn}
            </button>

            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              className="btn-brutal-sm inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[var(--card)]"
              aria-label="Toggle color theme"
            >
              {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 w-9 items-center justify-center rounded-xl text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] sm:inline-flex"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="#install"
              className="btn-brutal inline-flex h-9 items-center justify-center rounded-xl bg-[var(--primary)] px-4 text-sm font-extrabold text-[var(--primary-foreground)]"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-grid-bg relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            {/* Hero Left Copy */}
            <div className="space-y-7 lg:col-span-6">
              <div className="inline-flex items-center gap-2.5 rounded-full border-2 border-[var(--border)] bg-[var(--secondary)] px-4 py-1.5 text-xs font-extrabold text-[var(--secondary-foreground)] shadow-hard-sm sm:text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono">{t.hero.badge}</span>
              </div>

              <h1 className="text-4xl leading-[1.12] font-black tracking-tight sm:text-6xl lg:text-[4.1rem]">
                {t.hero.titleLine1}
                <br />
                <span className="text-[var(--primary)]">{t.hero.titleLine2}</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed font-medium text-[var(--muted-foreground)] sm:text-lg">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="#screenshots"
                  className="btn-brutal inline-flex items-center gap-2.5 rounded-2xl bg-[var(--primary)] px-7 py-4 text-base font-extrabold text-[var(--primary-foreground)] sm:text-lg"
                >
                  {t.hero.primaryCta}
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-brutal inline-flex items-center gap-2.5 rounded-2xl bg-[var(--card)] px-7 py-4 text-base font-extrabold text-[var(--foreground)] sm:text-lg"
                >
                  <Github className="h-5 w-5" />
                  {t.hero.secondaryCta}
                </a>
              </div>

              {/* Dual Edition Pills (hapi.run App Store / Google Play style) */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#install"
                    className="btn-brutal-sm inline-flex items-center gap-2 rounded-xl bg-[var(--card)] px-3.5 py-2 text-xs font-extrabold sm:text-sm"
                  >
                    <Tv className="h-4 w-4 text-[var(--primary)]" />
                    <span>{t.hero.flavorModern}</span>
                  </a>
                  <a
                    href="#install"
                    className="btn-brutal-sm inline-flex items-center gap-2 rounded-xl bg-[var(--card)] px-3.5 py-2 text-xs font-extrabold sm:text-sm"
                  >
                    <Smartphone className="h-4 w-4 text-[var(--primary)]" />
                    <span>{t.hero.flavorLegacy}</span>
                  </a>
                </div>
                <p className="text-xs font-semibold text-[var(--muted-foreground)]">
                  {t.hero.footnote}
                </p>
              </div>
            </div>

            {/* Hero Right Real TV Frame + Neo-Brutalist Floating Callouts */}
            <div className="relative lg:col-span-6">
              <div className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-[var(--primary)]/30 via-transparent to-emerald-400/20 blur-2xl" />

              {/* Floating Tuxedo Cat Mascot Badge */}
              <div
                title={t.hero.floatingTopTag}
                className="animate-float-slow absolute -top-8 -right-3 z-20 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[var(--border)] bg-amber-300 shadow-hard sm:-top-10 sm:-right-6 sm:h-24 sm:w-24 dark:bg-amber-400"
              >
                <img
                  src="/icons/cat-playing-toy.svg"
                  alt="奶牛猫当当"
                  className="h-16 w-16 sm:h-20 sm:w-20"
                />
              </div>

              {/* Main TV Bezel with Real Hisense Android 11 Capture */}
              <div
                onClick={() => setLightboxShot(shots[0])}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setLightboxShot(shots[0])
                }}
                className="group relative cursor-zoom-in overflow-hidden rounded-[1.75rem] border-4 border-[var(--border)] bg-slate-950 shadow-hard-lg transition-transform duration-300 hover:scale-[1.01]"
              >
                {/* Top TV status bar */}
                <div className="flex items-center justify-between border-b-2 border-[var(--border)] bg-slate-900 px-4 py-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 font-mono text-[11px] font-bold text-slate-300">
                      com.dangdang.tv · Hisense Android 11
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                    <Maximize2 className="h-3 w-3" />
                    1920×1080
                  </span>
                </div>

                <img
                  src="/screenshots/home-tv.png"
                  alt="当当TV 海信电视实机首页截图"
                  className="block aspect-video w-full object-cover"
                />
              </div>

              {/* Bottom-left Floating Status Card */}
              <div className="mt-4 flex items-center gap-3.5 rounded-2xl border-4 border-[var(--border)] bg-[var(--card)] p-3.5 shadow-hard sm:absolute sm:-bottom-7 sm:-left-6 sm:mt-0 sm:max-w-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[var(--border)] bg-[var(--primary)]/20 text-[var(--primary)]">
                  <MonitorPlay className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-black tracking-wide text-[var(--primary)]">
                    {t.hero.floatingCardTitle}
                  </div>
                  <div className="truncate text-xs font-bold text-[var(--foreground)] sm:text-sm">
                    {t.hero.floatingCardSub}
                  </div>
                </div>
              </div>

              {/* Bottom-right Mono Remote Tag */}
              <div className="hidden items-center gap-2 rounded-xl border-2 border-[var(--border)] bg-slate-950 px-3.5 py-2 font-mono text-xs font-bold text-emerald-400 shadow-hard-sm sm:absolute sm:-right-4 sm:-bottom-5 sm:inline-flex">
                <span>▶</span>
                <span>{t.hero.remoteChip}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Running Screenshots Interactive Showcase (#screenshots) */}
      <section id="screenshots" className="border-t-2 border-[var(--border)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-[var(--border)] bg-[var(--primary)]/15 px-4 py-1.5 text-xs font-extrabold text-[var(--primary)] shadow-hard-sm sm:text-sm">
              <Clapperboard className="h-4 w-4" />
              <span>{t.screenshotsSection.badge}</span>
            </div>
            <h2 className="mb-5 text-3xl leading-tight font-black tracking-tight sm:text-5xl">
              {t.screenshotsSection.titleLine1}
              <br />
              <span className="text-[var(--primary)]">{t.screenshotsSection.titleLine2}</span>
            </h2>
            <p className="text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
              {t.screenshotsSection.subtitle}
            </p>
          </div>

          {/* Filter / Scene Pill Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-2.5">
            {shots.map((shot, idx) => {
              const active = idx === activeShotIndex
              return (
                <button
                  key={shot.id}
                  type="button"
                  onClick={() => setActiveShotIndex(idx)}
                  className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-extrabold transition-all sm:text-sm ${
                    active
                      ? 'btn-brutal-sm bg-[var(--primary)] text-[var(--primary-foreground)]'
                      : 'border-2 border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {shot.tag}
                </button>
              )
            })}
          </div>

          {/* Featured Stage Card */}
          <div className="card-brutal overflow-hidden rounded-[2rem] p-4 sm:p-7 lg:p-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div
                  onClick={() => setLightboxShot(currentShot)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setLightboxShot(currentShot)
                  }}
                  className="group relative cursor-zoom-in overflow-hidden rounded-2xl border-4 border-[var(--border)] bg-black shadow-hard"
                >
                  <img
                    src={currentShot.src}
                    alt={currentShot.title}
                    className="block aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                  <div className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-xl border-2 border-white/25 bg-black/75 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    <Maximize2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{t.screenshotsSection.zoomHint}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-6 lg:col-span-4">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--border)] bg-[var(--muted)] px-3 py-1 font-mono text-xs font-bold">
                    <Cpu className="h-3.5 w-3.5 text-[var(--primary)]" />
                    <span>{currentShot.device}</span>
                  </div>

                  <h3 className="text-2xl leading-snug font-black">{currentShot.title}</h3>

                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                    {currentShot.desc}
                  </p>

                  <ul className="space-y-2.5 pt-1">
                    {currentShot.highlights.map((hl) => (
                      <li key={hl} className="flex items-center gap-2.5 text-sm font-bold">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-[var(--border)] bg-[var(--primary)] text-[var(--primary-foreground)]">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prev / Next Carousel Controls (hapi.run circular brutalist buttons) */}
                <div className="flex items-center justify-between border-t-2 border-[var(--border)] pt-5">
                  <span className="font-mono text-xs font-bold text-[var(--muted-foreground)]">
                    0{activeShotIndex + 1} / 0{shots.length}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={prevSlide}
                      aria-label={t.screenshotsSection.prev}
                      className="btn-brutal-sm flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--background)]"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label={t.screenshotsSection.next}
                      className="btn-brutal-sm flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--background)]"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6-Screen Thumbnail Overview Grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shots.map((shot, idx) => {
              const isSelected = idx === activeShotIndex
              return (
                <div
                  key={shot.id}
                  onClick={() => {
                    setActiveShotIndex(idx)
                    setLightboxShot(shot)
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveShotIndex(idx)
                      setLightboxShot(shot)
                    }
                  }}
                  className={`card-brutal card-brutal-lift group cursor-pointer overflow-hidden rounded-2xl p-3 ${
                    isSelected ? 'ring-2 ring-[var(--primary)]' : ''
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl border-2 border-[var(--border)] bg-black">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      loading="lazy"
                      className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-2 left-2 rounded-lg border border-white/20 bg-black/75 px-2.5 py-0.5 font-mono text-[11px] font-bold text-white backdrop-blur-sm">
                      {shot.tag}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2 px-1">
                    <div>
                      <h4 className="text-sm font-extrabold">{shot.title}</h4>
                      <p className="font-mono text-xs text-[var(--muted-foreground)]">
                        {shot.device}
                      </p>
                    </div>
                    <Maximize2 className="h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-colors group-hover:text-[var(--primary)]" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Features Grid (#features — hapi.run secondary band) */}
      <section
        id="features"
        className="border-y-2 border-[var(--border)] bg-[var(--secondary)]/25 py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
              {t.featuresSection.title}
            </h2>
            <p className="text-base text-[var(--muted-foreground)] sm:text-lg">
              {t.featuresSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {t.featuresSection.items.map((item) => (
              <div
                key={item.title}
                className="card-brutal card-brutal-lift flex flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[var(--border)] ${item.colorClass}`}
                    >
                      <FeatureIcon iconKey={item.iconKey} />
                    </div>
                    <span className="rounded-full border-2 border-[var(--border)] bg-[var(--muted)] px-3 py-1 font-mono text-xs font-bold">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mb-2.5 text-xl font-extrabold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Animated Tuxedo Cat Mascot Section (#experience) */}
      <section id="experience" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Visual: Multi-progress home capture + 4 SVG Tuxedo Cat states */}
            <div className="space-y-6 lg:col-span-6">
              <div className="overflow-hidden rounded-[1.75rem] border-2 border-[var(--border)] bg-black shadow-hard-lg">
                <img
                  src="/screenshots/home-preview.png"
                  alt="当当TV 继续观看与多行筛选实跑画面"
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
              </div>

              {/* Animated Tuxedo Cat SVG Showcase Strip */}
              <div className="card-brutal rounded-2xl p-5">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-extrabold">{t.experienceSection.mascotTitle}</h3>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {t.experienceSection.mascotSubtitle}
                    </p>
                  </div>
                  <Sparkles className="h-5 w-5 shrink-0 text-[var(--primary)]" />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {t.experienceSection.mascots.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col items-center rounded-xl border-2 border-[var(--border)] bg-slate-900/90 p-3 text-slate-100"
                    >
                      <img src={m.src} alt={m.label} className="h-16 w-16" />
                      <span className="mt-1.5 font-mono text-xs font-bold text-lime-300">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Copy Points */}
            <div className="space-y-8 lg:col-span-6">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[var(--border)] bg-[var(--primary)]/15 px-3.5 py-1 text-xs font-extrabold text-[var(--primary)]">
                  <Film className="h-3.5 w-3.5" />
                  <span>{t.experienceSection.badge}</span>
                </div>
                <h2 className="mb-4 text-3xl leading-tight font-black tracking-tight sm:text-4xl">
                  {t.experienceSection.titleLine1}
                  <br />
                  <span className="text-[var(--primary)]">{t.experienceSection.titleLine2}</span>
                </h2>
                <p className="text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
                  {t.experienceSection.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {t.experienceSection.points.map((pt, i) => (
                  <div key={pt.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[var(--border)] bg-[var(--primary)]/15 font-mono text-base font-black text-[var(--primary)] shadow-hard-sm">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-extrabold">{pt.title}</h3>
                      <p className="text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — 3 Connected Cards (hapi.run horizontal bar style) */}
      <section className="border-y-2 border-[var(--border)] bg-[var(--muted)]/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-3 text-3xl font-black tracking-tight sm:text-4xl">
              {t.howItWorks.title}
            </h2>
            <p className="text-base text-[var(--muted-foreground)]">{t.howItWorks.subtitle}</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 hidden h-1 w-full -translate-y-1/2 bg-[var(--border)] md:block" />
            <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {t.howItWorks.steps.map((st, idx) => (
                <div key={st.step} className="card-brutal rounded-2xl p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--border)] bg-[var(--primary)]/15 font-mono text-xl font-black text-[var(--primary)]">
                    {idx + 1}
                  </div>
                  <div className="mb-1 font-mono text-xs font-bold text-[var(--primary)]">
                    {st.step}
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold">{st.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editions & Local Build Terminal Section (#install — hapi.run "Get Started in Seconds") */}
      <section id="install" className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
              {t.installSection.title}
            </h2>
            <p className="text-base text-[var(--muted-foreground)] sm:text-lg">
              {t.installSection.subtitle}
            </p>
          </div>

          {/* Dual Edition Cards */}
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.installSection.editions.map((ed, idx) => (
              <div key={ed.pkg} className="card-brutal rounded-2xl p-6">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <Layers className="h-5 w-5 text-[var(--primary)]" />
                    <h3 className="text-xl font-black">{ed.name}</h3>
                  </div>
                  <span
                    className={`rounded-full border-2 border-[var(--border)] px-3 py-0.5 text-xs font-extrabold ${
                      idx === 0
                        ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
                        : 'bg-[var(--secondary)] text-[var(--secondary-foreground)]'
                    }`}
                  >
                    {ed.badge}
                  </span>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {ed.desc}
                </p>

                <div className="space-y-2 rounded-xl border-2 border-[var(--border)] bg-[var(--muted)]/50 p-3.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[var(--muted-foreground)]">Android SDK</span>
                    <span className="font-mono font-bold">{ed.sdk}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[var(--muted-foreground)]">Launcher Name</span>
                    <span className="font-bold">{ed.appName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[var(--muted-foreground)]">Application ID</span>
                    <code className="rounded bg-slate-950 px-2 py-0.5 font-mono text-emerald-400">
                      {ed.pkg}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Commands Card */}
          <div className="card-brutal rounded-2xl p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-2.5">
              <Terminal className="h-5 w-5 text-[var(--primary)]" />
              <h3 className="text-xl font-black">{t.installSection.commandsTitle}</h3>
            </div>

            <div className="space-y-5">
              {t.installSection.commands.map((item, idx) => (
                <div key={item.label} className="space-y-2">
                  <div className="text-sm font-extrabold">{item.label}</div>
                  <div className="flex items-center justify-between gap-3 rounded-xl border-2 border-slate-800 bg-slate-950 px-4 py-3.5 font-mono text-xs text-slate-100 sm:text-sm">
                    <code className="overflow-x-auto whitespace-nowrap">{item.cmd}</code>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.cmd, idx)}
                      className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 font-sans text-xs font-bold text-slate-200 transition-colors hover:border-emerald-400 hover:text-emerald-400"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400">{t.installSection.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>{t.installSection.copy}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border-2 border-[var(--border)] bg-[var(--muted)]/50 px-4 py-3 text-center text-xs font-bold text-[var(--muted-foreground)] sm:text-sm">
              <Lock className="h-4 w-4 shrink-0 text-[var(--primary)]" />
              <span>{t.installSection.securityNote}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom High-Contrast CTA Banner */}
      <section className="border-t-2 border-[var(--border)] bg-slate-900 py-20 text-white dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-white/25 bg-[#eef7e8] shadow-hard">
            <img src="/icons/catie_logo.png" alt="当当TV" className="h-12 w-12 object-contain" />
          </div>
          <h2 className="mb-5 text-3xl font-black tracking-tight sm:text-5xl">
            {t.ctaBanner.title}
          </h2>
          <p className="mx-auto mb-9 max-w-2xl text-base text-slate-300 sm:text-xl">
            {t.ctaBanner.subtitle}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-brutal inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[var(--primary)] px-8 py-4 text-base font-extrabold text-[var(--primary-foreground)] sm:text-lg"
            >
              <Github className="h-5 w-5" />
              <span>{t.ctaBanner.primaryBtn}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#screenshots"
              className="btn-brutal inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-800 px-8 py-4 text-base font-extrabold text-white sm:text-lg"
            >
              <span>{t.ctaBanner.secondaryBtn}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[var(--border)] bg-[var(--muted)]/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-3 flex items-center gap-2.5">
                <img
                  src="/icons/catie_logo.png"
                  alt="当当TV"
                  className="h-8 w-8 rounded-lg border border-[var(--border)] bg-[#eef7e8] p-0.5"
                />
                <span className="text-lg font-black">当当TV · DangDangTV</span>
              </div>
              <p className="mb-4 max-w-md text-sm leading-relaxed text-[var(--muted-foreground)]">
                {t.footer.tagline}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--muted-foreground)]">
                <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
                <span>{t.footer.disclaimer}</span>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-black uppercase tracking-wider">
                {t.footer.colProduct}
              </h3>
              <ul className="space-y-2 text-sm font-semibold text-[var(--muted-foreground)]">
                <li>
                  <a href="#screenshots" className="hover:text-[var(--foreground)]">
                    {t.nav.screenshots}
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[var(--foreground)]">
                    {t.nav.features}
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-[var(--foreground)]">
                    {t.nav.experience}
                  </a>
                </li>
                <li>
                  <a href="#install" className="hover:text-[var(--foreground)]">
                    {t.nav.install}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-black uppercase tracking-wider">
                {t.footer.colTech}
              </h3>
              <ul className="space-y-2 font-mono text-xs font-bold text-[var(--muted-foreground)]">
                <li>Kotlin & Jetpack Compose</li>
                <li>AndroidX Media3 ExoPlayer</li>
                <li>Android TV Leanback (API 22–36)</li>
                <li>Python Live Stream Resolver</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t-2 border-[var(--border)] pt-6 text-xs font-bold text-[var(--muted-foreground)] sm:flex-row">
            <span>{t.footer.copyright}</span>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--foreground)]"
            >
              <Github className="h-4 w-4" />
              <span>github.com/jiji262/DangDangTV</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Fullscreen Screenshot Lightbox Modal */}
      {lightboxShot && (
        <div
          onClick={() => setLightboxShot(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl border-4 border-[var(--border)] bg-slate-950 text-white shadow-hard-lg"
          >
            <div className="flex items-center justify-between border-b-2 border-slate-800 px-5 py-3.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-lg bg-emerald-500/20 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-300">
                  {lightboxShot.device}
                </span>
                <h3 className="text-sm font-extrabold sm:text-base">{lightboxShot.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxShot(null)}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-white"
                aria-label="Close preview"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[80vh] overflow-auto bg-black p-2 sm:p-4">
              <img
                src={lightboxShot.src}
                alt={lightboxShot.title}
                className="mx-auto max-h-[74vh] w-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
