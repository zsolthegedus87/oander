<template lang="pug">
aside(aria-labelledby='asides_title')
	h2#asides_title.sr-only Articles
	b-container
		b-row
			b-col(sm="12", md="4" v-for="(article, index) in articles", :key='`aside_card_${index}`')
				section(:aria-labelledby='`aside_card_title_${index}`')
					img(:src="article.image", alt="")
					.articles-content
						h3(:id='`aside_card_title_${index}`') {{article.title}}
						a.link-primary(href='#' :id='`aside_card_button_${index}`' :aria-labelledby='`aside_card_button_${index} aside_card_title_${index}`') Read more
</template>
<script>
import axios from "axios";

export default {
	name: "Articles",
	data() {
		return {
			articles: null,
		};
	},
	mounted() {
		axios
			.get("data.json")
			.then((response) => {
				this.articles = response.data;
			})
			.catch((error) => {
				console.log("Error happened: " + error);
			});
	},
};
</script>
<style scoped lang="scss">
@import "../common/css/queries.scss";
@import "../common/css/variables.scss";

aside {
	margin: 30px 0;

	@include media(">=desktop") {
		margin: 50px 0;
	}
}

section {
	border: 1px solid rgba(41, 41, 41, 0.1);
	position: relative;

	@include media(">=tablet") {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
}

.col-sm-12.col-md-4:not(:last-of-type) section {
	@include media("<tablet") {
		margin-bottom: 19px;
	}
}

.articles-content {
	margin: 20px;

	@include media(">=tablet") {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		height: 100%;
		margin: 20px 20px 31px;
	}
}

img {
	margin-bottom: 20px;
	max-height: 171px;
	width: 100%;

	@include media(">=desktop") {
		max-height: 250px;
	}
}

h3 {
	color: $heading-main;
	font-size: 14px;
	font-weight: bold;
	line-height: 24px;
	margin-bottom: 35px;

	@include media(">=desktop") {
		margin-bottom: 30px;
	}
}

a {
	margin-top: auto;
}
</style>
