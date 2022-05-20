import SearchBar from './searchBar';
import ProductTable from './productTable';
import './index.css';

function FilterableProductTable(props) {
    return (
      <div className="outerbox">
        <SearchBar />
        <div className="center"><ProductTable products={props.products} /></div>
        
      </div>
    );
  }

  export default FilterableProductTable;