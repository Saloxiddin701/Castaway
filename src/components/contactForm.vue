<template>
  <form>
    <div class="item">
      <div class="left">
        <h3>email Newsletter</h3>
        <h1>Subscribe <br> for updates</h1>
      </div>
      <div class="right">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <button class="btn">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
form {
  margin: 100px 0 0;
  border-radius: 32px;
  background: #000000;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: -13%;
    left: -4%;
    width: 15%;
    height: 33%;
    background: url("../assets/images/form-border.svg") no-repeat center / cover;
  }
  .item {
    padding: 60px;
    font-family: 'sans-400';
    font-weight: 400;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 18px;
      color: #118da8;
      line-height: 27px;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 60px;
      line-height: 79px;
      letter-spacing: 2.88px;
    }
    .right {
      width: 45%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      input {
        border: none;
        outline: none;
        background: #191919;
        font-size: 15px;
        line-height: 28.8px;
        padding: 10px 19px;
        border-radius: 6px;
      }
      .btn {
        width: 25%;
        padding: 9px 19px;
        border: none;
        outline: none;
        background: #118da8;
        color: #ffffff;
        border-radius: 6px;
        font-size: 15px;
        font-weight: 700;
        line-height: 29px;
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
      padding: 40px;
      .left {
        width: 100%;
      }
      h1 {
        line-height: 60px;
        font-size: 50px;
      }
      .right {
        width: 100%;
        .btn {
          width: 30%;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      max-width: 425px;
    }
    &:before {
      width: 55%;
      bottom: -35%;
      left: 18%;
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (max-width: 425px) {
    .container {
      max-width: 375px;
    }
    margin: 70px 0;
    &:before {
      width: 41%;
      height: 24%;
      bottom: -27%;
      left: 15%;
    }
    .item {
      h1 {
        line-height: 30px;
        font-size: 30px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .container {
      max-width: 320px;
    }
    &:before {
      width: 47%;
      height: 24%;
      bottom: -27%;
      left: 18%;
    }
    .item {
      .right {
        .btn {
          padding: 9px 5px;
        }
      }
    }
  }
}
</style>