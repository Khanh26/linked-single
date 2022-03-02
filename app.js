var ojList = {
    list: [],
    init: function() {
        this.list.push( {
            key: 'head',
            value: null,
            next: 1,
        } )
    },
    findKey: function(key) {
        return this.list.find((oj, index) => {
                return oj.key == key;
            })
    },
    browsing: function() {
        let i = this.findKey('head').next;
        while (this.findKey(i) != undefined)  {
            let j = i;
            console.log(this.findKey(i));
            i = this.findKey(j).next;
        }
    },
    add: function(value) {
        let i = this.findKey('head').next;
        while (this.findKey(i) != undefined)  {
            let j = i;
            i = this.findKey(j).next;
        }
        newList = 
        {
            key: i,
            value:value,
            next: i + 1,
        }
        this.list.push(newList);
    },

    addOnHead: function(value) {
        this.findKey('head').next--;
        newList = 
        {
            key: this.findKey('head').next,
            value:value,
            next: this.findKey('head').next + 1,
        }
        this.list.push(newList);
    }
}
ojList.init();
ojList.add(23);
ojList.addOnHead(32);
ojList.addOnHead(99);
ojList.addOnHead(12);
ojList.add(66);
ojList.browsing();
