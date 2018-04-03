import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Products from '@/components/Products';
import Product from '@/components/Product';
import Create from '@/components/Create';
import Edit from '@/components/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/products/create',
      name: 'Create',
      component: Create,
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product,
    },
    {
      path: '/products/:id/edit',
      name: 'Edit',
      component: Edit,
    },
  ],
});
