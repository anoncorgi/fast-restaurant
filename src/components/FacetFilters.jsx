import { CuisineFacet } from "./CuisineFacet";

function FacetFilters() {
  return (
    <>
      <Facet sectionTitle={"Cuisine/Food Type"}>
        <CuisineFacet />
      </Facet>
      <Facet sectionTitle={"Rating"}>
        <p>TODO 2</p>
      </Facet>
      <Facet sectionTitle={"Neighborhood"}>
        <p>TODO 3</p>
      </Facet>
    </>
  );
}

function Facet({ sectionTitle, children }) {
  return (
    <section className="ais-Panel">
      <div className="ais-Panel-header">{sectionTitle}</div>
      <div className="ais-Panel-body">{children}</div>
    </section>
  );
}

export { FacetFilters };
