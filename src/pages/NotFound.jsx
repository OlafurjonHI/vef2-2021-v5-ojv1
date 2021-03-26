import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="NotFound">
    <h1>Síða Finnst ekki</h1>
    <Link style={{ fontWeight: 'bold', color: 'Black', textDecoration: 'none' }} to="/">Til Baka</Link>
  </div>

);

export default NotFound;
