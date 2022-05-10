<template>
	<Navbar />
	<HeroSection />
	<EpisodesSection />
	<AboutSection />
	<TestimonialsSection />
  <FooterSection/>
</template>

<script>
import HeroSection from "./sections/Hero.vue"
import EpisodesSection from "./sections/Episodes.vue"
import AboutSection from "./sections/About.vue"
import TestimonialsSection from "./sections/Testimonials.vue"
import FooterSection from "./sections/Footer.vue"
import Navbar from "./components/navbar.vue"

export default {
	components: {
		Navbar,
		HeroSection,
		EpisodesSection,
		AboutSection,
		TestimonialsSection,
		FooterSection
	}
}
</script>

<style lang="scss">
#app {
  background-color: #191919;
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'sans-400';
  scroll-behavior: smooth;
}

@font-face {
  src: url('assets/fonts/DMSans-Regular.ttf');
  font-family: "sans-400";
}
</style>