<template>
  <img :src="imageLink" alt="" class="h-8 w-8 rounded-3xl object-contain" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: '/profile.webp'
    }
  }
}
</script>
