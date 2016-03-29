/**
 * GridTable
 */
var GridTable = (function () {
    function GridTable(baseTable, colNames) {
        this._baseTable = baseTable;
        this._colNames = colNames;
        this.initTableHead();
        this.initTableBody();
    }
    GridTable.prototype.initTableHead = function () {
        this._thead = this._baseTable.createTHead();
        if (this._colNames == null)
            return;
        var row = this._baseTable.tHead.insertRow();
        this._colNames.forEach(function (value, index, array) {
            var cell = row.insertCell();
            cell.innerHTML = value;
        });
    };
    GridTable.prototype.initTableBody = function () {
        this._tbody = this._baseTable.createTBody();
    };
    GridTable.prototype.add = function (entity) {
    };
    Object.defineProperty(GridTable.prototype, "DataSource", {
        get: function () {
            return this._dataSource;
        },
        set: function (entities) {
            var _this = this;
            var tempTBody = document.createElement("tbody");
            entities.forEach(function (entity, eindex, earray) {
                var row = tempTBody.insertRow();
                _this._colNames.forEach(function (colName, cindex, carray) {
                    var cell = row.insertCell();
                    cell.innerHTML = entity[colName];
                });
            });
            this._tbody.innerHTML = tempTBody.innerHTML;
            this._dataSource = entities;
        },
        enumerable: true,
        configurable: true
    });
    return GridTable;
}());
//# sourceMappingURL=gridtable.js.map