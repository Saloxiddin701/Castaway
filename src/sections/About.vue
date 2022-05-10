<template>
	<section class="about" id="about">
    <div class="container">
      <div class="wrapper">
        <div class="left">
          <div class="icon"><i class="fas fa-arrow-right"></i></div>
          <h3>Meet your host</h3>
          <h1>Jacob Paulaner</h1>
          <p>Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
          <p>He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
        </div>
        <img src="../assets/images/Frame.jpg" alt="">
      </div>
      <contact-form/>
    </div>
  </section>
</template>

<script>
import contactForm from "@/components/contactForm";

export default {
  components: {
    contactForm
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 85%;
  margin: 0 auto;
}
.about {
  padding: 100px 0;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    img {
      border-radius: 12px;
      width: 45%;
      object-fit: cover;
    }
    .left {
      max-width: 45%;
      font-family: 'sans-400';
      font-weight: 400;
      color: #ffffff;
      .icon {
        width: 14%;
        text-align: center;
        padding: 21px 5px;
        border-radius: 50%;
        background: #118da8;
        margin-bottom: 20px;
        i {
          font-size: 25px;
        }
      }
      h3 {
        color: #118da8;
        font-size: 18px;
        line-height: 27px;
      }
      h1 {
        font-size: 65px;
        line-height: 79.2px;
        letter-spacing: 2.88px;
        margin-bottom: 28px;
      }
      p {
        font-size: 22px;
        line-height: 33px;
        opacity: 0.7;
        margin-bottom: 33px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      max-width: 425px;
    }
    .wrapper {
      flex-direction: column;
      .left {
        max-width: 100%;
        .icon {
          width: 15%;
        }
        h1 {
          font-size: 55px;
        }
        p {
          font-size: 18px;
        }
      }
      img {
        width: 100%;
      }
    }
  }
  
  @media screen and (max-width: 425px) {
    .container {
      max-width: 375px;
    }
    padding: 70px 0;
    .wrapper {
      .left {
        .icon {
          width: 18%;
        }
        h1 {
          font-size: 40px;
          line-height: 55px;
          margin-bottom: 10px;
        }
        p {
          margin-bottom: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .container {
      max-width: 320px;
    }
  }

  @media screen and (max-width: 320px) {
    .container {
      width: 100%;
    }
  }
}
</style>