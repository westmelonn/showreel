import React from 'react';
import {
    HashRouter,
    Link
} from "react-router-dom";
import { Accordion, Card, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Routers from '../router/router';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        this.setState({ isSticky: window.pageYOffset > 0 });
    }
    render() {

        return (
            <HashRouter>
                <Routers />
            </HashRouter >
        );
    }
}


export default Index;