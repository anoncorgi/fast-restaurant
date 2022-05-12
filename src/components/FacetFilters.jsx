function FacetFilters() {
  return (
    <>
      <Facet sectionTitle={"Cuisine/Food Type"}>
        <p>TODO 1</p>
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
    <section>
      <h2>{sectionTitle}</h2>
      {children}
    </section>
  );
}

export { FacetFilters };
