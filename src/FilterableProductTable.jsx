import { useState } from "react";

function SearchBar({ handleQueryInput, handleShowStock }) {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={handleQueryInput} />
      <div>
        <input type="checkbox" id="in-stock" onChange={handleShowStock} />
        <label htmlFor="in-stock">Only show products in stock</label>
      </div>
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr className="product-category">
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  return (
    <tr className="product-row">
      <td className={`product-name ${product.stocked ? "stocked" : ""}`}>
        {product.name}
      </td>
      <td className="product-price">{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const fruits = products.filter((product) => product.category === "Fruits");
  const vegetables = products.filter(
    (product) => product.category === "Vegetables"
  );

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow category="Fruits" />
        {fruits.map((fruit) => (
          <ProductRow key={products.indexOf(fruit)} product={fruit} />
        ))}
        <ProductCategoryRow category="Vegetables" />
        {vegetables.map((vegetable) => (
          <ProductRow key={products.indexOf(vegetable)} product={vegetable} />
        ))}
      </tbody>
    </table>
  );
}

function filterProducts(products, query, showStock) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  if (showStock) {
    return filteredProducts.filter((product) => product.stocked);
  }

  return filteredProducts;
}

export default function FilterableProductTable({ products }) {
  const [query, setQuery] = useState("");
  const [showStock, setShowStock] = useState("");

  const handleQueryInput = (e) => {
    setQuery(e.target.value);
  };

  const handleShowStock = (e) => {
    setShowStock(e.target.checked);
  };

  return (
    <div className="filterable-product-table">
      <SearchBar
        handleQueryInput={handleQueryInput}
        handleShowStock={handleShowStock}
      />
      <ProductTable products={filterProducts(products, query, showStock)} />
    </div>
  );
}
