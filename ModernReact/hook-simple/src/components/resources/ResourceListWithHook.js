import React, { useState, useEffect } from "react";
import resourceHelper from "../../helper/resources";

const ResourceListWithHook = props => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await resourceHelper.get(`/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(props.resource);
  }, [props.resource]);

  return <div>{resources.length}</div>;
};

export default ResourceListWithHook;
