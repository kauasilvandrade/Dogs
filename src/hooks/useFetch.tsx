import { useCallback, useState } from "react";

export function useFetch() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url: string, options: RequestInit) => {
    let response: Response;
    let json: any;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (error: any) {
      json = null;
      setError(error.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
}
