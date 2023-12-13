module.exports = {
  extends: [
    'molindo/typescript',
    'molindo/react',
    'plugin:@next/next/recommended',
    'next',
    'next/core-web-vitals'
  ],
  overrides: [
    {
      files: ['*.spec.tsx'],
      rules: {
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off"
      }
    }
  ]
};
