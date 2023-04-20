//Filling dropdownlist
document.getElementById("ddlStatus").innerHTML += 
`
<option></option>
<option>Delivered</option>
<option>Taxing</option>
<option>Taxed</option>
`
//
cars = []
function clearTable()
{
    document.getElementById("tblCarsBody").innerHTML = "";
}
function fillRows()
{
    clearTable();
    for(let i=0; i<cars.length; i++)
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
    let modelname = document.getElementById("tbModelname").value;
    let year = document.getElementById("ypYear").value;
    let price = document.getElementById("tbPrice").value;
    let color = document.getElementById("cpPaint").value;
    let status = document.getElementById("ddlStatus").value;
    fullfilled = modelname.length > 0 && year.length > 0 && price.length > 0 && color.length > 0 && status.length > 0;
    if(fullfilled)
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
            Status: document.getElementById("ddlStatus").value
        }
        cars.push(row);
        document.getElementById("dlModels").innerHTML += `<option>${row.Model}</option>`
    }
    else
    {
        alert("Requirements were not met");
    }
    fillRows();
}
function clearCars()
{
    clearTable();
    cars.length = 0;
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