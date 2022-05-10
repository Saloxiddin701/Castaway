<template>
  <div class="card">
    <div class="icon">
      <i
          v-for="item in 5"
          class="fas fa-star">
      </i>
    </div>
    <h1>{{ item.title }}</h1>
    <h3>{{ item.name }}</h3>
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
  width: 30%;
  padding: 54px 60px 51px 50px;
  background: #000000;
  border-radius: 32px;
  font-family: 'sans-400';
  font-weight: 400;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .icon {
    display: flex;
    gap: 5px;
    color: yellow;
    font-size: 17px;
  }
  h1 {
    font-weight: 400;
    font-size: 26px;
    line-height: 43.2px;
  }
  h3 {
    font-size: 18px;
    opacity: 0.7;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    width: 44%;
    padding: 25px;
    h1 {
      font-size: 22px;
      line-height: 35px;
    }
  }

  @media screen and (max-width: 425px) {
    .container {
      max-width: 375px;
    }
    width: 46%;
    .icon {
      font-size: 15px;
    }
    h1 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 375px) {
    .container {
      max-width: 320px;
    }
    padding: 15px;
    gap: 10px;
    h1 {
      line-height: 30px;
    }
  }

  @media screen and (max-width: 320px) {
    .container {
      width: 100%;
    }
  }
}
</style>