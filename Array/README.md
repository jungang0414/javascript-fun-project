# 陣列應用

複製、排序、連接、統計次數

# 複製

const arr = ['Danny', 'Mike', 'John', 'John', 'Tao', 'John', 'Mike']

1. for迴圈
    const result = [];
    for (let i = 0; i< arr.length; i++) {
        result.push(arr[i]);
    }

2. slice
    const result = arr.slice();

3. 擴展運算子
    const result = [...arr];

# 排序

const newArr = [{name: 'Danny'}, {name: 'Mike'}, {name: 'John'}, {name: 'John'},{name: 'Tao'}, {name: 'John'}, {name: 'Mike'}]

1. sort 
    能透過傳入comparison function做排序

    const demo = [10, 1, 2, 5];
    console.log(demo.sort((a,b) => a - b));
    
    return a - b的值 < 0 ，將a排在b之前。
    return a - b的值 > 0 ，將a排在b之後。
    return a - b的值 = 0 ，保持不變。

    newArr.sort((a,b) => {
        if (a.name > b.name) {
            return 1 //a排在b之後
        } else lf (a.name < b.name) {
            return -1 //a排在b之前
        }
        return 0 //保持不變
    })

# 連接

連接以下兩個陣列並回傳新的陣列
const oldList = ['Danny', 'Mike', 'John', 'John', 'Tao', 'John', 'Mike']
const newList = ['Mary', 'Mike', 'Joyce', 'Joyce', 'Mary']

const result = [...oldList]

1. for迴圈
    for (let i = 0; i < newList.length; i++) {
        oldList.push(newList[i]);
    }

2. concat語法
    陣列原生的語法concat

    const result = [...oldList].concat(newList);

3. 擴展運算子
    const result = [...oldList, ...newList];

# 統計

計算陣列中名字出現的次數

const list = ['Danny', 'Mike', 'John', 'John', 'Tao', 'John', 'Mike', 'Mary', 'Mike', 'Joyce', 'Joyce', 'Mary']

1. reduce語法
    const countResult = list.reduce((obj, item) => {
        if (item in obj) {
            obj[item]++
        } else {
            obj[item] = 1
        }
        return obj
    },{})