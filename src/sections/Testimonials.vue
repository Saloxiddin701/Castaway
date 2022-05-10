<template>
	<section class="testimonial" id="contact">
    <div class="container">
      <div class="box">
        <Card
            v-for="item in cards"
            :key="item"
            :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/testimonialsCard";

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'I can’t recommend this podcast enough',
          name: 'Betty Lacey'
        },
        {
          id: 2,
          title: 'Jacob is the best in the business',
          name: 'Adam Driver'
        },
        {
          id: 3,
          title: 'A wealth of audio knowledge',
          name: 'Marcus Brown'
        },
        {
          id: 4,
          title: 'Every episode is a gem!',
          name: 'Jessica Knowl'
        },
        {
          id: 5,
          title: 'Whoa whoa, let me take some notes!',
          name: 'Scott Adama'
        },
        {
          id: 6,
          title: 'I’ve upped my game considerably since I started listening',
          name: 'Steven Blast'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 85%;
  margin: 0 auto;
}
.testimonial {
  padding: 100px 0;
  .box {
    display: flex;
    justify-content: space-between;
    gap: 45px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    .container {
      max-width: 425px;
    }
    .box {
      gap: 20px;
      justify-content: center;
    }
  }

  @media screen and (max-width: 425px) {
    .container {
      max-width: 375px;
    }
  }

  @media screen and (max-width: 375px) {
    .container {
      max-width: 320px;
    }
    padding: 0 0 100px;
  }

  @media screen and (max-width: 320px) {
    .container {
      width: 100%;
    }
  }
}
</style>