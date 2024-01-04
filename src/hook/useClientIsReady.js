const { useState, useEffect } = require("react");

const useClientIsReady = () => {
  const [clientIsReady, setClientIsReady] = useState(false);
  useEffect(() => {
    setClientIsReady(true);
  }, []);

  return { clientIsReady };
};

export default useClientIsReady;
