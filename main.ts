/// <reference path="grid/gridtable.ts" />

window.onload = () => {
    console.time("timer");
    var table: HTMLTableElement = <HTMLTableElement>document.querySelector(".tt");
    let gridtable = new GridTable(table, ["col1", "col2", "col3"]);
    var data = [];
    for (var i = 0; i < 500; i++) {
        data.push({ "col1": i, "col2": "Su, Yuxuan", "col3": 500-i });
    }
    gridtable.DataSource = data;
    console.timeEnd("timer");
};