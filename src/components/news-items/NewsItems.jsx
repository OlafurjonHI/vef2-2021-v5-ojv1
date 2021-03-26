/* eslint-disable react/destructuring-assignment */
import './NewsItems.scss';

const NewsItems = (props) => {
  const items = props.items || [];
  const max = props.max || items.length;
  return (
    <ul className="news__list">
      {items.map((it, i) => {
        if (i < max) {
          return (
            <li key={it.link} className="news__listItem">
              {' '}
              <a href={it.link}>{it.title}</a>
              {' '}
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default NewsItems;
