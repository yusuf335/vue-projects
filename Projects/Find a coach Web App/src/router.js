import { createRouter, createWebHistory } from 'vue-router';

import coachDetail from './pages/coaches/CoachDetail.vue';
import coachList from './pages/coaches/CoachList.vue';
import coachRegister from './pages/coaches/CoachRegister.vue';

import contactCoach from './pages/requests/ContactCoach.vue';
import requestReceive from './pages/requests/RequestsReceive.vue';

import notFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: coachList },
    {
      path: '/coaches/:id',
      component: coachDetail,
      props: true,
      children: [{ path: 'contact', component: contactCoach }],
    },
    { path: '/register', component: coachRegister },
    { path: '/requests', component: requestReceive },
    { path: '/:404(.*)', component: notFound },
  ],
});

export default router;
