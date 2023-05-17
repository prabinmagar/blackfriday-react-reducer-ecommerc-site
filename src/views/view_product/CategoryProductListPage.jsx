import {useContext, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Preloader, ProductList, Title } from '../../components/common';
import { CategoryContext } from '../../context/categoryContext';

const CategoryProductListPage = () => {
  const { categoryKey } = useParams();
  const { getCategoryProducts, categoryProducts, dispatch, categoryLoading } = useContext(CategoryContext);

  useEffect(() => {
    getCategoryProducts(dispatch, categoryKey);
    // eslint-disable-next-line
  }, [categoryKey])

  return (
    <main className='bg-secondary'>
      <div className='container'>
        <div className='sc-wrapper py-5'>
          <Title title = {categoryKey} />
          {
            categoryLoading ? <Preloader /> : <ProductList products = {categoryProducts} />
          }
        </div>
      </div>
    </main>
  )
}

export default CategoryProductListPage