<<<<<<< d1ba3314486fda249b288ada43bd94ffe80a5303
<template>
    <div>
      购物车
     </div> 
</template>
<script>

</script>
=======
<template lang="html">
  <header >
    <h2 class="title" v-if="isShowinputs">{{title}}</h2>
     <form class="yo-search"  v-if="isShowinput">
          <label class="action">
            <i class="yo-ico yo-ico-suggest"></i>
            <input type="text" class="input" placeholder="维骨力">
            </label>
          <span class="yo-btn yo-ico"></span>
      </form>
  </header>
</template>

<script>
let vm = {
  data(){
    return {
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    isShowinput: {
      type: Boolean,
      required: false
    },
    isShowinputs: {
      type: Boolean,
      required: false
    }
  },

  methods: {
    back: function () {
      this.$router.go(-1)
    }
  },

  mounted: function () {
    // console.log(0);
  },

  updated: function () {
    // console.log(1);
  }
}
window.vm = vm
export default vm
</script>
>>>>>>> 第一次合并
