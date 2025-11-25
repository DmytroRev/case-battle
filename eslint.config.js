import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto', htmlWhitespaceSensitivity: 'ignore' }],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: { max: 1, allowFirstLine: false } }],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off'
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    },
  },
];
