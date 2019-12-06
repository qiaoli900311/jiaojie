/**
 * 这里我们需要引入物料的入口vue文件和可视化配置文件
 * example:
 * 引入物料
 * const FooComponent = () => import('../components/FooComponent/src/index.vue')
 * 引入物料可视化配置
 * import FooComponentConfig from '../components/FooComponent/dpsl.json
 *
 * 将配置与组件绑定,绑定的key为 $dpslConfig
 * FooComponent.$dpslConfig = FooComponentConfig
 *
 * 以下是物料库的一个示例
 */
// import HelloWorldConfig from '../components/HelloWorld/dpsl.json'
// const HelloWorld = () => import('../components/HelloWorld/src/index.vue')
// HelloWorld.$dpslConfig = HelloWorldConfig
const components = [
  // 将引入的Component放入这里即可
//   HelloWorld
]

// 添加install方法
components.forEach(component => {
  component.install = Vue => {
    Vue.component(component.name, component)
  }
})

const install = Vue => {
  components.forEach(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  componentProfileList: components.map(item => item.name),
  // 需要导出物料
//   HelloWorld
}
export {
  // 导出物料
//   HelloWorld
}
