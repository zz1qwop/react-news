import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import { v4 as uuidv4 } from 'uuid';

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
    <div className="w-5/6 grid grid-cols-3 gap-4">
      {data &&
        data.map((news) => {
          const id = uuidv4();
          return <NewsItem key={id} id={id} news={news} />;
        })}
    </div>
  );
}
