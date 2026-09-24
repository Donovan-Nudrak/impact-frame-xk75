import { useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { useLocale } from "./hooks/useLocale";
import { Architecture } from "./sections/Architecture/Architecture";
import { FinalStatement } from "./sections/FinalStatement/FinalStatement";
import { Hero } from "./sections/Hero/Hero";
import { Manifesto } from "./sections/Manifesto/Manifesto";
import { Materials } from "./sections/Materials/Materials";
import { Performance } from "./sections/Performance/Performance";
import { Reserve } from "./sections/Reserve/Reserve";
import { Specifications } from "./sections/Specifications/Specifications";
import { SwitchSystem } from "./sections/SwitchSystem/SwitchSystem";
import styles from "./App.module.css";

export function App() {
  const { copy } = useLocale();

  useEffect(() => {
    document.title = copy.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", copy.meta.description);
  }, [copy]);

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Architecture />
        <SwitchSystem />
        <Materials />
        <Performance />
        <Specifications />
        <Reserve />
        <FinalStatement />
      </main>
      <Footer />
    </div>
  );
}
