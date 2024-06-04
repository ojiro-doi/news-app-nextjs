import ArticleList from '../organisms/articleList/ArticleList';
import SideNav from '../organisms/sideNav/SideNav';
import Props from '../../types/types';
import Header from '../organisms/header/Header';
import SidePanel from '../organisms/sidePanel/SidePanel';

const DefaultLayout = ({ articles,weather }: Props) => {
  return (
    <>
      <header className="fixed top-0 w-full">
        <Header />
      </header>
      <main className="pt-16">
        <aside className="fixed top-16 ">
          <SideNav />
        </aside>
        <div className="flex flex-1 ml-72 top-16 ">
          <div className="w-3/4">
            <ArticleList articles={articles} />
          </div>
          <div className="w-1/4">
            <SidePanel weather={weather}/>
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </>
  );
};

export default DefaultLayout;
