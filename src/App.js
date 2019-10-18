import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Settings from './components/Settings';
import Nav from './components/NavigationBar';
import { Route, HashRouter } from 'react-router-dom';
import { getWeather } from './dataService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgetsList: [],
      isLoading: false,
    }
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          <Route
            path="/"
            exact
            component={() =>
              <Home
                widgetsListArray={this.state.widgetsList}
              />}
          />
          <Route
            path="/settings"
            exact
            component={() =>
              <Settings
                addWidget={this.handleAddWidget}
                removeWidget={this.removeWidget}
                widgetsListArray={this.state.widgetsList}
              />}
          />
        </div>
        {this.state.isLoading && <div className="loader_w">
          <div className="loader_spinner">
          </div><br />
          <p>Loading...</p>
        </div>}
      </HashRouter>
    );
  }

  // Remove widgets from view
  removeWidget = (id) => {
    let tempArray = [...this.state.widgetsList];
    tempArray.splice(this.findIndex(id), 1);
    this.setState({ 'widgetsList': tempArray });
  }

  // To find duplicate widgets
  findIndex = (id) => {
    return this.state.widgetsList.findIndex(x => x.id === id)
  }

  // Add widgets to view
  handleAddWidget = (id) => {
    if (this.findIndex(id) < 0) {     //Check wheather widget has already been added
      this.setState({ isLoading: true });
      getWeather(id).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({ 'widgetsList': [...this.state.widgetsList, res.data] }, function () {
            this.setState({ isLoading: false });
          });
        }
      }).catch(err => {
        this.setState({ isLoading: false });
        console.log(err);
      })
    } else {
      alert('Widgets already added');
    }
  }
}

export default App;
