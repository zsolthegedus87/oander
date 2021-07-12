<template lang="pug">
div
	b-container
		b-row
			b-col
				footer
					b-row
						b-col(sm="12", md="6", lg="8")
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
						b-col(sm="12", md="6", lg="4")
							SubscribeForm
	a.scroll-top(href="#", aria-hidden="true")
</template>

<script>
import SubscribeForm from "./SubscribeForm.vue";

export default {
	name: "Footer",
	components: {
		SubscribeForm,
	},
};
</script>
<style scoped lang="scss">
@import "../common/css/queries.scss";
@import "../common/css/variables.scss";

footer {
	@include media("<tablet") {
		text-align: center;
	}
}

nav {
	@include media("<desktop") {
		margin-bottom: 14px;
	}
}

li {
	color: #ababab;
	font-size: 14px;
	padding-bottom: 7px;
}

.scroll-top {
	align-content: center;
	background: no-repeat center center
		url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 330 330' style='enable-background:new 0 0 330 330;' xml:space='preserve' transform='rotate(180)'%3E%3Cpath id='XMLID_102_' d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z' fill='%23C4A37B'/%3E%3C/svg%3E");
	background-size: 36px 18px;
	border-top: 1px solid $border-primary;
	display: flex;
	justify-content: center;
	padding: 20px 0;
	width: 100%;
}
</style>
