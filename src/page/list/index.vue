<template>
    <transition name="page-move" @after-enter="afterEnter" @after-leave="afterLeave">
        <cube-page type="button-view" title="list">
    		<div slot="content" class="list-content pd-all-10">
    			<cube-button @click="showTimePicker">TimePicker</cube-button>
                <cube-scroll
                    ref="scroll"
                    :data="items"
                    direction="horizontal"
                    class="horizontal-scroll-list-wrap">
                    <ul class="list-wrapper flex">
                        <li v-for="item in items" class="list-item flex">{{ item }}</li>
                    </ul>
                </cube-scroll>
    		</div>
    	</cube-page>
    </transition>
</template>
<script>
    import CubeView from '@/components/cube-view.vue' 
    import CubePage from '@/components/cube-page.vue'
    export default {
        name: 'list',
        components: {
            CubeView,
            CubePage
        },
        data () {
            return {
                items: [1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15]
            }
        },
        methods: {
            showTimePicker(){
                this.$createTimePicker({
                    showNow: true,
                    minuteStep: 5,
                    delay: 15,
                    onSelect: (selectedTime, selectedText, formatedTime) => {
                        this.$createDialog({
                            type: 'warn',
                            title: `selected time: ${selectedTime}`,
                            content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
                            icon: 'cubeic-alert'
                        }).show()
                    },
                    onCancel: () => {
                        this.$createToast({
                            type: 'correct',
                            txt: 'Picker canceled',
                            time: 1000
                        }).show()
                    }
                }).show() 
            },
            afterEnter(){
                console.log("afterEnter")
            },
            afterLeave(){
                console.log("afterLeave")
            }
        }
    }
</script>
<style lang="scss">
    .list-content{
        .horizontal-scroll-list-wrap{
            border: 1px solid rgba(0, 0, 0, 0.1);
            margin-top: 20px;
            padding: 0 10px;
            .cube-scroll-content{
                display: inline-block;
            }

        }
        .list-wrapper{
            padding: 0 10px;
            line-height: 60px;
            white-space: nowrap;
        }
        .list-item{
            width: 80px;
            height: 100%;
            margin-right: 10px;
            background: red;
        }    
    }
    
</style>
