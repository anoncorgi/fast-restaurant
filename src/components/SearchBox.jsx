import * as React from "react";
import * as Algolia from "react-instantsearch-hooks";

import * as styles from "./SearchBox.module.css";

import { SearchInput } from "./SearchInput";

// Much of this code is taken from the hooks demo app,
// https://codesandbox.io/s/github/algolia/react-instantsearch/tree/v6.22.0/examples/hooks?file=/components/SearchBox.tsx
function SearchBox(props) {
  const { query, refine, isSearchStalled } = Algolia.useSearchBox(props);
  const [value, setValue] = React.useState(query);
  const inputRef = React.useRef();

  function onReset() {
    setValue("");
  }

  function onChange(event) {
    setValue(event.currentTarget.value);
  }

  // Track when the value coming from the React state changes to synchronize
  // it with InstantSearch.
  React.useEffect(() => {
    if (query !== value) {
      refine(value);
    }
  }, [value, refine]);

  // Track when the InstantSearch query changes to synchronize it with
  // the React state.
  React.useEffect(() => {
    const isInputFocused = document.activeElement === inputRef.current;
    const isInputStale = query !== value;
    if (!isInputFocused && isInputStale) {
      setValue(query);
    }
  }, [query]);

  return (
    <div className={styles.searchBox}>
      <SearchInput
        className={styles.searchInput}
        placeholder="Search for restaurants"
        value={value}
        inputRef={inputRef}
        isSearchStalled={isSearchStalled}
        onChange={onChange}
        onReset={onReset}
      />
      <p>
        {isSearchStalled && "Sorry, this query is taking longer than usual..."}
      </p>
    </div>
  );
}

export { SearchBox };
