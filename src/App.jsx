import * as styles from "./App.module.css";

import { SearchBox } from "./components/SearchBox";
import { FacetFilterContainer } from "./components/FacetFilterContainer";
import { HitContainer } from "./components/HitContainer";

function App({ onDelete }) {
  return (
    <div className={styles.container}>
      <header>
        <SearchBox />
      </header>
      <div className={styles.sidebar}>
        <FacetFilterContainer />
      </div>
      <main className={styles.results}>
        <HitContainer onDelete={onDelete} />
      </main>
    </div>
  );
}

export { App };
