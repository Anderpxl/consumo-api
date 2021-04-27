var input = document.getElementById("searchGame")
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click()
    }
})

function pesquisaJogo() {

    let gameName = document.getElementById("searchGame").value

    if (gameName === "") {
        alert("Por favor, insira o nome de um jogo a ser buscado.")
    }
    else {
        var url = `https://www.cheapshark.com/api/1.0/deals?title=${gameName}`
    }

    var classes = ["radar-chart", "donut-chart", "polar-chart", "bar-chart", "line-chart", "pie-chart"]
    var tiposGraficos = ["de radar", "de donut", "polar", "de barras", "de linha", "de pizza"]
    var id = ["myChart1", "myChart2", "myChart3", "myChart4", "myChart5", "myChart6"]
    var types = ["radar", "doughnut", "polarArea", "bar", "line", "pie"]

    console.log(url)
    fetch(url)

        .then(response => response.json())

        .then(json => {

            var games = json;
            if (games.length === 0) {
                alert("Jogo não encontrado")
            }

            var nameJSON = json[0].title
            gameName = nameJSON
            console.log(games)
            console.log(gameName)

            if (gameName.myChart != null) {
                gameName.myChart.destroy()
            }

            function geraGraphCard() {

                var nomeJogo = gameName
                var container = document.getElementById(`gridGraphs`)
                var limpaTexto = document.getElementById("textoDescritivo").innerHTML = ""
                container.innerHTML = ""
                for (let i = 0; i < id.length; i++) {
                        container.innerHTML +=
                            `
                                <div class="col">
                                    <div class="card">
                                        <canvas class="${classes[i]}" id=${id[i]}></canvas>
                                        <div class="card-body">
                                            <h5 class="card-title">${nomeJogo}</h5>
                                            <p class="card-text">Nesse gráfico ${tiposGraficos[i]} é mostrado a diferença de preços do jogo ${nomeJogo} em diferentes lojas.</p>
                                        </div>
                                    </div>
                                </div> 
                            `
                }
            }

            if (games.length > 1) {
                geraGraphCard()
            }

            else{
                alert("Não foi possivel comparar preços, pois o jogo requisitado está dísponivel em apenas uma loja.")
            }
            

            for (let i = 0; i < classes.length; i++) {
                if (games.length == 4) {
                    var ctx = document.getElementById(id[i]).getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: types[i],
                        data: {
                            labels: ['loja 1', 'loja 2', 'loja 3', 'loja 4',],
                            datasets: [{
                                label: nameJSON,
                                data: [games[0].normalPrice, games[1].normalPrice, games[2].normalPrice, games[3].normalPrice],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }

                    });
                }
                else if (games.length == 3) {
                    var ctx = document.getElementById(id[i]).getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: types[i],
                        data: {
                            labels: ['loja 1', 'loja 2', 'loja 3',],
                            datasets: [{
                                label: nameJSON,
                                data: [games[0].normalPrice, games[1].normalPrice, games[2].normalPrice],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }

                    });
                }
                else if (games.length == 2) {
                    var ctx = document.getElementById(id[i]).getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: types[i],
                        data: {
                            labels: ['loja 1', 'loja 2',],
                            datasets: [{
                                label: nameJSON,
                                data: [games[0].normalPrice, games[1].normalPrice],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }

                    });
                }
                else {
                    var ctx = document.getElementById(id[i]).getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: types[i],
                        data: {
                            labels: ['loja 1', 'loja 2', 'loja 3', 'loja 4', 'loja 5'],
                            datasets: [{
                                label: nameJSON,
                                data: [games[0].normalPrice, games[1].normalPrice, games[2].normalPrice, games[3].normalPrice, games[4].normalPrice],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }

                    });
                }
            }
        })
}