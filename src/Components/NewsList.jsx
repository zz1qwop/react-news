import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
// import {
//   categoryFakeData,
//   defaultFakeData,
//   searchFakeData,
// } from '../api/fakeData';
import {
  categoryRealData,
  defaultRealData,
  searchRealData,
} from '../api/realData';

export default function NewsList() {
  const [data, setData] = useState();
  const { search, category } = useParams();

  useEffect(() => {
    const loadData = async () => {
      let response;
      if (search) {
        response = await searchRealData(search);
      } else {
        response = await defaultRealData();
      }

      if (category) {
        response = await categoryRealData(category);
      }
      setData(response.data.articles);
    };

    loadData();
  }, [search, category]);

  return (
    <div className="w-5/6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4 sm:mt-0">
      {data &&
        data.map((news) => {
          const id = uuidv4();
          return <NewsItem key={id} id={id} news={news} />;
        })}
    </div>
  );
}
