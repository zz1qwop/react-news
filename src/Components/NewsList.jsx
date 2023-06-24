import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

export default function NewsList() {
  const [data, setData] = useState();
  const { search, category } = useParams();

  useEffect(() => {
    const loadData = async () => {
      let response;
      if (search) {
        response = await axios.get('/data/search.json');
      } else {
        response = await axios.get('/data/all_category.json');
      }

      if (category) {
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
      }
      setData(response.data.articles);
    };

    loadData();
  }, [search, category]);

  return (
    <div className="w-5/6 grid grid-cols-3 gap-4">
      {data &&
        data.map((news) => {
          const id = uuidv4();
          return <NewsItem key={id} id={id} news={news} />;
        })}
    </div>
  );
}
