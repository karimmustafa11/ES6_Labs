function fun(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open("GET", url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr.status)
                }
            }
        };
        xhr.send();
    });
}

var result = fun('https://jsonplaceholder.typicode.com/users')

result.then(function (data) {
    let users = JSON.parse(data)

    let table = document.createElement('table')
    table.setAttribute('border', '1')


    let thead = document.createElement('thead')
    let headerRow = document.createElement('tr')

    let th1 = document.createElement('th')
    th1.textContent = "ID"
    let th2 = document.createElement('th')
    th2.textContent = "Name"

    headerRow.appendChild(th1)
    headerRow.appendChild(th2)
    thead.appendChild(headerRow)
    table.appendChild(thead)


    const tbody = document.createElement('tbody')
    users.forEach(user => {
        const row = document.createElement('tr')
        const td1 = document.createElement('td')
        td1.textContent = user.id
        const td2 = document.createElement('td')
        td2.textContent = user.name

        row.appendChild(td1)
        row.appendChild(td2)
        tbody.appendChild(row)
    })

    table.appendChild(tbody)

    document.body.appendChild(table)
}).catch(function (err) {
    console.log(`Error: ${err}`)
})
