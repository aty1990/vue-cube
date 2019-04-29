<template>
	<cube-page type="button-view" title="help">
		<div slot="content" class="help-content pd-all-10">
			help
		</div>
	</cube-page>	
</template>
<script>
    import CubePage from '@/components/cube-page.vue'
    export default {
        name: 'list',
        components: {
            CubePage
        },
        data () {
            return {
            }
        },
        methods: {
            
        }
    }
</script>
<style lang="scss">
    .help-content{
        background: pink;
        height: 100%;
    }
</style>
