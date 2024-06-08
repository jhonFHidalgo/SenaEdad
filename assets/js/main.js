document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let birthDate = new Date(document.getElementById('birthDate').value);
    let today = new Date();

    if (birthDate > today) {
        document.getElementById('result').innerText = "La fecha de nacimiento no puede ser en el futuro.";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    let dayDifference = today.getDate() - birthDate.getDate();

    // Ajuste si el cumpleaños no ha ocurrido este año
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `La edad actual es: ${age} años.`;
});
