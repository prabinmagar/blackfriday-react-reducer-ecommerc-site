import {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Preloader, ProductList, Title } from '../../components/common';
import { SearchContext } from '../../context/searchContext';
import { FaHourglassEnd } from "react-icons/fa";

const SearchPage = () => {
  const { getSearchProducts, dispatch, searchResult, searchLoading } = useContext(SearchContext);
  const { searchKey } = useParams();

  useEffect(() => {
    getSearchProducts(dispatch, searchKey);
    // eslint-disable-next-line
  }, [searchKey])

  if(searchResult.length === 0){
    return (
      <main className='bg-secondary'>
        <div className='container'>
          <div className='sc-wrapper py-5'>
            <p className='text-center fs-20 fw-7 text-primary flex align-center justify-center'>
              <FaHourglassEnd />
              <span className='px-2'>No products found !</span>
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='bg-secondary'>
      <div className='container'>
        <div className='sc-wrapper py-5'>
          <Title title = { "Your search results" } />
          <br /><br />
          {
            searchLoading ? <Preloader /> : <ProductList products = {searchResult} />
          }
        </div>
      </div>
    </main>
  )
}

export default SearchPage