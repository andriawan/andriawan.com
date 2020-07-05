path = require("path");
module.exports = {
  siteMetadata: {
    title: `andriawan.com`,
    description: `Andriawan's personal and professional website`,
    author: `@andriawan`,
    author_name: `Muhammad Irwan Andriawan`,
    url: `https://andriawan.com`
  },
  plugins: [
    "gatsby-plugin-svgr",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `blog`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `blog`, `images`)
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
            },
          },
        ],
      }
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
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        purgeOnly: [`src/css/style.css`, `src`],
        whitelist: [`mode-dark`],
        content: [
          path.join(process.cwd(), `./public/*.html`),
          path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}"),
          path.join(process.cwd(), "gatsby-ssr.js"),
          path.join(
            process.cwd(),
            "./node_modules/tailwindcss-dark-mode/prefers-dark.js"
          ),
          path.join(
            process.cwd(),
            `./node_modules/tailwindcss-dark-mode/index.js`
          )
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
