import React from 'react';

export default function NewsItem({ title, description }) {
  return (
    <div>
      NewsItem
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}
