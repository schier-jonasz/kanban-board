<template>
  <main class="main">
    <section class="hero-left">
      <h2 class="hero-left__title">ORGANIZE YOUR PROJECT</h2>
      <img
        class="hero-left__glow"
        loading="lazy"
        src="@/assets/glow-kanban.png"
      />
    </section>
    <section class="hero-right">
      <img
        class="hero-right__background"
        loading="lazy"
        src="@/assets/ellipse.svg"
      />
      <img
        class="hero-right__image"
        loading="lazy"
        src="@/assets/screens.png"
      />
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/colors.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,300;0,400;0,600;0,700;1,100;1,300&display=swap');

.main {
  height: 95vh;
  display: flex;
}

.hero-left {
  width: 60%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* font-family: Impact, 'Arial Narrow', sans-serif; */
  /* font-family: 'Roboto Mono', monospace; */

  &__title {
    font-size: 3em;
    margin-left: 32px;
    letter-spacing: 4px;
    font-weight: 600;
    color: $dark-purple;
  }
  &__glow {
    width: 75%;
  }
}

.hero-right {
  width: 40%;
  height: 100%;
  width: 100%;
  position: relative;

  &__background {
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    width: 90%;
  }

  &__image {
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    width: 80%;
  }
}
</style>
