new Vue({
        el: '#exercise',
        data: {
            value: 0,
            result: 'not there yet'
        },
        methods: {
            sumValue: function(value) {
                this.value += value;
                this.result = this.value < 37 ? 'not there yet' : 'done';
            }
        },
        watch: {
            result: function() {
                var vm = this;
                setTimeout( function() {
                    vm.value = 0;
                }, 5000)
            }
        }
    });