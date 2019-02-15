import { useState, useEffect } from "react";
import resourceHelper from "./resources";

const useResources = resource => {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    (async resource => {
      const response = await resourceHelper.get(`/${resource}`);
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
