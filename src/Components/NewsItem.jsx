import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewsItem({ id, news }) {
  const navigate = useNavigate();
  const { title, description, publishedAt } = news;
  const handleNews = () => {
    navigate(`/news/${id}`, { state: news });
  };
  return (
    <div
      onClick={handleNews}
      className="flex flex-col border border-gray-400 rounded-md p-4 cursor-pointer shadow-md hover:scale-105"
    >
      <p className="text-xl mb-4">{title}</p>
      <p className="text-md mb-2">
        {description && description.length > 120
          ? description.substr(0, 115) + '...'
          : description}
      </p>
      <p className="text-sm">{publishedAt}</p>
    </div>
  );
}
