<template>
  <form
    action=""
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <!-- input -->
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label for="" class="absolute -top-10 left-0"> Role </label>
        <TextInput v-model="role" placeholder="Software engineer" />
      </div>
      <span
        class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
        >in</span
      >

      <!-- Input -->
      <div class="relative flex h-full flex-1 items-center pl-3">
        <label for="" class="absolute -top-10 left-0"> Where? </label>
        <TextInput v-model="location" placeholder="Los Angelas" />
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from '../Shared/ActionButton.vue'
import TextInput from '../Shared/TextInput.vue'
export default {
  name: 'JobSearchForm',
  components: {
    ActionButton,
    TextInput
  },
  data() {
    return {
      role: '',
      location: ''
    }
  },
  methods: {
    searchForJobs() {
      this.$router.push({ name: 'JobResults', query: { role: this.role, location: this.location } })
    }
  }
}
</script>
