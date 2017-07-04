<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <nav-title
                  nav_title="编辑更新日志"
                  placeholder_text="账号名称或账号，回车">
        </nav-title>
        <update-log-edite-item></update-log-edite-item>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateLogEditeItem from '../components/updateLogEdite/UpdateLogEditeItem.vue'
import NavTitle from '../components/common/Title.vue'
export default {
  name: 'user-view',
  components:{
		UpdateLogEditeItem,
		NavTitle
  },
  computed: {
  }
}
</script>

<style lang="stylus">
.user-view
  background-color #fff
  box-sizing border-box
  padding 2em 3em
  h1
    margin 0
    font-size 1.5em
  .meta
    list-style-type none
    padding 0
  .label
    display inline-block
    min-width 4em
  .about
    margin 1em 0
  .links a
    text-decoration underline
</style>
