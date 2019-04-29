<template>
	<cube-page type="about-page" title="about">
		<div slot="content" class="about-content pd-all-10">
			<cube-button :primary="true" @click.native="toPage('we')">we</cube-button>
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
            toPage(router){
                this.$router.push(router)
            }
        }
    }
</script>
<style lang="scss">
    .about-page{
        z-index: 12;
    }
    .about-content{
        background: yellow;
        height: 100%;
    }
</style>
