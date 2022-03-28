import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    async function fetchAPI() {
      try {
        const response = await fetch(`${url}`);
        const dataResponse = await response.json();
        setData(dataResponse);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
        console.log("Error Fetching");
      }
    }

    fetchAPI();
  }, []);

  return { data, error };
}
