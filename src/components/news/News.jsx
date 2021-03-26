/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import NewsItems from '../news-items/NewsItems';
import './News.scss';
import NotFound from '../../pages/NotFound';

dotenv.config();
let apiUrl = process.env.REACT_APP_API_URL;

const News = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [max, setMax] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const { id } = props;
  if (id) {
    apiUrl = apiUrl.concat(id);
  } else if (props.match.params.id) {
    apiUrl = apiUrl.concat(props.match.params.id);
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      let json;
      try {
        const result = await fetch(`${apiUrl}`);
        if (!result.ok) {
          if (result.status === 404) {
            setRedirect(true);
            return;
          }
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
      setMax(json.items.length);
    }

    fetchData();
  }, [id]);

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

  const maxNews = props.max || max;
  const isFrontPage = window.location.pathname === '/';
  return (
    (redirect) ? <NotFound />
      : (
        <div className="news__data">
          <h1 className="news__title">{(data && data.title) ? data.title : null}</h1>
          <NewsItems items={news.items} max={maxNews} />
          {(isFrontPage) ? <a className="news__navigationLink" href={`${id}`}>Allar fréttir</a> : <a className="news__navigationLink" href="/">Til baka</a> }
        </div>
      )
  );
};

export default News;
