import logo from './logo.svg';
import './App.css';
import Header from './Componants/Header/Header';
import Shop from './Componants/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from './Componants/Order/Order';
import Manage from './Componants/Manage/Manage';
import NotFound from './Componants/NotFound/NotFound/NotFound';
import ProductD from './Componants/ProductD/ProductD'


function App() {
  return (
    <div>
       <Header></Header>
      <Router>
      <Switch>
     
      <Route path="/shop">
      <Shop></Shop>
  </Route>
  <Route path="/order">
    <Order></Order>
  </Route>
  <Route path="/manage">
    <Manage></Manage>
    </Route>
    <Route exact path="/">
      <Shop></Shop>
      </Route>
      <Route path="/Product/:ProductKey">
      <ProductD></ProductD>
        </Route>
      <Route  path="*">
        <NotFound></NotFound>
      </Route>
  </Switch>
  </Router>
    </div>
  );
}

export default App;
