<template>
    <div id="app">
        <transition :name="transitionName">   
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return {transitionName:''}
        },
        watch: {//使用watch 监听$router的变化
            $route(to, from) {
                //如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if(to.meta.index > from.meta.index){
                    //设置动画名称
                    this.transitionName = 'slide-left';
                }else{
                    this.transitionName = 'slide-right';
                }
            }
        }
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
    /*父子路由页面切换动画*/
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

    /*同级路由页面切换动画*/
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: transform .52s;
    }
    .slide-right-enter {
      /*transform: translate3d(-100%, 0, 0);*/
    }
    .slide-right-leave-active {
      transform: translate3d(100%, 0, 0);
    }
    .slide-left-enter {
      transform: translate3d(100%, 0, 0);
    }
  /*  .slide-right-enter-active {
      transform: translate3d(0, 0, 0);
    }*/
    .slide-left-leave-active {
      /*transform: translate3d(-100%, 0, 0);*/
    }
</style>
