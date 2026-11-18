export type Lang = 'zh' | 'en'

export interface ScreenshotItem {
  id: string
  src: string
  tag: string
  device: string
  title: string
  desc: string
  highlights: string[]
}

export interface FeatureItem {
  iconKey: 'search' | 'play' | 'drama' | 'live' | 'devices' | 'qrcode'
  badge: string
  title: string
  desc: string
  colorClass: string
}

export interface CopyPack {
  nav: {
    features: string
    screenshots: string
    experience: string
    install: string
    cta: string
    langBtn: string
  }
  hero: {
    badge: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    flavorModern: string
    flavorLegacy: string
    footnote: string
    floatingTopTag: string
    floatingCardTitle: string
    floatingCardSub: string
    remoteChip: string
  }
  screenshotsSection: {
    badge: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    zoomHint: string
    prev: string
    next: string
    items: ScreenshotItem[]
  }
  featuresSection: {
    title: string
    subtitle: string
    items: FeatureItem[]
  }
  experienceSection: {
    badge: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    mascotTitle: string
    mascotSubtitle: string
    mascots: { src: string; label: string }[]
    points: {
      title: string
      desc: string
    }[]
  }
  howItWorks: {
    title: string
    subtitle: string
    steps: {
      step: string
      title: string
      desc: string
    }[]
  }
  installSection: {
    title: string
    subtitle: string
    editionsTitle: string
    editions: {
      name: string
      badge: string
      sdk: string
      appName: string
      pkg: string
      desc: string
    }[]
    commandsTitle: string
    commands: {
      label: string
      cmd: string
    }[]
    copied: string
    copy: string
    securityNote: string
  }
  ctaBanner: {
    title: string
    subtitle: string
    primaryBtn: string
    secondaryBtn: string
  }
  footer: {
    tagline: string
    colProduct: string
    colTech: string
    disclaimer: string
    copyright: string
  }
}

