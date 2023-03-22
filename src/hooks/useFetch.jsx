import { useState, useEffect } from 'react';
import axios from 'axios';
// import mockData from '../assets/mockApi';
import globalFormat from '../dataFormat';
import { useParams } from 'react-router-dom';

const USER_URL = 'http://localhost:3000/user/';

const getUserInfo = async (id) => {
  const user = await axios.get(`${USER_URL}${id}`);
  const activity = await axios.get(`${USER_URL}${id}/activity`);
  const averageSessions = await axios.get(`${USER_URL}${id}/average-sessions`);
  const performance = await axios.get(`${USER_URL}${id}/performance`);

  return { user, activity, averageSessions, performance };
};

const formatApiResponse = (data) => {
  const activitySessions = data.activity.data.data.sessions;
  const performances = data.performance.data.data;
  const user = data.user.data.data;
  const averageSessions = data.averageSessions.data.data.sessions;
  return { activitySessions, performances, user, averageSessions };
};

export default function useFetch() {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getUserInfo(id).then((userInfos) => {
        const formatApi = formatApiResponse(userInfos);
        const formattedData = globalFormat(formatApi);
        setData(formattedData);
        setError(null);
      });
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, []);

  return { data, error, loading };
}
