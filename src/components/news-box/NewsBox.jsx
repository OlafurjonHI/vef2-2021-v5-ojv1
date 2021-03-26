/* eslint-disable react/prop-types */

import News from '../news/News';
import './NewsBox.scss';

const NewsBox = (props) => {
  const { news } = props;
  const { id, title } = news;

  return (
    <div className="news__Box">
      <News id={id} title={title} max={5} />
    </div>
  );
};

export default NewsBox;
