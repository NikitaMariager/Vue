<template>
  <CollapsibleAccordion header="Job types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="job in UNIQUE_JOB_TYPES" :key="job" class="h-8 w-1/2">
            <input
              :id="job"
              v-model="selectedJobtypes"
              :value="job"
              type="checkbox"
              class="mr-3"
              @change="selectJobtypes"
            />
            <label :for="job">{{ job }} </label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordion>
</template>

<script>
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
import { mapActions, mapState } from 'pinia'
import { useJobsStore, UNIQUE_JOB_TYPES } from '../../../stores/jobs'
import { userStore, ADD_SELECTED_JOB_TYPES } from '@/stores/user'

export default {
  name: 'JobFiltersSidebarJobtypes',
  components: {
    CollapsibleAccordion
  },
  data() {
    return {
      selectedJobtypes: []
    }
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_JOB_TYPES])
  },
  methods: {
    ...mapActions(userStore, [ADD_SELECTED_JOB_TYPES]),
    selectJobtypes() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobtypes)
      this.$router.push({ name: 'JobResults' })
    }
  }
}
</script>
