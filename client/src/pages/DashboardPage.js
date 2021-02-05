import React from 'react';
import '../css/DashboardPage.css';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from '../components/Orders';
import Userprofile from '../components/Userprofile';
import ChangePassword from '../components/ChangePassword';

function DashboardPage() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/dashboard' exact component={Userprofile} />
          <Route path='/orders' component={Orders} />
          <Route path='/changepassword'  component={ChangePassword} />
        </Switch>
      </Router>
    </>
  );
}

export default DashboardPage;