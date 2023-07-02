let serial = 0;

document.getElementById('btn-t').addEventListener('click', function(){
    serial++;
    const  tName= document.getElementById('t-name').innerText;
    const tB = document.getElementById("tB").value;
    const tH = document.getElementById('tH').value;
    const areaT = (0.5 *(tB) *(tH)).toFixed(2) ;
    const areaOfT = parseFloat(areaT);
    displayData(tName, areaOfT)
    

})

document.getElementById('btn-r').addEventListener('click', function(){
    serial++;
    const rName = document.getElementById('r-name').innerText;
    const rW = document.getElementById('rW').value;
    const rL = document.getElementById('rL').value;
    const areaR = ((rW) * (rL)).toFixed(2);
    const areaOfR = parseFloat(areaR);


    displayData(rName, areaOfR)
})

document.getElementById('btn-P').addEventListener('click', function(){
    serial++;
    const pName = document.getElementById("Para-name").innerText;
    const pB = document.getElementById('pB').innerText;
    const pH = document.getElementById('pH').innerText;
    const areaOfP= parseInt(pB) * parseInt (pH);

newAreaData(pName, areaOfP);
})

document.getElementById('btn-R').addEventListener('click', function(){
    serial++;
    const rName = document.getElementById('R-name').innerText;
    const rD1 = document.getElementById('RD1').innerText;
    const rD2 = document.getElementById('RD2').innerText;
    const areaOfR = 0.5 * parseInt(rD1) * parseInt(rD2);


    newAreaData(rName, areaOfR);

})
document.getElementById('btn-Pe').addEventListener('click', function(){
   
    serial++;
    const penName = document.getElementById('P-name').innerText;
    const PP = document.getElementById('PP').innerText;
    const PB = document.getElementById('PB').innerText;
    const areaOfPen = 0.5 * parseInt(PP) * parseInt(PB);


    newAreaData(penName, areaOfPen);

})


document.getElementById("btn-E").addEventListener('click', function(){
    serial++;
    const eName = document.getElementById("E-name").innerText;
    const eA = document.getElementById('EA').innerText;
    const eB = document.getElementById('EB').innerText;
    const areaE = (3.14 *(eA) *(eB)).toFixed(2);
    const areaOfE = parseFloat(areaE);


    newAreaData(eName, areaOfE);

})













    
function displayData (tName, areaOfT) {

 const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${tName}</td>
    <td>${areaOfT} cm<sup>2</sup></td>
    <td>
    <button class="bg-red-600 text-white font-medium p-2 rounded-md hover:bg-blue-600">Convert to M<sup>2</sup></button>
    </td>
    
   

   
    `;
    container.appendChild(tr)
}




function newAreaData (pName, areaOfP ) {
 const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${pName}</td> 
    <td>${areaOfP} cm<sup>2</sup></td>
    <td>
    <button class="bg-red-600 text-white font-medium p-2 rounded-md hover:bg-blue-600">Convert to M<sup>2</sup></button>
    </td>
   
    `;
    container.appendChild(tr)
}

