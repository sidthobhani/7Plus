import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.min.css';
import Banner from './app/7plus-banner/banner';

const routing = (
    <Router>
      <div>
        <Banner/>
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))