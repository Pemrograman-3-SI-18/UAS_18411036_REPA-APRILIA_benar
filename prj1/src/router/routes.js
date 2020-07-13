
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/Admin/datadiripeserta.vue') },
      { path: 'datadiripeserta', component: () => import('pages/Admin/datadiripeserta.vue') },
      { path: 'editdatakuliah/:id', component: () => import('pages/Admin/editDataKuliah.vue') },
      { path: 'datatransaksi', component: () => import('pages/Admin/dataTransaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/registrasi', component: () => import('pages/users/registrasi.vue') },
      { path: 'auth/login', component: () => import('pages/users/login.vue') }
    ]
  },
  {
    path: '/pendaftar',
    component: () => import('layouts/pendaftar.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/Pendaftar/dataDiri.vue') },
      { path: 'dataDiri', component: () => import('pages/Pendaftar/dataDiri.vue') },
      { path: 'Transaksi', component: () => import('pages/Pendaftar/Transaksi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
