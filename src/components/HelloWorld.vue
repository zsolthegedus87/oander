<template lang="pug">
	div
		header
			a(href='#')
				| svg logo here
			nav(role='navigation')
				ul
					li
						a(href='#') Shop
						a(href='#') Collection
						a(href='#') Accessories
						a(href='#') Gift guide
						a(href='#') Blog
						a(href='#') Contact
		main(role='main')
			section(aria-labelledby='hero_title_1')
				h1#hero_title_1
					| The message is a simple.
					span That's It.
				p
					| This is watch maintains their signature aesthetic as it pushes the boundaries of design possibility. Despite
					| its almost effortless appearance, Seconds is the result of a careful and imaginative creative process.
				a#hero_button(href='#' aria-labelledby='hero_button hero_title_1') Buy now
				picture
					| picture background
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
		footer
			nav(aria-labelledby='footer_title')
				h2#footer_title Footer navigations
				h3 About
				ul
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
				h3 About
				ul
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
				h3 Information
				ul
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
				h3 Follow me!
				ul
					li
						a(href='#') Newsletter
					li
						a(href='#') Facebook
					li
						a(href='#') Google Plus
					li
						a(href='#') Twitter
				//form(@submit.prevent='handleSubmit')
					.form-group
						label(for='firstName') First Name
						input#firstName.form-control(type='text' v-model='user.firstName' name='firstName' :class="{ 'is-invalid': submitted && $v.user.firstName.$error }")
						.invalid-feedback(v-if='submitted && !$v.user.firstName.required') First Name is required
					.form-group
						label(for='lastName') Last Name
						input#lastName.form-control(type='text' v-model='user.lastName' name='lastName' :class="{ 'is-invalid': submitted && $v.user.lastName.$error }")
						.invalid-feedback(v-if='submitted && !$v.user.lastName.required') Last Name is required
					.form-group
						label(for='email') Email
						input#email.form-control(type='email' v-model='user.email' name='email' :class="{ 'is-invalid': submitted && $v.user.email.$error }")
						.invalid-feedback(v-if='submitted && $v.user.email.$error')
							span(v-if='!$v.user.email.required') Email is required
							span(v-if='!$v.user.email.email') Email is invalid
					.form-group
						button.btn.btn-primary Register

			form(@submit.prevent="handleSubmit")
					h3 Subscribe to the newsletter
					div
						label#subscribe-fname-label(for='subscribe-fname-input') First Name
						input#subscribe-fname-input(type='text', v-model="user.firstName", @blur="$v.user.firstName.$touch()", aria-labelledby='subscribe-fname-label', aria-describedby="subscribe-fname-error")
						span#subscribe-fname-error(aria-live="assertive", v-if="$v.user.firstName.$dirty && !$v.user.firstName.required") First Name is required
					div
						label#subscribe-lname-label(for='subscribe-lname-input') Last Name
						input#subscribe-lname-input(type='text', v-model="user.lastName", @blur="$v.user.lastName.$touch()", aria-labelledby='subscribe-lname-label', aria-describedby="subscribe-lname-error")
						span#subscribe-lname-error(aria-live="assertive", v-if="$v.user.lastName.$dirty && !$v.user.lastName.required") Last Name is required
					div
						label#subscribe-email-label(for='subscribe-email-input') Email address
						input#subscribe-email-input(type='email',v-model="user.email", @blur="$v.user.email.$touch()", aria-labelledby='subscribe-email-label', aria-describedby="subscribe-email-error")
						span#subscribe-email-error(aria-live="assertive", v-if="$v.user.email.$dirty && !$v.user.email.required") Email address is required
						span#subscribe-email-error(aria-live="assertive", v-if="$v.user.email.$dirty && !$v.user.email.email") Email address is invalid
					div
						button(type="submit") Subsribe
</template>

<script>

import { required, email } from "vuelidate/lib/validators";

export default {
	name: 'HelloWorld',
	data() {
		return {
			user: {
				firstName: "",
				lastName: "",
				email: ""
			},
			submitted: false
		}
	},
	props: {
		msg: String
	},
	validations: {
		user: {
			firstName: { required },
			lastName: { required },
			email: { required, email }
		}
	},
	methods: {
		handleSubmit() {
			this.submitted = true;
			// stop here if form is invalid
			this.$v.$touch();
			if (this.$v.$invalid) {
				return;
			}
			alert("SUCCESS!!" + JSON.stringify(this.user));
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
	border: 1px;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
