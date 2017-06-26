<template>
    <div class="all_contents">
        <div class="top_header clearfix">
            <div class="pull-left clearfix">
                <span class="pull-left">全部内容</span>
                <i class="icon_info pull-left"></i>
                <span class="pull-left">（202）</span>
            </div>
            <div class="pull-right">
                <button class="more">更多</button>
            </div>
        </div>
        <div class="contents">
            <single-item></single-item>
            <single-item></single-item>
            <single-item></single-item>
            <single-item></single-item>
            <single-item></single-item>
            <single-item></single-item>
            <single-item></single-item>
            <single-item></single-item>
            <single-item></single-item>
            <single-item></single-item>
        </div>
        <div class="page-pagination text-center">
            <el-pagination
                    layout="prev, pager, next"
                    :total="50">
            </el-pagination>
        </div>
    </div>
</template>

<script>
	import SingleItem from '../common/SingleItem.vue';
	export default {
		name: 'AllContents',
		components: {
			SingleItem
		},
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

    .all_contents {
        background-color: @white200;
        border-radius: @border-radius6;
        box-shadow: @box-shadow26;
        margin-right: 10px;
        padding-bottom: 40px;
        .page-pagination {
            padding: 30px 0 0 0;
        }
        .top_header {
            padding: 10px 15px 5px 15px;
            border-bottom: 1px solid @white300;
            .icon_info {
                display: block;
                width: 26px;
                height: 26px;
                background: url("../../imgs/icon_info.png") 4px 3px no-repeat;
                background-size: 18px;
            }
            .more {
                -webkit-appearance: none;
                background: none;
                color: @color500;
                border: 1px solid @color500;
                padding: 2px 10px;
                border-radius: @border-radius6;
                transition: all 0.5s;
                cursor: pointer;
                outline: none;
                &:hover {
                    background-color: @background-color350;
                    color: @white100;
                    border: 1px solid @background-color350;
                }
            }
        }
    }

    @media (max-width: 992px) {
        .all_contents {
            margin-right: 0;
        }
    }
</style>
