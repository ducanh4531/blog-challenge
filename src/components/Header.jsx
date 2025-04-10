import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-white shadow-sm'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <h1 className='text-2xl font-bold text-gray-900'>My Blog</h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden sm:flex sm:items-center sm:space-x-8'>
            <a href='/' className='text-gray-700 hover:text-gray-900'>
              Home
            </a>
            <a href='/articles' className='text-gray-700 hover:text-gray-900'>
              Articles
            </a>
            <a href='/about' className='text-gray-700 hover:text-gray-900'>
              About
            </a>
          </div>

          {/* Mobile menu button */}
          <div className='flex items-center sm:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='sm:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
              <a
                href='/'
                className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                Home
              </a>
              <a
                href='/articles'
                className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                Articles
              </a>
              <a
                href='/about'
                className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                About
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
