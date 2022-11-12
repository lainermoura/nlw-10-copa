let createGame = (player1, hour, player2) => {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="icon-${player1}-flag" title="${player1.toUpperCase()}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="icon-${player2}-flag" title="${player2.toUpperCase()}">
    </li>
`
}

let delay = -0.4;
let createCard = (date, day, games) => {
    delay = delay + 0.4
    return `
        <div class="card" style="animation-delay: ${delay}s">
        <h2> ${date} <span>${day}</span></h2>
            <ul>${games}</ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 
        createCard(
            '24/11', 'quinta',  createGame('brazil', '16:00', 'serbia')) +

        createCard(
            '28/11', 'segunda',  
            createGame('brazil', '13:00', 'switzerland') + 
            createGame('portugal', '16:00', 'uruguay')) +

        createCard(
            '01/12', 'sexta',  createGame('brazil', '16:00', 'cameroon'))
