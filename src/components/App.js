import React, { Component } from "react";
//libraries for routing.
import { Router, Route } from "react-router-dom";
import history from '../history';

//Home made components.
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <div className="ui container">
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/remove/:id" exact component={StreamDelete} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
