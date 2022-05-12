import { SearchBox } from "./components/SearchBox";
import { HitContainer } from "./components/HitContainer";

function App() {
  return (
    <div className="container">
      <header>
        <SearchBox />
      </header>
      <div className="sidebar">
        {/* TODO */}
      </div>
      <main className="results">
        <HitContainer />
      </main>
    </div>
  );
}

export { App };
