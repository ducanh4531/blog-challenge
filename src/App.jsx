import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/About';
import Articles from './pages/Articles';
import ArticleView from './pages/ArticleView';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:id' element={<ArticleView />} />
      </Routes>
    </Router>
  );
}

export default App;
