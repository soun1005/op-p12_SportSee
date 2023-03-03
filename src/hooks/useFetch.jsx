import { useState, useEffect } from 'react';
// import axios from 'axios';
import mockData from '../assets/mockApi';
import globalFormat from '../dataFormat';

export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      // axios here after integration of mockdata
      // format data
      const formattedData = globalFormat(mockData);
      setData(formattedData);
      setError(null);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, []);

  return { data, error, loading };
}
