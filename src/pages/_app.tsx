import { AppProps } from "next/app";

import { BlogThemeProvider } from "@/contexts/BlogThemeContext";
import { GlobalStyles } from "../styles/global-styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlogThemeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </BlogThemeProvider>
  );
}

export default MyApp;
