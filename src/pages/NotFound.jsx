import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex flex-col items-center justify-center text-center">
        <span className="text-9xl font-serif font-bold gold-gradient-text mb-4">404</span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Lost in the Cosmos</h1>
        <p className="text-chakra-muted text-lg max-w-md mb-10">
          The stars couldn't find this page. It may have moved, or perhaps it was never written in your destiny.
        </p>
        <Link
          to="/"
          className="bg-chakra-cyan hover:bg-chakra-blue text-chakra-bg font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </>
  );
}
