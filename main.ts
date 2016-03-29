/// <reference path="grid/gridtable.ts" />

window.onload = () => {
    var table: HTMLTableElement = <HTMLTableElement>document.querySelector(".tt");
    let gridtable = new GridTable<string>(table,["col1","col2","col3"]);
};