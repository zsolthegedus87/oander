<template lang="pug">
	#app
		header.header
			b-container
				b-row
					b-col
						b-navbar(toggleable='lg')
							b-navbar-brand(href='#')
								img(src="./assets/img/logo.svg", alt="company logo")
							b-navbar-toggle(target='nav-collapse')
							b-collapse#nav-collapse(is-nav)
								b-navbar-nav.ml-auto
									b-nav-item.navbar__item(href='#') Shop
									b-nav-item.navbar__item(href='#') Collection
									b-nav-item.navbar__item(href='#') Accessories
									b-nav-item.navbar__item(href='#') Gift guide
									b-nav-item.navbar__item(href='#') Blog
									b-nav-item.navbar__item(href='#') Contact
		main(role='main')
			section.hero(aria-labelledby='hero_title_1')
				b-container
					b-row
						b-col
							.hero-content
								h1#hero_title_1.hero__title
									| The message is a simple.
									span  That's It.
								p.hero__lead.d-none.d-md-block
									| This is watch maintains their signature aesthetic as it pushes the boundaries of design possibility. Despite
									| its almost effortless appearance, Seconds is the result of a careful and imaginative creative process.
								a#hero_button.btn.btn-primary(href='#' aria-labelledby='hero_button hero_title_1') Buy now
							.hero-picture
								picture(aria-hidden="true")
									source(media="(min-width: 992px)" srcset="./assets/img/hero_watch.png")
									source(media="(max-width: 991px)" srcset="./assets/img/hero_watch_m.png")
									img(src="./assets/img/hero_watch.png" alt="")
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
@import './common/css/queries.scss';

.header {
	z-index: 1;
}

.navbar-brand img {
	width: 87px;

	@include media('>=desktop') {
		width: 120px;
	}
}

button.navbar-toggler {
	border: none;
}

button.navbar-toggler .navbar-toggler-icon {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath stroke='%233A3A3A' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-collapse {
	@include media('<tablet') {
		background: #fff;
		margin: 5px -20px 0;
		padding: 10px 20px;
	}
}

.navbar {
	background: #fff;
	height: 56px;
	padding: 0 40px;
	z-index: 1;

	@include media('>=desktop') {
		height: 83px;
	}
}

.navbar__item {
	&:not(:last-of-type) {
		margin-right: 40px;
	}
}

.navbar-nav .navbar__item a.nav-link {
	font-size: 18px;
	font-weight: 600;
	color: #2E2E2E;
}

.hero {
	background: #242123;
	overflow: hidden;
	padding: 59px 20px 58px;
	position: relative;
	z-index: 0;

	@include media('>=desktop') {
		margin-top: -83px;
		padding: 215px 0 125px;
	}

	&::after {
		background-color: #ededed;
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100% - 50px);
		height: 700px;
		z-index: -1;

		@include media('>=desktop') {
			background: url("./assets/img/background_pattern.png") no-repeat;
			width: 100%;
			left: -44%;
		}
	}
}

.hero-content {
	max-width: 460px;

	@include media('>=desktop') {
		margin: 0 41px;
	}
}

.hero-picture {
	position: absolute;
	top: 50%;
	right: -20px;
	transform: translateY(-50%);

	@include media('>=desktop') {
		left: 41%;
		top: 50%;
		transform: translateY(-50%);
	}
}

.hero__title {
	color: #3A3A3A;
	font-size: 28px;
	font-weight: bold;
	line-height: 38px;
	margin-bottom: 30px;

	@include media('>=desktop') {
		font-size: 50px;
		line-height: 62px;
	}
}

.hero__title span {
	color: #C4A37B;

	@include media('<desktop') {
		display: block;
	}
}

.hero__lead {
	color: #5A5A5A;
	line-height: 28px;
	margin-bottom: 40px;
	max-width: 440px;
}

</style>
