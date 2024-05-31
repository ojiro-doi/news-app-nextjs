import '../../styles/globals.css';
import Header from '../components/organisms/header/Header';
import { TopicTitleProvider } from '../../contexts/TopicTitleContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <TopicTitleProvider >
          {/* グローバルなナビゲーションなどを配置 */}
          <header>
          </header>
          {children}
          <footer>
            <p>© 2024 My News Site</p>
          </footer>
        </TopicTitleProvider>
      </body>
    </html>
  );
}
