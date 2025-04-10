import { useState } from 'react';
import BlogPost from '../components/BlogPost';
import Header from '../components/Header';

// Extended blog posts data
const allBlogPosts = [
  {
    id: 1,
    title: 'Getting Started with React and Tailwind CSS',
    excerpt:
      "Learn how to set up a modern web development environment using React and Tailwind CSS. We'll cover installation, configuration, and best practices.",
    author: 'John Doe',
    date: '2024-03-20',
    category: 'React',
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
    category: 'CSS',
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
    category: 'JavaScript',
    imageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
  // Add more blog posts here
];

const categories = ['All', 'React', 'JavaScript', 'CSS', 'TypeScript'];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='space-y-8'>
          <div>
            <h1 className='text-4xl font-bold text-gray-900 mb-8'>Articles</h1>

            {/* Search and Filter Section */}
            <div className='flex flex-col sm:flex-row gap-4 mb-8'>
              <div className='flex-1'>
                <input
                  type='text'
                  placeholder='Search articles...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
              </div>
              <div className='flex gap-2 overflow-x-auto pb-2 sm:pb-0'>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {filteredPosts.map((post) => (
              <BlogPost key={post.id} {...post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className='text-center py-12'>
              <h3 className='text-xl text-gray-600'>
                No articles found matching your criteria.
              </h3>
            </div>
          )}
        </div>
      </main>

      <footer className='bg-white border-t mt-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <p className='text-center text-gray-500'>
            © {new Date().getFullYear()} My Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
