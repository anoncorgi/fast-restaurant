import * as React from "react";
import * as Algolia from "react-instantsearch-hooks";
import cn from "classnames";

function CuisineFacet() {
  const { items, refine } = Algolia.useRefinementList({
    attribute: "food_type"
  });
  return (
    <ul style={{ margin: 0, padding: 0 }}>{/* FIXME */}
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
  );
}

export { CuisineFacet };
