// Vue がマウントした HTML を
// カスタムタグに戻す
export default function (innerHTML) {
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
    gadget.parentNode.insertBefore(component, gadget)
    gadget.parentNode.removeChild(gadget)
  }

  return tmp.innerHTML
}
