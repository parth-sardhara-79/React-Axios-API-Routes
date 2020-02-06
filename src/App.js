import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import List from './list-users';
import AddUser from './add-user';
import EditUser from './edit-user';
import './style.scss';

class App extends React.Component {
  
  render() {
    return (<>  <BrowserRouter>
      <h3>User Curd Application</h3>
      <br/>
      <Link to="/list" className="navigateLinks">Record List</Link> | <Link to="/list/add-user" className="navigateLinks">Add Record</Link>
      
      <br />
      <Switch>
          <Route path="/list/:id" component={EditUser} />
          <Route path="/list/add-user" component={AddUser}/>
          <Route path="/list" component={List}/>
      </Switch>
      </BrowserRouter>
      </>
    );
  }
}
export default App;
