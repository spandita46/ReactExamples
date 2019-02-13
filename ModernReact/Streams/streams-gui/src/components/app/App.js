import React from "react";
import { Router, Route, Link } from "react-router-dom";
import StreamCreate from "../streams/StreamCreate";
import StreamDelete from "../streams/StreamDelete";
import StreamEdit from "../streams/StreamEdit";
import StreamShow from "../streams/StreamShow";
import StreamList from "../streams/StreamList";
import Header from "../header/Header";
import history from "../../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
        </div>
      </Router>
    </div>
  );
};

export default App;
