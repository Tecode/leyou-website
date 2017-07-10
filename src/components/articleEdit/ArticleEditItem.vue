<template>
    <ul class="update-logedite">
        <li class="version">
            <div class="number">文章标题（必填字段）</div>
            <div class="input">
                <label>
                    <input id="title" @input="articleInput" type="text" v-model="title" placeholder="文章标题（必填字段）"/>
                </label>
            </div>
        </li>
        <li class="device">
            <div class="type">文章分类（必选字段）</div>
            <div class="span_box">
                <span @click="choiceType(100)" :class="{active: articleType === 100}">电脑端</span>
                <span @click="choiceType(101)" :class="{active: articleType === 101}">移动端</span>
                <span @click="choiceType(102)" :class="{active: articleType === 102}">小程序</span>
                <span @click="choiceType(103)" :class="{active: articleType === 103}">APP客户端</span>
                <span @click="choiceType(104)" :class="{active: articleType === 104}">PC客户端</span>
            </div>
        </li>
        <li class="content">
            <div class="title">发表文章说明</div>
            <div>
                <label>
                    <input type="text" id="author" @input="articleInput" v-model="author" placeholder="编辑"/>
                    <span class="delete">编辑</span>
                </label>
            </div>
            <div>
                <label>
                    <input type="text" id="keyWords" @input="articleInput" v-model="keyWords" placeholder="关键词"/>
                    <span class="keywords">关键词</span>
                </label>
            </div>
            <div>
                <label>
                    <input id="discript" @input="articleInput" type="text" v-model="discript" placeholder="文章描述"/>
                    <span class="discript">文章描述</span>
                </label>
            </div>
        </li>
        <li class="image-update">
            <div class="title">图片上传</div>
            <div class="update-box clearfix">
                <el-upload
                        class="upload-demo pull-left"
                        drag
                        action="/upload"
                        :on-success="imageOk"
                        accept="image">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <div class="image pull-left" :style="{backgroundImage: `url(${updateImage})`}"></div>
            </div>
        </li>
        <li class="content">
            <div class="title">编辑内容</div>
            <div id="Edit"></div>
        </li>
        <li class="tips clearfix">
            <p>提示：编辑完成后记得保存</p>
            <p class="save" @click="articleSave(getContent)">保存</p>
            <p class="add-tips">新增更新说明</p>
        </li>
    </ul>
</template>

