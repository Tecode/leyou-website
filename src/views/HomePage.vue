<template>
    <div class="home_page">
        <banner></banner>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <about-me></about-me>
                </div>
                <div class="col-md-8 col-lg-9">
                    <all-contents></all-contents>
                </div>
                <div class="col-md-4 col-lg-3">3</div>
                <div class="col-md-12">
                    <share-module title='推荐模板'></share-module>
                </div>
                <div class="col-md-12">
                    <source-code title='GitHub源码项目'></source-code>
                </div>
            </div>
        </div>
        <footer-custom></footer-custom>
    </div>
</template>

<script>
	import {watchList} from '../api'
	import Banner from '../components/common/Banner.vue'
	import FooterCustom from '../components/common/Footer.vue'
	import AboutMe from '../components/homePage/AboutMe.vue'
	import AllContents from '../components/homePage/AllContents.vue'
	import ShareModule from '../components/homePage/ShareModule.vue'
    import SourceCode from '../components/homePage/SourceCode.vue'

	export default {
		name: 'home-page',
		components: {
			AboutMe,
			Banner,
			AllContents,
			FooterCustom,
			ShareModule,
			SourceCode,
		},
		data () {
			return {
				currentTime: 'slide-right',
			}
		},

		computed: {},
		watch: {
			page (to, from) {
				this.loadItems(to, from)
			}
		},

		methods: {
			loadItems (to = this.page, from = -1) {
				this.$bar.start()
				this.$store.dispatch('FETCH_LIST_DATA', {
					type: this.type
				}).then(() => {
					if (this.page < 0 || this.page > this.maxPage) {
						this.$router.replace(`/${this.type}/1`)
						return
					}
					this.transition = from === -1
					? null
					: to > from ? 'slide-left' : 'slide-right'
					this.displayedPage = to
					this.displayedItems = this.$store.getters.activeItems
					this.$bar.finish()
				})
			}
		}
	}
</script>

<style lang="less">
    @import "../lib/style/color";

    .home_page {

    }

</style>
