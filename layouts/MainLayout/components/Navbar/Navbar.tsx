import ToggleDarkMode from './components/ToggleDarkMode';

const Navbar = (): JSX.Element => {
  return (
    <div className="h-12 flex items-center justify-between p-3 w-screen bg-sky-200 dark:bg-gray-800">
      <span className="text-slate-900 dark:text-slate-50">coliamai</span>
      <ToggleDarkMode />
    </div>
  );
};

export default Navbar;
