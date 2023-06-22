<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }} </span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Bobo Careers</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList'
export default {
  name: 'TheHeadline',
  data() {
    return {
      action: 'Build',
      interval: null
    }
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLocaleLowerCase()]: true
        /* changing the class name and setting the new one to 'true' */
      }
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
        const actions = ['Build', 'Create', 'Design', 'Code']
        this.action = nextElementInList(actions, this.action)
      }, 3000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
