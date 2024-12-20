/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "rehash_",
  author: "Alper Reha Yazgan",
  description: "alperreha - personal blog page",
  ogImage: {
    url: "/static/avatar.png",
    twitterCard: "summary",
  },
  avatar: "./static/avatar.png",
  avatarClass: "rounded-full",
  lang: "en",
  showHeaderOnPostPage: true,
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(date),
  links: [
    { title: "Email", url: "mailto:alper@yazgan.xyz" },
    { title: "GitHub", url: "https://github.com/alperrehayazgan" },
    { title: "Twitter", url: "https://twitter.com/alperreha" },
    { title: "Linkedin", url: "https://linkedin.com/in/alperreha" },
    { title: "Youtube", url: "https://www.youtube.com/@rehash_dev" },
  ],
  middlewares: [
    ga("G-VDMQW1ZLFJ"),
  ],
  favicon: "./static/favicon.ico",
  // header: <header>Your custom header</header>,
  // section: (post: Post) => <section>Your custom section with access to Post props.</section>,
  footer: (
    <footer class="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16">
      <p class="flex items-center gap-2.5 text-gray-400/800 dark:text-gray-500/800 text-sm">
        <span>
          {/* Powered by{" "} */}
          <a
            class="inline-flex items-center gap-1 underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            href="https://x.com/alperreha"
          >
            alperreha © {new Date().getFullYear()}
          </a>
        </span>
        <a
          href="/feed"
          class="inline-flex items-center gap-1 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          title="Atom Feed"
        >
          <svg
            class="inline-block w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
            <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
          </svg>{" "}
          RSS
        </a>
      </p>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VDMQW1ZLFJ"
      ></script>
      <script>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VDMQW1ZLFJ');
      `}
      </script>
    </footer>
  ),
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
