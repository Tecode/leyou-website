<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav-title
                            nav_title="文章列表">
                    </nav-title>
                    <single-item
                            v-for="item in articleData"
                            :item = "item"
                            :key="item.aid"></single-item>
                    <mu-pagination
                            v-if="articleData.length !== 0"
                            class="user_page"
                            :total="total"
                            @pageChange="pageChange"
                            :pageSize="size"
                            :current="1"></mu-pagination>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
	import SingleItem from '../components/common/SingleItem.vue';
	import NavFooter from '../components/common/Footer.vue';
	import NavTitle from '../components/common/Title.vue';
	import {mapMutations, mapState, mapActions} from 'vuex';

	export default {
		name: 'comment',
		props: ['id'],
		components: {
			SingleItem,
			NavFooter,
			NavTitle
		},
		mounted: function () {
			this.getArticelList({
				index: this.index,
				size: this.size,
			});
		},
		computed: {
			...mapState({
				index: state => state.Ui.index,
				size: state => state.Ui.size,
				articleData: state => state.ArticleList.articleData,
				total: state => state.ArticleList.total,
			}),
		},
		methods: {
			pageChange: function (value) {
				this.pagination({index: value, size: 10});
				this.getArticelList({
					index: this.index,
					size: this.size,
				});
			},
			...mapMutations({
				pagination: 'PAGINATION'
			}),
			...mapActions({
				getArticelList: 'GETARTICLELIST',
			})
		}
	}
</script>

<style lang="less" scoped>
    .user_page {
        padding: 20px 0 30px 0;
        justify-content: center;
        align-items: center;
    }
</style>
