const nav = require("./nav.json");
const sidebar = require("./sidebar.json");

module.exports = {
  base: "/",
  themeConfig: {
    search: false,
    nav,
    sidebar,
  },
  title: "Play Learn Grow Together",
  ga: "GOOGLE_ANALYTICS_ID",
  markdown: {
    config: (md) => {
      const options = {};
      const wikilinks = require("markdown-it-wikilinks")(options);

      md.use(require("markdown-it-plantuml"));
      md.use(require("markdown-it-imsize"));
      md.use(require("markdown-it-hashtag"));
      md.use(wikilinks);

      md.renderer.rules.hashtag_open = function(tokens, idx) {
        var tagName = tokens[idx].content.toLowerCase();

        return '<a href="/tags.html#' + tagName + '" class="tag">';
      };

      md.renderer.rules.hashtag_text = function(tokens, idx) {
        var tagName = tokens[idx].content.toLowerCase();

        return "#" + tagName;
      };

      md.renderer.rules.hashtag_close = function() {
        return "</a>";
      };
    },
  },
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "icon", href: "/assets/favicons/logo-144.png" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/favicons/apple-touch-icon.png",
      },
    ],
  ],
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
};
