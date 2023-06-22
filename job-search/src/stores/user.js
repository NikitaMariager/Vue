import { defineStore } from 'pinia'

export const ADD_SELECTED_ORGANIZATIONS = 'ADD_SELECTED_ORGANIZATIONS'
export const ADD_SELECTED_JOB_TYPES = 'ADD_SELECTED_JOB_TYPES'

export const userStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    selectedOrganizations: [],
    selectedJobtypes: []
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true
    },
    [ADD_SELECTED_ORGANIZATIONS](organizations) {
      this.selectedOrganizations = organizations
    },
    [ADD_SELECTED_JOB_TYPES](jobTypes) {
      this.selectedJobtypes = jobTypes
    }
  }
})
