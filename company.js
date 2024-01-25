let resultados = fetch("http://localhost:3000/companies")
.then(response => {
    return response.json()
}).then(data => {
    data.forEach(function(element){  
        let tbody = document.getElementById("bodyTable")
        console.log(data)
        tbody.innerHTML = `
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.description}</td>
        <td>${element.founder}</td>
        <td><img src="${element.logo}" alt="" width="60px" ></td>
        <td>
            <button class="btn btn-danger" onclick="EliminarDato()">Eliminar</button>
            <button class="btn btn-primary" onclick="VerDetalles()">Ver detalles</button>
            <button class="btn btn-secondary" onclick="Editar()">Editar</button>
        </td>
    </tr>`;
    })  
})