
import './App.css'
import Header from './components/Header/Header';
import Shop from './components/shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/NotFound/Notfound';
import ProductData from './components/ProductData/ProductData';


function App() {
  return (
    <div className="App">

      <Router>
        <div>
          
        <Header></Header>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <ProductData></ProductData>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
            
          </Switch>
        </div>
      </Router>
      
      
    </div>
  );
}

export default App;
