import {
	ARTICLE_INPUT,
	ARTICLE_CHOICE_TYPE,
	ARTICLE_SAVE,
	THUMBNAIL_SAVE } from '../actionTypes'
import Image from '../../imgs/no_image.jpg';
import { saveArticelApi } from '../../api';


const ArticleEdit = {
	state: {
		title: '',
		articleType: '',
		author: '',
		keyWords: '',
		discript: '',
		updateImage: Image,
		content: ''
	},
	mutations: {
		[ARTICLE_INPUT](state, {target}) {
			state[target.id] = target.value;
		},
		[ARTICLE_CHOICE_TYPE](state, value) {
			state.articleType = value;
		},
		[THUMBNAIL_SAVE](state, url) {
			state.updateImage = url;
		}
	},
	actions: {
		[ARTICLE_SAVE]({state, commit, rootState}, fn){
			if (state.title.length === 0) {
				commit('OPEN_DIALOG',{
				title: '错误提示',
				content: '文章标题不能为空！',
				button: false,
				multiple: false,
				timer: 3000
				})
			}else if (state.articleType === ''){
				commit('OPEN_DIALOG',{
					title: '错误提示',
					content: '文章分类不能为空！',
					button: false,
					multiple: false,
					timer: 3000
				})
			} else if (state.author === '') {
				commit('OPEN_DIALOG',{
					title: '错误提示',
					content: '文章作者不能为空！',
					button: false,
					multiple: false,
					timer: 3000
				})
			} else if (state.keyWords === ''){
				commit('OPEN_DIALOG',{
					title: '错误提示',
					content: '请填写关键词！',
					button: false,
					multiple: false,
					timer: 3000
				})
			} else if (state.discript === ''){
				commit('OPEN_DIALOG',{
					title: '错误提示',
					content: '文章描述不能为空！',
					button: false,
					multiple: false,
					timer: 3000
				})
			} else if (fn() === '<p><br></p>'){
				commit('OPEN_DIALOG',{
					title: '错误提示',
					content: '文章内容不能为空！',
					button: false,
					multiple: false,
					timer: 3000
				})
			}
			saveArticelApi()
			.then(((response) => {
				console.log(response.data);
				// commit('SETUSERINFO', response.data);
			}))
			.catch((err) => {
				console.log(err.response.data);
			})
		}
	},
	getters: {
		// doneTodosCount () {
		// 	return 66666666666;
		// }
	}
};

export default ArticleEdit;