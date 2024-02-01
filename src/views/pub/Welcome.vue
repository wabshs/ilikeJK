<template>
  <div>
    <div :style="{ background: '#fff',  minHeight: '1680px' }">
      <a-carousel class="slick-slide">
        <div><h3>广告位招租</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </a-carousel>
    </div>
    <a-back-top />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
:deep(.slick-slide) {
  text-align: center;
  height: 680px;
  line-height: 430px;
  background: #364d79;
  overflow: hidden;
}
:deep(.slick-slide h3) {
  color: #fff;
}
</style>
