<template>
	<cube-page type="button-view" title="help">
		<div slot="content" class="help-content pd-all-10">
			<cube-button :primary="true" @click.native="toPage('about')">list</cube-button>
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
            toPage(router){
                this.$router.push(router)
            }
        }
    }
</script>
<style lang="scss">
    .help-content{
        background: pink;
        height: 100%;
    }
</style>
