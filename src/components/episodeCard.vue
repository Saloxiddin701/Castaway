<template>
  <div class="card">
    <img :src="item.img" alt="item.imgName">
    <div class="item">
      <button class="tips">{{ item.tips }}</button>
      <h2>{{ item.episode }}</h2>
      <h1>{{ item.title }}</h1>
      <p>{{ item.text }}</p>
      <button class="btn">{{ item.btn }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 40px;
  background: #000000;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .item {
    max-width: 58%;
    flex-direction: column;
    font-family: 'sans-400';
    font-weight: 400;
    color: #ffffff;
    .tips {
      outline: none;
      border: none;
      margin-bottom: 48px;
      padding: 5px 16px;
      font-size: 18px;
      line-height: 27px;
      color: #ffffff;
      background: #191919;
      border-radius: 6px;
    }
    h2 {
      font-size: 17px;
      line-height: 27px;
      color: #118da8;
      margin-bottom: 18px;
    }
    h1 {
      font-size: 55px;
      line-height: 70px;
      letter-spacing: 2.56px;
      margin-bottom: 28px;
    }
    p {
      opacity: 0.7;
      font-size: 22px;
      line-height: 33px;
      margin-bottom: 18px;
    }
    .btn {
      outline: none;
      border: none;
      font-size: 18px;
      line-height: 27px;
      background: #118da8;
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 6px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 25px;
    flex-direction: column;
    gap: 15px;
    img {
      border-radius: 12px;
      width: 100%;
    }
    .item {
      max-width: 100%;
      h1 {
        font-size: 40px;
        line-height: 45px;
      }
      p {
        font-size: 18px;
      }
      .btn {
        font-size: 15px;
        padding: 10px 14px;
      }
    }
  }
}

@media screen and (max-width: 425px) {
  .card {
    .item {
      h1 {
        font-size: 25px;
        line-height: 35px;
      }
      p {
        font-size: 15px;
        line-height: 25px;
      }
      .btn {
        padding: 7px;
        font-size: 14px;
      }
      .tips {
        margin-bottom: 25px;
      }
    }
  }
}
</style>