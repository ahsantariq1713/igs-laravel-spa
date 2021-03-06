

import 'bootstrap'

import Vue from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue';

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
});

import { InertiaProgress } from '@inertiajs/progress';
InertiaProgress.init();

Vue.prototype.$route = route;
