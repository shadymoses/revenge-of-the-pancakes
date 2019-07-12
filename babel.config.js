module.exports = function(api) {
  const isTest = api.env('test')

  const presets = [
    [
      '@babel/env',
      {
        corejs: '3',
        modules: isTest && 'commonjs',
        targets: ['>0.25%', 'not ie 11', 'not op_mini all'],
        useBuiltIns: 'entry',
      },
    ],
  ]

  const plugins = [
    '@babel/plugin-proposal-object-rest-spread',
    isTest && '@babel/plugin-transform-modules-commonjs',
  ].filter(Boolean)

  return { presets, plugins }
}
