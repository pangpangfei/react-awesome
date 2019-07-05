import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import loadable from '@loadable/component';
import { Spin } from './../components/Spin';

const PageA = loadable(() => import('./../pages/PageA/index'), {
    fallback: <Spin />
});

const PageB = loadable(() => import('./../pages/PageB/index'), {
    fallback: <Spin />
});

export default (
    <Router>
       <Route path="/" exact component={PageA} />
       <Route path="/page_b" component={PageB} />
    </Router>
);