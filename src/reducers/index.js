import authReducer from "./authReducer";
import basketReducer from "./basketReducer";
import filterReducer from "./filterReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import searchReducer from "./searchReducer";

const rootReducer = {
    auth: authReducer,
    basket: basketReducer,
    filter: filterReducer,
    product: productReducer,
    category: categoryReducer,
    search: searchReducer,
};

export default rootReducer;