import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/page/tab/index'
import Home from '@/page/home/home'
import List from '@/page/list/index'
import Scroll from '@/page/scroll/index'
import Slide from '@/page/slide/index'
import Pull from '@/page/scroll/pull'
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
	      	component: Home,
	      	children:[
	      		{ path:"/list",name:"list",component:List },
	      		{ path:"/tab",name:"tab",component:Tab },
	      		{ path:"/scroll",name:"scroll",component:Scroll },
	      		{ path:"/slide",name:"slide",component:Slide },
	      		{ path:"/pull",name:"pull",component:Pull },
	      	]
	    }
  	]
})
