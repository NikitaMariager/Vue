<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <!-- Logo -->
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl">
          Bobo careers</router-link
        >

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <!-- Menu items loop -->
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-9 h-full first:ml-0">
              <RouterLink :to="menuItem.url" class="flex h-full items-center py-2.5">{{
                menuItem.text
              }}</RouterLink>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="userStore.isLoggedIn" />
          <ActionButton v-else text="Sign in" @click="userStore.loginUser" />
        </div>
      </div>

      <TheSubNav v-if="userStore.isLoggedIn" />
    </div>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import { userStore } from '../../stores/user'

import ActionButton from '@/components/shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import TheSubNav from './TheSubNav.vue'

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubNav
  },

  data() {
    return {
      menuItems: [
        { text: 'Teams', url: '/teams' },
        { text: 'Locations', url: '/' },
        { text: 'Life at Bobo careers', url: '/' },
        { text: 'How we hire', url: '/' },
        { text: 'Students', url: '/' },
        { text: 'Jobs', url: '/jobs/results' }
      ]
    }
  },
  computed: {
    ...mapStores(userStore),
    headerHeightClass() {
      return {
        'h-16': !this.userStore.isLoggedIn,
        'h-32': this.userStore.isLoggedIn
      }
    }
  }
}
</script>
