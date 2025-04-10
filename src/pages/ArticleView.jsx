import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import Header from '../components/Header';

// Sample article content (in a real app, this would come from an API or database)
const mockArticles = {
  1: {
    id: 1,
    title: 'Getting Started with React and Tailwind CSS',
    content: `
      <p>React and Tailwind CSS are two powerful tools that, when combined, can help you build beautiful and maintainable web applications quickly. In this article, we'll explore how to set up a new project using these technologies and best practices for development.</p>

      <h2>Setting Up Your Development Environment</h2>
      <p>Before we begin, make sure you have Node.js installed on your system. We'll be using Create React App with the Tailwind CSS template to bootstrap our project.</p>

      <pre><code>npx create-react-app my-app --template tailwind</code></pre>

      <h2>Understanding Tailwind CSS Basics</h2>
      <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. Instead of writing custom CSS, you compose classes in your HTML (or JSX) to style elements.</p>

      <h2>Key Concepts</h2>
      <ul>
        <li>Utility-First Approach</li>
        <li>Responsive Design</li>
        <li>Component Composition</li>
        <li>Custom Configuration</li>
      </ul>

      <h2>Best Practices</h2>
      <p>When working with React and Tailwind CSS, consider the following best practices:</p>
      <ul>
        <li>Extract common patterns into components</li>
        <li>Use consistent spacing and sizing</li>
        <li>Leverage Tailwind's configuration file</li>
        <li>Optimize for production</li>
      </ul>
    `,
    author: 'Anton',
    date: '2024-03-20',
    category: 'React',
    imageUrl:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
  },
};

// Get related articles based on category
const getRelatedArticles = (currentArticle) => {
  return Object.values(mockArticles)
    .filter(
      (article) =>
        article.id !== currentArticle.id &&
        article.category === currentArticle.category,
    )
    .slice(0, 3);
};

export default function ArticleView() {
  const { id } = useParams();
  const article = mockArticles[id];

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(article.content),
  });

  if (!article) {
    return (
      <div className='min-h-screen bg-gray-50'>
        <Header />
        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Article Not Found
            </h1>
            <p className='text-gray-600'>
              The article you're looking for doesn't exist.
            </p>
          </div>
        </main>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article);

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Article Header */}
        <div className='mb-8'>
          <img
            src={article.imageUrl}
            alt={article.title}
            className='w-full h-64 md:h-96 object-cover rounded-2xl mb-8'
          />
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            {article.title}
          </h1>
          <div className='flex items-center text-gray-600 mb-8'>
            <span className='mr-4'>{article.author}</span>
            <span className='mr-4'>•</span>
            <time className='mr-4' dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className='mr-4'>•</span>
            <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'>
              {article.category}
            </span>
          </div>
        </div>

        {/* Article Content */}
        <div className='bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12'>
          <div
            className='prose prose-lg max-w-none'
            dangerouslySetInnerHTML={sanitizedData()}
          />
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>
              Related Articles
            </h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {relatedArticles.map((relatedArticle) => (
                <BlogPost key={relatedArticle.id} {...relatedArticle} />
              ))}
            </div>
          </section>
        )}
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
