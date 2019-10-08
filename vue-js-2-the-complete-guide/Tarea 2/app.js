new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertButton: function(event) {
                alert('You clicked the button!');
            },
            showValue: function(event) {
                this.value = event.target.value;
            }
        }
    });