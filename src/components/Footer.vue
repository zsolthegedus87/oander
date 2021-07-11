<template lang="pug">
	b-container
		b-row
			b-col
				footer
					b-row
						b-col(sm="12", md="8")
							nav.row(aria-labelledby='footer_title')
								h2#footer_title.sr-only Footer navigations
								b-col(sm="12", md="3")
									h3 About
									ul.list-unstyled
										li
											a(href='#') Introduction
										li
											a(href='#') Loremipsum
										li
											a(href='#') Brands sold
										li
											a(href='#') Conditions of use
										li
											a(href='#') Impressum
										li
											a(href='#') Contact
								b-col(sm="12", md="3")
									h3 Information
									ul.list-unstyled
										li
											a(href='#') Help to purchasing
										li
											a(href='#') Purchasing information
										li
											a(href='#') Pay and delivery
										li
											a(href='#') FAQ
										li
											a(href='#') Data protection
										li
											a(href='#') Conditions
								b-col(sm="12", md="3")
									h3 Follow me!
									ul.list-unstyled
										li
											a(href='#') Newsletter
										li
											a(href='#') Facebook
										li
											a(href='#') Google Plus
										li
											a(href='#') Twitter
						b-col(sm="12", md="4")
							SubscribeForm
</template>

<script>
import SubscribeForm from "./SubscribeForm.vue";

export default {
	name: "Footer",
	components: {
		SubscribeForm
	}
};
</script>
<style scoped lang="scss">
@import '../common/css/queries.scss';

footer {
	@include media('<desktop') {
		text-align: center;
	}
}

nav {
	@include media('<desktop') {
		margin-bottom: 14px;
	}
}

h3 {
	color: #3A3A3A;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 11px;
}

li {
	color: #ABABAB;
	font-size: 14px;
	padding-bottom: 7px;
}
</style>
