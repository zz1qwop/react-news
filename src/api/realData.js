import axios from 'axios';

export async function defaultRealData() {
  return await axios.get(`
  https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API}`);
}

export async function searchRealData(search) {
  return await axios.get(
    `https://newsapi.org/v2/everything?q=${search}&from=2023-05-26&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API}`
  );
}

export async function categoryRealData(category) {
  let response;
  switch (category) {
    case 'business':
      response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${process.env.REACT_APP_NEWS_API}`
      );
      break;
    case 'entertainment':
      response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=${process.env.REACT_APP_NEWS_API}`
      );
      break;
    case 'health':
      response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=health&apiKey=${process.env.REACT_APP_NEWS_API}`
      );
      break;
    case 'science':
      response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=science&apiKey=${process.env.REACT_APP_NEWS_API}`
      );
      break;
    case 'sports':
      response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=${process.env.REACT_APP_NEWS_API}`
      );
      break;
    case 'technology':
      response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=${process.env.REACT_APP_NEWS_API}`
      );
      break;
    default:
      break;
  }
  return response;
}
