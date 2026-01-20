import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  siteMetadata: {
    title: `andriawan.com`,
    description: `Andriawan's personal and professional website`,
    author: `@andriawan`,
    author_name: `Muhammad Irwan Andriawan`,
    url: `https://andriawan.com`,
  },
  plugins: [
    "gatsby-plugin-svgr-svgo",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `blog`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown_img`,
        path: path.join(__dirname, `blog`, `images`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 400,
              },
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `andriawan personal website`,
        short_name: `andriawan_web`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [tailwindcss, autoprefixer, cssnano],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        purgeOnly: [`src/css/style.css`, `src`],
        content: [
          path.join(process.cwd(), `./public/*.html`),
          path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}"),
          path.join(process.cwd(), "gatsby-ssr.js"),
          path.join(
            process.cwd(),
            "./node_modules/tailwindcss-dark-mode/prefers-dark.js",
          ),
          path.join(
            process.cwd(),
            `./node_modules/tailwindcss-dark-mode/index.js`,
          ),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
