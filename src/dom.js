window.dom = {
    // ******增******

    // 创建节点
    create(string) {
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstChild
    },

    // 新增弟弟
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling)
    },

    // 新增哥哥
    before(node, node2) {
        node.parentNode.insertBefore(node2, node)
    },

    // 新增子代
    append(parent, node) {
        parent.append(node)
    },

    // 新增父代
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },

    // ******删******

    // 删除节点
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },

    // 删除后代
    empty(node) {
        // const childNodes = node.childNodes 可以简写成下面的形式
        const { childNodes } = node
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },

    // ******改******

    // 读写属性
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },

    // 读写文本内容
    text(node, string) {
        if (arguments.length === 2) {   // 重载
            if ('innerText' in node) {  // 适配
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },

    // 读写 HTML 内容, 包括标签
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },

    // 读写样式
    style(node, name, value) {
        // dom.style(div, color, red)
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            // dom.style(div, 'color')
            if (typeof name === 'string') {
                return node.style[name]

                // dom.style(div, {color: 'red'})
            } else if (name instanceof Object) {
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },

    class: {
        // 添加 class
        add(node, className) {
            node.classList.add(className)
        },

        // 删除 class
        remove(node, className) {
            node.classList.remove(className)
        },

        // 判断 class 是否存在
        has(node, className) {
            return node.classList.contains(className)
        },

        // 添加事件监听
        on(node, eventName, fn) {
            node.addEventListener(eventName, fn)
        },

        // 删除事件监听
        off(node, eventName, fn) {
            node.removeEventListener(eventName, fn)
        },
    },

    // ******查******

    // 获取标签或者标签集合
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },

    // 获取父元素
    parent(node) {
        return node.parentNode
    },

    // 获取子元素
    children(node) {
        return node.children
    },

    // 获取兄弟元素
    siblings(node) {
       return Array.from(node.parentNode.children).filter(n => n !== node)
    },

    // 获取上一个元素
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },

    // 获取下一个元素
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },

    // 遍历所有节点
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },

    // 获取元素排行
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for(i = 0; i < list.length; i++) {
            if(list[i] === node) {
                break
            }  
        }
        return i
    }
}