import { InstantSearch } from "react-instantsearch-hooks";
import algoliasearch from "algoliasearch/lite";

import { App } from "./App";

function Root() {
  const searchClient = configureAlgoliaSearch();
  const indexName = process.env.ALGOLIA_INDEX_NAME;
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indexName}
      routing={true}
    >
      <App />
    </InstantSearch>
  );
}

function configureAlgoliaSearch() {
  const appId = process.env.ALGOLIA_APP_ID;
  const apiKey = process.env.ALGOLIA_API_KEY;
  return algoliasearch(appId, apiKey);
}

export { Root };
