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

  login(email, password, rememberMe = false, captcha) {
    return instance.post("auth/login", { email, password, rememberMe, captcha});
  },

  logout() {
    return instance.delete("auth/login");
  },


};

export const profileAPI = {
  getProfileData(userId) {
    return instance.get(`profile/${userId}`);
  },

  getProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateProfileStatus(status) {
    return instance.put(`profile/status`, { status });
  },

  savePhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },

  login(email, password, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe });
  },

  logout() {
    return instance.delete("auth/login");
  },

  
};
