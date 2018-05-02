// Vue がマウントした HTML を
// カスタムタグに戻す
//
// attrshash = {
//   data-g-ref: {text: 'マイボタン' ...},
//   ...
// }
export default function (innerHTML, attrsHash) {
  // DOM 操作をしたい
  const tmp = document.createElement('div')
  tmp.innerHTML = innerHTML

  // Vue コンポーネント
  const gadgets = tmp.querySelectorAll('[data-g-name]')

  // コンポーネントを消して
  // カスタムタグを入れる
  for (let gadget of gadgets) {
    // カスタムタグを作成
    const tagName = gadget.getAttribute('data-g-name')
    const component = document.createElement(tagName)

    // attribute(props) を戻す
    const ref = gadget.getAttribute('data-g-ref')
    const attrHash = attrsHash[ref]
    if (attrHash) {
      for (let attr in attrHash) {
        component.setAttribute(attr, attrHash[attr])
      }
    }

    gadget.parentNode.insertBefore(component, gadget)
    gadget.parentNode.removeChild(gadget)
  }

  return tmp.innerHTML
}
