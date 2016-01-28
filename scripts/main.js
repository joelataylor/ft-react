import React from 'react';
import { render} from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/*
  Import Components
*/
import Default from './components/Default.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Signup from './components/app/Signup.jsx';
import Login from './components/app/Login.jsx';

import App from './components/app/App.jsx';
import Dashboard from './components/app/Dashboard.jsx';
import Projects from './components/projects/Projects.jsx';
import Project from './components/projects/Project.jsx';
import Clients from './components/clients/Clients.jsx';
import Client from './components/clients/Client.jsx';
import Invoices from './components/invoices/Invoices.jsx';
import Invoice from './components/invoices/Invoice.jsx';
import Services from './components/services/Services.jsx';
import Service from './components/services/Service.jsx';
import Settings from './components/app/Settings.jsx';

import NotFound from './components/global/NotFound.jsx';


function requireAuth(nextState, replaceState) {
  return true;
}

/*
  Routes
*/
render((
  <Router history={browserHistory}>
    <Route path='/' component={Default}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
      <Route path='signup' component={Signup} />
      <Route path='login' component={Login} />
    </Route>
    <Route path='/app/:appId' component={App} onEnter={requireAuth}>
      <IndexRoute component={Dashboard} />
      <Route path='projects' component={Projects}>
        <Route path='/app/:appId/project/:projectId' component={Project} />
      </Route>
      <Route path='clients' component={Clients}>
        <Route path='/app/:appId/client/:clientId' component={Client} />
      </Route>
      <Route path='invoices' component={Invoices}>
        <Route path='/app/:appId/invoice/:invoiceId' component={Invoice} />
      </Route>
      <Route path='services' component={Services}>
        <Route path='/app/:appId/service/:serviceId' component={Service} />
      </Route>
      <Route path='settings' component={Settings} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
), document.getElementById('main'));
