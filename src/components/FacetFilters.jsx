import { CuisineFacet } from "./CuisineFacet";
import { LocationFacet } from "./LocationFacet";

function FacetFilters() {
  return (
    <>
      <Facety sectionTitle={"Cuisine/Food Type"}>
        <CuisineFacet />
      </Facety>
      <Facety sectionTitle={"Rating"}>
        <p>TODO 2</p>
      </Facety>
      <Facety sectionTitle={"City"}>
        <LocationFacet />
      </Facety>
    </>
  );
}

function Facety({ sectionTitle, children }) {
  return (
    <section className="ais-Panel">
      <div className="ais-Panel-header">{sectionTitle}</div>
      <div className="ais-Panel-body">{children}</div>
    </section>
  );
}

export { FacetFilters };
