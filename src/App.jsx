import FilterableProductTable from "./FilterableProductTable";
import PRODUCTS from "./data";

function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
