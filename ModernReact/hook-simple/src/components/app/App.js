import React, { useState } from "react";
// import ResourceList from "../resources/ResourceList";
import ResourceListWithHook from "../resources/ResourceListWithHook";
import UserList from "../user/UserList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="ui container">
      <div>
        <button onClick={() => setResource("posts")}>Post</button>
        <button onClick={() => setResource("todos")}>ToDos</button>
      </div>
      <div>
        {/* <ResourceList resource={resource} /> */}
        <UserList />
        <ResourceListWithHook resource={resource} />
      </div>
    </div>
  );
};

export default App;
