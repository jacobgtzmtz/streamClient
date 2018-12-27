import React, { Component } from "react";
//libraries for routing.
import { BrowserRouter, Route } from "react-router-dom";

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
      <BrowserRouter>
        <div>
          <Header />
          <div className="ui container">
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/remove" exact component={StreamDelete} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
