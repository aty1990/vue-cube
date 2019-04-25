import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/page/tab/index'
import Home from '@/page/home/home'
import List from '@/page/list/index'

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
	      		{ path:"/tab",name:"tab",component:Tab }
	      	]
	    }
  	]
})
