import React from 'react'
import {Link} from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = ({match}) => {

  //console.log(props); // pokazuje match i inne obiekty
  return ( 
    <>
    <div>Strona produktu</div>
    <Product id={match.params.id}/>
    <Link to="/products">Powrót do listy produktów</Link>
    </>
   );
}
 
export default ProductPage;