import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `GME Games`,
    siteUrl: `https://gmegames.com`,
    description: `Your base game stop for all your favorite games.`,
    image: `src/images/screenshot.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GME Games`,
        short_name: `GME Games`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/favicon/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-X5T6DNPE7C", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // // This object is used for configuration specific to this plugin
        // pluginConfig: {
        //   // Puts tracking script in the head instead of the body
        //   head: false,
        //   // Setting this parameter is also optional
        //   respectDNT: true,
        //   // Avoids sending pageview hits from custom paths
        //   exclude: ["/preview/**", "/do-not-track/me/too/"],
        //   // Defaults to https://www.googletagmanager.com
        //   origin: "YOUR_SELF_HOSTED_ORIGIN",
        //   // Delays processing pageview events on route update (in milliseconds)
        //   delayOnRouteUpdate: 0,
        // },
      },
    },
    {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "tor_rIFvVF3GhFpOXKMb55q_G01En5PonopYhW70lFU",
      "spaceId": "ix0nh07hhszc"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
