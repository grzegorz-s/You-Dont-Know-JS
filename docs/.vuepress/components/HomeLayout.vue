<template>
  <div>
    <section class="content">
      <Content class="conetnt-hld" slot-key="content-section" />
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
  padding: 150px 0;
  background: $c-section;
}

.conetnt-hld {
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

</style>