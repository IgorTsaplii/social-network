import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "81fc2d28-a842-4dc8-9a92-0b5a5cce6320",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const authAPI = {
  getAuthData() {
    return instance.get(`auth/me`);
  },
};

export const profileAPI = {
  getProfileData(userId) {
    return instance.get(`profile/${userId}`)
  }
}
      
