//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
    el: '#app',
    /*
    * The Vue instance is then plugged into an element of your choosing,
    * forming a relationship between the instance and that portion of the DOM.
    * In other words, we’re activating Vue on the div with the id of app
    * by setting '``#app``' as the element ( el ) that our instance is plugged into.
    * */
    data: {
        product: 'Colorful Socks'
    }
})

