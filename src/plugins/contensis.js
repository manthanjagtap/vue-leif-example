import { Client } from 'contensis-delivery-api';

const ContensisClient = Client.create({
  rootUrl: `https://cms-${import.meta.env.VITE_APP_ALIAS}.cloud.contensis.com`,
  accessToken: import.meta.env.VITE_APP_ACCESS_TOKEN,
  projectId: import.meta.env.VITE_APP_PROJECT_API_ID,
});

export default ContensisClient;
