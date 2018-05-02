// エディタで読み込むための下準備をする

import Gadgets from '@/gadgets/gadgets'

// オリジナルタグを元に戻すときに使うマーカーを追加する
function addMarker() {
  const mixin = {
    mounted: function () {
      // タグの名前
      this.$el.setAttribute('data-g-name', this.$options._componentTag)

      // タグの識別子
      // ref で props を取る
      const ref = findSelfRef(this)
      if (ref) {
        this.$el.setAttribute('data-g-ref', ref)
      }

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

// component の親から自身への ref を取得する
function findSelfRef(component) {
  const refs = component.$parent.$refs

  for (let ref in refs) {
    if (refs[ref] == component) {
      return ref
    }
  }

  return null
}

addMarker()
export default Gadgets
