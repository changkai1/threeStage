var data = [
    {
        area: '深圳',
        percentage: 15,
        number: 80,
        staytime: 2
    },
    {
        area: '北京',
        percentage: 30,
        number: 150,
        staytime: 4
    },
    {
        area: '广州',
        percentage: 25,
        number: 60,
        staytime: 3
    },
    {
        area: '上海',
        percentage: 30,
        number: 100,
        staytime: 4
    }
];
/*
* 根据指定的字段和规则排序数据
* data Array 要排序的数据
* field string 排序依据的字段
* rule string 排序规则 DESC / ASC
* throw
* data is invalid : 要排序的数据不存在或类型不正确
* field is invalid : 排序参考字段不存在
* return Array 排序后的数据
*/
function sortData(type, order) {
    if ( !order || ['desc','asc'].indexOf( (order = order.toString().toLowerCase()) ) == -1 )
        order = 'desc';
    // data 为表格数据
    data.sort(function(a, b) {
        var v = a[type] - b[type];
        return order == 'asc' ? v : -v;
    });
}


mySort(data, 'number', 'asc');
console.dir( data );