
import './App.css';
import Home from './Components/Home'

import {Provider} from 'react-redux'

import reducers from './Reducers'

import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
function App() {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let store=createStore(reducers,composeEnhancer(applyMiddleware(thunk)))

  return (
    <div className="App">
<Provider store={store}>
     <Home/>
     
     </Provider>
     

    </div>
  );
}

export default App;
