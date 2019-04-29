<template>
  	<div class="cube-page" :class="type">
	    <header class="header">
	      	<h1>{{title}}</h1>
            <span @click="back" class="cubeic-back" v-show="title!='home'">
            </span>
	    </header>
	    <div class="wrapper">
	      	<section v-show="desc" class="desc"><slot name="desc">{{desc}}</slot></section>
	      	<slot name="content">{{content}}</slot>
	    </div>
  	</div>
</template>

<script>
  export default {
    props: {
      	title: {
        	type: String,
        	default: '',
        	required: true
      	},
      	type: {
        	type: String,
        	default: ''
      	},
      	desc: {
        	type: String,
        	default: ''
      	},
      	content: {
        	type: String,
        	default: ''
      	}
    },
    methods: {
      	back() {
        	this.$router.back()
      	}
    }
  }
</script>
<style>
    .cube-page{
      	position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #efeff4;
        overflow: hidden;
    }
    .header{
    	position: relative;
	    height: 44px;
	    line-height: 44px;
	    text-align: center;
	    background-color: #edf0f4;
	    box-shadow: 0 1px 6px #ccc;
	    -webkit-backface-visibility: hidden;
	    backface-visibility: hidden;
	   z-index: 5;
    }
    h1{
      	font-size: 16px;
        font-weight: 700;
    }
    .cubeic-back{
      	position: absolute;
        top: 0;
        left: 0;
        padding: 0 15px;
        color: #fc9153;
    }
    .cube-page>.wrapper{
    	height: calc(100% - 44px);
      	overflow-x: hidden;
      	overflow-y: hidden;
    }
      
    .desc{
      	padding: 10px;
        margin: 10px 0;
        line-height: 20px;
        font-size: 14px;
    }
    .content{
      	margin: 10px;
    }
</style>
