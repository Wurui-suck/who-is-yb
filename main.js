let $yb = document.querySelector('#yb')
let dragging = false
let lastX
let lastY
let ClickOrMouse = false
$yb.addEventListener('mousedown', (e) => {
    dragging = true
    lastX = e.clientX
    lastY = e.clientY
})
document.body.addEventListener('mousemove', (e) => {
    let moveX
    let moveY
    if (dragging === true) {
        moveX = e.clientX - lastX
        moveY = e.clientY - lastY
        $yb.style.transform = $yb.style.transform + `translate(${moveX}px,${moveY}px)`
        lastX = e.clientX
        lastY = e.clientY
    }
    if (
        (Math.abs(moveX) >= 2 || Math.abs(moveY) >= 2) && dragging
    ) {
        ClickOrMouse = true
    }

})

document.addEventListener('mouseup', (e) => {
    dragging = false
    setTimeout(() => {
        ClickOrMouse = false

    }, 0);
})
let openyb = true
let $ybyb = document.querySelector('#ybyb')
let $imyb = document.querySelector('#imyb')
$ybyb.addEventListener('click', (e) => {
    if (ClickOrMouse) { return }
    if (openyb) {
        $ybyb.textContent = "点击关闭"
        $imyb.style.display = "block"
        openyb = false
    } else {
        $ybyb.textContent = "我是谁"
        $imyb.style.display = "none"
        openyb = true
    }

})