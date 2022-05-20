import React from 'react';
import FilterableProductTable from './FilterableProductTable'

function App() {
  const PRODUCTS = [
    {category: 'Drinks', price: '$0.5', stocked: true, name: 'Lime Juice'},
    {category: 'Drinks', price: '$0.8', stocked: true, name: 'Milk Shake'},
    {category: 'Drinks', price: '$0.6', stocked: false, name: 'Lassi'},
    {category: 'Snacks', price: '$1.47', stocked: true, name: 'Pav Bhaji'},
    {category: 'Snacks', price: '$0.8', stocked: false, name: 'Samosa'},
    {category: 'Snacks', price: '$1.0', stocked: true, name: 'Dahi Puri'}
  ];
  return (
   
      <FilterableProductTable products={PRODUCTS} />

  );
}

export default App;