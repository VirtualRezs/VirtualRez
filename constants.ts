export const METADATA = {
  title: "Portfolio | Krushna Vyas",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://krushna.me",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "krushnavyas066@gmail.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/krushna06",
  instagram: "https://www.instagram.com/krushna_who",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "MoG Network",
    image: "/projects/mognetwork.jpg",
    blurImage: "/projects/blur/mognetworkblur.jpg",
    description: "MoG Network Minecraft server Website/Forums",
    gradient: ["#FD9346", "#FF6200"],
    url: "https://www.mognetwork.in",
    tech: ["javascript", "css"],
  },
  {
    name: "Twinklemc",
    image: "/projects/twinklemc.jpg",
    blurImage: "/projects/blur/twinklemcblur.jpg",
    description: "Twinklemc Minecraft server Website/Forums",
    gradient: ["#FFA12C", "#FE612C"],
    url: "https://twinklemc.xyz/",
    tech: ["javascript", "css"],
  },
  {
    name: "Valocraft",
    image: "/projects/valocraft.jpg",
    blurImage: "/projects/blur/valocraftblur.jpg",
    description: "The official webiste of Valocraft.",
    gradient: ["#EEAA0D", "#804FB3"],
    url: "https://valocraft.vercel.app/",
    tech: ["tailwind", "angular", "gsap", "figma"],
  },
  {
    name: "Zinger Hosting Service",
    image: "/projects/zinger.jpg",
    blurImage: "/projects/blur/zingerblur.jpg",
    description: "Go online with zinger, make your perfect website today. Check our plans and their features.",
    gradient: ["#804FB3", "#552586"],
    url: "https://zingerhost.vercel.app/",
    tech: ["angular", "typescript"],
  },
     {
    name: "Anyolite Network",
    image: "/projects/anyolitenetwork.jpg",
    blurImage: "/projects/blur/anyoliteblur.jpg",
    description: "Anyolite Network Minecraft server Website/Forums",
    gradient: ["#058fab", "#049bdb"],
    url: "http://anyolite.net/",
    tech: ["javascript", "css"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "next",
    "angular",
    "tailwind",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "photoshop"],
  other: ["git", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Finished grade 10!",
    size: ItemSize.SMALL,
    subtitle: "Working on my skills 😎",
    image: "",
    slideImage: "/timeline/",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Working on something...",
    size: ItemSize.SMALL,
    subtitle:
      "Hmmm what could it be? 🎯",
    image: "",
    slideImage: "/timeline/",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "GTM-MB878QG";
