<template>

  <div class="site-footer">
    <div class="social-media">
      <!-- Social Media -->
      <div v-for="(social,index) in data" :key="index" class="social">
        <a :href="`${social.link}`" target="_blank"><img :src="require(`@/assets/images/${social.logo}`)" :alt="`${social.title}`"></a>
      </div>
    </div>
    <p class="font-primary mb-4">
      Created with 💖 by <a href="https://www.linkedin.com/in/sahilshethiya/" target="_blank">Sahil Shethiya</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "userSocialFooter",
  mounted(){
    //Fetching details from Footer state
    this.data = this.$store.state.userSocialFooter;
  },
  data(){
    return{
      //Certifications
      data : ''
    }
  }
}
</script>

<style lang="scss" scoped>
$tailwind-color: #21d0ee;
$theme-color: #6366f1;
$text-gray-200: rgba(229, 231, 235, 1);

.site-footer {
  justify-items: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: center;
  margin-top: 4rem;
  padding: 1rem;
  padding-bottom: 0;
  border-top: 1px solid $text-gray-200;

  a {
    color: $theme-color;
  }

  .tailwind {
    color: $tailwind-color;
  }

  .social-media {
    max-width: 200px;
    display: inline-flex;
    align-items: center;
  }

  .social {
    padding: 5px;
  }
}
</style>
