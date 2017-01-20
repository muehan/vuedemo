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
            { text: "Paddel a Robin" },
            { text: "drink more cooffee" }
        ]
    },
    methods: {
        addItem: function() {
            this.todos.push({ text: this.newItem });
            this.newItem = "";
        }
    }
})

var customerApp = new Vue({
    el: "#customerApp",
    data: {
        searchText: "",
        customer: "",
        found: false
    },
    methods: {
        searchCustomer: function() {
            this.$http.get('http://someUrl' + this.searchText).then((response) => {
                this.customer = response.body;
                this.found = true;
            }, (response) => {
                //error
                alert("error: " + response.message);
                this.found = false;
            })
        }
    }
})

// Vue.http.headers.common['Authorization'] = 'Basic someToken';
// Vue.http.options.root = '/root';

var jiraApp = new Vue({
    http: {
        root: "https:/someUrl",
        headers: {
            Authorization: "Basic someToken=="
        }
    },
    el: "#jiraApp",
    data: {
        // basicToken: "Basic someToken",
        issue: null
    },
    methods: {
        callJira: function() {
            this.$http.get('issue/key').then((successResponse) => {
                this.issue = successResponse.body;
            }, (errorResponse) => {
                alert('error');
            })
        }
    }
})