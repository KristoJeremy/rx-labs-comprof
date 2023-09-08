import { useEffect } from "react";
import "@/styles/global.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {}, []);

  return <Component {...pageProps} />;
}
