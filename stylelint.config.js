/** @type { import('stylelint').Config } */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-clean-order'
  ],
  // plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    "selector-class-pattern": null,
  }
}