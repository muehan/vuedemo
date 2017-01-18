var app1 = new Vue({
    el: '#app1',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        seen: true
    },
    methods: {
        hide: function() {
            this.seen = this.seen == true ? false : true
        }
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        todos: [
            { text: "learn Javascript" },
            { text: "learn Vue.js" },
            { text: "make more awesome stuff" }
        ]
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        message: "Hello input test"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app5 = new Vue({
    el: "#app5",
    data: {
        message: "asdf"
    }
})