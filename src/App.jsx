import { Switch, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

import { Index } from './pages/Index';
import NotFound from './pages/NotFound';
import Footer from './components/footer/Footer';
import News from './components/news/News';

const App = () => (
  <Layout>
    <h1>RÚV Fréttir</h1>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/:id" component={News} />
      <Route path="/" component={NotFound} />
    </Switch>

    <Footer />
  </Layout>
);
export default App;
