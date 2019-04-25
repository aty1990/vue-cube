<template>
    <div>
        <div class="home">
            <cube-button :primary="true" @click.native="list">list</cube-button>
            <cube-button :primary="true" @click.native="tab">tab</cube-button>    
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
            list(){
                this.$router.push("/list")
            },
            tab(){
                this.$router.push("/tab")
            }
        }
    }
</script>
<style lang="scss" scoped>
    .home{
        margin:0 10px;
        position: fixed;
        top:0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
    }
    .cube-btn{
        margin-top: 10px;
    }
</style>
