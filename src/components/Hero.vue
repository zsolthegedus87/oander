<template lang="pug">
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
				.hero__picture
					picture(aria-hidden="true")
						source(media="(min-width: 992px)" srcset="../assets/img/hero_watch.png")
						source(media="(max-width: 991px)" srcset="../assets/img/hero_watch_m.png")
						img(src="../assets/img/hero_watch.png" alt="")
</template>
<style lang="scss">
@import '../common/css/queries.scss';
@import '../common/css/variables.scss';

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
			background: url("../assets/img/background_pattern.png") no-repeat;
			width: 100%;
			left: -44%;
		}
	}
}

.hero-content {
	max-width: 460px;
	@include media('<tablet') {
		margin-right: 80px;
	}
}

.hero__picture {
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
	color: $ui-primary;
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
	color: rgba(196, 163, 123, .99);

	@include media('<desktop') {
		display: block;
	}
}

.hero__lead {
	color: $heading-main;
	line-height: 28px;
	margin-bottom: 40px;
	max-width: 440px;
}
</style>
