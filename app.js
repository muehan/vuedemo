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
});

var app5 = new Vue({
    el: "#app5",
    data: {
        message: "asdf"
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app6 = new Vue({
    el: '#app6',
    data: {
        groceryList: [
            { text: "eggs" },
            { text: "milk" },
            { text: "fish" }
        ]
    }
})

var app7 = new Vue({
    el: "#app7",
    data: {
        newItem: "",
        todos: [
            { text: "Paddel a Robin"},
            { text: "drink more cooffee"}
        ]
    },
    methods: {
        addItem: function(item){
            this.todos.push({ text: item });
            this.newItem = "";
        }
    }
})