<template lang="html">
  <header class="yo-header yo-header-b">
      <h2 class="title">详情</h2>
      <a class="regret yo-ico" @click="back"></a>
      <span class="affirm">分享</span>
    </header>
</template>
<script>
export default {
  
    
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}  
</script>