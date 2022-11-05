function createGame(team1, hour, team2) {
  return `
    <li>
        <img src="assets/icon_${team1}.svg" alt="Bandeira do ${team1}">
        <strong>${hour}</strong>
        <img src="assets/icon_${team2}.svg" alt="Bandeira da ${team2}">
    </li>
  `
}

let delay = - 0.2
function createCard(date, day, group, games) {
  delay += 0.2;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
    createCard("24/11", "Sábado", "Grupo G", createGame('switzerland', '07:00', 'cameroon') + createGame("brazil", "16:00", "serbia")) +
    createCard("28/11", "Quarta", "Grupo G", createGame('cameroon', '07:00', 'serbia') + createGame("brazil", "13:00", "switzerland")) +
    createCard("02/12", "Segunda", "Grupo G", createGame('serbia', '16:00', 'switzerland') + createGame("cameroon", "16:00", "brazil"))