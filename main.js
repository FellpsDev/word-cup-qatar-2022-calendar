function createGame(team1, hour, team2) {
  return `
    <li>
        <img src="assets/icon_${team1}.svg" alt="Bandeira do ${team1}">
        <strong>${hour}</strong>
        <img src="assets/icon_${team2}.svg" alt="Bandeira da ${team2}">
    </li>
  `
}

let delay = - 0.3
function createCard(date, day, games) {
  delay += 0.3;
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
    createCard("24/11", "sabado", createGame('switzerland', '07:00', 'cameroon') + createGame('portugal', '13:00', 'ghana') + createGame("brazil", "16:00", "serbia")) +
    createCard("28/11", "quarta", createGame('south_korea', '10:00', 'ghana') + createGame("brazil", "13:00", "switzerland") + createGame('portugal', '16:00', 'uruguay')) +
    createCard("02/12", "segunda", createGame("cameroon", "16:00", "brazil"))


