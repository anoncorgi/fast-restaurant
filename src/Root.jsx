import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";

import { App } from "./App";

const {
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
  ALGOLIA_INDEX_NAME,
} = process.env;

const searchClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
);

function Root() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={ALGOLIA_INDEX_NAME}
    >
      <App />
    </InstantSearch>
  );
}

export { Root };
