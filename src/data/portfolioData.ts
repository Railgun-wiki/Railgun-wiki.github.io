export type Language = 'zh' | 'en';

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: LocalizedString;
  category: 'Systems' | 'Embedded' | 'AI & Tools' | 'Hardware' | 'Network';
  statusBadge: LocalizedString;
  isPrivate?: boolean;
  privateNote?: LocalizedString;
  description: LocalizedString;
  highlights?: {
    zh: string[];
    en: string[];
  };
  tech: string[];
  github?: string;
  website?: string;
  colorTheme: 'lime' | 'lilac' | 'mint' | 'cream' | 'coral' | 'navy';
  tier: 'T1' | 'T2';
  year: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    handle: string;
    title: LocalizedString;
    roleSummary: LocalizedString;
    location: LocalizedString;
    availability: LocalizedString;
    github: string;
    email: string;
    sshSigningKey: string;
    bio: {
      zh: string[];
      en: string[];
    };
  };
  ui: {
    nav: {
      now: LocalizedString;
      matrix: LocalizedString;
      radar: LocalizedString;
      about: LocalizedString;
      contact: LocalizedString;
    };
    hero: {
      tag: LocalizedString;
      greeting: LocalizedString;
      focus: LocalizedString;
      scrollHint: LocalizedString;
      btnProjects: LocalizedString;
      btnMatrix: LocalizedString;
    };
    sections: {
      nowTitle: LocalizedString;
      nowSubtitle: LocalizedString;
      matrixTitle: LocalizedString;
      matrixSubtitle: LocalizedString;
      radarTitle: LocalizedString;
      radarSubtitle: LocalizedString;
      aboutTitle: LocalizedString;
      aboutSubtitle: LocalizedString;
      manifestoTitle: LocalizedString;
      manifestoBody: LocalizedString;
      trustTitle: LocalizedString;
      contactTitle: LocalizedString;
      contactSubtitle: LocalizedString;
      contactBtnEmail: LocalizedString;
      contactBtnGithub: LocalizedString;
    };
    common: {
      viewRepo: LocalizedString;
      viewWebsite: LocalizedString;
      privateBadge: LocalizedString;
      privateDesc: LocalizedString;
      filterAll: LocalizedString;
      filterLabel: LocalizedString;
      highlightsHeader: LocalizedString;
    };
  };
  marqueeItems: {
    zh: string[];
    en: string[];
  };
  t1Projects: ProjectItem[];
  t2Projects: ProjectItem[];
  techStack: {
    category: LocalizedString;
    skills: string[];
    color: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Railgun-wiki',
    handle: '@Railgun-wiki',
    title: {
      zh: '底层系统 · 嵌入式 Linux · 跨平台桌面与 AI 研发工程',
      en: 'Systems, Embedded Linux & AI Tooling Engineer'
    },
    roleSummary: {
      zh: '专注于 Linux 主线内核适配、Tauri 2 与 Rust 跨平台原生架构、高确定性嵌入式固件以及企业级 AI 工程落地。',
      en: 'Architecting low-level Linux mainline kernels, cross-platform Tauri 2 and Rust utilities, high-reliability embedded firmware, and enterprise AI systems.'
    },
    location: {
      zh: '广州 / 远程',
      en: 'Guangzhou / Remote'
    },
    availability: {
      zh: '专注核心项目工程演进',
      en: 'Active & Building Open Source'
    },
    github: 'https://github.com/Railgun-wiki',
    email: '64968531+Railgun-wiki@users.noreply.github.com',
    sshSigningKey: 'ED25519 · GitHub SSH Verified',
    bio: {
      zh: [
        '我致力于连接底层裸机硬件、现代操作系统内核与前沿应用运行时。相比于撰写容易过时的静态技术博客，我的重心始终是驱动具体、真实、可验证的生产级工程产出。',
        '本站索引了当前我正在主导和参与贡献的核心工程，涵盖 T1 重点项目与各类系统矩阵。所有展示内容均严格映射到真实代码、内核设备树、硬件 PCB 或算法仿真结果。'
      ],
      en: [
        'I specialize in bridging bare-metal hardware, Linux kernel internals, and modern application runtimes. Rather than writing transient blog articles, my focus is driving concrete, auditable engineering deliverables.',
        'This portal indexes my active engineering endeavors and open-source contributions, spanning T1 flagship projects and system matrices. Every item maps to running code, device trees, hardware PCBs, or verified simulation pipelines.'
      ]
    }
  },
  ui: {
    nav: {
      now: { zh: '核心项目', en: 'T1 Projects' },
      matrix: { zh: '项目矩阵', en: 'Matrix' },
      radar: { zh: '技术雷达', en: 'Tech Radar' },
      about: { zh: '工程宣言', en: 'Manifesto' },
      contact: { zh: '联络协作', en: 'Contact' }
    },
    hero: {
      tag: { zh: '工程实验室 · 正在构建的项目索引', en: 'ENGINEERING LAB · ACTIVE PROJECT HUB' },
      greeting: { zh: '你好，我是', en: 'Hi, I am' },
      focus: { zh: '我构建底层系统、主线内核与 AI 工程工具。', en: 'I build low-level systems, Linux kernels & AI tooling.' },
      scrollHint: { zh: '向下滚动查看正在演进的 T1 重点项目', en: 'Scroll to inspect active T1 projects' },
      btnProjects: { zh: 'T1 核心重点项目', en: 'T1 Core Projects' },
      btnMatrix: { zh: '技术项目矩阵', en: 'Project Matrix' }
    },
    sections: {
      nowTitle: { zh: 'T1 核心活跃项目', en: 'T1 Flagship Projects' },
      nowSubtitle: {
        zh: '当前投入主要精力研发与贡献的五大核心技术工程，涵盖多模态视觉智能、参与贡献的 AI 桌面中枢、主线移动 Linux、高可靠车辆固件与城市骨干公交时空调度大模型。',
        en: 'The five core engineering projects commanding primary focus and contribution: vision-language AI, contributed desktop tools, mainline mobile Linux, bare-metal vehicle firmware, and transit scheduling.'
      },
      matrixTitle: { zh: '技术项目矩阵', en: 'Engineering Project Matrix' },
      matrixSubtitle: {
        zh: '包含系统遥测、开源桌面移植、网络网关、无线调试器与硬件 PCB 等项目。',
        en: 'Covering system telemetry HUDs, open-source desktop ports, transparent network gateways, wireless DAPLink probes, and custom PCBs.'
      },
      radarTitle: { zh: '技术雷达与工具链', en: 'Engineering Toolchain & Radar' },
      radarSubtitle: {
        zh: '跨越内核系统、原生语言、现代图形界面与硬件仪表的完整技术链条。',
        en: 'A comprehensive breakdown of the core systems, languages, graphical runtimes, and hardware tools deployed.'
      },
      aboutTitle: { zh: '工程主义宣言', en: 'Engineering Manifesto' },
      aboutSubtitle: {
        zh: '为什么这是个人项目主页而非博客？',
        en: 'Why a Project-Driven Hub Instead of a Blog?'
      },
      manifestoTitle: { zh: '以项目产出为唯一真值', en: 'Deliverables as the Single Source of Truth' },
      manifestoBody: {
        zh: '本站不承载空泛的教程与随笔，每一个卡片都对应经过实机验证、具备完整架构决策与 Git 提交历史的代码库或硬件工程。非公开项目在此只做系统架构呈现与技术解密，严格不公开源代码与外链。',
        en: 'No superficial tutorials or outdated articles. Every card represents tested code, device trees, or synthesized PCBs. Private and enterprise projects are displayed strictly for architectural explanation without external links or leaks.'
      },
      trustTitle: { zh: '密码学信任标识', en: 'Cryptographic Trust' },
      contactTitle: { zh: '深入交流与工程协作', en: "Let's Build Systems Together." },
      contactSubtitle: {
        zh: '无论你想探讨高通芯片主线 Linux 移植、Tauri 2 与 Rust 跨平台桌面应用、差速嵌入式底盘控制，还是大模型时空调度仿真，欢迎随时联络。',
        en: 'Whether you want to discuss Qualcomm mobile mainline porting, Tauri 2 and Rust architectures, bare-metal kinematics, or LLM transit simulations, feel free to reach out.'
      },
      contactBtnEmail: { zh: '发送邮件交流', en: 'Dispatch Email' },
      contactBtnGithub: { zh: '访问 GitHub 主页', en: 'GitHub Profile' }
    },
    common: {
      viewRepo: { zh: '查看开源仓库', en: 'Source Code' },
      viewWebsite: { zh: '访问官方发布与文档', en: 'Website & Docs' },
      privateBadge: { zh: '🔒 内部非公开项目', en: '🔒 Internal Private Project' },
      privateDesc: { zh: '此项目为专有内部项目，仅作技术架构解密，不公开仓库与链接。', en: 'Private internal project. Technical architecture shown for reference only; no public repository.' },
      filterAll: { zh: '全部项目', en: 'All' },
      filterLabel: { zh: '领域筛选:', en: 'Filter:' },
      highlightsHeader: { zh: '核心技术难点与架构设计', en: 'Technical Architecture & Solved Problems' }
    }
  },
  marqueeItems: {
    zh: [
      '当前重点: TELESENTINEL · 智查安策 AI 隐患识别',
      'CC-SWITCH · 核心开源贡献者 · TAURI 2 与 RUST AI 桌面中枢',
      'REDMI 4A 主线 LINUX 7.1.3 与 WAYLAND PHOSH',
      'TI_CAR_BASE · MSPM0G3507 差速小车无 RTOS C++ 固件',
      'BUS-DISPATCH · 城市骨干公交调度大模型 RUST 仿真核心',
      'DEEPSEEK HARNESS · LINUX 桌面端适配移植',
      '非公开项目仅作技术架构展示 · 代码严格保密'
    ],
    en: [
      'ACTIVE FOCUS: TELESENTINEL · AI HAZARD IDENTIFICATION SYSTEM',
      'CC-SWITCH · ACTIVE CONTRIBUTOR · TAURI 2 AND RUST DESKTOP HUB',
      'REDMI 4A MAINLINE LINUX 7.1.3 AND WAYLAND PHOSH',
      'TI_CAR_BASE · MSPM0G3507 BARE-METAL C++ VEHICLE FIRMWARE',
      'BUS-DISPATCH · URBAN TRANSIT LLM WEAK-SUPERVISION AND RUST SIMULATOR',
      'DEEPSEEK HARNESS · LINUX DESKTOP PORT',
      'ALL PUBLIC CODE COMMITTED WITH VERIFIED SSH SIGNATURES'
    ]
  },
  t1Projects: [
    {
      id: 'telesentinel',
      name: 'TeleSentinel 智查安策',
      subtitle: {
        zh: '企业安全管理场景的 AI 图像隐患识别、合规研判与整改对策系统',
        en: 'Enterprise Vision-Language AI Hazard Identification & Safety Compliance System'
      },
      category: 'AI & Tools',
      statusBadge: {
        zh: '🟢 已落地 MVP · 完整全栈',
        en: '🟢 Functional MVP · Full-Stack'
      },
      isPrivate: true,
      privateNote: {
        zh: '内部企业级项目，仅做技术架构与难点介绍，不提供 GitHub 仓库与外链',
        en: 'Enterprise private project; technical architecture detailed below without external links.'
      },
      description: {
        zh: '面向工矿与企业安全生产场景的 AI 多模态隐患核查系统。支持现场图片与 ZIP、7z 压缩包批量上传，通过 VLM 多模态大模型自动识别场景并提取可见事实，生成归一化 bbox 结构化隐患标注；深度结合 Python BM25 制度库检索与 Safety Copilot，全自动输出带证据图的高清 DOCX、PDF 导出报告与 WebSocket 状态推送。',
        en: 'Enterprise safety management platform covering visual inspection, risk reasoning, and corrective guidance. Features normalized bbox hazard annotation, institutional RAG knowledge retrieval, real-time WebSocket state streaming, and automated DOCX and PDF audit reports with evidence snapshots.'
      },
      highlights: {
        zh: [
          'VLM 场景识别与可见事实提取：统一坐标测量层，风险标签置于框外且顶部不足时自动下翻，无拉伸裁切预览',
          '文件池与 LLM 调用池深度解耦：支持文件夹与多格式压缩包后台安全解包、持久化与 WebSocket 实时推送',
          'RAG 制度库合规追溯：支持制度文本智能分块与 BM25 混合召回，提供整改对策可验证证据链',
          '企业级系统工程：基于源文件 SHA-256 去重与高质量 WebP 动态转码，三级权限体系与加密 Provider API 热配置'
        ],
        en: [
          'Multimodal VLM visual hazard parsing with normalized coordinate bbox overlays and auto-flipping labels',
          'Decoupled worker queues for asynchronous image ingestion and LLM reasoning via real-time WebSockets',
          'Enterprise safety standard RAG retrieval powered by BM25 with verifiable citation traces for Safety Copilot',
          'High-performance asset pipeline: SHA-256 deduplication, WebP transcoding, and multi-tenant HttpOnly security'
        ]
      },
      tech: ['FastAPI / Python', 'VLM Vision-Language', 'RAG / BM25', 'WebSocket', 'React UI', 'ReportLab DOCX / PDF'],
      colorTheme: 'lilac',
      tier: 'T1',
      year: '2026'
    },
    {
      id: 'cc-switch',
      name: 'CC Switch',
      subtitle: {
        zh: '开源贡献 · 跨平台 AI 客户端环境管理器 · Tauri 2 与 Rust',
        en: 'Open Source Contributor · Native AI CLI Desktop Manager · Tauri 2 & Rust'
      },
      category: 'AI & Tools',
      statusBadge: {
        zh: '🟢 核心开源贡献者',
        en: '🟢 Active Contributor'
      },
      isPrivate: false,
      description: {
        zh: '作为开源贡献者参与研发的跨平台桌面管理器项目。基于 Tauri 2 与 Rust 构建，一键接管 Claude Code、Codex、Gemini CLI 等多个大模型开发工具；参与优化跨平台运行支持、API 供应商与 MCP 插件生态管理以及多模型环境协同。',
        en: 'Contributing as an open-source developer to the high-performance Tauri 2 and Rust desktop manager. Helps engineers seamlessly orchestrate Claude Code, Codex, and Gemini CLI with instantaneous provider switching, MCP server catalogs, and native cross-platform runtime support.'
      },
      highlights: {
        zh: [
          '作为核心贡献者参与 Tauri 2 与 Rust 架构开发及跨平台优化，内存占用低且启动迅速',
          '深度参与多 CLI 环境适配：Claude Code、Codex、Gemini CLI 等工具链协同管理',
          '贡献 MCP 插件生态管理与配置热重载逻辑',
          '持续协助全平台构建发布与功能迭代，支持 Windows、macOS 与 Linux'
        ],
        en: [
          'Contributing to the core Tauri 2 and Rust architecture and desktop runtime optimizations',
          'Integrating and testing multi-CLI toolchains across Claude Code, Codex, and Gemini CLI',
          'Developing and refining Model Context Protocol MCP server lifecycle and config syncing',
          'Assisting with cross-platform release validation across Windows, macOS, and Linux'
        ]
      },
      tech: ['Tauri 2', 'Rust', 'TypeScript', 'React', 'Tailwind CSS', 'MCP Protocol'],
      github: 'https://github.com/Railgun-wiki/cc-switch',
      website: 'https://ccswitch.io',
      colorTheme: 'lime',
      tier: 'T1',
      year: '2026'
    },
    {
      id: 'linux-redmi4a',
      name: 'Redmi 4A Linux Mainline',
      subtitle: {
        zh: '高通骁龙 425 MSM8917 rolex 运行通用主线 Linux 7.1 与 Ubuntu 24.04 LTS',
        en: 'Qualcomm MSM8917 Mainline Linux Kernel 7.1.3 & Ubuntu 24.04 LTS Noble Port'
      },
      category: 'Embedded',
      statusBadge: {
        zh: '🔨 主线适配演进 · 实机验收通过',
        en: '🔨 Active Mainline Port · On-device Verified'
      },
      isPrivate: false,
      description: {
        zh: '为小米红米 4A 代号 rolex、高通 MSM8917 芯片移植上游通用主线 Linux 7.1 内核并工程化构建 Ubuntu 24.04 LTS 移动桌面。原生运行 Wayland Phosh 并由 Mesa Freedreno 实现硬件渲染；采用双分区 Btrfs 无损存储池融合技术合并出 12.87 GiB 单盘，合入 WCN3610 HT20 带宽补丁与 lk2nd 链式引导。',
        en: 'Porting upstream modern Linux kernel 7.1.3 to Xiaomi Redmi 4A. Delivers native Wayland Phosh desktop accelerated by Mesa Freedreno GLES2, dual-partition Btrfs dynamic pool merging with 12.87 GiB usable storage, WCN3610 Wi-Fi HT20 bandwidth patches, and lk2nd bootloader chainloading.'
      },
      highlights: {
        zh: [
          '主线内核 7.1.3：内置高通 WCN3610 Wi-Fi HT20 吞吐补丁与 MSM 平台安全加固',
          'Btrfs 动态双成员卷：将 3.0GB system 与 9.87GB userdata 无损融合成 12.87 GiB 统一存储空间',
          'lk2nd 23.1 链式引导封装在 64 MiB 原厂 boot 分区内，无需破坏原厂 49 分区 GPT 分区表',
          'Wayland Phosh 0.38 与 Phoc 合成器硬件加速，模块化拆分为 8 个独立的 Debian 原子包 rolex-support'
        ],
        en: [
          'Upstream Linux 7.1.3 mainline kernel with custom WCN3610 HT20 throughput fixes and SMGR hardening',
          'Lossless Btrfs dual-member volume merging internal system & userdata partitions into 12.87 GiB storage',
          'lk2nd 23.1 chainloader packaged into factory boot partition without repartitioning risk',
          'Modular Debian packaging pipeline rolex-support with automated system validation and Wayland Phosh'
        ]
      },
      tech: ['Linux Kernel 7.1', 'Device Tree DTS', 'ARM64', 'Wayland Phosh', 'Btrfs', 'Debian Packaging'],
      github: 'https://github.com/Railgun-wiki/linux-redmi4a',
      colorTheme: 'mint',
      tier: 'T1',
      year: '2026'
    },
    {
      id: 'ti-car-base',
      name: 'TI_Car_Base 智能小车固件',
      subtitle: {
        zh: '基于德州仪器 MSPM0G3507 差速小车的高可靠无 RTOS C++ 裸机嵌入式固件',
        en: 'Bare-Metal C++ Firmware for TI MSPM0G3507 Differential Drive Autonomous Vehicle'
      },
      category: 'Embedded',
      statusBadge: {
        zh: '🟢 实机标定验收 · 高可靠裸机',
        en: '🟢 Hardware Verified · Bare-Metal C++'
      },
      isPrivate: true,
      privateNote: {
        zh: '内部开发固件，仅作系统架构与确定性算法解密，不公开代码仓库',
        en: 'Internal firmware project; technical architecture and kinematics described below.'
      },
      description: {
        zh: '专为德州仪器 MSPM0G3507 Cortex-M0+ 打造的高确定性无 RTOS 差速运动固件。架构采用分层静态组合解耦：Application、Middlewares、Drivers BSP、SysConfig，零动态堆内存分配；默认集成 MPU6050 DMP 硬件解算，支持编译期无开销切换互补滤波与 Kalman 软件滤波，外设引脚与时钟以 SysConfig 为唯一真值。',
        en: 'High-determinism bare-metal C++ firmware designed for the TI MSPM0G3507 Cortex-M0+. Implements a zero-overhead static composition pipeline across Application, Middlewares, Drivers BSP, and SysConfig. Features hardware MPU6050 DMP fusion, compile-time configurable Kalman and complementary attitude filtering, and strict peripheral single-source SysConfig configuration.'
      },
      highlights: {
        zh: [
          '现代 C++ 静态组合架构：完全杜绝 malloc 与 new 动态内存分配，消除堆碎片，保障极端工况零死锁',
          '高可靠姿态解算算法：支持 MPU6050 DMP 硬件输出与编译期宏切换扩展卡尔曼滤波 EKF',
          '双正交编码器高频定时闭环：毫秒级增量式 PID 速度与航向解算，保证精准直线与转弯轨迹控制',
          '完备的工程化文档体系：包含完整的标定方案、上板验收手册与 API 实现参考规范'
        ],
        en: [
          'Zero-allocation modern C++ static architecture achieving maximum determinism and safety on Cortex-M0+',
          'Attitude estimation engine with MPU6050 DMP and compile-time selectable Kalman filtering',
          'Closed-loop differential kinematics integrating dual quadrature encoders and incremental PID',
          'Comprehensive engineering documentation: calibration protocols, maintenance guides, and API specs'
        ]
      },
      tech: ['C++17/20', 'MSPM0G3507 Cortex-M0+', 'TI SysConfig', 'MPU6050 DMP', 'Kalman Filter', 'Bare-Metal Embedded'],
      colorTheme: 'coral',
      tier: 'T1',
      year: '2025'
    },
    {
      id: 'bus-dispatch',
      name: 'Bus-Dispatch 公交调度大模型',
      subtitle: {
        zh: '基于城市骨干公交线路真实时空数据的智能调度大模型训练、弱标注与仿真系统',
        en: 'Transit Foundation Model Pipeline & Rust Real-Time Simulation Engine on Urban Fleet Trajectories'
      },
      category: 'Systems',
      statusBadge: {
        zh: '🧪 仿真评估验证 · 数据驱动算法',
        en: '🧪 Research Simulation · Data-Driven'
      },
      isPrivate: true,
      privateNote: {
        zh: '本地研究与算法工程，仅做系统架构与仿真核心介绍，不公开代码与数据',
        en: 'Local research & simulation engineering; architecture described below without external links.'
      },
      description: {
        zh: '基于城市高密度骨干公交线路海量真实运营数据，涵盖发车计划、到离站、刷卡客流与高频 GPS 轨迹，针对外界突发拥堵、大客流潮汐、长停站偏差构建可审计弱标注决策流水线。底层研发了高性能 Rust 调度运行与评分核心，提供常驻 JSONL IPC 管道，支持多智能体指令下发、时间步推进、场景分叉与批量确定性评测。',
        en: 'Large-scale transit scheduling pipeline trained on real-world spatiotemporal fleet data from high-frequency urban bus corridors including timetables, stop arrivals, passenger tap flows, and GPS trajectories. Features a high-performance Rust simulation and scoring engine with JSONL IPC for interactive agent decision evaluation, scenario rollouts, and reproducible benchmarking.'
      },
      highlights: {
        zh: [
          '高性能 Rust 调度与评分仿真核心：常驻 JSONL IPC 协议，支持调度 Agent 指令下发、时间推进、分支模拟与批量评估',
          '严密可信的离线弱标注体系：决策时仅使用历史窗口数据，在受限未来结果窗口还原最可能调度决策，严格防止未来信息泄露',
          '多模态时空特征工程：融合计划偏离度、站点瞬时客流堆叠与道路拥堵指数等多维指标',
          '确定性评估基线：在调用前建立确定性规则分析与证据链审计，支持万级真实场景自动化回归'
        ],
        en: [
          'High-speed Rust simulation core with persistent JSONL IPC supporting agent instruction branching and scoring',
          'Rigorous offline weak-supervision pipeline reconstructing historical optimal decisions without future leakage',
          'Spatiotemporal feature extraction across multi-source GPS feeds, stop logs, and passenger volume surges',
          'Deterministic rule baseline pipeline providing auditable decision verification before LLM calls'
        ]
      },
      tech: ['Rust', 'Python', 'uv / AsyncIO', 'JSONL IPC', 'Spatiotemporal Analytics', 'Transit Simulation'],
      colorTheme: 'cream',
      tier: 'T1',
      year: '2025'
    }
  ],
  t2Projects: [
    {
      id: 'performance-hud',
      name: 'Performance HUD',
      subtitle: {
        zh: 'Linux 电脑实时硬件性能流式推送到 Redmi 4A 副屏',
        en: 'Dual-Screen Hardware Telemetry & Real-Time Metrics Overlay'
      },
      category: 'Systems',
      statusBadge: {
        zh: '🟢 实机验证通过',
        en: '🟢 Hardware Verified'
      },
      isPrivate: false,
      description: {
        zh: '电脑采集端基于 Rust Tokio 与 Axum 读取系统指标，动态加载 NVML 与 amdgpu 驱动；手机端通过 Tauri 2 + React + WebKitGTK 原生渲染 60FPS 实时负载趋势，通过 Wi-Fi 直连副屏显示。',
        en: 'Real-time telemetry pipeline streaming workstation stats such as CPU, GPU clocks, memory, disk, and network to a dedicated secondary phone display. High-frequency Rust Axum agent with dynamic NVML and amdgpu driver loading, rendered via Tauri 2 native Wayland.'
      },
      tech: ['Rust', 'Axum', 'Tauri 2', 'WebKitGTK', 'NVML', 'React'],
      github: 'https://github.com/Railgun-wiki/performance-hud',
      colorTheme: 'lilac',
      tier: 'T2',
      year: '2026'
    },
    {
      id: 'dsh-linux-port',
      name: 'DeepSeek Harness · Linux Desktop',
      subtitle: {
        zh: '将 DeepSeek Harness 桌面客户端移植适配至 Linux 平台与系统托盘',
        en: 'Porting DeepSeek Harness Desktop Application to Linux Runtimes'
      },
      category: 'Systems',
      statusBadge: {
        zh: '🟢 已贡献合并',
        en: '🟢 Contributed'
      },
      isPrivate: false,
      description: {
        zh: '针对开源智能体框架 DeepSeek Harness，排查并修复桌面端在 Linux 环境下的开发支持、窗口生命周期与原生系统托盘守护机制，打通跨平台闭环。',
        en: 'Ported and resolved Linux development support, window lifecycle, and system tray daemon integration for the DeepSeek Harness desktop client.'
      },
      tech: ['TypeScript', 'Node.js', 'Linux Desktop', 'Cordis Plugin', 'Electron / Tauri'],
      github: 'https://github.com/deepseek-ai/deepseek-harness',
      colorTheme: 'lime',
      tier: 'T2',
      year: '2025'
    },
    {
      id: 'proxy-gateway',
      name: 'Proxy Gateway',
      subtitle: {
        zh: '高吞吐透明子网路由与网关转发策略代理',
        en: 'High-Throughput Transparent Network Gateway'
      },
      category: 'Network',
      statusBadge: {
        zh: '🟢 生产稳定运行',
        en: '🟢 In Production'
      },
      isPrivate: false,
      description: {
        zh: '为本地局域网与开发测试集群构建的统一透明网关，支持 nftables 与 iptables 规则链动态注入、流量策略分流与安全前置认证。',
        en: 'Unified transparent gateway routing and proxy orchestration layer for local development subnets, providing controlled forward authentication and policy routing.'
      },
      tech: ['Linux Networking', 'nftables', 'Docker', 'WireGuard', 'Go / Rust'],
      github: 'https://github.com/Railgun-wiki',
      colorTheme: 'cream',
      tier: 'T2',
      year: '2026'
    },
    {
      id: 'wlan-daplink',
      name: 'WLAN Daplink',
      subtitle: {
        zh: '无线 CMSIS-DAP 调试器固件与硬件探针',
        en: 'Wireless CMSIS-DAP Debugger & Telemetry Interface'
      },
      category: 'Hardware',
      statusBadge: {
        zh: '📦 硬件已打板验证',
        en: '📦 Hardware Built'
      },
      isPrivate: false,
      description: {
        zh: '基于 Wi-Fi 的无线 ARM Cortex-M 调试探针，支持无线 SWD 烧录、断点调试以及双向高速串口数据透传，免除调试排线束缚。',
        en: 'Wireless ARM Cortex-M programming and debugging probe over Wi-Fi. Enables cable-free SWD flashing, debugging with OpenOCD or PyOCD, and high-speed bidirectional UART pass-through.'
      },
      tech: ['CMSIS-DAP', 'C/C++', 'ESP32 / Cortex-M', 'KiCad PCB', 'SWD Protocol'],
      github: 'https://github.com/Railgun-wiki/WLAN_Daplink',
      colorTheme: 'coral',
      tier: 'T2',
      year: '2025'
    },
    {
      id: 'minidp-usb-hub',
      name: 'MiniDP USB Hub',
      subtitle: {
        zh: '高速差分视频与 USB 扩展自制工程 PCB',
        en: 'Custom Multi-Function Engineering Hub PCB'
      },
      category: 'Hardware',
      statusBadge: {
        zh: '📦 硬件已焊接测试',
        en: '📦 Fabricated'
      },
      isPrivate: false,
      description: {
        zh: '自主绘制与打样的多功能硬件板卡，集成 Mini DisplayPort 差分信号阻抗匹配布线、USB 高速集线器控制器与完善的 ESD 保护电路。',
        en: 'Custom hardware board combining Mini DisplayPort differential video routing with high-speed USB hub controllers, integrated power management, and ESD protection.'
      },
      tech: ['KiCad 8', 'Differential Impedance', 'Hardware PCB', 'Power Delivery'],
      github: 'https://github.com/Railgun-wiki',
      colorTheme: 'mint',
      tier: 'T2',
      year: '2025'
    },
    {
      id: 'openwrt-minieap',
      name: 'OpenWrt MiniEAP',
      subtitle: {
        zh: '针对 ImmortalWrt 与 OpenWrt 适配的 802.1X 校园网认证包',
        en: 'Adapted Campus 802.1X Client for ImmortalWrt & OpenWrt'
      },
      category: 'Network',
      statusBadge: {
        zh: '📦 稳定维护中',
        en: '📦 Maintained'
      },
      isPrivate: false,
      description: {
        zh: '在 OpenWrt 与 ImmortalWrt 路由平台上编译与裁剪的 MiniEAP 802.1X 客户端 IPK 软件包，适配校园锐捷与 EAP 认证网络，断线自动重连。',
        en: 'Custom compiled and optimized IPK package for 802.1X network authentication, adapted to run efficiently on embedded OpenWrt and ImmortalWrt routers.'
      },
      tech: ['OpenWrt SDK', 'C', 'Makefile', 'Linux Networking', '802.1X'],
      github: 'https://github.com/Railgun-wiki/openwrt-minieap',
      colorTheme: 'cream',
      tier: 'T2',
      year: '2025'
    }
  ],
  techStack: [
    {
      category: {
        zh: '底层内核与操作系统',
        en: 'Low-Level Kernel & Operating Systems'
      },
      skills: ['Linux Kernel 6 and 7', 'Device Tree DTS', 'ARM64 MSM89xx', 'Wayland wlroots Phosh', 'Btrfs File Systems', 'lk2nd Bootloader', 'Debian Packaging'],
      color: 'mint'
    },
    {
      category: {
        zh: '系统编程与核心语言',
        en: 'Systems Programming & Languages'
      },
      skills: ['C / C++ C++20', 'Rust Tokio Axum IPC', 'TypeScript / JavaScript', 'Python 3 / uv', 'POSIX Shell & Bash', 'NVML / sysfs Polling'],
      color: 'lime'
    },
    {
      category: {
        zh: '现代桌面与 AI 工具链',
        en: 'Desktop Frameworks & AI Runtimes'
      },
      skills: ['Tauri 2 Desktop Framework', 'React 19', 'Vite', 'Tailwind CSS', 'MCP Protocol', 'WebKitGTK Native GUI', 'VLM / RAG Architecture'],
      color: 'lilac'
    },
    {
      category: {
        zh: '硬件开发与仪表调试',
        en: 'Hardware Engineering & Instrumentation'
      },
      skills: ['MSPM0G3507 TI Cortex-M0+', 'CMSIS-DAP Debugging', 'KiCad PCB Layout', 'Rigol 示波器与逻辑分析仪', 'SWD Flashing Protocols', 'OpenWrt Firmware'],
      color: 'coral'
    }
  ]
};
