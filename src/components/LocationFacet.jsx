import { Facet } from "./Facet.jsx";

function LocationFacet() {
  return (
    <Facet
      searchable
      showMore
      attribute={"city"}
    />
  );
}

export { LocationFacet };
