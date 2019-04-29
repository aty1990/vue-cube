<template>
	<cube-page type="button-view" title="about">
		<div slot="content" class="about-content pd-all-10">
			about
		</div>
	</cube-page>	
</template>
<script>
    import CubePage from '@/components/cube-page.vue'
    export default {
        name: 'about',
        components: {
            CubePage
        },
        data () {
            return {}
        },
        methods: {
            
        }
    }
</script>
<style lang="scss">
    .about-content{
        background: yellow;
        height: 100%;
    }
</style>
