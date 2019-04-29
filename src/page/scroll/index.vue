<template>
	<transition name="page-move">
	  	<cube-page type="scroll-view" title="Scroll">
		    <div slot="content" class="scroll-wrapper">
		        <div class="scroll-list-wrap">
		          	<cube-scroll
			            ref="scroll"
			            :options="options"
			            @pulling-up="onPullingUp"
			            :data="items">
						<ul class="ul">
							<li v-for="item in items" class="item">{{item.label}}</li>
						</ul>
		          	</cube-scroll>
		        </div>
		    </div>
	  	</cube-page>
  	</transition>
</template>
<script>
	import Vue from 'vue'
	import CubePage from '@/components/cube-page.vue'
	export default {
	  data() {
	    return {
	    	pullUpLoad: true,
	    	options: {
	          	pullUpLoad: true
	        },
	      	items: [
	      		{index:1,label:"list-1",date:Date.now()},
	      		{index:2,label:"list-2",date:Date.now()},
	      		{index:3,label:"list-3",date:Date.now()},
	      		{index:4,label:"list-4",date:Date.now()},
	      		{index:5,label:"list-5",date:Date.now()},
	      		{index:6,label:"list-6",date:Date.now()},
	      		{index:7,label:"list-7",date:Date.now()},
	      		{index:8,label:"list-8",date:Date.now()},
	      		{index:9,label:"list-9",date:Date.now()},
	      		{index:10,label:"list-10",date:Date.now()},
	      		{index:11,label:"list-11",date:Date.now()},
	      		{index:12,label:"list-12",date:Date.now()},
	      		{index:13,label:"list-13",date:Date.now()},
	      		{index:14,label:"list-14",date:Date.now()},
	      		{index:15,label:"list-15",date:Date.now()},
	      		{index:16,label:"list-16",date:Date.now()},
	      		{index:17,label:"list-17",date:Date.now()},
	      		{index:18,label:"list-18",date:Date.now()},
	      	],
	      	scrollbar: true,
	      	scrollbarFade: true,
	      	startY: 0
	    }
	  },
	  watch: {
	    startY() {
	      this.rebuildScroll()
	    }
	  },
	  methods: {
	    rebuildScroll() {
	      Vue.nextTick(() => {
	        this.$refs.scroll.destroy()
	        this.$refs.scroll.initScroll()
	      })
	    },
	    onPullingUp() {
	      	//模拟更新数据
	      	setTimeout(() => {
	        	this.$refs.scroll.forceUpdate()
	      	}, 1000)
	    }
	  },
	  components: {
	    CubePage
	  }
	}
</script>

<style scoped>
	.scroll-wrapper {
	  	height: 100%;
	  	overflow: hidden;
	}
	.scroll-list-wrap{
		height: 100%;
		background: #fff;
	}
	.item{
		display: flex;
	    padding: 18px;
	    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}
</style>
