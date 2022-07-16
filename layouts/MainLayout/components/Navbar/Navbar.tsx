import dynamic from 'next/dynamic';
import Link from 'next/link';
const ToggleDarkMode = dynamic(() => import('./components/ToggleDarkMode'), { ssr: false });

const Navbar = (): JSX.Element => {
  return (
    <div className="h-12 flex items-center justify-between p-3 w-full bg-sky-200 dark:bg-gray-800">
      <Link href="/">
        <a className="text-slate-900 dark:text-slate-50">coliamai</a>
      </Link>
      <ToggleDarkMode />
    </div>
  );
};

export default Navbar;
