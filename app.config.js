import 'dotenv/config';
export default ({ config }) => {
  return {
    ...config,
    plugins: [
      "expo-web-browser"
    ],
    extra: {
    },
  };
};
