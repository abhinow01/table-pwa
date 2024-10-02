const chemicalData = [
    { id: 1, chemicalName: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: 100.00, unit: "kg", quantity: 6495.18 },
    { id: 2, chemicalName: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: 100.00, unit: "kg", quantity: 8751.90 },
    { id: 3, chemicalName: "Dimethylaminopropylamine", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: 75.00, unit: "L", quantity: 5964.61 },
    { id: 4, chemicalName: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: 105.00, unit: "kg", quantity: 8183.73 },
    { id: 5, chemicalName: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.90, packaging: "Bag", packSize: 105.00, unit: "kg", quantity: 4154.33 },
    { id: 6, chemicalName: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: "N/A", unit: "t", quantity: 6272.34 },
    { id: 7, chemicalName: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: 250.00, unit: "kg", quantity: 8749.54 },
    { id: 8, chemicalName: "Ethanol", vendor: "BASF", density: 789, viscosity: 1.2, packaging: "Drum", packSize: 200.00, unit: "L", quantity: 5000.00 },
    { id: 9, chemicalName: "Acetic Acid", vendor: "BASF", density: 1049, viscosity: 1.25, packaging: "Drum", packSize: 150.00, unit: "L", quantity: 4000.00 },
    { id: 10, chemicalName: "Benzene", vendor: "DowDuPont", density: 876, viscosity: 0.95, packaging: "Drum", packSize: 200.00, unit: "L", quantity: 6000.00 },
    { id: 11, chemicalName: "Sodium Hydroxide", vendor: "Formosa", density: 2100, viscosity: 10.8, packaging: "Bag", packSize: 50.00, unit: "kg", quantity: 7000.00 },
    { id: 12, chemicalName: "Hydrochloric Acid", vendor: "Sinopec", density: 1200, viscosity: 1.3, packaging: "Drum", packSize: 150.00, unit: "L", quantity: 4500.00 },
    { id: 13, chemicalName: "Sulfuric Acid", vendor: "BASF", density: 1840, viscosity: 2.1, packaging: "Drum", packSize: 150.00, unit: "L", quantity: 3500.00 },
    { id: 14, chemicalName: "Acetone", vendor: "LG Chem", density: 784, viscosity: 0.32, packaging: "Drum", packSize: 200.00, unit: "L", quantity: 8000.00 },
    { id: 15, chemicalName: "Nitric Acid", vendor: "DowDuPont", density: 1510, viscosity: 1.42, packaging: "Drum", packSize: 100.00, unit: "L", quantity: 3500.00 }
];

let sortColumn = 'id';
let sortOrder = 'asc';
let selectedRow = null;

function renderTable() {
    console.log("~render table")
    const tbody = document.querySelector('#chemicalTable tbody');
    tbody.innerHTML = '';

    chemicalData.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.className = selectedRow === index ? 'selected' : '';
        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.chemicalName}</td>
            <td>${row.vendor}</td>
            <td>${row.density}</td>
            <td>${row.viscosity}</td>
            <td>${row.packaging}</td>
            <td>${row.packSize}</td>
            <td>${row.unit}</td>
            <td>${row.quantity}</td>
            <td>
                <button onclick="editRow(${row.id})">Edit</button>
                <button onclick="deleteRow(${row.id})">Delete</button>
            </td>`
        ;
        tbody.appendChild(tr);

        tr.addEventListener('click', (event) => {
            event.stopPropagation(); 
            selectedRow = index;
            highlightSelectedRow();
        });
    });
}

function highlightSelectedRow() {
    const rows = document.querySelectorAll('#chemicalTable tbody tr');
    rows.forEach((row, index) => {
        row.classList.toggle('selected', index === selectedRow);
    });
}

function unselectRow() {
    selectedRow = null;
    highlightSelectedRow();
}

document.addEventListener('click', (event) => {
    const table = document.querySelector('#chemicalTable');
    if (!table.contains(event.target)) {
        unselectRow();
    }
});

function sortData(column) {
    if (column === sortColumn) {
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortOrder = 'asc';
    }

    chemicalData.sort((a, b) => {
        if (a[column] < b[column]) return sortOrder === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });

    renderTable();
}

function editRow(id) {
    const row = chemicalData.find(r => r.id === id);
    const tr = document.querySelector(`#chemicalTable tbody tr:nth-child(${id})`);
    tr.classList.add('edit-mode');
    tr.innerHTML = `
        <td>${row.id}</td>
        <td><input type="text" value="${row.chemicalName}"></td>
        <td><input type="text" value="${row.vendor}"></td>
        <td><input type="number" value="${row.density}"></td>
        <td><input type="number" value="${row.viscosity}"></td>
        <td><input type="text" value="${row.packaging}"></td>
        <td><input type="number" value="${row.packSize}"></td>
        <td><input type="text" value="${row.unit}"></td>
        <td><input type="number" value="${row.quantity}"></td>
        <td>
            <button onclick="saveRow(${row.id})">Save</button>
            <button onclick="cancelEdit(${row.id})">Cancel</button>
        </td>
        `
    ;
}

function saveRow(id) {
    const tr = document.querySelector(`#chemicalTable tbody tr:nth-child(${id})`);
    const inputs = tr.querySelectorAll('input');
    const row = chemicalData.find(r => r.id === id);

    row.chemicalName = inputs[0].value;
    row.vendor = inputs[1].value;
    row.density = parseFloat(inputs[2].value);
    row.viscosity = parseFloat(inputs[3].value);
    row.packaging = inputs[4].value;
    row.packSize = parseFloat(inputs[5].value);
    row.unit = inputs[6].value;
    row.quantity = parseFloat(inputs[7].value);

    tr.classList.remove('edit-mode');
    renderTable();
}

function cancelEdit(id) {
    renderTable();
}

function deleteRow(id) {
    const index = chemicalData.findIndex(r => r.id === id);
    if (index !== -1) {
        chemicalData.splice(index, 1);
        renderTable();
    }
}

function addRow() {
    const newId = chemicalData.length > 0 ? Math.max(...chemicalData.map(r => r.id)) + 1 : 1; 
    const newRow = {
        id: newId,
        chemicalName: 'New Chemical',
        vendor: '',
        density: 0,
        viscosity: 0,
        packaging: '',
        packSize: 0,
        unit: '',
        quantity: 0
    };
    
    chemicalData.push(newRow);

    renderTable();

    editRow(newId);
}

function moveRow(direction) {
    if (selectedRow === null) return;
    const newIndex = selectedRow + direction;
    if (newIndex < 0 || newIndex >= chemicalData.length) return;

    const temp = chemicalData[selectedRow];
    chemicalData[selectedRow] = chemicalData[newIndex];
    chemicalData[newIndex] = temp;

    selectedRow = newIndex;
    renderTable();
    highlightSelectedRow();
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    
    document.querySelector('#moveUpBtn').addEventListener('click', () => moveRow(-1));
    document.querySelector('#moveDownBtn').addEventListener('click', () => moveRow(1));

    document.querySelector('#addRow').addEventListener('click', addRow);
});
