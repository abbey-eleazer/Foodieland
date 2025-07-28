import { createRouter, createWebHistory } from 'vue-router'
import RecipePage from '@/views/RecipePage.vue'
import HomePage from '@/views/HomePage.vue'
import BlogListPage from '@/views/BlogListPage.vue'
import BlogPostPage from '@/views/BlogPostPage.vue'
import ContactPage from '@/views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipePage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogListPage,
    },
    {
      path: '/blog-post',
      name: 'blog-post',
      component: BlogPostPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
  ],
})

export default router
