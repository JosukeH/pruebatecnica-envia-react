/* eslint-disable no-unused-expressions */
import axios from 'axios';
import { useState, useEffect } from 'react';

function useProducts(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ',
      },
    };
    axios.get(url, config)
      .then((res) => {
        res.data && setData(res.data);
        setLoading(false);
        // checking for multiple responses for more flexibility
        // with the url we send in.
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setLoading(false);
        setError('An error occurred. Awkward..');
      });
  }, [url]);
  return { data, loading, error };
}

export default useProducts;
