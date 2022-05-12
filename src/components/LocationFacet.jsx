import { Facet } from "./Facet.jsx";

function LocationFacet() {
  return (
    <Facet
      searchable
      attribute={"city"}
    />
  );
}

export { LocationFacet };
