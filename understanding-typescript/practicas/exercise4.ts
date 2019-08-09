class MyMap<T> {
    values: Array<{key: string, item: T}>;
    
    setItem(key: string, item: T) {
        if(this.values == undefined) {
            this.values = new Array();
        }
        this.values.push({key, item});
    }

    getItem(key: string) {
        this.values.forEach((element) => {
            if(element.key == key) return element.item;
            }
        )
    }

    clear() {
        this.values.splice(0, this.values.length);
    }

    printMap() {
        console.log(this.values);
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();