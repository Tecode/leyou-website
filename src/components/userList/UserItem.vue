<template>
    <div class="single_content_box">
        <div class="single_content clearfix">
            <div class="pull-left">
                <label class="check_box" for="check"></label>
                <input style="visibility: hidden" id="check" type="checkbox"/>
            </div>
            <ul class="clearfix pull-left">
                <li class="image_box pull-left"></li>
                <li class="account_name pull-left">
                    <p>账户名称：小花</p>
                    <p class="sex">性别：--</p>
                </li>
                <li class="use_time pull-left">注册时间：2015-10-27</li>
                <li class="account pull-left">账号：7487545@qq.com</li>
                <li class="status pull-left">
                    <span>正常</span>
                </li>
            </ul>
            <div class="jurisdiction pull-right">修改权限</div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'comment',
		props: ['id'],
		data () {
			return {
				open: true
			}
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";
    .single_content_box{
        .single_content{
            margin-top: 15px;
            background-color: @white;
            box-shadow: @box-shadow26;
            position: relative;
            height: 60px;
            .check_box{
                width: 18px;
                height: 18px;
                display: block;
                background-color: @background-color50;
                margin: 15px 25px 0 15px;
            }
            .image_box{
                background-image: url("../../imgs/demo_image.jpg");
                background-size: cover;
                background-position: center center;
                width: 40px;
                height: 40px;
                margin-right: 15px;
                position: relative;
                border-radius: 99px;
                overflow: hidden;
            }
            ul{
                margin-top: 10px;
                color: @manager_color08;
                .account_name{
                    padding-right: 20px;
                    .sex{
                        color: @manager_color09;
                    }
                }
                .use_time{
                    border-left: 1px solid @manager_color05;
                    border-right: 1px solid @manager_color05;
                    padding: 9px 20px;
                }
                .account{
                    border-right: 1px solid @manager_color05;
                    padding: 9px 20px;
                }
                .status{
                    padding: 9px;
                }
            }
            .jurisdiction{
                border: 1px solid @background-color50;
                color: @background-color50;
                padding: 4px 18px;
                margin: 14px 15px 0 0;
                cursor: pointer;
                transition: all .2s;
                &:hover{
                    background-color: @background-color50;
                    color: @text100;
                }
            }
        }
    }
</style>
