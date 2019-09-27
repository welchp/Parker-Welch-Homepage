document.addEventListener('DOMContentLoaded', function () {
    
    function makeColor() {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const rgb = [r, g, b]
        
        return rgb
    }

    const one = document.querySelectorAll('.project-card')[0]
    const width = one.offsetWidth
    const height = one.offsetHeight
    const product = width * height/16

    for (let i = 0; i < product; i++) {
        let div = document.createElement('div')
        div.className = 'pixel'
        let color = makeColor()
        let rgb = `rgb(${color[0]},${color[1]},${color[2]})`;
        div.style.backgroundColor = rgb
        one.appendChild(div)
    }
});