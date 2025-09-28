// const plugin = require('tailwindcss/plugin')
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './layout/**/*.{vue,js,ts,jsx,tsx}', // 添加正确的路径
    './view/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    // extend: {
    //   screens: {
    //     xs: { max: '385px' }, // 新增一个 400px 以下的断点
    //   },
    //   colors: {
    //     textPrimary: 'var(--tw-text-primary)',
    //     textSecondary: 'var(--tw-text-secondary)',
    //     bodyColor: 'var(--tw-body-color)',
    //     bgSecondary: 'var(--tw-bg-secondary)',
    //   },
    // },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.wh-full': {
          width: '100%',
          height: '100%',
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.flex-col-center': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.flex-x-center': {
          display: 'flex',
          justifyContent: 'center',
        },
        '.flex-y-center': {
          display: 'flex',
          alignItems: 'center',
        },
        '.w': {
          marginLeft: '20px',
          marginRight: '20px',
        },
        '.fw': {
          width: '1440px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      })
    }),
  ],
  // 如果使用 JIT 模式，Tailwind CSS 会根据使用的类动态生成所需的 CSS 样式
  mode: 'jit',
}
