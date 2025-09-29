import { Navigate, useRoutes } from 'react-router'
import Layout from '@/layout'
import { Component } from '@/utils'

const routeConfig = [
  { path: '/', element: <Navigate to="/home" /> },
  {
    path: 'home',
    element: Component('view/home'),
  },
  {
    element: <Layout />,
    children: [
      { path: 'about', element: Component('view/about') },
      { path: 'aboutDetail', element: Component('view/about/detail') },
    ],
  },
]

export default () => {
  return useRoutes(routeConfig)
}
