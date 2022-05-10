<template>
  <header :class="{ 'onScroll' : !view.topOfPage }" data-aos="fade-up" data-aos-duration="2000">
    <div class="container">
      <nav>
        <div class="branding"><img src="../assets/images/logo.png" alt=""></div>
        <ul v-show="!mobile" class="navigation">
          <li>
            <a class="link" href="#home">Home</a>
          </li>
          <li>
            <a class="link" href="#episodes">Episodes</a>
          </li>
          <li>
            <a class="link" href="#about">About</a>
          </li>
          <li>
            <a class="link" href="#contact">Contact</a>
          </li>
        </ul>
        <div class="icon">
          <i @click="toggleMobileNav" v-show="mobile" class="fas fa-bars" :class="{ 'icon-active': mobileNav }"></i>
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li>
              <a class="link" href="#home">Home</a>
            </li>
            <li>
              <a class="link" href="#episodes">Episodes</a>
            </li>
            <li>
              <a class="link" href="#about">About</a>
            </li>
            <li>
              <a class="link" href="#contact">Contact</a>
            </li>
          </ul>
        </transition>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Navigation',
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.hundleScroll)
  },
  created() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    hundleScroll() {
      if (window.pageYOffset > 0) {
        this.view.topOfPage = false
      } else {
        if (!this.view.topOfPage) {
          this.view.topOfPage = true
        }
      }
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    updateScroll() {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        this.scrolledNav = true
        return
      }
      this.scrolledNav = false
    },
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 769) {
        this.mobile = true
        return;
      }
      this.mobile = false
      this.mobileNav = false
      return;
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 85%;
  margin: 0 auto;
}
header {
  background-color: #191919;
  z-index: 99;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  transition: 0.5s ease all;
  color: #fff;

  &.onScroll {
    background-color: #000000;
  }

  nav {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
    }

    ul, .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;
      font-family: "sans-400";

      &:hover {
        color: #118da8;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 200px;
      height: 100%;
      background-color: #ffffff;
      top: 0;
      left: 0;
      margin: 0;

      li {
        margin-left: 0;

        .link {
          color: #000;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 0.8s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background: #000000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;
  }
}

@media screen and (max-width: 768px) {
  .container {
    max-width: 425px;
  }
}
</style>