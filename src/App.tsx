import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './components/Home'
import Auth from './components/Auth'
import Records from './components/Records'

function App() {
    return (
        <Router>
            <div> 
                <nav className='navbar navbar-expand navbar-dark bg-dark'>
                <a href='/' className='navbar-brand'>
                    curator
                </a>
                <div className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                    <Link to={'/'} className='nav-link'>
                        home
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to={'/records'} className='nav-link'>
                        records
                    </Link>
                    </li>
                </div>
                </nav>

                <div className='container mt-3'>
                <Switch>
                    <Route exact path={['', '/home']} component={Home} />
                    <Route exact path='/records' component={Records} />
                </Switch>
                </div>
            </div>
        </Router>
    )
}
    
export default App

 
    


