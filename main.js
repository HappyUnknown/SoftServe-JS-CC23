cars = []
function addRow()
{
    let row = 
    {
        ID: 1,
        Model: document.getElementById("tbModelname").value,
        Year: document.getElementById("ypYear").value,
        Price: document.getElementById("tbPrice").value,
        Color: document.getElementById("cpPaint").value,
        Status: document.getElementById("tbStatus").value 
    }
    cars.push(row);

    document.getElementById("tblCars").innerHTML += 
    `
    <tr>
        <th scope="row">${row.ID}</th>
        <td>${row.Model}</td>
        <td>${row.Year}</td>
        <td>${row.Price}</td>
        <td>${row.Color}</td>
        <td>${row.Status}</td>
    </tr>
    `
}
function getElementByModel()
{
    for(let i=0;i<cars.length;i++)
    {
        if(cars[i].Model == document.getElementById("tbModelname").value)
        {
            // document.getElementById("tbModelname").value = cars[i].Model;
            // document.getElementById("ypYear").value = cars[i].Year;
            // document.getElementById("tbPrice").value = cars[i].Price;
            // document.getElementById("cpPaint").value = cars[i].Color;
            // document.getElementById("tbStatus").value = cars[i].Status;
            alert(`WITH PAINT OF ${cars[i].Color}`);
            return;
        }
    }
    alert("No such modelname");
}

const searchBTN = document.getElementById("btnModelSearch");
searchBTN.onclick = (event) =>
{
    event.preventDefault();
    getElementByModel();
}

const addBTN = document.getElementById("btnAddItem");
addBTN.onclick = (event) =>
{
    event.preventDefault();
    addRow();
}