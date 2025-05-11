import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌻danicallero.es",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "es-ES",
    baseUrl: "wiki.danicallero.es",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: {
          //name: "DM Serif Display",
          name: "Nunito ExtraBold",
          //weights: [400],
          weights: [800]
        },
        body: "Roboto Slab",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#e8f7f3",
          lightgray: "#d1e8e2",
          gray: "#a1b7b2",
          darkgray: "#2c332b",
          dark: "#587066",
          secondary: "#5b8370",
          tertiary: "#a0b9b6",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#f1c6a6",
        },
        darkMode: {
          light: "#0c100d",
          lightgray: "#3d514d",
          gray: "#5c756f",
          darkgray: "#91a695",
          dark: "#c5d0cb",
          secondary: "#8fae9b",
          tertiary: "#a0b9b6",
          highlight: "rgba(65,175,209,0.15)",
          textHighlight: "#713b14",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", lazyLoad: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      //Plugin.CustomOgImages(),
    ],
  },
}

export default config
