export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "allen记录生活",
  /** your name */
  author: "allen",
  /** website description */
  desc: "用文字记录生活",
  /** your deployed domain */
  website: "https://www.allenyiuha.eu.org/",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "auto",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "",
    },
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "whatsapp",
      href: "https://chat.whatsapp.com/E8cBJWZ6j7KGEJIB8jEFGQ",
    },
    {
      name: "",
      href: "",
    }
  ],
  /** your header info */
  header: {
    twitter: "",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "胡适", path: "hu-shi" },
  ],
  /** your comment provider */
  comments: {
    disqus: {
      shortname: "typography-astro",
    },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  }
}

