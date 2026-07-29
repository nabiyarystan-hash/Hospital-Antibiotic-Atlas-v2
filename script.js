const select = document.getElementById("antibioticSelect");
const frame = document.getElementById("mapFrame");


// Загрузка карты

function loadMap(index) {

    const antibiotic = antibiotics[index];

    frame.src = antibiotic.map;

}


// Заполняем список антибиотиков

antibiotics.forEach((item, index) => {

    const option = document.createElement("option");

    option.value = index;

    option.textContent = item.name;

    select.appendChild(option);

});



// Создание таблицы

function createSmallTable() {

    const tableDiv = document.getElementById("smallTable");

    const selectedAntibiotic = antibiotics[select.value].name;

    console.log("Updating table:", selectedAntibiotic);


    let html = `

    <table>

        <tr>

            <th>Region</th>

            <th>${selectedAntibiotic} (C-DID/year)</th>

        </tr>

    `;


    tableData.forEach(row => {

        html += `

        <tr>

            <td>${row.Region}</td>

            <td>
                ${
                row[selectedAntibiotic] !== undefined
                ? row[selectedAntibiotic].toFixed(6)
                : "NA"
                }
            </td>

        </tr>

        `;

    });


    html += `</table>`;


    tableDiv.innerHTML = html;

}



// Первоначальная загрузка

loadMap(0);

createSmallTable();



// Переключение антибиотика

select.addEventListener("change", function () {

    console.log("Selected:", antibiotics[this.value].name);


    loadMap(this.value);


    createSmallTable();

});
