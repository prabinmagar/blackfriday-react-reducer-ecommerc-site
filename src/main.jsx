import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AllProviders } from './combineProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AllProviders>
    <App />
  </AllProviders>
);





