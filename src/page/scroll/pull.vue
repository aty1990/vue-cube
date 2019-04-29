<template>
	<transition name="page-move">
	  	<cube-page type="scroll-view" title="Scroll" class="jd">
		    <div slot="content" class="scroll-list-wrap">
		     <!--  <header ref="topHeader"><img src="https://dpubstatic.udache.com/static/dpubimg/_tEw0ofPJ9/jd_header2.png"></header> -->
		      <cube-scroll
		        ref="scroll"
		        :data="[]"
		        :scroll-events="['scroll']"
		        :options="options"
		        @scroll="onScrollHandle"
		        @pulling-down="onPullingDown">
		        <ul class="ul">
					<li v-for="item in items" class="item">{{item.label}}</li>
				</ul>
		        <template slot="pulldown" slot-scope="props">
		          <div
		              v-if="props.pullDownRefresh"
		              class="cube-pulldown-wrapper"
		              :style="pullDownStyle">
		            <div class="pulldown-content">
		              <img src="https://dpubstatic.udache.com/static/dpubimg/7d895941-251f-471f-abc4-3eca25762465.jpg" @load="onImgLoad">
		              <span v-if="props.beforePullDown">{{ pullDownTip }}</span>
		              <template v-else>
		                <span v-if="props.isPullingDown">正在更新...</span>
		                <span v-else>更新成功</span>
		              </template>
		            </div>
		          </div>
		        </template>
		      </cube-scroll>
		    </div>
	  	</cube-page>
  	</transition>
</template>
<script>
	import CubePage from '@/components/cube-page.vue'
	export default {
	  	data() {
		    return {
		      	options: {
			        pullDownRefresh: {
			          threshold: 60,
			          stop: 40,
			          txt: '更新成功'
			        }
		      	},
		      	pullDownY: 0,
		      	pullDownStyle: '',
		      	opacityStyle: '',
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
		    }
	  	},
	  	components: {
	    	CubePage
	  	},
	  	computed: {
		    pullDownTip() {
		      	if (this.pullDownY <= 60) {
		        	return '下拉刷新...'
		      	} else if (this.pullDownY <= 90) {
		        	return '继续下拉有惊喜...'
		      	} else {
		        	return '松手得惊喜！'
		      	}
		    }
	  	},
	  	methods: {
		    onScrollHandle(pos) {
		      	this.pullDownY = pos.y
		      	if (pos.y > 0) {
			        this.pullDownStyle = `top:${pos.y}px`
		      	}
		    },
		    onPullingDown() {
		      	setTimeout(() => {
		        	this.$refs.scroll.forceUpdate()
		      	}, 1000)
		    },
		    onImgLoad() {
		      	this.$refs.scroll.refresh()
		    }
	  	}
	}
</script>
<style lang="scss">
	.jd{
		.content{
			margin: 0 !important;
	    	height: 100%;
		}
		.scroll-list-wrap{
			position: relative;
		    height: 100%;
		    border: 1px solid rgba(0, 0, 0, 0.1);
		    border-radius: 5px;
		    transform: rotate(0deg); 
		    overflow: hidden;	
		}
		.item{
			display: flex;
		    padding: 18px;
		    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
		}
		.cube-pulldown-wrapper{
			transform: translateY(-100%);
			top:0;
      		line-height: 0;
      		.pulldown-content{
      			width: 100%;
      		}
      		span{
      			position: absolute;
	          	bottom: 15px;
	          	left: 0;
	          	right: 0;
	          	margin: auto;
	          	width: 200px;
	          	text-align: center;
	          	color: #eee;
	          	font-size: 14px;
      		}
		}
		.surprise-page{
			position:absolute;
		    top: 0;
		    bottom: 0;
		    right: 0;
		    left: 0;
		    z-index: 33;
		    line-height: 0;
		    img{
		    	height: 100%;
		      	width: 100%;
		    }
		}
	}
</style>
