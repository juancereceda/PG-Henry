import { Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/products/Products'
import MovieDetail from './components/details/Details'

function App() {
  return (
    <div className="App">
     <Route path='/' component={Header} />
      <Route path='/products' component={Products}/>
      <Route path='/movies/:id' component={MovieDetail}/>
    </div>
  );
}

export default App;
