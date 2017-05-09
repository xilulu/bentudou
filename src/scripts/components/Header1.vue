<template>
 <div class="yo-search">
          <label class="action">
            <i class="yo-ico yo-ico-suggest"></i>
           
              <input type="text" class="input" placeholder="维骨力" @focus="aa" >
          
            </label>
          <span class="yo-btn yo-ico">&#xe604;</span>
    </div>
</template>
<script>
  import Vue from 'vue'
  export default {
  data(){
      return {
      }
    },
    methods: {
      aa:function(){
         this.$router.push({ path: 'listtouch'})
      }
    }
  }
</script>
