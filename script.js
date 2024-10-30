const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Função para buscar e listar dados
async function fetchPeopleData() {
    try {
        const response = await fetch(apiUrl);
        const peopleData = await response.json();
        
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';

        // Preenche a tabela com os dados da API
        peopleData.forEach(person => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${person.id}</td>
                <td>${person.name}</td>
                <td>${person.username}</td>
                <td>${person.email}</td>
                <td>${person.address.city}</td>
                <td>${person.phone}</td>
                <td>${person.company.name}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', fetchPeopleData);
