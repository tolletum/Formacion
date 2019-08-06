var MyMap = /** @class */ (function () {
    function MyMap() {
    }
    MyMap.prototype.setItem = function (key, item) {
        if (this.values == undefined) {
            this.values = new Array();
        }
        this.values.push({ key: key, item: item });
    };
    MyMap.prototype.getItem = function (key) {
        this.values.forEach(function (element) {
            if (element.key == key)
                return element.item;
        });
    };
    MyMap.prototype.clear = function () {
        this.values.splice(0, this.values.length);
    };
    MyMap.prototype.printMap = function () {
        console.log(this.values);
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
