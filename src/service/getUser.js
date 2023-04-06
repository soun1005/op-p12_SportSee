import axios from 'axios';

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

export default getUserInfo;
