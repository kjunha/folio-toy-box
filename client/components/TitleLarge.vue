<template>
  <div class="title-large text-center display-4">
    {{ message || "message" }}
  </div>
</template>
<script>
export default {
  props: ["message"]
};
</script>
<style>
.title-large {
  font-weight: bold;
  text-shadow: 1px 1px #555;
  color: #6cc091;
}
</style>
