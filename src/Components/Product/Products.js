import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { FormattedMessage, useIntl } from "react-intl";
import { isEqual } from "lodash";

import LeftProduct from './KwareProduct/LeftProduct/LeftProduct'
import ProductHero from './ProductHero/ProductHero'

function Products() {

  
  const [products,setProducts]=useState([])
  const intl = useIntl();

  useEffect(() => {
    axios
      .get(`http://54.220.211.123:1335/products?_locale=${intl.locale}`)
      .then((res) => {
        if (!isEqual(res.data, products)) {
          setProducts(res.data);
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [products, intl.locale]);

    return (
      <div>
      <ProductHero/>

        {
                    products.map((product, index)=>(

                        <LeftProduct
                            title={product.name}
                            slogan={product.slogan}
                            description={product.body}
                            url={product.url}
                            index={index}
                        />


                    ))
                }

      </div>
      
    )
}

export default Products
