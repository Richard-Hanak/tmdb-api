import { useState, useEffect } from "react";

//I had to split results in 2 parts as there's no way to adjust 
//how many are sent on a request
function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(true);
  const [results1, setResults1] = useState([]);
  const [results2, setResults2] = useState([]);
  const [error, setError] = useState("");
  console.log(results1)
  useEffect(() => {
 
    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const json = await data.json();
    
        if (json) {
          setLoading(false);
          setResults1(json.results.slice(0, 10));
          setResults2(json.results.slice(10));
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }

      setLoading(false);
    }

    fetchData();
  }, [dataSource]);

  return {
    error,
    loading,
    results1,
    results2,
  };
}

export default useDataFetching;
