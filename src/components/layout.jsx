import { Outlet } from 'react-router-dom';

const layout = () => (
  <>
    <header>Hello Rails React</header>
    <main>
      <Outlet />
    </main>
    <footer>&copy; All rights reserved</footer>
  </>
);

export default layout;
