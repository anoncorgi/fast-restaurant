import styles from "./App.module.css";

import { SearchBox } from "./components/SearchBox";
import { HitContainer } from "./components/HitContainer";

function App() {
  return (
    <div className={styles.container}>
      <header>
        <SearchBox />
      </header>
      <div className={styles.sidebar}>
        <span>hi</span>
      </div>
      <main className={styles.results}>
        <HitContainer />
      </main>
    </div>
  );
}

export { App };
