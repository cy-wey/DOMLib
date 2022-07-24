let div1 = dom.create("<div>div1</div>")


console.log(div1)

dom.after(test, div1)

let div2 = dom.create("<div>div2</div>")
dom.before(test, div2)


dom.append(test, div1)

let div3 = dom.create("<div>div3</div>")
dom.wrap(test, div3)

dom.remove(div1)

let nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(div2, 'class', 'c2')
console.log(dom.attr(div2, 'class'))

let s1 = dom.text(div2)
console.log(s1)

dom.text(div2, 'hello world')

dom.html(div2, `<strong>hello JS</strong>`)

let h2 = dom.html(div2)
console.log(h2)

let s2 = dom.text(div2)
console.log(s2)

dom.style(div2, {color:'red'})

let s3 = dom.style(div2, 'color')
console.log(s3)

dom.class.add(div2, 'main')

dom.class.remove(div2, 'c2')
dom.class.add(div2, 'c2')
let b1 = dom.class.has(div2, 'c2')
console.log(b1)

const fn =  ()=> {
    console.log(dom.text(div2) + '被点击了')
}
dom.class.on(div2, 'click', fn)

dom.class.off(div2, 'click', fn)

let f1 = dom.find('.main')
console.log(f1)

console.log(dom.parent(test))

console.log(dom.children(div2))

console.log(dom.siblings(div2))

console.log(dom.next(div2))

console.log(dom.previous(div2))

console.log(dom.each(dom.find('div'), (n)=> dom.style(n, 'backgroundColor', '#ddd')))

let d2 = dom.find('.div2')[0]

console.log(dom.index(d2))