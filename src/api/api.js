import axios from "axios";
import authorization from "../components/Profile/Authorization";

// Создаем экземпляр axios с настройками
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7002bc1c-409f-4d3b-8797-b5d3ee1c7421",
        "authorization": `Bearer ${authorization}`
    }
});




// Экспортируем API методы для работы с пользователями
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userID) {
        console.log("делаем follow")
        return instance.post(`follow/${userID}`);
    },
    unfollow(userID) {
        console.log("делаем unfollow")
        return instance.delete(`follow/${userID}`);
    },
    getProfile(userID) {
        console.warn('Obsolete method. Please use profileAPI object.');
        return profileAPI.getProfile(userID);
    }
};

// Экспортируем API методы для работы с профилем
export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`);
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`);

    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData,{
            headers:{'Content-Type':'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
    }
};

// Экспортируем API методы для работы с авторизацией
export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe= false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};
