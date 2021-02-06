export default {
    inserted:function (el,bind) {
        if(window.authObject[bind.value]===undefined){
            el.parentNode && el.parentNode.removeChild(el)
        }
    }
}