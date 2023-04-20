cars = []
function clearTable()
{
    document.getElementById("tblCarsBody").innerHTML = "";
}
function fillRows()
{
    clearTable();
    for(let i=0;i<cars.length;i++)
    {
        document.getElementById("tblCarsBody").innerHTML += 
        `
        <tr>
            <th scope="row">${cars[i].ID}</th>
            <td>${cars[i].Model}</td>
            <td>${cars[i].Year}</td>
            <td>${cars[i].Price}</td>
            <td>${cars[i].Color}</td>
            <td>${cars[i].Status}</td>
        </tr>
        `
    }
}
function addRow()
{   
    nextID = 1
    if(cars.length > 0)
        nextID = cars[cars.length - 1].ID + 1;
    let row = 
    {
        ID: nextID,
        Model: document.getElementById("tbModelname").value,
        Year: document.getElementById("ypYear").value,
        Price: document.getElementById("tbPrice").value,
        Color: document.getElementById("cpPaint").value,
        Status: document.getElementById("tbStatus").value 
    }
    cars.push(row);

    fillRows();
    alert('!!!');
}
function clearCars()
{
    clearTable();
    cars.pop();
}
function getElementByModel()
{
    clearTable();
    for(let i=0;i<cars.length;i++)
    {
        if(cars[i].Model.toLowerCase() == document.getElementById("tbModelKey").value.toLowerCase() ||document.getElementById("tbModelKey").value=="")
        {
            document.getElementById("tblCarsBody").innerHTML += 
            `
            <tr>
                <th scope="row">${cars[i].ID}</th>
                <td>${cars[i].Model}</td>
                <td>${cars[i].Year}</td>
                <td>${cars[i].Price}</td>
                <td>${cars[i].Color}</td>
                <td>${cars[i].Status}</td>
            </tr>
            `        
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

const clearBTN = document.getElementById("btnClearCars");
clearBTN.onclick = (event) =>
{
    event.preventDefault();
    clearCars();
}