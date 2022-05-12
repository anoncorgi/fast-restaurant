import { InstantSearch } from "react-instantsearch-hooks";
import algoliasearch from "algoliasearch";

import { App } from "./App";

function Root() {
  const searchClient = configureAlgoliaSearch();
  const index = searchClient.initIndex(process.env.ALGOLIA_INDEX_NAME);

  function handleDelete(name, id) {
    const result = confirm(`Are you sure you want to delete "${name}"?`);
    console.log({ name, id })
    if (result) {
      index.deleteObject(id)
        .then((res) => {
          confirm('Your delete request has been successfully processed. It may take a few minutes to complete.');
        });
    }
  }

  const indexName = process.env.ALGOLIA_INDEX_NAME;
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indexName}
      routing={true}
    >
      <App onDelete={handleDelete} />
    </InstantSearch>
  );
}

function configureAlgoliaSearch() {
  const appId = process.env.ALGOLIA_APP_ID;
  const apiKey = process.env.ALGOLIA_API_KEY;
  return algoliasearch(appId, apiKey);
}

export { Root };
