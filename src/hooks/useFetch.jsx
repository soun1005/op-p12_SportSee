import { useState, useEffect } from 'react';
import axios from 'axios';
import getMockData from '../assets/mockApi';
import globalFormat from '../dataFormat';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

// common part of breakpoint
const USER_URL = 'http://localhost:3000/user/';

/**
 * Retrieves user information by making multiple API requests
 * @param {Array<Object>} id - The ID of the user to retrieve information for
 * @returns {Promise<{user: object, activity: object, averageSessions: object, performance: object}>} - A promise that resolves to an object containing user information
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
 * @returns {Array<Object>} three states in a form of object to manage data and loading
 */

export default function useFetch() {
  const { id } = useParams();
  const [searchParam] = useSearchParams();
  // console.log(searchParam.get('api'));
  const apiParam = searchParam.get('api');
  const navigate = useNavigate();
  const mockData = getMockData(parseInt(id, 10));

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataSource, setDataSource] = useState('API');

  // when the page is loaded
  useEffect(() => {
    setLoading(true);

    // When user select to use mock API
    if (apiParam === 'false') {
      const formattedMockData = globalFormat(mockData);
      setData(formattedMockData);
      setDataSource('Mock Data');
    }
    // API as data
    // get user info by id caught by useParams from URL
    getUserInfo(id)
      .then((userInfos) => {
        if (apiParam === 'true') {
          // first format matched data by breakpoints
          const formatApi = formatApiResponse(userInfos);
          // then using globalFormat, format data to display charts
          const formattedData = globalFormat(formatApi);
          // then set data
          setData(formattedData);
        }
      })
      .catch((e) => {
        console.log(e);
        console.log(data);
        // API error
        if (e.response?.status === 404 && apiParam === 'true') {
          console.log('user not found');
          navigate('/Error');
        }

        // API error 2
        if (e.code === 'ERR_NETWORK' && apiParam === 'true') {
          setError('API disconnected');
        }
      });

    setLoading(false);
  }, []);

  return { data, loading, dataSource, error };
}
