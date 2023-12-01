
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body.js';
import appStore from './utils/appStore.js';

function App() {
  return (
    <div className="App text-3xl font-bold text-green-800">
      <Provider store={appStore}>
      <Body/>
      </Provider>
    
    </div>
  );
}

export default App;
