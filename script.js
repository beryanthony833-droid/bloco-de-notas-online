document.addEventListener("DOMContentLoaded", () => {
    const notasContainer = document.getElementById("notasContainer");
    const btnAdd = document.querySelector(".btn-add");

    function carregarNotas() {
        const notas = JSON.parse(localStorage.getItem("notas")) || [];
        notasContainer.innerHTML = "";

        notas.forEach(texto => criarNota(texto));
    }

    function salvarNotas() {
        const inputs = document.querySelectorAll(".nota input");
        const notas = [];

        inputs.forEach(input => notas.push(input.value));

        localStorage.setItem("notas", JSON.stringify(notas));
    }

    function criarNota(texto = "") {
        const nota = document.createElement("div");
        nota.className = "nota";

        const input = document.createElement("input");
        input.type = "text";
        input.value = texto;

        const btnDelete = document.createElement("button");
        btnDelete.className = "btn-delete";
        btnDelete.textContent = "🗑";

        input.addEventListener("input", salvarNotas);
        btnDelete.addEventListener("click", () => {
            nota.remove();
            salvarNotas();
        });

        nota.appendChild(input);
        nota.appendChild(btnDelete);
        notasContainer.appendChild(nota);
    }

    btnAdd.addEventListener("click", () => {
        criarNota();
        salvarNotas();
    });

    carregarNotas();
});
