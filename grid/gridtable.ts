/**
 * GridTable
 */
class GridTable<E>{

    _baseTable: HTMLTableElement;

    constructor(baseTable: HTMLTableElement, colNames?: string[]) {
        this._baseTable = baseTable;
        this.initTableHead(colNames);
        this.initTableBody();
    }

    private initTableHead(colNames?: string[]) {
        this._baseTable.createTHead();
        if (colNames == null) return;
        var row = this._baseTable.tHead.insertRow();
        colNames.forEach((value, index, array) => {
            var cell = row.insertCell();
            cell.innerHTML = value;
        })

    }
    private initTableBody() {
        this._baseTable.createTBody();
    }

    public add<E>(entity: E) {

    }

}