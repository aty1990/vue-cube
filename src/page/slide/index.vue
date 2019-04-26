<template>
  	<cube-page type="scroll-view" title="slide">
	    <div slot="content" class="scroll-wrapper">
	        <div class="slide-container-v">
		        <cube-slide
		          :data="items"
		          :loop="loop"
		          :showDots="false"
		          direction="vertical"
		          @change="change">
		          <div v-for="img in items">
		          		<img :src="img.image" width="100%" height="100%">
		          </div>
		        </cube-slide>
		    </div>
	    </div>
  	</cube-page>
</template>
<script>
	import Vue from 'vue'
	import CubePage from '@/components/cube-page.vue'
	export default {
	  data() {
	    return {
	      	items: [
	          {
	            url: 'http://www.didichuxing.com/',
	            image: 'https://cms.sgmlink.com/ibuick/cdn/oss/1342/1.jpg'
	          }, {
	            url: 'http://www.didichuxing.com/',
	            image: 'https://cms.sgmlink.com/ibuick/cdn/oss/1342/2.jpg'
	          },
	          {
	            url: 'http://www.didichuxing.com/',
	            image: 'https://cms.sgmlink.com/ibuick/cdn/oss/1342/3.jpg'
	          }, {
	            url: 'http://www.didichuxing.com/',
	            image: 'https://cms.sgmlink.com/ibuick/cdn/oss/1342/4.jpg'
	          },
	          {
	            url: 'http://www.didichuxing.com/',
	            image: 'https://cms.sgmlink.com/ibuick/cdn/oss/1342/5.jpg'
	          }
	        ],
	        loop: false
		}
	  },
	  
	  methods: {
	    change(current) {
        	console.log('当前轮播图序号为:' + current)
      	}
	  },
	  components: {
	    CubePage
	  }
	}
</script>

<style scoped>
	.scroll-wrapper{
		height: 100%;
	}
	.slide-container-v{
		height: 100%;
	}
</style>
