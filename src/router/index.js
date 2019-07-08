import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/page/tab/index'
import Home from '@/page/home/home'
import List from '@/page/list/index'
import Scroll from '@/page/scroll/index'
import Slide from '@/page/slide/index'
import Pull from '@/page/scroll/pull'
import Help from '@/page/help/index'
import About from '@/page/help/about'
import We from '@/page/help/we'
Vue.use(Router)
export default new Router({
  	routes: [
  		{
	      	path: '*',
	      	redirect: '/home'
	    },
	    {
	      	path: '/home',
	      	name: 'home',
	      	meta:{index:0},
	      	component: Home,
	      	children:[
	      		{ path:"/list",name:"list",component:List,meta:{index:0} },
	      		{ path:"/tab",name:"tab",component:Tab,meta:{index:0} },
	      		{ path:"/scroll",name:"scroll",component:Scroll,meta:{index:0} },
	      		{ path:"/slide",name:"slide",component:Slide,meta:{index:0} },
	      		{ path:"/pull",name:"pull",component:Pull,meta:{index:0} }
	      	]
	    },
	    {
	    	path: '/help',
	      	name: 'help',
	      	meta:{index:1},
	      	component: Help,
	    },
	    { 
	    	path:"/about",
	    	name:"about",
	    	meta:{index:2},
	    	component:About 
	    },
	    { 
	    	path:"/we",
	    	name:"we",
	    	meta:{index:3},
	    	component:We 
	    },
  	]
})
