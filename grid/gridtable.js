/**
 * GridTable
 */
var GridTable = (function () {
    function GridTable(baseTable, colNames) {
        this._baseTable = baseTable;
        this.initTableHead(colNames);
        this.initTableBody();
    }
    GridTable.prototype.initTableHead = function (colNames) {
        this._baseTable.createTHead();
        if (colNames == null)
            return;
        var row = this._baseTable.tHead.insertRow();
        colNames.forEach(function (value, index, array) {
            var cell = row.insertCell();
            cell.innerHTML = value;
        });
    };
    GridTable.prototype.initTableBody = function () {
        this._baseTable.createTBody();
    };
    GridTable.prototype.add = function (entity) {
    };
    return GridTable;
}());
//# sourceMappingURL=gridtable.js.map