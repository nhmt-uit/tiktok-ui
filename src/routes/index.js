// Layouts
import { DefaultLayout } from '~/components/Layout';
import { HeaderOnly } from '~/components/Layout';

// Search
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// No need to login
const publicRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/following', component: Following, layout: DefaultLayout },
  { path: '/profile', component: Profile, layout: DefaultLayout },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search },
];

// Need to login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
