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
    path: 'rc',
    element: Component('view/rc'),
  },
  {
    element: <Layout />,
    children: [
      { path: 'about', element: Component('view/about') },
      { path: 'aboutDetail', element: Component('view/about/detail') },
    ],
  },
  {
    path: 'requestIdleCallback',
    element: Component('view/requestIdleCallback'),
  },
]

function RouteApp() {
  return useRoutes(routeConfig)
}

export default RouteApp
