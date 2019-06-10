<template>
	<div :class="{
		'components-card': true,
		'has-thumbnail': card.thumbnail,
		'card-boxed': card.style == 'boxed'
	}">
		<div class="components-card__header">
			<div :class="{'components-card__thumbnail': true, 'has-gradient' : card.type == 'show'}">
				<img v-show="card.thumbnail" :src="card.thumbnail" class="img-fluid" :alt="card.headline">
			</div>
			<a href="#!" class="components-card__support badge badge-primary">Primary Support</a>

			<div class="components-card__action" v-show="card.type == 'show'">
				<a href="#">
					<i class="fas fa-play"></i>
				</a>
				<div>
					<strong class="d-block text-primary" v-show="card.episodes">{{ card.episodes }}</strong>
					<span class="d-block" v-show="card.duration">{{ card.duration }}</span>
				</div>
			</div>
		</div>

		<div class="components-card__body">
			<h3 class="components-card__title" v-show="card.headline">
				<a href="#!">{{ card.headline }}</a>
			</h3>
			<h5 class="components-card__subtitle" v-show="card.subtitle">{{ card.subtitle}}</h5>
			<p class="components-card__text mb-0" v-show="card.bodyText">{{ card.bodyText }}</p>
			<a :href="card.CTAURL" class="btn btn-primary" v-show="card.CTAText" target="_blank">{{card.CTAText}}</a>
			<!--
			<ul class="meta">
				<li>
					<a href="#">Category</a>
				</li>
				<li>
					<time>Timestamp</time>
				</li>
			</ul>
			-->
		</div>
	</div>
</template>

<script>
    export default {
        props: ['card'],
    }
</script>