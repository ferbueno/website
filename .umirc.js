// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  theme: {
    '@primary-color': '#DB0A5B',
    '@padding-lg': '24px',
    '@padding-md': '16px',
    '@padding-sm': '8px',
    '@border-radius': '3px',
    '@text-color': '#212121',
    '@text-color-secondary': '#8F8F8F',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'website',
      dll: false,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
