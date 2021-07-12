<template lang="pug">
header.header
	b-container.container--header
		b-row
			b-col
				b-navbar(toggleable='lg')
					b-navbar-brand(href='#')
						img(src="../assets/img/logo.svg", alt="company logo")
					b-navbar-toggle(target='nav-collapse')
					b-collapse#nav-collapse(is-nav)
						b-navbar-nav.ml-auto
							b-nav-item.navbar__item(href='#') Shop
							b-nav-item.navbar__item(href='#') Collection
							b-nav-item.navbar__item(href='#') Accessories
							b-nav-item.navbar__item(href='#') Gift guide
							b-nav-item.navbar__item(href='#') Blog
							b-nav-item.navbar__item(href='#') Contact
</template>
<style scoped lang="scss">
@import "../common/css/queries.scss";

.container--header {
	max-width: 1371px;
}

.header {
	z-index: 1;
}

.navbar-brand img {
	width: 87px;

	@include media(">=desktop") {
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
	@include media("<desktop") {
		background: #fff;
		margin: 5px -20px 0;
		padding: 10px 20px;
	}
}

.navbar {
	background: #fff;
	height: 56px;
	padding: 9px 40px;
	z-index: 1;

	@include media(">=desktop") {
		height: 83px;
	}
}

.navbar__item {
	&:not(:last-of-type) {
		margin-right: 40px;
	}
}

.navbar-nav {
	@include media(">=desktop") {
		align-items: center;
	}
}

.navbar-nav .navbar__item a.nav-link {
	font-size: 18px;
	font-weight: 600;
	color: #2e2e2e;
}
</style>
