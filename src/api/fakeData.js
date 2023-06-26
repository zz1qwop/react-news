import axios from 'axios';

export async function defaultFakeData() {
  return await axios.get('/data/all_category.json');
}

export async function searchFakeData() {
  return await axios.get('/data/search.json');
}

export async function categoryFakeData(category) {
  let response;
  switch (category) {
    case 'business':
      response = await axios.get('/data/business.json');
      break;
    case 'entertainment':
      response = await axios.get('/data/entertainment.json');
      break;
    case 'general':
      response = await axios.get('/data/general.json');
      break;
    case 'health':
      response = await axios.get('/data/health.json');
      break;
    case 'science':
      response = await axios.get('/data/science.json');
      break;
    case 'sports':
      response = await axios.get('/data/sports.json');
      break;
    case 'technology':
      response = await axios.get('/data/technology.json');
      break;
    default:
      break;
  }
  return response;
}
