import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

import NewsBox from '../news-box/NewsBox';
import './NewsList.scss';

dotenv.config();
const apiUrl = process.env.REACT_APP_API_URL;

const NewsList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      let json;
      try {
        const result = await fetch(apiUrl);
        if (!result.ok) {
          throw new Error('result not ok');
        }

        json = await result.json();
      } catch (e) {
        setError('Gat ekki sótt gögn.');
        return;
      } finally {
        setLoading(false);
      }
      setData(json);
    }
    fetchData();
  }, []);

  if (error) {
    return (
      <p>
        Villa kom upp:
        {error}
      </p>
    );
  }

  if (loading) {
    return <p>Sæki gögn...</p>;
  }
  const news = data || [];
  return (
    <div className="news">
      {
      news.map((n) => <NewsBox key={n.id} news={n} />)
    }
    </div>
  );
};

export default NewsList;
