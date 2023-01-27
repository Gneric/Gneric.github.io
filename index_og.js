var lttrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

document.querySelector("h1").onmouseover = event => {
    let iter = 0
    // event.target.dataset.value = event.target.innerText == "[HELLO/.THERE]" ? "[OSCAR/BIONDI]" : "[HELLO/.THERE]"
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map( (lttr, index) => {
            if(index < iter ){
                return event.target.dataset.value[index]
            }

            return lttrs[Math.floor(Math.random() * 26)]
        })
        .join("")

        if(iter >= event.target.dataset.value.length) {
            //clearInterval(interval) 
            setTimeout( () => {

            }, 2000)
        }
        iter += 1 / 4;
    }, 30)
}