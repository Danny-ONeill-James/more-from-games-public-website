import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta
          name="description"
          content="More from Games is your source for the latest tabletop, board and roleplay
		  games. Get reviews, guides, and more for your favorite games. Learn how to get more
		  from your gaming experience with our expert advice and recommendations!"
        />
        <meta
          name="keywords"
          content="tabletop games, board games, roleplay ga,es, reviews, news, guides, painting guides, releases, gaming, expert advice, recommendations"
        />
      </Head>
      <body className="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