export const COPY: Record<Lang, CopyPack> = {
  zh: {
    nav: {
      features: '主要功能',
      screenshots: '实机截图',
      experience: '大屏细节',
      install: '版本与构建',
      cta: '快速上手',
      langBtn: 'EN',
    },
    hero: {
      badge: 'v1.3.13 现已发布 · Kotlin + Compose + Media3',
      titleLine1: '为遥控器而生，',
      titleLine2: '客厅大屏，随心开看。',
      subtitle:
        '当当TV 是一款面向 Android TV、电视盒子设计，同时也能在手机上顺滑使用的现代影视播放器。集多源找片、拼音首字母搜索、独立短剧频道、电视数字选台与五大平台直播于一体。',
      primaryCta: '查看真实运行截图',
      secondaryCta: '查看 GitHub 仓库',
      flavorModern: 'Modern · Android 9+ (API 28)',
      flavorLegacy: 'Legacy · Android 5.1+ (API 22)',
      footnote: '双包名可共存安装，数据彼此独立 · 零广告零打扰 · 仅提供播放器工具，不托管影视资源',
      floatingTopTag: '奶牛猫“当当”陪你看片',
      floatingCardTitle: '海信电视 Android 11 实机运行',
      floatingCardSub: '继续观看 ·《玫瑰战争》第 6 集 · 剩 20 分钟',
      remoteChip: 'D-Pad 焦点直达 · 丝滑换线',
    },
    screenshotsSection: {
      badge: '100% 真实运行截图',
      titleLine1: '始于电视实机，',
      titleLine2: '每一帧都是真实运行画面。',
      subtitle:
        '首页与短剧页来自海信电视实机（Android 11，Modern 包）；多维筛选、设置与桌面来自 Android TV 实跑环境。点击画面即可全屏放大检视细节。',
      zoomHint: '点击放大查看高清原图',
      prev: '上一张',
      next: '下一张',
      items: [
        {
          id: 'home-tv',
          src: '/screenshots/home-tv.png',
          tag: '首页 · 实机截图',
          device: '海信电视 · Android 11 (Modern)',
          title: '客厅首页与历史续看进度条',
          desc: '顶部聚合「首页 / 电视 / 短剧 / 直播 / 搜索 / 设置」六大入口；首屏直接展示上次未看完的剧集与剩余时长，下方无缝衔接豆瓣热播评分海报墙。',
          highlights: ['顶部独立短剧与直播入口', '精准到分钟的继续观看卡片', '豆瓣热播海报与实时评分'],
        },
        {
          id: 'short-drama-tv',
          src: '/screenshots/short-drama-tv.png',
          tag: '短剧 · 实机截图',
          device: '海信电视 · Android 11 (Modern)',
          title: '红果主源 + 速博备用双引擎短剧频道',
          desc: '独立短剧浏览与剧名检索专区，内置红果热播榜、真人短剧、漫剧分类，主源异常可一键切至速博备用源，支持选集、自动连播与断点续看。',
          highlights: ['红果主源 + 速博备用双保障', '真人短剧 / 漫剧 / 热播榜', '分集自动连播，播放条自动隐藏'],
        },
        {
          id: 'home-filters',
          src: '/screenshots/home-filters.png',
          tag: '找片 · 多维筛选',
          device: 'Android TV 14 实跑截图',
          title: '专为方向键设计的多行分类筛选',
          desc: '切换电影、电视剧、综艺、动漫后自动展开「类型 / 地区 / 年份」条件行，无需弹出繁琐侧边抽屉，遥控器上下左右四向移动即可秒筛片库。',
          highlights: ['类型 · 地区 · 年份三级联动', '高对比度青柠绿焦点态指示', '零层级弹窗，焦点路径清晰'],
        },
        {
          id: 'settings-preview',
          src: '/screenshots/settings-preview.png',
          tag: '设置 · 扫码配源',
          device: 'Android TV 14 实跑截图',
          title: '手机扫码添加片源与设备端加密配置',
          desc: '告别遥控器逐字输入长链接的痛苦——手机扫码即可向电视推送影视接口与 AI 找片密钥；内置自动换线开关、三档大屏字号与在线版本检查。',
          highlights: ['手机扫码录入片源与直播源', 'AI 找片密钥本地加密存储', '正常 / 大 / 特大三档电视字号'],
        },
        {
          id: 'launcher-preview',
          src: '/screenshots/launcher-preview.png',
          tag: '桌面 · 原生适配',
          device: 'Android TV Leanback 系统桌面',
          title: '黑白奶牛猫“当当”原生 TV 横幅图标',
          desc: '完整适配 Android TV Leanback Launcher 横幅规范，采用原创黑白奶牛猫“当当”无文字启动图标与清爽浅绿底色，在电视应用墙上一眼即识。',
          highlights: ['原生 Leanback Banner 规范', 'Modern 与 Legacy 独立桌面图标', '启动秒进，无开屏广告等待'],
        },
      ],
    },
    featuresSection: {
      title: '专为客厅追剧打磨的六大能力',
      subtitle: '不堆砌冗余菜单，把找片、看剧、刷短剧、看直播每一个高频动作做到一按即达。',
      items: [
        {
          iconKey: 'search',
          badge: '快速找片',
          title: '多维筛选 & 拼音首字母搜索',
          desc: '支持按分类、地区、年份组合筛片，内置豆瓣热播榜单；针对遥控器优化拼音首字母检索（如输入 XCLF 即可搜出对应剧集），也支持全站联动搜短剧。',
          colorClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
        },
        {
          iconKey: 'play',
          badge: '稳定播放',
          title: '多线路秒切 & 历史断点续看',
          desc: '详情页与播放控制栏直接显示真实线路源名，内置自动换线容错；精确记录每部剧集的观看集数与剩余分钟，回到首页一键继续观看。',
          colorClass: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
        },
        {
          iconKey: 'drama',
          badge: '竖屏/横屏短剧',
          title: '独立短剧频道 · 红果 & 速博双源',
          desc: '顶部独立短剧入口，聚合红果热播榜、真人短剧与漫剧分类，速博源随时兜底；支持全集选集、自动连播下一集与播放控制条无感隐藏。',
          colorClass: 'bg-rose-500/15 text-rose-600 dark:text-rose-400',
        },
        {
          iconKey: 'live',
          badge: '双模直播',
          title: '电视频道选台 & 五大平台直播',
          desc: '传统电视直播支持频道分组与遥控器数字键直选频道；配合仓库自带解析服务，大屏畅看斗鱼、虎牙、哔哩哔哩、抖音、快手热门直播并收藏房间。',
          colorClass: 'bg-sky-500/15 text-sky-600 dark:text-sky-400',
        },
        {
          iconKey: 'devices',
          badge: '全设备双栖',
          title: '电视遥控 + 手机触控自适应',
          desc: '同一工程兼顾客厅大屏焦点交互与手机端触控手势；提供 Modern（Android 9+）与 Legacy（Android 5.1+ 老盒子救星）双安装标识，可同机共存。',
          colorClass: 'bg-violet-500/15 text-violet-600 dark:text-violet-400',
        },
        {
          iconKey: 'qrcode',
          badge: '安全易配',
          title: '手机扫码配源 & 可选 AI 找片',
          desc: '片源接口与 AI 找片密钥均通过手机扫码快速下发，密钥加密保存在本地设备存储中，绝不从构建脚本硬编码进 APK。',
          colorClass: 'bg-lime-500/15 text-lime-700 dark:text-lime-400',
        },
      ],
    },
    experienceSection: {
      badge: '随需而动的细节',
      titleLine1: '遥控器盲操顺手，',
      titleLine2: '老盒子也能满血复活。',
      subtitle:
        '从焦点落点记忆到轻量级矢量加载动画，当当TV 针对大屏低算力设备与远距离观看场景做了全方位重绘。',
      mascotTitle: '原创奶牛猫“当当”多形态矢量加载动画',
      mascotSubtitle: '全站统一采用纯 SVG 矢量动态形象，体积仅数 KB，4K 大屏放大依然锐利灵动。',
      mascots: [
        { src: '/icons/cat-playing-toy.svg', label: '拍毛线球' },
        { src: '/icons/cat-running.svg', label: '追光奔跑' },
        { src: '/icons/cat-pouncing.svg', label: '蓄力扑蝶' },
        { src: '/icons/cat-loading.svg', label: '乖巧踩奶' },
      ],
      points: [
        {
          title: '遥控器焦点零迷路',
          desc: '打开选集、线路、倍速菜单自动落焦于当前生效值；统一高辨识度焦点边框与返回防误触确认弹窗，夜晚关灯也能直觉盲操。',
        },
        {
          title: '配套平台直播解析服务（platform_live_server）',
          desc: '随项目附带轻量 Python 直播解析后端，支持斗鱼、虎牙、B站、抖音、快手分类目录与真实流地址解析，局域网或服务器一键自建。',
        },
        {
          title: '灵活的构建参数与更新策略',
          desc: '支持按 Gradle 属性、local.properties 或环境变量注入自有服务地址与 HTTPS 更新清单，支持可选更新提示与最低可用版本策略管理。',
        },
      ],
    },
    howItWorks: {
      title: '三步开启大屏观影',
      subtitle: '架构干净透明，自有片源即插即用。',
      steps: [
        {
          step: '1. 构建或安装对应版本',
          title: '按设备系统选择 Modern 或 Legacy',
          desc: 'Android 9 及以上智能电视与手机选择 Modern；Android 5.1–8.1 经典电视盒子选择 Legacy，两版独立共存互不干扰。',
        },
        {
          step: '2. 手机扫码配置片源',
          title: '告别遥控器打字，扫码秒级导入',
          desc: '进入「设置 → 片源」或「AI 找片」，用手机扫描电视屏幕二维码即可导入自有影视接口、直播源或加密保存 AI Key。',
        },
        {
          step: '3. 窝进沙发随心开看',
          title: '热播大片、连播短剧、电视直播一键直达',
          desc: '方向键丝滑切分类、数字键秒换电视频道，上次看到哪一集哪一分钟自动记录在首页顶栏。',
        },
      ],
    },
    installSection: {
      title: '选择安装包 & 本地极速构建',
      subtitle: '需要 JDK 17 与 Android SDK Platform 36，使用仓库自带 Gradle Wrapper 即可一键编译双版本 APK。',
      editionsTitle: '双版本对比（可同时安装，数据独立）',
      editions: [
        {
          name: 'Modern 标准版',
          badge: '推荐新设备',
          sdk: 'Android 9.0 / API 28 及以上',
          appName: '当当TV',
          pkg: 'com.dangdang.tv',
          desc: '面向主流 4K 智能电视（如海信、小米、索尼、TCL）、新款电视盒子与 Android 手机。',
        },
        {
          name: 'Legacy 兼容版',
          badge: '老盒子救星',
          sdk: 'Android 5.1 / API 22 及以上',
          appName: '当当TV Legacy',
          pkg: 'com.dangdang.tv.legacy',
          desc: '专为早期客厅电视盒子与低版本固件老电视保留兼容支持，桌面图标与数据目录完全独立。',
        },
      ],
      commandsTitle: '从源码构建与运行检查',
      commands: [
        {
          label: '1. 克隆仓库到本地',
          cmd: 'git clone https://github.com/jiji262/DangDangTV.git && cd DangDangTV',
        },
        {
          label: '2. 编译 Modern 与 Legacy 安装包',
          cmd: './gradlew :app:assembleModernDebug :app:assembleLegacyDebug',
        },
        {
          label: '3. （可选）运行单元测试与平台直播服务检查',
          cmd: 'python3 -m unittest discover -s platform_live_server -p "test_*.py"',
        },
      ],
      copied: '已复制',
      copy: '复制命令',
      securityNote: 'AI 密钥设备端加密存储 · 当当TV 不提供或托管任何影视资源，请配合有权访问的内容与服务使用',
    },
    ctaBanner: {
      title: '准备好点亮你的客厅大屏了吗？',
      subtitle: '告别满屏贴片广告与反人类套娃菜单，回归纯粹、轻快、一切听命于方向键的看片体验。',
      primaryBtn: '前往 GitHub 查看项目',
      secondaryBtn: '重温真机截图',
    },
    footer: {
      tagline: '为遥控器而设计，也能在手机上使用的 Android 影视播放器。',
      colProduct: '页面导航',
      colTech: '技术栈',
      disclaimer: '免责声明：当当TV 仅作为本地播放器客户端软件，不内置、不提供亦不托管任何影视或直播流媒体资源。',
      copyright: '© 2026 DangDangTV (JIJI262). Crafted with ♥ & Tuxedo Cat DangDang.',
    },
  },
  en: {
    nav: {
      features: 'Features',
      screenshots: 'Screenshots',
      experience: 'Craft',
      install: 'Build & Editions',
      cta: 'Get Started',
      langBtn: '中',
    },
    hero: {
      badge: 'v1.3.13 Available Now · Kotlin + Compose + Media3',
      titleLine1: 'Built for the Remote.',
      titleLine2: 'Big-Screen Cinema, Zero Clutter.',
      subtitle:
        'DangDangTV is a modern Android media player crafted first for Android TV & set-top boxes—and equally at home on your phone. Multi-source VOD, Pinyin search, dedicated short dramas, TV channels, and live streams.',
      primaryCta: 'Explore Real Screenshots',
      secondaryCta: 'View on GitHub',
      flavorModern: 'Modern · Android 9+ (API 28)',
      flavorLegacy: 'Legacy · Android 5.1+ (API 22)',
      footnote: 'Side-by-side installable editions · Zero ads · Player only — bring your own authorized sources',
      floatingTopTag: 'Tuxedo Cat "DangDang"',
      floatingCardTitle: 'Running on Real Hisense TV (Android 11)',
      floatingCardSub: 'Continue Watching · Ep 6 · 20m remaining',
      remoteChip: 'D-Pad First · Auto Failover',
    },
    screenshotsSection: {
      badge: '100% Real Device Captures',
      titleLine1: 'Captured on Real TVs.',
      titleLine2: 'Every Pixel from Actual Runs.',
      subtitle:
        'Home and Short Drama screens are captured directly from a real Hisense Android 11 TV (Modern flavor); Filters, Settings, and Launcher are captured from Android TV 14 runs. Click any screen to inspect full-size.',
      zoomHint: 'Click to inspect full-res capture',
      prev: 'Prev',
      next: 'Next',
      items: [
        {
          id: 'home-tv',
          src: '/screenshots/home-tv.png',
          tag: 'Home · Real TV',
          device: 'Hisense TV · Android 11 (Modern)',
          title: 'Living-Room Home & Instant Continue-Watching',
          desc: 'Clean top bar uniting Home, TV, Short Drama, Live, Search, and Settings. Resume episodes right where you left off, above a crisp Douban-rated poster grid.',
          highlights: ['Dedicated Short Drama & Live tabs', 'Minute-accurate Continue Watching cards', 'Douban hot picks with ratings'],
        },
        {
          id: 'short-drama-tv',
          src: '/screenshots/short-drama-tv.png',
          tag: 'Short Drama · Real TV',
          device: 'Hisense TV · Android 11 (Modern)',
          title: 'Dedicated Short Drama Hub (Primary + Fallback)',
          desc: 'Browse trending short dramas, live-action mini-series, and motion comics powered by Hongguo primary + Subo fallback sources with auto-next playback.',
          highlights: ['Hongguo primary + Subo fallback', 'Live-action, comics & hot charts', 'Auto-next episode & auto-hiding HUD'],
        },
        {
          id: 'home-filters',
          src: '/screenshots/home-filters.png',
          tag: 'Discovery · Filters',
          device: 'Android TV 14 Capture',
          title: 'Inline Multi-Row D-Pad Category Filters',
          desc: 'Filter Movies, Series, Variety, and Anime by Genre, Region, and Year right inline—no awkward side drawers, effortless four-way D-Pad navigation.',
          highlights: ['Genre · Region · Year inline rows', 'High-contrast lime focus indicator', 'Zero modal traps for TV remotes'],
        },
        {
          id: 'settings-preview',
          src: '/screenshots/settings-preview.png',
          tag: 'Settings · QR Pairing',
          device: 'Android TV 14 Capture',
          title: 'Phone QR Source Setup & Encrypted AI Key Storage',
          desc: 'Never type long URLs with a TV remote again. Scan a QR code on your phone to push VOD sources or encrypted AI discovery keys, adjust 3 font scales, and check updates.',
          highlights: ['QR code source & live URL import', 'On-device encrypted AI key storage', '3 living-room typography scales'],
        },
        {
          id: 'launcher-preview',
          src: '/screenshots/launcher-preview.png',
          tag: 'Launcher · Leanback',
          device: 'Android TV Leanback Home',
          title: 'Native Android TV Banner with Tuxedo Cat Mascot',
          desc: 'First-class Android TV Leanback banner featuring "DangDang" the tuxedo cat—instantly recognizable on your living-room app row.',
          highlights: ['Native Leanback TV banner', 'Separate icons for Modern & Legacy', 'Instant cold start with zero splash ads'],
        },
      ],
    },
    featuresSection: {
      title: 'Six Pillars Built for the Couch',
      subtitle: 'Every high-frequency living-room action—finding, resuming, zapping channels, and bingeing—tuned for minimal clicks.',
      items: [
        {
          iconKey: 'search',
          badge: 'Smart Discovery',
          title: 'Inline Filters & Pinyin Initials Search',
          desc: 'Combine genre, region, and year filters, browse Douban trending charts, and search titles rapidly via Pinyin initials designed specifically for TV remotes.',
          colorClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
        },
        {
          iconKey: 'play',
          badge: 'Resilient Playback',
          title: 'Multi-Source Switching & Resume History',
          desc: 'Displays real upstream source names, recovers automatically when a stream fails, and remembers exact episode + remaining minutes right on the home screen.',
          colorClass: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
        },
        {
          iconKey: 'drama',
          badge: 'Short Dramas',
          title: 'Standalone Short Drama Hub',
          desc: 'Dedicated top-level tab with Hongguo primary and Subo backup catalogs, episode picker, seamless continuous play, and auto-hiding HUD.',
          colorClass: 'bg-rose-500/15 text-rose-600 dark:text-rose-400',
        },
        {
          iconKey: 'live',
          badge: 'Live TV & Streams',
          title: 'TV Channel Zapping & 5 Live Platforms',
          desc: 'Group TV channels with numeric keypad tuning, plus browse & favorite Douyu, Huya, Bilibili, Douyin, and Kuaishou live rooms via the companion resolver.',
          colorClass: 'bg-sky-500/15 text-sky-600 dark:text-sky-400',
        },
        {
          iconKey: 'devices',
          badge: 'TV + Mobile',
          title: 'Adaptive TV Remote & Touch Modes',
          desc: 'One unified Compose codebase adapting seamlessly between TV D-Pad focus and phone touch, shipped in Modern (API 28+) and Legacy (API 22+) packages.',
          colorClass: 'bg-violet-500/15 text-violet-600 dark:text-violet-400',
        },
        {
          iconKey: 'qrcode',
          badge: 'Zero-Pain Setup',
          title: 'QR Provisioning & Optional AI Discovery',
          desc: 'Configure sources and optional AI movie recommendations by scanning a QR code on your phone. Keys stay encrypted on-device—never baked into APKs.',
          colorClass: 'bg-lime-500/15 text-lime-700 dark:text-lime-400',
        },
      ],
    },
    experienceSection: {
      badge: 'Thoughtful Engineering',
      titleLine1: 'Effortless Eyes-Free Remote Control.',
      titleLine2: 'Breathes New Life into Older Boxes.',
      subtitle:
        'From deterministic focus memory to featherweight vector mascots, every detail is engineered for 10-foot viewing.',
      mascotTitle: 'Animated Tuxedo Cat "DangDang" Vector States',
      mascotSubtitle: 'Pure inline SVG animations across loading & empty states—just a few KB, razor-sharp on 4K TVs.',
      mascots: [
        { src: '/icons/cat-playing-toy.svg', label: 'Yarn Play' },
        { src: '/icons/cat-running.svg', label: 'Sprinting' },
        { src: '/icons/cat-pouncing.svg', label: 'Pouncing' },
        { src: '/icons/cat-loading.svg', label: 'Kneading' },
      ],
      points: [
        {
          title: 'Predictable D-Pad Focus Memory',
          desc: 'Menus open directly on the active episode, route, or speed. Unified focus rings and safe exit confirmations prevent accidental back-outs.',
        },
        {
          title: 'Bundled Companion Resolver (platform_live_server)',
          desc: 'Includes a lightweight Python server resolving live directories and streams across Douyu, Huya, Bilibili, Douyin, and Kuaishou.',
        },
        {
          title: 'Clean Build Config & HTTPS Update Policy',
          desc: 'Reads service URLs and HTTPS update manifests via Gradle properties, local.properties, or env vars—supporting both optional and min-version updates.',
        },
      ],
    },
    howItWorks: {
      title: 'Up and Running in 3 Steps',
      subtitle: 'Clean architecture, bring your own authorized sources.',
      steps: [
        {
          step: '1. Pick Your Edition',
          title: 'Choose Modern or Legacy APK',
          desc: 'Install Modern on Android 9+ TVs & phones, or Legacy on Android 5.1+ classic TV boxes. Both can coexist side by side.',
        },
        {
          step: '2. Scan QR with Your Phone',
          title: 'Import Sources in Seconds',
          desc: 'Open Settings → Sources or AI Discovery and scan the on-screen QR code to configure your endpoints without typing on a remote.',
        },
        {
          step: '3. Sit Back & Watch',
          title: 'Movies, Short Dramas & Live TV',
          desc: 'Navigate with your D-Pad, punch channel numbers directly, and pick up any episode right from the home continue-watching bar.',
        },
      ],
    },
    installSection: {
      title: 'Choose Your Package & Build Locally',
      subtitle: 'Requires JDK 17 and Android SDK Platform 36. Build both flavors with the included Gradle Wrapper.',
      editionsTitle: 'Dual Flavors (Co-installable with Isolated Data)',
      editions: [
        {
          name: 'Modern Edition',
          badge: 'Recommended',
          sdk: 'Android 9.0 / API 28+',
          appName: '当当TV',
          pkg: 'com.dangdang.tv',
          desc: 'Built for modern 4K Android TVs (Hisense, Sony, TCL, Xiaomi), newer streaming boxes, and Android phones.',
        },
        {
          name: 'Legacy Edition',
          badge: 'Classic Boxes',
          sdk: 'Android 5.1 / API 22+',
          appName: '当当TV Legacy',
          pkg: 'com.dangdang.tv.legacy',
          desc: 'Preserves full compatibility for older living-room set-top boxes with independent storage and app ID.',
        },
      ],
      commandsTitle: 'Build from Source in Seconds',
      commands: [
        {
          label: '1. Clone the Repository',
          cmd: 'git clone https://github.com/jiji262/DangDangTV.git && cd DangDangTV',
        },
        {
          label: '2. Assemble Modern & Legacy Debug APKs',
          cmd: './gradlew :app:assembleModernDebug :app:assembleLegacyDebug',
        },
        {
          label: '3. (Optional) Run Live Resolver Unit Tests',
          cmd: 'python3 -m unittest discover -s platform_live_server -p "test_*.py"',
        },
      ],
      copied: 'Copied',
      copy: 'Copy',
      securityNote: 'AI keys encrypted on-device · DangDangTV does not host or provide media content',
    },
    ctaBanner: {
      title: 'Ready to Upgrade Your Living Room?',
      subtitle: 'Ditch bloated ad-filled menus for a fast, remote-first Android TV & mobile player.',
      primaryBtn: 'View Repository on GitHub',
      secondaryBtn: 'Browse Real Screenshots',
    },
    footer: {
      tagline: 'Designed for the TV remote, right at home on your phone.',
      colProduct: 'Explore',
      colTech: 'Built With',
      disclaimer: 'Disclaimer: DangDangTV is a media player client only and does not provide, bundle, or host any media streams.',
      copyright: '© 2026 DangDangTV (JIJI262). Crafted with ♥ & Tuxedo Cat DangDang.',
    },
  },
}
