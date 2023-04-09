import TopBar from "@/components/top_bar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
    </>
  );
}
