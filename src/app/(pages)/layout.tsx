import '../../styles/globals.css';
import Header from '../components/organisms/header/Header';
// import { KeywordProvider } from '../contexts/KeywordContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <KeywordProvider> */}
        {/* グローバルなナビゲーションなどを配置 */}
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <p>© 2024 My News Site</p>
        </footer>
        {/* </KeywordProvider> */}
      </body>
    </html>
  );
}
