<template lang="pug">
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
	name: "SubscribeForm",
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
<style scoped lang="scss">

</style>
