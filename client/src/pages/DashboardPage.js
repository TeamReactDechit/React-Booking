import React, { useEffect, useState } from "react";
import '../css/DashboardPage.css';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from '../components/Orders';
import Userprofile from '../components/Userprofile';
import { connect } from "react-redux";
import ChangePassword from '../components/ChangePassword';

const DashboardPage = ({user}) => {
  const [utente, setUtente] = useState({ ...user });

  useEffect(() => {

    debugger;
    if (user.id !== null) {
      setUtente({ ...user });
    }

  }, [user]);


  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/dashboard" component={() => <Userprofile utente={utente} />} />
          <Route path='/orders' component={Orders} />
          <Route path='/changepassword'  component={ChangePassword} />
        </Switch>
      </Router>
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
