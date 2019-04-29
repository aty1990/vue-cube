<template>
	<cube-page type="we-page" title="we" zIndex="13">
		<div slot="content" class="we-content pd-all-10">
			we
		</div>
	</cube-page>	
</template>
<script>
    import CubePage from '@/components/cube-page.vue'
    export default {
        name: 'we',
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
    .we-page{
        .we-content{
	        background: green;
	        height: 100%;
	    }
    }
</style>
