import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Services from '../views/Services.vue'
import ServicesAdd from '../views/ServicesAdd.vue'
import ServicesEdit from '../views/ServicesEdit.vue'
import ServicesAdmin from '../views/ServicesAdmin.vue'
import ServicesType from '../views/ServicesType.vue'
import Doctor from '../views/Doctor.vue'
import Booked from '../views/Booked.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/servicesAdmin',
    name: 'ServicesAdmin',
    component: ServicesAdmin
  },
  {
    path: '/booked',
    name: 'Booked',
    component: Booked
  },
  {
    path: '/servicesAdd',
    name: 'ServicesAdd',
    component: ServicesAdd
  },
  {
    path: '/servicesEdit',
    name: 'ServicesEdit',
    component: ServicesEdit
  },
  {
    path: '/servicesType',
    name: 'ServicesType',
    component: ServicesType
  },
  ,
  {
    path: '/doctor',
    name: 'Doctor',
    component: Doctor
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
