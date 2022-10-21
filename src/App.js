import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import IPhones from "./pages/IPhones/IPhones";
import AppContext from "./context";
import {IPhoneList} from "./store/iPhonesStore/iPhoneList";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
      <AppContext.Provider value={{IPhoneList}}>
          <div className="site-container">
              <header className="header">
                  <div className="wrapper">
                      <Header/>
                  </div>
              </header>
                  <Route path="/" exact>
                      <Landing/>
                  </Route>
                  <Route path="/iphones" exact>
                      <IPhones/>
                  </Route>
                  <Route path="/cart" exact>
                      <Cart/>
                  </Route>
                    <About/>
                    <Footer/>
          </div>
      </AppContext.Provider>
  );
}

export default App;
