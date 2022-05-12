import { FancyFacet } from "./FancyFacet";
import { CuisineFacet } from "./CuisineFacet";
import { LocationFacet } from "./LocationFacet";

function FacetFilterContainer() {
  return (
    <>
      <FacetSection sectionTitle={"Cuisine/Food Type"}>
        <CuisineFacet />
      </FacetSection>
      <FacetSection sectionTitle={"Fine Dining"}>
        <FancyFacet />
      </FacetSection>
      <FacetSection sectionTitle={"City"}>
        <LocationFacet />
      </FacetSection>
    </>
  );
}

function FacetSection({ sectionTitle, children }) {
  return (
    <section className="ais-Panel">
      <div className="ais-Panel-header">{sectionTitle}</div>
      <div className="ais-Panel-body">{children}</div>
    </section>
  );
}

export { FacetFilterContainer };
