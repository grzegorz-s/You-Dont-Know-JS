<template>
  <section class="landing-intro">
    <div class="landing-intro__container">
      <div class="landing-intro__content-block">
        <h1 class="content-block__title">You Don't Know JS</h1>
        <p class="content-block__text">This is a series of books diving deep into the core mechanisms of the JavaScript language. The first edition of the series is now complete.</p>
        <RouterLink
            aria-label="Read"
            :to="{ path: $books[0].path }"
            class="content-block__button"
          >
            Read
        </RouterLink>
        
      </div>
      <div class="landing-intro__content-block">
        <img src="images/svg/undraw_book_lover_mkck.svg" alt="Someone reading book">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.landing-intro {
  padding: 150px 0;
  background: $c-accent-dark;
  border-top: 5px solid $c-accent;
  
  &__container {
    display: flex;
    align-items: center;
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__content-block {
    flex: 1 1 0;
  }
}

.content-block {
  &__title {
    color: $c-accent;
    font-size: 48px;
    font-weight: 700;
  }

  &__text {
    max-width: 400px;
    color: lighten($c-accent-dark, 60%);
    font-size: 18px;
  }

  &__button {
    position: relative;
    display: inline-block;
    min-width: 160px;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 24px;
    background: $c-accent;
    color: $c-text-dark;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    box-sizing: border-box;
    box-shadow: 0 5px 15px rgba(#D5C87D, .4);
    transition: box-shadow ease .2s;

    &:hover {
      box-shadow: 0 5px 0px #D5C87D;
    }
  }
}

</style>