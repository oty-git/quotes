import React from 'react';
import {Routes, Route, Outlet, Link} from 'react-router-dom';
import './App.css';
import CommentItem from './components/CommentItem';
import CommentsPage from './pages/CommentsPage';
import DrawerAppBar from './pages/DrawerAppBar';
import HomePage from './pages/HomePage';

function App() {
  // return <CommentsPage />;
  return (
    <>
      <h1>Basic SPA Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<DrawerAppBar />}> */}
          <Route index element={<HomePage />} />
          <Route path="comments" element={<CommentsPage />} />
          <Route path="comments/:id" element={<CommentItem />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
