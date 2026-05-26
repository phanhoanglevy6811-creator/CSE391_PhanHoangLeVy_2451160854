const students = [
    { id: "SV001", name: "An", score: 8.5 },
    { id: "SV002", name: "Bình", score: 7.2 },
    { id: "SV003", name: "Cường", score: 9.1 },
    { id: "SV004", name: "Dũng", score: 5.4 },
    { id: "SV005", name: "Em", score: 6.8 }
];

let original = [...students];

function render(data) {
    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(sv => {
        list.innerHTML += `
            <tr>
                <td>${sv.id}</td>
                <td>${sv.name}</td>
                <td>${sv.score}</td>
            </tr>
        `;
    });

    renderStats(data);
}

function renderStats(data) {
    const avg = data.reduce((s, sv) => s + sv.score, 0) / data.length;
    document.getElementById("stats").innerText =
        "Average: " + avg.toFixed(2);
}

render(students);

document.getElementById("search").addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();

    const filtered = students.filter(sv =>
        sv.name.toLowerCase().includes(keyword) ||
        sv.id.toLowerCase().includes(keyword)
    );

    render(filtered);
});