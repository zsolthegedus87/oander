<template lang="pug">
section.features(aria-labelledby='features_title')
	h2#features_title.sr-only Main features
	b-container
		ul.features-list.row
			li.features-list__item.col-6.col-md-3.d-flex.justify-content-center.align-items-center.flex-wrap
				span.features-list__item-icon
					img(src="../assets/img/leather_icon.svg", alt="")
				span Leather strap
			li.features-list__item.col-6.col-md-3.d-flex.justify-content-center.align-items-center.flex-wrap
				span.features-list__item-icon
					img(src="../assets/img/water_resistant.svg", alt="")
				span Water resistant
			li.features-list__item.col-6.col-md-3.d-flex.justify-content-center.align-items-center.flex-wrap
				span.features-list__item-icon
					img(src="../assets/img/spring_drive_icon.svg", alt="")
				span Spring Drive
			li.features-list__item.col-6.col-md-3.d-flex.justify-content-center.align-items-center.flex-wrap
				span.features-list__item-icon
					img(src="../assets/img/warranty_icon.svg", alt="")
				span Warranty
</template>
<style scoped lang="scss">
@import "../common/css/queries.scss";
@import "../common/css/variables.scss";

.features {
	background-color: #292929;
}

.features-list {
	list-style: none;
	padding: 0;
}

.features-list__item {
	color: #fff;
	font-weight: 600;
	font-size: 18px;
	padding: 38px;
	text-align: center;
	position: relative;

	&:not(:first-of-type)::after {
		@include media(">=tablet") {
			content: "";
			background: $ui-secondary;
			position: absolute;
			top: 38px;
			left: 0;
			width: 1px;
			height: calc(100% - 76px);
		}
	}

	&:nth-child(n + 1) {
		@include media("<tablet") {
			border-bottom: 1px solid $ui-secondary;
		}
	}

	&:nth-child(2n + 1) {
		@include media("<tablet") {
			border-right: 1px solid $ui-secondary;
		}
	}
}

.features-list__item-icon {
	flex: 100%;
	margin-bottom: 20px;
}
</style>
