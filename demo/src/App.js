// import './App.css';
import {useState} from "react";
import { people } from "./data.js";
import { getImageUrl } from "./utils";

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}
function ProductRow({ product }) {
  const name = product.stocked ? product.name : 
  <span style={{ color: 'red' }}>
    {product.name}
  </span>
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProductTable({ 
  products,
  filterText,
  inStockOnly
 }) {
  const rows = []
  let lastCategory = null;

  products.forEach(product => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
    rows.push(
      <ProductCategoryRow 
            category={product.category}
            key={product.category} />
    )
  }
  rows.push(
    <ProductRow 
      product={product}
      key={product.name}
    />
  )
  lastCategory = product.category;  
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

function SearchBar({ 
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockonly
 }) {
  return (
    <form>
      <input
       type="text" 
       placeholder="Search...."
       value={filterText}
       onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input 
        type="checkbox"
        checked={inStockOnly}
        onChange={(e) => onInStockonly(e.target.checked)}
         />
        Only Show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInstockOnly] = useState(false)
  return (
    <div>
      <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockonly={setInstockOnly}
      />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]

function Profile(){
  return (
    <>

    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Katherine Johnson"
      className="photo"
    />
    <ul>
      <li>Invent new traffics lights</li>
      <li>Rehearse a movie scenc</li>
      <li>Improve the spectrum technology</li>
    </ul>
    </>
  )
}

function Gallery(){
  return (
    <section>
      <h1>Hedy Lamarr's Todods</h1>
      <Profile />
    </section>
  )
}

function List() {
  const chemists = people.filter((person) => 
    person.profession === 'chemist'
  );
  const listItems = chemists.map((chemist) => 
    <li key={chemist.id}>
      <img 
        src={getImageUrl(chemist)} 
        alt={chemist.name} 
        className="photo"
        />
        <p>

        <b>{chemist.name}</b>
        {' ' + chemist.profession + '   '} 
        known for {chemist.accomplishment}
        </p>
    </li>
  )

  return <ul>{listItems}</ul>
}

function App() {
  // return <FilterableProductTable products={PRODUCTS} />
  // return <Gallery />
  return <List />
}

export default App;
