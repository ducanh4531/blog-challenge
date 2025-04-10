import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import ArticleView from './pages/ArticleView';
import BlogPost from './components/BlogPost';
import Header from './components/Header';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React and Tailwind CSS',
    excerpt:
      "Learn how to set up a modern web development environment using React and Tailwind CSS. We'll cover installation, configuration, and best practices.",
    author: 'John Doe',
    date: '2024-03-20',
    imageUrl:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Building Responsive Layouts',
    excerpt:
      "Discover the power of Tailwind CSS's responsive design utilities and how to create beautiful, mobile-first layouts that work across all devices.",
    author: 'Jane Smith',
    date: '2024-03-19',
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Modern JavaScript Features',
    excerpt:
      'Explore the latest JavaScript features and how they can improve your code quality and developer experience when building React applications.',
    author: 'Mike Johnson',
    date: '2024-03-18',
    imageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleView />} />
      </Routes>
    </Router>
  );
}

export default App;
