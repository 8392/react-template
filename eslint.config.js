// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
  // 关闭 react-hooks-extra 插件规则
    'react-hooks-extra/no-unnecessary-use-prefix': 'off',
    'react-hooks-extra/prefer-use-state-lazy-initialization': 'off',
    // 关闭 react 官方插件规则报错
    'react/no-comment-textnodes': 'off',
  },
})
