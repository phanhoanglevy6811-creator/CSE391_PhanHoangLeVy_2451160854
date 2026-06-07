const cityInput =
    document.getElementById("cityInput");

const searchBtn =
    document.getElementById("searchBtn");

const result =
    document.getElementById("result");

const historyBox =
    document.getElementById("history");

// Loading State
function showLoading() {

    result.innerHTML = `
        <p class="loading">
            ⏳ Đang tải...
        </p>
    `;
}

// Error State
function showError(message) {

    result.innerHTML = `
        <p class="error">
            ${message}
        </p>
    `;
}

// Success State
function showWeather(data) {

    const current =
        data.current_condition[0];

    result.innerHTML = `
        <div class="success">

            <img
                src="${current.weatherIconUrl[0].value}"
                width="80"
            >

            <h3>
                ${current.temp_C}°C
            </h3>

            <p>
                Độ ẩm:
                ${current.humidity}%
            </p>

            <p>
                ${
                    current.weatherDesc[0].value
                }
            </p>

        </div>
    `;
}

// LocalStorage
function saveHistory(city) {

    let history =
        JSON.parse(
            localStorage.getItem("history")
        ) || [];

    history =
        history.filter(
            item => item !== city
        );

    history.unshift(city);

    history = history.slice(0,5);

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

    renderHistory();
}

function renderHistory() {

    const history =
        JSON.parse(
            localStorage.getItem("history")
        ) || [];

    historyBox.innerHTML =
        history.map(city => `
            <span
                class="history-item"
                onclick="searchWeather('${city}')"
            >
                ${city}
            </span>
        `).join("");
}

// Fetch API
async function searchWeather(city) {

    if(!city) return;

    showLoading();

    try {

        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        if(!response.ok){
            throw new Error(
                "Không tìm thấy thành phố"
            );
        }

        const data =
            await response.json();

        showWeather(data);

        saveHistory(city);

    } catch(error){

        showError(
            "Lỗi API hoặc mất mạng"
        );

    }
}

searchBtn.addEventListener(
    "click",
    () => {
        searchWeather(
            cityInput.value.trim()
        );
    }
);

renderHistory();