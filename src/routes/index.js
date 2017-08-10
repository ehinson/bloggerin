import React from 'react';
import { Route } from 'react-router';
import CoreLayout from '../layouts/CoreLayout';
import Bloggerin from '../layouts/Bloggerin';
import LoginView from '../views/LoginView';

export default (
  <div>
    <Route component={Bloggerin} exact path="/" name="home" />
    <Route component={LoginView} path="/login" name="login" />
  </div>
);
