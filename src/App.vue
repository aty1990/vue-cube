<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
    html,body,#app{
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
    }
    .page-move-enter, .page-move-leave-active{
        transform: translate(100%, 0)
    }
    .page-move-enter-active, .page-move-leave-active{
        transition: transform .52s
    }
    .page-up-enter, .page-up-leave-active{
        transform: translate(0,100%)
    }
    .page-up-enter-active, .page-up-leave-active{
        transition: transform .52s
    }
</style>
