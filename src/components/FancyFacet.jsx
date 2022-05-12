import * as Algolia from "react-instantsearch-hooks";

// Just for fun
// Would have preferred range slider,
// but range only works with numbers.
export function FancyFacet() {
  const { refine, value } = Algolia.useToggleRefinement({
    attribute: "dining_style",
    on: "Fine Dining",
  });

  function handleChange(event) {
    refine({ isRefined: !event.target.checked });
  }

  return (
    <div className={'ais-ToggleRefinement'}>
      <label className="ais-ToggleRefinement-label">
        <input
          className="ais-ToggleRefinement-checkbox"
          type="checkbox"
          checked={value.isRefined}
          onChange={handleChange}
        />

        <span
          className="ais-ToggleRefinement-labelText"
        >
          I want to dress up
        </span>
      </label>
    </div>
  );
}

