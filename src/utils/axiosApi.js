const axios = require("axios");

const authLink = "https://www.strava.com/oauth/token";

const activityUrl =
  "https://www.strava.com/api/v3/athlete/activities?access_token=";

export const refreshAuth = async () => {
  try {
    const resp = await axios.post(authLink, {
      client_id: "79184",
      client_secret: "cc138e94017cf4bafc94b605a0422696ba47452a",
      refresh_token: "131739bf46f15f5008f539c6cc7d4c6a721e4e33",
      grant_type: "refresh_token",
    });
    return await resp.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

export const getActivitiesAxios = async (newToken) => {
  try {
    const response = await axios.get(`${activityUrl}${newToken}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
