<template>
	<header class="hero" id="home">
    <div class="container">
      <div class="wrapper" data-aos="fade-up" data-aos-duration="2000">
        <img src="../assets/images/main.jpg" alt="" class="img">
        <div class="right">
          <h1 class="title">
            Take your podcast to the
            <span class="next">next</span> <span class="lev">level</span>
          </h1>
          <div class="social">
            <h3>Listen on</h3>
            <div class="images">
              <img src="../assets/images/sci-5.png" alt="">
              <img src="../assets/images/sci-4.png" alt="">
              <img src="../assets/images/sci-3.png" alt="">
              <img src="../assets/images/sci-2.png" alt="">
              <img src="../assets/images/sci-1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  width: 85%;
  margin: 0 auto;
}
.hero {
  padding: 120px 30px 0;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 2%;
      left: 1%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background: url("../assets/images/hero-border.svg") no-repeat center / cover;
    }
    .img {
      width: 45%;
      border-radius: 12px;
      object-fit: cover;
    }
    .right {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 74px;
      .title {
        font-size: 70px;
        line-height: 88px;
        letter-spacing: 3.2px;
        color: #ffffff;
        font-family: 'sans-400';
        font-weight: 400;
        .next {
          position: relative;
          &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: -525px;
            width: 150px;
            height: 10px;
            background: url(../assets/images/Vector.svg) no-repeat center / cover;
          }
        }
        .lev {
          font-weight: bold;
        }
      }
    }
    .social {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding-left: 20px;
      h3 {
        color: #ffffff;
        font-family: sans-400;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
      }
      .images {
        display: flex;
        gap: 17px;
      }
    }
  }
}

//media
@media only screen and (max-width: 768px) {
  .container {
    max-width: 425px;
  }
  .hero {
    padding: 100px 30px 0;
    .wrapper {
      flex-direction: column;
      gap: 20px;
      .img {
        width: 100%;
      }
      .right {
        width: 100%;
        gap: 25px;
        .title {
          font-size: 40px;
          line-height: 60px;
          .next {
            &:before {
              left: 0;
              width: 90%;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 425px) {
  .container {
    max-width: 375px;
  }
  .hero {
    .wrapper {
      flex-direction: column-reverse;
      gap: 25px;
      &:before {
        top: 44%;
      }
      .right {
        .title {
          .next {
            &:before {
              width: 95%;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .container {
    max-width: 320px;
  }
  .hero {
    padding: 75px 30px 0;
    .wrapper {
      .right {
        .title {
          font-size: 36px;
          line-height: 45px;
        }
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .container {
    width: 100%;
  }
  .hero {
    .wrapper {
      &:before {
        width: 60px;
        height: 60px;
        top: 50%;
        left: 5%;
      }
    }
  }
}
</style>