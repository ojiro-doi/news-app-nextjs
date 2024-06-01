import '../../styles/globals.css';
import Header from '../components/organisms/header/Header';
import { TopicTitleProvider } from '../../contexts/TopicTitleContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <TopicTitleProvider>
          {/* ページ固有のコンテンツ */}
          <main>{children}</main>
        </TopicTitleProvider>
      </body>
    </html>
  );
}
