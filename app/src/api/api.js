import * as axios from "axios";
import { follow } from "../redux/usersReducer";

const instans = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7606fa20-b64f-4645-8b31-dab104abf2b2",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instans
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instans.post(
      `follow/${userId}`,
      {});
  },
  unfollow(userId) {
    return instans.delete(`follow/${userId}`)},
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object')
      return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
  getProfile(userId) {
    return instans.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instans.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instans.put(`profile/status/`, {status: status});
  }
}

export const authAPI = {
  me() {
    return instans.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instans.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instans.delete(`auth/login`);
  }
}
