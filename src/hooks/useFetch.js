import { useState, useEffect } from 'react';

export default function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // ######### v1 #############
  //
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResult(json);
        setLoading(false);
      }catch (err) {
        setError(err);
        setLoading(false);
      }
    })()
  }, [options, url]);

  // ######### v2 #############
  // useEffect(() => {
  //   fetch(url, options)
  //     .then(res => res.json())
  //     .then(json => {
  //       setResult(json);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       setError(err);
  //       setLoading(false);
  //     })

  // }, [options, url])

  return { loading, result, error };
}
