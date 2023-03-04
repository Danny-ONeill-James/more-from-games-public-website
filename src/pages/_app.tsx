import "@/styles/globals.css";
import "/public/assets/css/icons.css";
import "/public/assets/css/tailwind.css";
import "/public/assets/libs/@iconscout/unicons/css/line.css";
import type { AppProps } from "next/app";

import FooterComponent from "@/components/footer/footer";
import NavigationComponent from "@/components/navigation/navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}
