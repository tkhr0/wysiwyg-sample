// エディタで読み込むための下準備をする

import Gadgets from 'gadgets/gadgets'

// オリジナルタグを元に戻すときに使うマーカーを追加する
function addMarker() {
  const mixin = {
    mounted: function () {
      this.$el.setAttribute('data-g-name', this.$options._componentTag)

      // 中身は編集させない
      this.$el.setAttribute('contenteditable', false)
    }
  }

  // 子コンポネーントの mixin に追加する
  const processed = {}
  for (let key in Gadgets.components) {
    const component = Gadgets.components[key]

    if (component.mixins) {
      component.mixins.push(mixin)
    } else {
      component.mixins = [mixin]
    }
    processed[key] = component
  }

  Gadgets.components = processed
}

addMarker()
export default Gadgets
