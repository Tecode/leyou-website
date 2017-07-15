import axios from 'axios';

// 拦截请求
axios.interceptors.response.use(function (response) {
	// console.log(response.data, '---------------');
	// Do something with response data
	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});

export const loginRequestApi = (param) => {
	return axios.post('/application/api/login', param);
};
export const registerRequestApi = (param) => {
	return axios.post('/application/api/register', param);
};

export const getUserInfoApi = (param) => {
	return axios.get('/application/api/userInfo');
};

// 保存文章api
export const saveArticelApi = (param) => {
	return axios.post('/application/api/addArticle', param);
};
// 更新文章api
export const updateArticelApi = (id, param) => {
	console.log(param);
	return axios.put(`/application/api/article/${id}`, param);
};
//获取文章列表
export const getArticelListApi = ({index, size}) => {
	return axios.get('/application/api/article', {params:{index :index, size: size}});
};

export const getArticleApi = (id) => {
	return axios.get(`/application/api/article/${id}`);
};