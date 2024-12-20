/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "rehash",
  author: "Alper Reha Yazgan",
  description: "alperreha - personal blog page",
  avatar: "./static/avatar.png",
  avatarClass: "rounded-full",
  lang: "en",
  showHeaderOnPostPage: true,
  dateFormat: (date) =>
    new Intl.DateTimeFormat("tr-TR", { dateStyle: "long" }).format(date),
  links: [
    { title: "Email", url: "mailto:alper@yazgan.xyz" },
    { title: "GitHub", url: "https://github.com/alperrehayazgan" },
    { title: "Twitter", url: "https://twitter.com/alperreha" },
  ],

  middlewares: [
    ga("G-VDMQW1ZLFJ"),
    redirects({
      // "iocp-links.html": "iocp_links",
      // "rant.html": "rant",
    }),
  ],
  favicon: "./static/favicon.ico",

  // header: <header>Your custom header</header>,
  // section: (post: Post) => <section>Your custom section with access to Post props.</section>,
  // footer: <footer>Your custom footer</footer>,
  // middlewares: [

  // If you want to set up Google Analytics, paste your GA key here.
  // ga("UA-XXXXXXXX-X"),

  // If you want to psrovide some redirections, you can specify them here,
  // pathname specified in a key will redirect to pathname in the value.
  // redirects({
  //  "/hello_world.html": "/hello_world",
  // }),

  // ]
});
