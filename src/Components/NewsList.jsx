import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

export default function NewsList() {
  const [data, setData] = useState();

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('/data/all_category.json');
      setData(response.data.articles);
    };

    loadData();
  }, []);

  return (
    <div>
      NewsList
      {data &&
        data.map((news) => (
          <NewsItem
            key={news.title}
            title={news.title}
            description={news.description}
          />
        ))}
    </div>
  );
}
