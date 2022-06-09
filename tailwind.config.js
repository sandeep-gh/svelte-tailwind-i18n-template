module.exports = {
	content:['./public/index.html',  './src/*.svelte', './src/**/*.svelte'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
