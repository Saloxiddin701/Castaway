<template>
	<footer class="footer">
    <div class="container">
      <div class="wrapper">
        <div class="left">
          <img src="../assets/images/logo.png" alt="">
          <div class="social">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
          </div>
        </div>
        <div class="center">
          <ul class="list">
            <li>Home</li>
            <li>About</li>
            <li>Episodes</li>
            <li>Contact</li>
          </ul>
          <ul class="list">
            <li>Style Guide</li>
            <li>Instructions</li>
            <li>Changelog</li>
            <li>Credit</li>
            <li>Powered by Webflow</li>
            <li>Licenses</li>
          </ul>
        </div>
        <div class="right">
          <div class="sci">
            <img src="../assets/images/sci-5.png" alt="">
            <img src="../assets/images/sci-4.png" alt="">
            <img src="../assets/images/sci-3.png" alt="">
            <img src="../assets/images/sci-2.png" alt="">
            <img src="../assets/images/sci-1.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </footer>
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
.footer {
  padding-bottom: 127px;
  .wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .left {
      .social {
        display: flex;
        gap: 12px;
        margin-top: 25px;
        a {
          font-size: 20px;
          text-decoration: none;
          color: #ffffff;
        }
      }
    }
    .center {
      display: flex;
      gap: 100px;
      .list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #ffffff;
        li {
          font-size: 17px;
          line-height: 27px;
        }
      }
    }
    .right {
      .sci {
        display: flex;
        gap: 17px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      max-width: 425px;
    }
    padding-bottom: 55px;
    .wrapper {
      gap: 30px;
    }
  }
}
</style>