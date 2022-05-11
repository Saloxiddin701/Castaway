<template>
  <div class="head">
    <h1 class="title">Latest episodes</h1>
    <button class="btn">View all episodes</button>
  </div>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 64px;
    letter-spacing: 2.88px;
    line-height: 79.2px;
    font-family: 'sans-400';
    font-weight: 400;
    color: #ffffff;
  }
  .btn {
    padding: 12px 20px;
    color: #fff;
    background: #118da8;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: 17px;
    font-weight: 400;
  }
}

@media screen and (max-width: 425px) {
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
</style>