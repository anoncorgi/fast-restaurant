import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";

import { SearchBox } from "./components/SearchBox";
import { HitContainer } from "./components/HitContainer";

const {
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
  ALGOLIA_INDEX_NAME,
} = process.env;

const searchClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
);

function App() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={ALGOLIA_INDEX_NAME}
    >
      <SearchBox />
      <HitContainer />
    </InstantSearch>
  );
}

export { App };
