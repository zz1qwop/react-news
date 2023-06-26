import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NewsDetail() {
  const { state } = useLocation();
  const { title, description, publishedAt, author, url, urlToImage } = state;
  return (
    <div className="mt-4 sm:mt-0 px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{title}</h2>
      <div className="flex justify-between mb-8">
        <p>{author}</p>
        <p>{publishedAt}</p>
      </div>
      <Link to={url} className="text-lg bg-gray-700 rounded-md p-1 text-white">
        원문 보러 가기
      </Link>
      <img src={urlToImage} alt={title} className="my-8" />
      <p className="text-lg">{description}</p>
    </div>
  );
}
