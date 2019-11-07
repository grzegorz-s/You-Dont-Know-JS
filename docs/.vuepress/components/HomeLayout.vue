<template>
  <div>
    <Content slot-key="main-section" />

    <section class="content">
      <Content class="conetnt-hld" slot-key="content-section" />
      <img class="section-image section-image--top" src="images/svg/undraw_book_reading.svg" alt="Someone reading book">
      <img class="section-image section-image--bottom" src="images/svg/undraw_web_developer.svg" alt="Seating and coding developer">
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.content {
  position: relative;
  padding: 150px 0;
  background: $c-section;
}

.conetnt-hld {
  position: relative;
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 10;
}

.section-image {
  position: absolute;
  width: 200px;
  z-index: 0;

  &--top {
    top: -40px;
    right: 40px;
  }

  &--bottom {
    left: 0;
    bottom: 0;
  }
}

</style>