import React from 'react';
import { Route } from 'react-router';
import Bloggerin from '../layouts/Bloggerin';
import LoginView from '../views/LoginView';
import DashboardView from '../views/DashboardView';

export default (
  <div>
    <Route component={Bloggerin} exact path="/" name="home" />
    <Route component={LoginView} exact path="/login" name="login" />
    <Route component={DashboardView} exact path="/dashboard" name="dashboard" />
  </div>
);
