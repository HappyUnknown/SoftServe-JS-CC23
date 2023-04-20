cars = []
function addRow()
{
    let row = 
    {
        ID: 1,
        Model: document.getElementById("tbModelname").value,
        Year: document.getElementById("ypYear").value,
        Price: document.getElementById("tbPrice").value,
        Color: document.getElementById("cpDesign").value,
        Status: document.getElementById("tbStatus").value 
    }
    cars.push(row);

    document.getElementById("tblCars").innerHTML += 
    `<tr>
        <th scope="row">${row.ID}</th>
        <td>${row.Model}</td>
        <td>${row.Year}</td>
        <td>${row.Price}</td>
        <td>${row.Color}</td>
        <td>${row.Status}</td>
    `
}

const addBtn = document.getElementById("btnAddItem");
addBtn.onclick = (event) =>
{
    event.preventDefault();
    addRow();
}