const widget1 = document.getElementById("widget1");
const widget2 = document.getElementById("widget2");
const widget3 = document.getElementById("widget3");

const globalLoading = document.getElementById("globalLoading");
const loadTime = document.getElementById("loadTime");
const refreshBtn = document.getElementById("refreshBtn");

function showWidgetLoading() {
    widget1.innerHTML =
        '<p class="widget-loading">Loading...</p>';

    widget2.innerHTML =
        '<p class="widget-loading">Loading...</p>';

    widget3.innerHTML =
        '<p class="widget-loading">Loading...</p>';
}

function renderWidget(index, data) {

    switch(index){

        case 0:
            widget1.innerHTML = `
                <p><strong>Name:</strong> ${data[0].name}</p>
                <p><strong>Email:</strong> ${data[0].email}</p>
                <p class="success">Loaded Successfully</p>
            `;
            break;

        case 1:
            widget2.innerHTML = `
                <p><strong>Temperature:</strong>
                ${data.current.temperature_2m}°C</p>

                <p><strong>Wind Speed:</strong>
                ${data.current.wind_speed_10m} km/h</p>

                <p class="success">Loaded Successfully</p>
            `;
            break;

        case 2:
            widget3.innerHTML = `
                <p><strong>Country:</strong>
                ${data[0].name.common}</p>

                <p><strong>Capital:</strong>
                ${data[0].capital[0]}</p>

                <p><strong>Population:</strong>
                ${data[0].population.toLocaleString()}</p>

                <p class="success">Loaded Successfully</p>
            `;
            break;
    }
}

function renderWidgetError(index, message){

    const widgets = [widget1, widget2, widget3];

    widgets[index].innerHTML = `
        <p class="error">
            Error: ${message}
        </p>
    `;
}

async function loadDashboard() {

    globalLoading.style.display = "block";

    showWidgetLoading();

    const startTime = Date.now();

    const results = await Promise.allSettled([

        fetch(
            "https://jsonplaceholder.typicode.com/users"
        ).then(res => res.json()),

        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=21.0285&longitude=105.8542&current=temperature_2m,wind_speed_10m"
        ).then(res => res.json()),

        fetch(
            "https://restcountries.com/v3.1/name/vietnam"
        ).then(res => res.json())

    ]);

    results.forEach((result, index) => {

        if(result.status === "fulfilled"){
            renderWidget(index, result.value);
        }
        else{
            renderWidgetError(
                index,
                result.reason.message
            );
        }

    });

    const totalTime = Date.now() - startTime;

    loadTime.textContent =
        `Data loaded in ${totalTime} ms`;

    globalLoading.style.display = "none";
}

refreshBtn.addEventListener(
    "click",
    loadDashboard
);

loadDashboard();