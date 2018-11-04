import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

// Components
import NavigationBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MyMovies from "./components/MyMovies/MyMovies";

const { persistor, store } = Store();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <div className="App">
              <NavigationBar />
              <div className="container">
                <Route exact path="/" component={Home} />
                <Route exact path="/mymovies" component={MyMovies} />
              </div>
              <Footer />
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
