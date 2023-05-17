import { useContext, useEffect } from 'react';
import "../../styles/FilterView.scss";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { FilterContext } from '../../context/filterContext';
import { ProductContext } from '../../context/productContext';
import { constants } from '../../constants';

const FilterView = () => {
    const { setGridView, setListView, dispatch: filterDispatch, priceSort, loadProducts, sort_by } = useContext(FilterContext);
    const { products } = useContext(ProductContext);

    useEffect(() => {
        if(products.length > 0) {
            loadProducts(filterDispatch, products);
            priceSort(filterDispatch, sort_by);
        } 
    }, [products]);

    return (
        <div className='filter-top'>
            <div className='container'>
                <div className='filter-top-content py-3 flex align-center justify-between bg-white px-3'>
                    <div className='filter-top-sort flex align-center'>
                        <p className='fs-13 text-dark'>Sort By:</p>
                        <select className='fs-13 mx-2 filter-select' onChange={(event) => priceSort(filterDispatch, event.target.value)}>
                            <option defaultValue={constants.BEST_MATCH} value = { constants.BEST_MATCH}>Best Match</option>
                            <option value = {constants.LOW_TO_HIGH}>Price low to high</option>
                            <option value = {constants.HIGH_TO_LOW}>Price high to low</option>
                        </select>
                    </div>
                    <div className='filter-top-view flex align-center '>
                        <p className='op-07 text-dark fs-13'>View: </p>
                        <button type = "button" className = "grid-btn" onClick={() => setGridView(filterDispatch) } title = "Grid View">
                            <BsFillGridFill />
                        </button>
                        <button type = "button" className = "list-btn" onClick={() => setListView(filterDispatch) } title = "List View">
                            <FaThList />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterView