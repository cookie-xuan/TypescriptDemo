/**
 * GridTable
 */
class GridTable {

    _baseTable: HTMLTableElement;
    _colNames: string[];
    _thead: HTMLTableSectionElement;
    _tbody: HTMLTableSectionElement;
    _dataSource: Array<Object>;

    constructor(baseTable: HTMLTableElement, colNames?: string[]) {
        this._baseTable = baseTable;
        this._colNames = colNames;
        this.initTableHead();
        this.initTableBody();
    }

    private initTableHead() {
        this._thead = this._baseTable.createTHead();
        if (this._colNames == null) return;
        var row = this._baseTable.tHead.insertRow();
        this._colNames.forEach((value, index, array) => {
            var cell = row.insertCell();
            cell.innerHTML = value;
        })

    }
    private initTableBody() {
        this._tbody = this._baseTable.createTBody();
    }

    public add<E>(entity: E) {

    }


    public get DataSource(): Array<Object> {
        return this._dataSource;
    }

    public set DataSource(entities: Array<Object>) {
        var tempTBody = document.createElement("tbody");
        entities.forEach((entity, eindex, earray) => {
            var row = tempTBody.insertRow();
            this._colNames.forEach((colName, cindex, carray) => {
                var cell = row.insertCell();
                cell.innerHTML = entity[colName];
            });
        });
        this._tbody.innerHTML = tempTBody.innerHTML;
        this._dataSource = entities;
    }
    


}