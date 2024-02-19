var arvotut = 0
document.addEventListener('DOMContentLoaded', function() {
    let table_n = document.querySelector('table');
    let luonappi = document.querySelector('button');

    luonappi.addEventListener('click', generateJokerRow);

    function generateJokerRow() {
        let uusiRivi = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            let randomized_number = Math.floor(Math.random() * 10);
            let celli = document.createElement('td');
            celli.textContent = randomized_number;
            uusiRivi.appendChild(celli);
        }
        table_n.appendChild(uusiRivi);
        arvotut++;
    document.querySelector("p").innerHTML = "Valmiita rivejä: " + arvotut;
    }

})
