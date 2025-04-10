import Header from '../components/Header';

export default function About() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='bg-white rounded-2xl shadow-sm p-8 md:p-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>
            About Our Blog
          </h1>

          <div className='prose prose-lg max-w-none'>
            <p className='text-gray-600 mb-6'>
              Welcome to our tech blog! We're passionate about sharing knowledge
              and insights about web development, programming best practices,
              and the latest technologies.
            </p>

            <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
              Our Mission
            </h2>
            <p className='text-gray-600 mb-6'>
              Our mission is to make web development knowledge accessible to
              everyone. We believe in the power of sharing experiences and
              learning from each other.
            </p>

            <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
              The Team
            </h2>
            <div className='grid md:grid-cols-2 gap-8 mt-6'>
              <div className='flex items-start space-x-4'>
                <img
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
                  alt='John Doe'
                  className='w-16 h-16 rounded-full object-cover'
                />
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    John Doe
                  </h3>
                  <p className='text-gray-600'>Lead Developer & Writer</p>
                  <p className='text-gray-500 mt-2'>
                    Passionate about React, TypeScript, and clean code
                    practices.
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <img
                  src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
                  alt='Jane Smith'
                  className='w-16 h-16 rounded-full object-cover'
                />
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Jane Smith
                  </h3>
                  <p className='text-gray-600'>UI/UX Designer & Writer</p>
                  <p className='text-gray-500 mt-2'>
                    Expert in creating beautiful, user-friendly interfaces.
                  </p>
                </div>
              </div>
            </div>

            <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
              Contact Us
            </h2>
            <p className='text-gray-600 mb-6'>
              Have questions or suggestions? We'd love to hear from you! Reach
              out to us at{' '}
              <a
                href='mailto:contact@techblog.com'
                className='text-blue-600 hover:text-blue-700'
              >
                contact@techblog.com
              </a>
            </p>
          </div>
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
