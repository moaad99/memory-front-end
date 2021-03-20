
import './App.css';
import Home from './Components/home'

import {Provider} from 'react-redux'

import {createStore,applyMiddleware,compose} from 'redux'

import thunk from 'redux-thunk'

import reducers from './reducers'
function App() {


  const store = createStore(reducers,compose(applyMiddleware(thunk)))
  return (
    <div className="App">
     <Provider store={store}>

     <Home/>
     
     </Provider>
     

    </div>
  );
}

export default App;
