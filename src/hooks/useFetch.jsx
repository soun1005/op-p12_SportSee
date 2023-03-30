import { useState, useEffect } from 'react';
import axios from 'axios';
// import mockData from '../assets/mockApi';
import getMockData from '../assets/mockApi';
import globalFormat from '../dataFormat';
import { useParams } from 'react-router-dom';

// common part of breakpoint
const USER_URL = 'http://localhost:3000/user/';

/**
 * A function to retrieve user information by given parameter
 * @param {Array<Object>} id - A unique ID to distinguish user and fetch correspond data
 * @returns {Array<Object>} Data in a form of object in each fields to display charts
 */

const getUserInfo = async (id) => {
  const user = await axios.get(`${USER_URL}${id}`);
  const activity = await axios.get(`${USER_URL}${id}/activity`);
  const averageSessions = await axios.get(`${USER_URL}${id}/average-sessions`);
  const performance = await axios.get(`${USER_URL}${id}/performance`);

  return { user, activity, averageSessions, performance };
};

/**
 * This function formats API response for global formatter
 * @param {Array<Object>} data - fetched data from API
 * @returns {Array<Object>} formatted data of each charts to be globally formatted
 */

const formatApiResponse = (data) => {
  const activitySessions = data.activity.data.data.sessions;
  const performances = data.performance.data.data;
  const user = data.user.data.data;
  const averageSessions = data.averageSessions.data.data.sessions;
  return { activitySessions, performances, user, averageSessions };
};

/**
 * A hook that fetches data
 * @returns {Array<Object>} three states in a form of object to manage data, error and loading
 */

export default function useFetch() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserInfo(id)
      .then((userInfos) => {
        const formatApi = formatApiResponse(userInfos);
        const formattedData = globalFormat(formatApi);
        setData(formattedData);
        setError(null);
      })
      .catch((e) => {
        if (e.code === 'ERR_NETWORK') {
          const mockData = getMockData(parseInt(id, 10));
          if (!mockData) {
            setError('User not found');
          } else {
            const formattedMockData = globalFormat(mockData);
            setData(formattedMockData);
            setError(null);
          }
        } else {
          setError(e.response.data);
        }
      });

    setLoading(false);
  }, []);

  return { data, error, loading };
}
