import 'dotenv/config';
export default ({ config }) => {
  return {
    ...config,
    plugins: [
      "expo-web-browser"
    ],
    extra: {
      API_KEY: process.env.API_KEY,
    },
  };
};
