import * as React from "react";
import * as Algolia from "react-instantsearch-hooks";
import cn from "classnames";

import { SearchInput } from "./SearchInput";

function Facet(props) {
  const [query, setQuery] = React.useState('');
  const previousQueryRef = React.useRef(query);
  const inputRef = React.useRef(null);

  const {
    items,
    refine,
    searchForItems,
    isShowingMore,
    toggleShowMore,
    canToggleShowMore,
  } = Algolia.useRefinementList(props);

  React.useEffect(() => {
    if (previousQueryRef.current !== query) {
      previousQueryRef.current = query;
      searchForItems(query);
    }
  }, [query, searchForItems]);

  return (
    <div className={cn('ais-RefinementList', props.className)}>
      {props.searchable && (
        <div className="ais-RefinementList-searchBox">
          <SearchInput
            inputRef={inputRef}
            placeholder={props.searchablePlaceholder}
            isSearchStalled={false}
            value={query}
            onChange={(event) => {
              setQuery(event.currentTarget.value);
            }}
            onReset={() => {
              setQuery('');
            }}
            onSubmit={() => {
              if (items.length > 0) {
                refine(items[0].value);
                setQuery('');
              }
            }}
          />
        </div>
      )}
      <ul className="ais-RefinementList-list">
        {items.map(item => (
          <li
            key={item.value}
            className={cn('ais-RefinementList-item', {
              'ais-RefinementList-item--selected': item.isRefined,
            })}
          >
            <label
              className="ais-RefinementList-label"
            >
              {/* Algolia styles require input to be nested in label, */}
              {/* for label click to toggle the checkbox. */}
              <input
                className="ais-RefinementList-checkbox"
                type="checkbox"
                value={item.value}
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <span
                className="ais-RefinementList-labelText"
              >
                {item.label}
              </span>
              <span
                className="ais-RefinementList-count">
                {item.count}
              </span>
            </label>
          </li>
        ))}
      </ul>
      {props.showMore && (
        <button
          className={cn('ais-RefinementList-showMore', {
            'ais-RefinementList-showMore--disabled': !canToggleShowMore,
          })}
          disabled={!canToggleShowMore}
          onClick={toggleShowMore}
        >
          {isShowingMore ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
}

export { Facet };
