<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav-title
                            nav_title="文章列表"
                            placeholder_text="账号名称或账号，回车">
                    </nav-title>
                    <single-item></single-item>
                    <single-item></single-item>
                    <single-item></single-item>
                    <single-item></single-item>
                    <single-item></single-item>
                    <single-item></single-item>
                    <single-item></single-item>
                    <single-item></single-item>
                    <mu-pagination class="user_page" :total="350" :current="12"></mu-pagination>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import SingleItem from '../components/common/SingleItem.vue'
	import NavFooter from '../components/common/Footer.vue'
	import NavTitle from '../components/common/Title.vue'

	export default {
		name: 'comment',
		props: ['id'],
		components:{
		    SingleItem,
			NavFooter,
			NavTitle
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

<style lang="less">

</style>
