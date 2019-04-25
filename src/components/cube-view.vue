<template>
    <transition :name="transitionName">
        <router-view></router-view>
    </transition>
</template>
<script>
    export default {
        props: {
            animateName: {
                type: String,
                default: "page-move",
                required: true
            }
        },
        data(){
            return {
                transitionName:this.animateName
            }
        }
    }
</script>

<style>
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