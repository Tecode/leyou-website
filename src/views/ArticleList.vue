<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <single-item></single-item>
                <single-item></single-item>
                <single-item></single-item>
                <single-item></single-item>
                <single-item></single-item>
                <single-item></single-item>
                <single-item></single-item>
                <single-item></single-item>
            </div>
        </div>
    </div>
</template>

<script>
    import SingleItem from '../components/common/SingleItem.vue'
	export default {
		name: 'comment',
		props: ['id'],
		components:{
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

<style lang="less">

</style>