<script>
	import AticalTitle from '../common/Title.vue'
	import {mapMutations, mapState, mapActions} from 'vuex';
	let editor = '';

	export default {
		name: 'comment',
		props: ['id'],
		components: {
			AticalTitle
		},
		data () {
			return {
				open: true
			}
		},
		mounted: function () {
			const E = window.wangEditor;
			editor = new E('#Edit');
			editor.customConfig.uploadImgShowBase64 = true;
			editor.customConfig.zIndex = 100;
			editor.customConfig.uploadImgHooks = {
				before: function (xhr, editor, files) {
					// 图片上传之前触发
					// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
				},
				success: function (xhr, editor, result) {
					// 图片上传并返回结果，图片插入成功之后触发
					// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
				},
				fail: function (xhr, editor, result) {
					// 图片上传并返回结果，但图片插入错误时触发
					// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
				},
				error: function (xhr, editor) {
					// 图片上传出错时触发
					// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
				},
				timeout: function (xhr, editor) {
					// 图片上传超时时触发
					// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
				},

				// 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
				// （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
				customInsert: function (insertImg, result, editor) {
					// 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
					// insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

					// 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
					if (result) {
						result.data.map((url) => {
							insertImg(url)
						})
					}

					// result 必须是一个 JSON 格式字符串！！！否则报错
				}
			};
			// 将图片大小限制为 3M
			editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
			editor.customConfig.uploadImgServer = '/upload';
			editor.create();
		},
		computed: {
			...mapState({
				title: state => state.ArticleEdit.title,
				articleType: state => state.ArticleEdit.articleType,
				author: state => state.ArticleEdit.author,
				keyWords: state => state.ArticleEdit.keyWords,
				discript: state => state.ArticleEdit.discript,
				updateImage: state => state.ArticleEdit.updateImage,
				content: state => state.ArticleEdit.content,
			}),
		},
		methods: {
			imageOk: function (response, file, fileLis) {
				this.thumbnail(response.data[0])
			},
			getContent: function() {
				return editor.txt.html()
            },
			...mapMutations({
				articleInput: 'ARTICLE_INPUT',
				choiceType: 'ARTICLE_CHOICE_TYPE',
				thumbnail: 'THUMBNAIL_SAVE'
			}),
			...mapActions({
				articleSave: 'ARTICLE_SAVE'
			})
		},
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";

    .update-logedite {
        position: relative;
        padding-left: 25px;
        &:before {
            content: "";
            display: block;
            position: absolute;
            left: 5px;
            top: 4px;
            width: 1px;
            height: 100%;
            background-color: @background-color50;
        }
        li {
            margin-bottom: 20px;
            position: relative;
            &:before {
                content: "";
                display: block;
                position: absolute;
                left: -26px;
                top: .3em;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                box-sizing: border-box;
                background-color: #ff7300;
                border: 3px solid @background-color50;
            }
        }
        input {
            width: 720px;
            height: 34px;
            outline: none;
            text-indent: .5em;
            margin: 10px 0;
            border: 1px solid @color204;
        }
        .version {
            .number {
                font-size: 16px;
                color: @manager_color15;
            }
        }
        .device {
            .span_box {
                margin: 10px 0;
            }
            .type {
                font-size: 16px;
                color: @manager_color15;
            }
            span {
                padding: 4px 10px;
                border: 1px solid @background-color50;
                margin: 0 15px 0 0;
                color: @background-color50;
                cursor: pointer;
                transition: all .4s;
            }
            .active {
                color: @manager_color16;
                border: 1px solid @manager_color16;
                background-color: #ffffff;
            }
        }
        .content {
            .title {
                font-size: 16px;
                color: @manager_color15;
                margin-bottom: 15px;
            }
            label {
                position: relative;
            }
            .delete {
                position: absolute;
                top: -7px;
                right: 0;
                width: 60px;
                height: 34px;
                background-color: @background-color50;
                text-align: center;
                line-height: 2.4em;
                transition: all .4s;
                cursor: pointer;
                &:hover {
                    background-color: @background-color350;
                }
            }
            .keywords {
                position: absolute;
                top: -7px;
                right: 0;
                width: 70px;
                height: 34px;
                background-color: @background-color50;
                text-align: center;
                line-height: 2.4em;
                transition: all .4s;
                cursor: pointer;
                &:hover {
                    background-color: @background-color350;
                }
            }
            .discript {
                position: absolute;
                top: -7px;
                right: 0;
                width: 80px;
                height: 34px;
                background-color: @background-color50;
                text-align: center;
                line-height: 2.4em;
                transition: all .4s;
                cursor: pointer;
                &:hover {
                    background-color: @background-color350;
                }
            }
        }
        .tips {
            p {
                float: right;
                cursor: pointer;
                color: @color808;
                &:first-child {
                    float: left;
                    padding-top: 5px;
                }
            }
            .save {
                padding: 5px 16px;
                background-color: @manager_color16;
                color: @white;
            }
            .add-tips {
                padding: 5px 16px;
                background-color: @background-color50;
                color: @text100;
                margin: 0 25px 0 0;
            }
        }
        #Edit {
            min-height: 800px;
        }
        .image-update {
            .title {
                font-size: 16px;
                color: @manager_color15;
                margin-bottom: 15px;
            }
            .image {
                width: 360px;
                height: 180px;
                background-color: #f1f1f1;
                border-radius: 6px;
                background-size: cover;
            }
        }
    }
</style>
