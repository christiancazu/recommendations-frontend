export default async ({ Vue }) => {
  // loading all components dynamycally including on sub folders
  const requireComponents = require.context('src/components', true, /\.(vue)$/i)

  requireComponents.keys().forEach(key => {
    // spliting item ex: ./base/MyComponent.vue
    const keyParts = key.split('/')
    // getting the last part and removing .vue extention
    const componentName = keyParts[keyParts.length - 1].replace('.vue', '')
    // adding each component to the Vue instance
    Vue.component(componentName, requireComponents(key).default)
  })

  // loading all layouts dynamycally
  const requireLayouts = require.context('src/layouts', false, /\.(vue)$/i)

  requireLayouts.keys().forEach(key => {
    const name = key.match(/\w+/)[0]
    Vue.component(name, requireLayouts(key).default)
  })
}
