

<template>
  <div
  class="entry-container mb-3 pinter p-2"
  @click="$router.push({name: 'entry', params: { id:10}})"
  >
<div class="entry-title d-flex">
    <span class="text-success fs-5 fw-bold">13</span>
    <span class="mx-1 fs-5 ">Abril</span>
    <span class="mx-2 ws-light ">2023, Jueves</span>
</div>

<div class="entry-description">
  Exercitation veniam eu commodo eu. Non in pariatur incididunt incididunt anim eu duis magna pariatur. Laborum ex laboris eiusmod et magna deserunt voluptate nulla mollit veniam. Consequat enim irure occaecat pariatur proident ullamco nisi adipisicing nisi anim mollit. Ea dolore officia ad occaecat anim.
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
      transition: 0.2s all ease-in;

  }

}

.entry-description {
  font-size: 12px;
}


</style>