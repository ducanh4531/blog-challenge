import BlogPost from '../components/BlogPost';
import Header from '../components/Header';

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

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='space-y-12'>
          {/* Hero Section */}
          <section className='text-center'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>
              Welcome to Our Tech Blog
            </h1>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Discover the latest insights, tutorials, and best practices in web
              development, programming, and technology.
            </p>
          </section>

          {/* Featured Section */}
          <section>
            <div className='flex items-center justify-between mb-8'>
              <h2 className='text-3xl font-bold text-gray-900'>
                Featured Posts
              </h2>
              <a
                href='/articles'
                className='text-blue-600 hover:text-blue-700 font-medium'
              >
                View all articles →
              </a>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {blogPosts.map((post) => (
                <BlogPost key={post.id} {...post} />
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className='bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 mt-12'>
            <div className='max-w-2xl mx-auto text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
                Subscribe to our newsletter
              </h2>
              <p className='text-blue-100 mb-8'>
                Get the latest posts and updates delivered to your inbox.
              </p>
              <form className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='px-4 py-3 rounded-lg flex-1 border-0 focus:ring-2 focus:ring-white/20 bg-white/10 text-white placeholder-blue-200'
                />
                <button
                  type='submit'
                  className='px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
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
