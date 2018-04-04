// Vue がマウントした HTML を
// カスタムタグに戻す
export default function (innerHTML) {
  const tmp = document.createElement('div')
  tmp.innerHTML = innerHTML

  const gadgets = tmp.querySelectorAll('[data-g-name]')

  for (let gadget of gadgets) {
    const component = document.createElement(
      gadget.getAttribute('data-g-name')
    )
    gadget.parentNode.insertBefore(component, gadget)
    gadget.parentNode.removeChild(gadget)
  }

  return tmp.innerHTML
}
