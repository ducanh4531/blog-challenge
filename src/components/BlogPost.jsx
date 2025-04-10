import { Link } from 'react-router-dom';

export default function BlogPost({
  id,
  title,
  excerpt,
  author,
  date,
  imageUrl,
}) {
  return (
    <article className='bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-md'>
      <Link to={`/articles/${id}`}>
        {imageUrl && (
          <div className='relative h-48 overflow-hidden'>
            <img
              src={imageUrl}
              alt={title}
              className='w-full h-full object-cover transition-transform duration-200 hover:scale-105'
            />
          </div>
        )}
        <div className='p-6'>
          <h2 className='text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors'>
            {title}
          </h2>
          <p className='text-gray-600 mb-4 line-clamp-3'>{excerpt}</p>
          <div className='flex items-center justify-between text-sm text-gray-500'>
            <span className='font-medium'>{author}</span>
            <time dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
}
