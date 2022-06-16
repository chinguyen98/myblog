import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

const ToggleDarkMode = (): JSX.Element => {
  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme: string | undefined = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return (
      <SunIcon
        onClick={() => {
          setTheme('light');
        }}
        className="w-10 h-10 text-yellow-500 hover:cursor-pointer"
      />
    );
  }

  return (
    <MoonIcon
      onClick={() => {
        setTheme('dark');
      }}
      className="w-10 h-10 text-gray-900 hover:cursor-pointer"
    />
  );
};

export default ToggleDarkMode;
