import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <section className='bg-neutral-50 text-zinc-700 dark:bg-zinc-700 dark:text-neutral-50 font-playfair'>
      <div className='repo-container flex flex-col justify-center items-center h-screen'>
        <p className='text-zinc-700 dark:text-neutral-50 flex items-center'>
          <span className='text-8xl md:text-9xl'>4</span>
          <span>
            <svg
              className='w-16 h-16 md:w-20 md:h-20'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </span>
          <span className='text-8xl md:text-9xl'>4</span>
        </p>
        <p className='flex flex-col gap-y-4 items-center text-center gap-x-2 mt-4'>
          <span className='text-xl'>You're tresspassing</span>{" "}
          <Link
            to='/'
            className='hover:bg-blue text-lg block w-36 rounded-full shadow-xl hover:shadow-blue   py-1 bg-zinc-700 text-neutral-50 duration-300 transition-colors'
          >
            Go Home 
          </Link>
        </p>
      </div>
    </section>
  );
}

export default ErrorPage