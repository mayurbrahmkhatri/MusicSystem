import Dashboard from "layouts/dashboard";
import Playlist from "layouts/playlist";
import Songs from "layouts/songs";
import Albums from "layouts/albums";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import UserInfo from "layouts/user-info";
import Icon from "@mui/material/Icon";
import Favourite from "layouts/favourite";
import AlbumScreen2 from "layouts/albums/albumScreen2";
import PlaylistDetails from "layouts/playlist/PlaylistDetails";
import YourPlaylist from "layouts/your-playlist";
import FavoriteIcon from '@mui/icons-material/Favorite';
import QueueIcon from '@mui/icons-material/Queue';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import YourPlaylistSongs from "layouts/your-playlist/screen2";
import { getLoggedInUser } from "./service/localstorage_service";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Playlist",
    key: "playlist",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/playlist",
    component: <Playlist />,
  },
  {
    type: "collapse",
    name: "Albums",
    key: "albums",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/albums",
    component: <Albums />,
  },
  {
    type: "collapse",
    name: "songs",
    key: "songs",
    icon: <MusicNoteIcon />,
    route: "/songs",
    component: <Songs />,
  },
  {
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    name: "Playlist",
    key: "playlist",
    route: "/playlistDetails",
    component: <PlaylistDetails />,
  },
  {
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    route: "/albumSongs",
    component: <AlbumScreen2 />,
  },
  {
    route: "/user-info",
    component: <UserInfo />,
  }
];

if (getLoggedInUser() !== 'guest') {
  routes.push({
    type: "collapse",
    name: "Your Playlist",
    key: "your-playlist",
    icon: <QueueIcon />,
    route: "/your-playlist",
    component: <YourPlaylist />,
  },
  {
    type: "collapse",
    name: "Favourites",
    key: "favourite",
    icon: <FavoriteIcon />,
    route: "/favourite",
    component: <Favourite />,
  },
  {
    route: "/user-info",
    component: <UserInfo />,
  },
  {
    route: "/your-playlist-songs",
    component: <YourPlaylistSongs />,
  })
}

export default routes;
