import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from '../component/views/home';
import About from '../component/views/about';
import Travel from '../component/views/travel';
import Compose from '../component/views/compose';
import Header from "./views/partials/header";
import '../styles/Nav.css';


function App() {
    return (
        <main>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/travel" component={Travel} />
                <Route path="/compose" component={Compose} />
            </Switch>
        </main>
    )
};

export default App;
