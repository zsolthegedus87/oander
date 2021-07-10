<template lang="pug">
aside(aria-labelledby='asides_title')
	h2#asides_title.sr-only Articles
	section(aria-labelledby='aside_card_title_1', v-for="article in articles")
		img(:src="article.image", alt="")
		h3#aside_card_title_1 {{article.title}}
		a#aside_card_button(href='#' aria-labelledby='aside_card_button aside_card_title_1') Read more
</template>

<script>
import axios from 'axios';

export default {
	name: 'HelloWorld',
	data() {
		return {
			articles: null
		}
	},
	mounted() {
		axios
			.get('data.json')
			.then((response) => {
				this.articles = response.data;
			})
			.catch(error => { console.log('Error happened: ' + error); });
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
