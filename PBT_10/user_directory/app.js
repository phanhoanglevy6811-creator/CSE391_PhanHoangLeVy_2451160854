const api = {
    baseURL: "https://jsonplaceholder.typicode.com",

    async getUsers() {
        const res = await fetch(`${this.baseURL}/users`);
        return res.json();
    },

    async createUser(data) {
        const res = await fetch(`${this.baseURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return res.json();
    },

    async updateUser(id, data) {
        const res = await fetch(`${this.baseURL}/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return res.json();
    },

    async deleteUser(id) {
        await fetch(`${this.baseURL}/users/${id}`, {
            method: "DELETE"
        });
    }
};

const ui = {
    renderUsers(users) {
        document.getElementById("userList").innerHTML =
            users.map(user => `
                <div>
                    <b>${user.name}</b>
                    <p>${user.email}</p>

                    <button onclick="editUser(${user.id})">
                        Edit
                    </button>

                    <button onclick="removeUser(${user.id})">
                        Delete
                    </button>
                </div>
            `).join("");
    },

    showLoading() {
        document.getElementById("userList").innerHTML =
            "<p>Loading...</p>";
    },

    hideLoading() {},

    showError(message) {
        alert(message);
    },

    showSuccess(message) {
        alert(message);
    }
};