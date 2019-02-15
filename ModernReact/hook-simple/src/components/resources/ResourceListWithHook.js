import React from "react";
import useResources from "../../helper/useResources";

const ResourceListWithHook = props => {
  const resources = useResources(props.resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceListWithHook;
