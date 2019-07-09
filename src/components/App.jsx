import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketControl from './NewTicketControl';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
      </Switch>
    </div>
  );
}

export default App;
