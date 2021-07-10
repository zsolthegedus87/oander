<template lang="pug">
	#app
		header.header
			b-container
				b-row
					b-col
						b-navbar(toggleable='lg' type='light')
							b-navbar-brand(href='#')
								img(src="./assets/img/logo.svg")
							b-navbar-toggle(target='nav-collapse')
							b-collapse#nav-collapse(is-nav)
								b-navbar-nav.ml-auto
									b-nav-item(href='#') Shop
									b-nav-item(href='#') Collection
									b-nav-item(href='#') Accessories
									b-nav-item(href='#') Gift guide
									b-nav-item(href='#') Blog
									b-nav-item(href='#') Contact
		main(role='main')
			section.hero(aria-labelledby='hero_title_1')
				//picture(aria-hidden="true")
					source(media="(min-width: 721px)" srcset="./assets/img/hero_watch.png")
					source(media="(max-width: 720px)" srcset="./assets/img/hero_watch_m.png")
					img(src="./assets/img/hero_watch.png" alt="")
				b-container
					b-row
						b-col
							h1#hero_title_1
								| The message is a simple.
								span That's It.
							p
								| This is watch maintains their signature aesthetic as it pushes the boundaries of design possibility. Despite
								| its almost effortless appearance, Seconds is the result of a careful and imaginative creative process.
							a#hero_button(href='#' aria-labelledby='hero_button hero_title_1') Buy now
			section(aria-labelledby='features_title')
				h2#features_title.sr-only Main features
				ul
					li Leather strap
					li Water resistant
					li Spring Drive
					li Warranty
			aside(aria-labelledby='asides_title')
				h2#asides_title.sr-only Articles
				section(aria-labelledby='aside_card_title_1')
					h3#aside_card_title_1 Going Upstream: The Montblanc 1858 Chronograph Tachymeter Limited
					a#aside_card_button(href='#' aria-labelledby='aside_card_button aside_card_title_1') Read more
		HelloWorld

</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld
	}
};
</script>

<style lang="scss">
.hero {
	background: #242123;
}
</style>
