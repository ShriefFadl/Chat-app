import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import join from './components/join';
import chat from './components/chat';

const app = ( )=>
(
    <Router>
        <Route path="/" exact component={join}/>
        <Route path="/chat"  component={chat}/>

    </Router>
);

export default app;
