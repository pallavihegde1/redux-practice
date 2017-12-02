import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MachineNew from './containers/machineNew'
import MachineList from './containers/machineList'


export const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={MachineList} />
      {/* machine routes  */}
      <Route path="/machines/new" component={MachineNew} />
      {/* <Route path="/machines/:id" component={MachineShow} /> */}
    </Switch>
  );
};
