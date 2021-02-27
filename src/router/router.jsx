import React from 'react';

import {
    Switch,
    Route,
} from "react-router-dom";

import Home from '../pages/home';
import Desc from '../pages/desc';

class Routers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/iisi/:page" component={Desc} />
                <Route exact path="/influx/:page" component={Desc} />
                <Route exact path="/cases/:page" component={Desc} />
            </Switch>
        );
    }

}

export default Routers;