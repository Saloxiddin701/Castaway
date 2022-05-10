<template>
	<section class="episode" id="episodes">
    <div class="container">
      <div class="box">
        <Title/>
        <Card
          v-for="item in cards"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/title";
import Card from "@/components/episodeCard";

export default {
  components: {
    Title,
    Card
  },
  data() {
    return {
      cards: [
        {
          id: '1',
          img: require('../assets/images/card1.jpg'),
          imgName: "image1",
          tips: 'Gear',
          episode: 'Episode 3',
          title: 'Should you get outboard audio gear?',
          text: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
          btn: 'View episode details'
        },
        {
          id: '2',
          img: require('../assets/images/card2.jpg'),
          imgName: "image2",
          tips: 'Tips & Tricks',
          episode: 'Episode 2',
          title: 'Mic tricks to take you to the next level',
          text: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
          btn: 'View episode details'
        },
        {
          id: '3',
          img: require('../assets/images/card3.jpg'),
          imgName: "image3",
          tips: 'Gear',
          episode: 'Episode 1',
          title: 'The best microphone under $200',
          text: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
          btn: 'View episode details'
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
.episode {
  padding: 100px 0;
  .box {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
}

//media
@media only screen and (max-width: 768px) {
  .container {
    max-width: 425px;
  }
  .episode {
    .head {
      .title {
        font-size: 35px;
        line-height: 40px;
      }
      .btn {
        font-size: 15px;
      }
    }
  }
}

@media screen and (max-width: 425px) {
  .container {
    width: 375px;
  }
  .episode {
    .head {
      .title {
        font-size: 30px;
        line-height: 35px;
      }
      .btn {
        padding: 5px 10px;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .container {
    max-width: 320px;
  }
  .episode {
    padding: 100px 0 0;
  }
}

@media screen and (max-width: 320px) {
  .container {
    width: 100%;
  }
}
</style>