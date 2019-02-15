import React, { useState, useEffect } from "react";
import resourceHelper from "../../helper/resources";

const ResourceListWithHook = props => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await resourceHelper.get(`/${resource}`);
      setResources(response.data);
    })(props.resource);
  }, [props.resource]);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceListWithHook;
