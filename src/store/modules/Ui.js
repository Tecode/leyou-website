import {
	CLOSE_DIALOG,
	OPEN_DIALOG
} from '../actionTypes'


const ArticleEdit = {
	state: {
		dialog: false,
		title: '',
		button: true,
		multiple: true,
		content: ''
	},
	mutations: {
		[CLOSE_DIALOG](state) {
			state.dialog = false;
			state.title = '';
			state.content = '';
			state.button = true;
			state.multiple = true;
		},
		[OPEN_DIALOG](state, {
										title,
										content,
										button = true,
										multiple = true,
								 		timer,
									}) {
			console.log('9999999999999999***********');
			state.dialog = true;
			state.title = title;
			state.content = content;
			state.button = button;
			state.multiple = multiple;
			if (timer) {
				setTimeout(() => {
					state.dialog = false;
					state.title = '';
					state.content = '';
					state.button = true;
					state.multiple = true;
				}, timer)
			}
		},
	}
};

export default ArticleEdit;