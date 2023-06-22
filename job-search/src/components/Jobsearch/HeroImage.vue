<template>
  <img :src="image" />
</template>

<script>
import nextElementInList from '@/utils/nextElementInList'
export default {
  name: 'HeroImage',
  data() {
    return {
      image:
        'https://careers.google.com/jobs/dist/img/assets/hero-04_1x.5377e160fa426c8b388a861f23cc185b.png',
      interval: null
    }
  },
  created() {
    this.changeTitel()
  },
  beforeUnmount() {
    clearInterval(this.interval)
    /* cleaning up the interval so it dosent try to keep running */
  },
  methods: {
    changeTitel() {
      /* Changing the action text every 3 sec.  */
      this.interval = setInterval(() => {
        const images = [
          'https://careers.google.com/jobs/dist/img/assets/hero-04_1x.5377e160fa426c8b388a861f23cc185b.png',

          'https://careers.google.com/jobs/dist/img/assets/hero-02_1x.ccad21962c34a5560e19fdee20717428.png',

          'https://careers.google.com/jobs/dist/img/assets/hero-03_1x.085e94af78d9906f55c83d558eca4453.png',

          'https://careers.google.com/jobs/dist/img/assets/hero-04_1x.5377e160fa426c8b388a861f23cc185b.png'
        ]
        this.image = nextElementInList(images, this.image)
      }, 3000)
    }
  }
}
</script>
