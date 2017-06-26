<template>
    <div class="banner">
        <div class="content">
            <div class="_box">
                <div class="clearfix time_box">
                    <h1 class="text-center">{{currentTime}}</h1>
                    <h3 class="text-center">{{currentStatus}}好，欢迎留言与反馈</h3>
                    <p class="text-center">提示：只有用户处于登录状态才可以留言反馈</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import moment from 'moment';
	moment.locale('zh-cn');
	import MessageItem from '../../components/message/MessageItem.vue'
	export default {
		name: 'banner',
		props: ['id'],
		components: {
			MessageItem
		},
		data () {
			return {
				currentTime: '00:00',
				currentStatus: '早上'
			}
		},
		created: function () {
			setInterval(() => {
				this.currentTime = moment().format('HH:mm');
				this.currentStatus = moment().format('a');
			}, 1000);
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";

    .banner {
        background: url("../../imgs/img_moning.jpg") 0 0 no-repeat;
        background-size: cover;
        background-position: center center;
        height: 540px;
        background-color: #223343;
        position: relative;
        min-width: 800px;
        ._box {
            position: absolute;
            top: 160px;
            left: 50%;
            margin-left: -390px;
            .time_box {
                h1 {
                    font-size: 120px;
                    font-weight: 400;
                    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                    color: @white;
                }
                h3 {
                    font-weight: normal;
                    color: @white;
                    padding: .6em 0;
                }
                p {
                    color: @white;
                }
                width: 780px;
                overflow: hidden;
                border-radius: @border-radius6;
            }
        }
    }
</style>
