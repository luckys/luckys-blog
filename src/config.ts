import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://luckys.pages.dev/", // replace this with your deployed domain
  author: "Luis Ramirez Calle",
  profile: "https://luckys.pages.dev/",
  desc: "Personal blog about software development.",
  title: "Lucky's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-ES"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/luckys",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/luis-ramirez-calle",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:luis.ramirezcalle@outlook.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
