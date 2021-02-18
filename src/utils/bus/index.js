import Bus from './bus'

const install = Vue => {
  Vue.prototype.bus = Bus
}

export default install
