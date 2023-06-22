<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="priviousPage"
            :to="{ name: 'JobResults', query: { page: priviousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous
          </router-link>

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from 'pinia'

import JobListing from '@/components/JobResults/JobListing.vue'
import { useJobsStore, FETCH_JOBS, FILTERED_JOBS } from '@/stores/jobs'

export default {
  name: 'JobListings',
  components: {
    JobListing
  },

  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || '1')
    },
    priviousPage() {
      const previousPage = this.currentPage - 1
      const firstPage = 1
      return previousPage >= firstPage ? previousPage : undefined
    },
    ...mapState(useJobsStore, {
      FILTERED_JOBS,

      nextPage() {
        const nextPage = this.currentPage + 1
        const lastPage = this.FILTERED_JOBS.length / 10
        return nextPage <= lastPage ? nextPage : undefined
      },
      displayedJobs() {
        const pageString = this.currentPage
        const pageNumber = Number.parseInt(pageString)
        const firstJobIndex = (pageNumber - 1) * 10
        const lastJobIndex = pageNumber * 10
        return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex)
      }
    })
  },
  async mounted() {
    this.FETCH_JOBS()
  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS])
  }
}
</script>
