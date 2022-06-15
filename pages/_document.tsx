import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect, useState } from 'react';

export default function Document() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Html className={isDarkMode ? 'dark' : ''}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
