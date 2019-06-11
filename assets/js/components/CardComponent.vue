<template>
	<div :class="{
		'components-card': true,
		'has-thumbnail': card.thumbnail,
		'card-boxless': card.style == 'boxless',
		'card-overlays': card.type == 'overlays',
	}">
		<div class="components-card__header" v-show="card.options.header">
			<div class="media">
				<img class="mr-2 rounded-circle align-self-center" width="30" height="30"
				     src="https://randomuser.me/api/portraits/women/21.jpg"
				     alt="...">
				<div class="media-body">
					<h5 class="mt-1 mb-0">Rawan</h5>
				</div>
			</div>
			<div class="action">
				<a href="#!">
					<i class="far fa-bookmark"></i>
				</a>
			</div>
		</div>

		<div class="position-relative">

			<div v-show="card.options.thumbnail"
			     :class="{'components-card__thumbnail': true, 'has-gradient' : card.type == 'show', 'position-relative': true}">
				<img v-show="card.thumbnail" :src="card.thumbnail" class="img-fluid" :alt="card.headline">

				<!--<a href="#!" class="components-card__support badge badge-primary">Primary Support</a>-->

				<div class="components-card__action" v-show="card.type == 'show'">
					<a href="#">
						<i class="fas fa-play"></i>
					</a>
					<div>
						<strong class="d-block text-light fwb" v-show="card.episodes">{{ card.episodes }}</strong>
						<span class="d-block text-light" v-show="card.duration">{{ card.duration }}</span>
					</div>
				</div>
			</div>

			<div v-show="card.options.body" class="components-card__body">
				<h3 class="components-card__title" v-show="card.headline">
					<a href="#!">{{ card.headline }}</a>
				</h3>
				<h5 class="components-card__subtitle" v-show="card.subtitle">{{ card.subtitle}}</h5>
				<p class="components-card__text mb-0" v-show="card.bodyText">{{ card.bodyText }}</p>
				<a :href="card.CTAURL" class="btn-link mt-2 d-block" v-show="card.CTAText">{{card.CTAText}}</a>
			</div>

		</div>

		<div class="components-card__footer clearfix" v-show="card.options.footer">
			<a href="#!" class="btn btn-dark float-left">Read More</a>

			<div class="action">
				<a href="#!">
					<i class="far fa-share-square"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        props: ['card'],
    }
</script>