import { BasketProvider } from './context/basketContext';
import { FilterProvider } from './context/filterContext';
import { ProductProvider } from './context/productContext';
import { CategoryProvider } from './context/categoryContext';
import { AuthProvider } from './context/authContext';
import { SearchProvider } from './context/searchContext';
import PropTypes from 'prop-types';

const combineProviders = (providers) => providers.reduce((AccumulatedComponents, CurrentComponent) => {
  const CombinedProvider = ({ children }) => (
    <AccumulatedComponents>
      <CurrentComponent>
        {children}
      </CurrentComponent>
    </AccumulatedComponents>
  );

  CombinedProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return CombinedProvider;
});

export const AllProviders = combineProviders([ProductProvider, BasketProvider, AuthProvider, FilterProvider, CategoryProvider, SearchProvider]);


