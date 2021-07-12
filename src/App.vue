<template lang="pug">
	#app
		Header
		main(role='main')
			Hero
			Features
		Articles
		hr
		Footer
</template>
<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import Articles from "./components/Articles.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		Header,
		Hero,
		Features,
		Articles,
		Footer,
	},
};
</script>
