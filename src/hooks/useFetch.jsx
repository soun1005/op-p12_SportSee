import { useState, useEffect } from 'react';
import axios from 'axios';
import getMockData from '../assets/mockApi';
import globalFormat from '../dataFormat';
import { useParams, useNavigate } from 'react-router-dom';

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
 * @returns {Array<Object>} three states in a form of object to manage data and loading
 */

export default function useFetch() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState('API');

  // when the page is loaded
  useEffect(() => {
    setLoading(true);
    // get user info by id
    getUserInfo(id)
      .then((userInfos) => {
        // first format matched data by breakpoints
        const formatApi = formatApiResponse(userInfos);
        // then using globalFormat, format data to display charts
        const formattedData = globalFormat(formatApi);
        // then set data
        setData(formattedData);
        console.log('using API');
      })
      // when API fails
      .catch((e) => {
        // if there is error code from API
        if (e.code === 'ERR_NETWORK') {
          // set mock data as mockData(and transform id string into number)
          const mockData = getMockData(parseInt(id, 10));

          console.log('using mock data');
          setDataSource('Mock Data');

          // if there's no mock data found
          if (!mockData) {
            // setError('User not found');
            navigate('/Error');
          } else {
            // instead of API, use mock data
            const formattedMockData = globalFormat(mockData);
            setData(formattedMockData);
          }
        } else {
          navigate('/Error');
        }
      });

    setLoading(false);
  }, []);

  return { data, loading, dataSource };
}
