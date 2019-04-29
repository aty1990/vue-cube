<template>
    <div class="home">
        <div class="home-content">
            <cube-button :primary="true" @click.native="toPage('list')">list</cube-button>
            <cube-button :primary="true" @click.native="toPage('tab')">tab</cube-button>    
            <cube-button :primary="true" @click.native="toPage('scroll')">scroll</cube-button>    
            <cube-button :primary="true" @click.native="toPage('slide')">slide</cube-button>    
            <cube-button :primary="true" @click.native="toPage('pull')">pull</cube-button>    
        </div>
        <cube-view></cube-view>  
    </div>  
</template>
<script>
    import CubeView from '@/components/cube-view.vue'
    export default {
        name: 'home',
        components: {
            CubeView
        },
        data () {
            return {
            }
        },
        methods: {
            toPage(router){
                this.$router.push(router)
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/mixin';
    .home{
        position: fixed;
        top:0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
    }
    .home-content{
        width: 100%;
        height: 100%;
        overflow-y:auto;
        padding:0 px2vw(16); 
    }
    .cube-btn{
        margin-top: 10px;
    }
</style>
