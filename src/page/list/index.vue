<template>
    <cube-page type="button-view" title="list">
		<div slot="content" class="list-content">
			list
		</div>
	</cube-page>
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
            return {}
        },
        methods: {
            
        }
    }
</script>
<style lang="scss" scoped>
   
</style>
