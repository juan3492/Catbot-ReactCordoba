import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Chat from './pages/Chat/Chat.js';


const Routes = () => {

    const history = useHistory();

    return(
        <Router >
            <Switch history={history}>
                <Route exact path='/' component={Home} />
                <Route exact path='/chat' component={Chat} />
            </Switch>
        </Router>
    )
};

export default Routes