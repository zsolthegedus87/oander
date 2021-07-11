<template lang="pug">
form.subscribe(@submit.prevent="handleSubmit")
	h3 Subscribe to the newsletter
	.subscribe__row
		.subscribe__col(:class="{ 'has-error': $v.user.firstName.$error }")
			label#subscribe-fname-label.sr-only(for='subscribe-fname-input') First Name
			input#subscribe-fname-input(type='text', v-model="user.firstName", @blur="$v.user.firstName.$touch()", aria-labelledby='subscribe-fname-label', aria-describedby="subscribe-fname-error", placeholder="First name")
			span#subscribe-fname-error.subscribe__error-msg(aria-live="assertive", v-if="$v.user.firstName.$dirty && !$v.user.firstName.required") First name is required
		.subscribe__col(:class="{ 'has-error': $v.user.lastName.$error }")
			label#subscribe-lname-label.sr-only(for='subscribe-lname-input') Last Name
			input#subscribe-lname-input(type='text', v-model="user.lastName", @blur="$v.user.lastName.$touch()", aria-labelledby='subscribe-lname-label', aria-describedby="subscribe-lname-error", placeholder="Last name")
			span#subscribe-lname-error.subscribe__error-msg(aria-live="assertive", v-if="$v.user.lastName.$dirty && !$v.user.lastName.required") Last name is required
	.subscribe__row.subscribe__row--wide(:class="{ 'has-error': $v.user.email.$error }")
		label#subscribe-email-label.sr-only(for='subscribe-email-input') Email address
		input#subscribe-email-input(type='email',v-model="user.email", @blur="$v.user.email.$touch()", aria-labelledby='subscribe-email-label', aria-describedby="subscribe-email-error", placeholder="Email")
		span#subscribe-email-error.subscribe__error-msg(aria-live="assertive", v-if="$v.user.email.$dirty && !$v.user.email.required") Email address is required
		span#subscribe-email-error.subscribe__error-msg(aria-live="assertive", v-if="$v.user.email.$dirty && !$v.user.email.email") Email address is invalid
	.subscribe__row.subscribe__row--wide
		button.btn.btn-primary.subscribe__submit(type="submit") Subscribe
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
			submitted: false,
			hasError: false
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
@import '../common/css/queries.scss';

.subscribe {
	@include media('<tablet') {
		margin-bottom: 30px;
	}
}

.subscribe__row {
	@include media('>=tablet') {
		display: flex;
		flex-direction: row;
		margin-bottom: 18px;
	}

	@include media('>=desktop-lg') {
		justify-content: space-between;
	}
}

.subscribe__row--wide {
	flex-wrap: wrap;
}

.subscribe__col {
	display: flex;
}

input {
	border: 1px solid #dbdbdb;
	font-size: 14px;
	height: 42px;
	padding: 16px 12px;
	width: 100%;

	@include media('<tablet') {
		margin-bottom: 18px;
	}

	@include media('>=desktop') {
		max-width: 192px;
	}
}

.subscribe__row--wide input {
	max-width: none;
	width: 100%;
}

.subscribe__col:first-child input {
	@include media('>=tablet') {
		margin-right: 28px;
	}
}

.has-error input {
	border-color: #ff0000;
}

.subscribe__error-msg {
	color: #ff0000;
	font-size: 14px;
}

.subscribe__row--wide .subscribe__error-msg {
	flex-basis: 100%;
}

.subscribe__submit {
	padding: 7px;
	width: 100%;
}

</style>
