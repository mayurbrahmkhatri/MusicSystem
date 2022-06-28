import axios from "axios";

import { serverUrl, playlistApi, albumApi,
  userLoginApi, userSignupApi, dashboardApi, createPlaylistEmpty, songsApi, FavouriteApi, HistoryApi   } from "../constants/apiconstant";

export class ApiService {
  async getPlaylists() {
    const res = await axios.get(`${serverUrl}/${playlistApi}`);
      
    return res.data;
  }

  async getAlbums() {
    const res = await axios.get(`${serverUrl}/${albumApi}`);
    return res.data;
  }

  async userLogin(data) {
    const res = await axios.post(`${serverUrl}/${userLoginApi}`, data);
    return res.data;
  }

  async register (data) {
    const res = await axios.post(`${serverUrl}/${userSignupApi}`, data);
    return res.data;
  };

  async getDashboard(username) {
    const res = await axios.get(`${serverUrl}/${dashboardApi}/${username}`);
    return res.data;
  };

  async getSongs() {
    const res = await axios.get(`${serverUrl}/${songsApi}`);
    return res.data;
  }

  async createEmptyPlaylistt(data) {
    const res = await axios.post(`${serverUrl}/${createPlaylistEmpty}`, data);
    return res.data;
  };

  async getUserPlaylists(username) {
    const res = await axios.get(`${serverUrl}/${createPlaylistEmpty}/${username}`);
    
    return res.data;
  }

  async getFavourite(username) {
    const res = await axios.get(`${serverUrl}/${FavouriteApi}/${username}`);
    return res.data;
  }

  async addLikedSong(username, songid) {
    const res = await axios.post(`${serverUrl}/${FavouriteApi}/${username}/${songid}`);
    return res.data
  }

  async removeLikedSong(username, songid) {
    const res = await axios.delete(`${serverUrl}/${FavouriteApi}/${username}/${songid}`);
    return res.data;
  }

  async checkSongExists (username, songid) {
    const res = await axios.get(`${serverUrl}/${FavouriteApi}/${username}/${songid}`);
    return res 
  }

  async removeUserFav(username, songid) {
    const res = await axios.delete(`${serverUrl}/${FavouriteApi}/${username}/${songid}`);
    return res.data;
  }

  async createUserHistory(username, songid) {
    const res = await axios.post(`${serverUrl}/${HistoryApi}/${username}/${songid}`);
    return res.data;
  }

  async getRecentlyPlayed(username) {
    const res = await axios.get(`${serverUrl}/${HistoryApi}/${username}`);
    return res.data;
  }
}
