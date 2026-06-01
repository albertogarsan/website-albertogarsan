const grid = document.querySelector('.grid__portfolio')
const parentCards = document.querySelector('.portfolio__works__wrapper')
const cards = [...parentCards.children]
const filters = [...document.querySelectorAll('.filters__menu__wrap a')]


// DARK MODE/////////////////////////////////////
// 1) Comprovació inicial del mode de color del sistema
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme")
}

// 2) EventListener per als canvis de mode del sistema
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) => {
    console.log("Canvi d'esquema de color en el sistema detectat")
    if (e.matches) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
})

// 3) Canvi manual del mode de color mitjançant el botó de canvi
function darkMode() { document.body.classList.toggle("dark-theme") }
//////////////////////////////////////////////////


function composeTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return hours + ':' + minutes;
}

function showBtn(selectBtn) {
    const contenidor = document.querySelector('.contenidor')


    if (selectBtn === 0) {
        //primeraPart . moreabout . primera resposta
        if (!document.querySelector('#primeraPart')) {
            const about = document.createElement('section')
            about.setAttribute('id', 'primeraPart')
            about.innerHTML = `<div class="contingut contingut__pregunta pregunta__animacio">
        <a name="moreabout"></a>
        <p class="contingut__text contingut__text--pregunta" id="part1_1"></p>
    </div>
    <div class="contingut contingut__pregunta1 pregunta__animacio bottom">
        <div class="contingut__hora hora"></div>
    </div>
    <!-- Animació punts -->
    <div class="punts">
        <div class="punt"></div>
        <div class="punt"></div>
        <div class="punt"></div>
    </div>
    <!-- Primer missatge -->
    <div class="contingut contingut__resposta msg4" data-delay="2s">
        <p class="contingut__text" id="part1_2"></p>
    </div>
    <!-- Segon missatge -->
    <div class="contingut contingut__resposta msg5" data-delay="2.8s">
        <p class="contingut__text" id="part1_3"></p>
    </div>
    <!-- Tercer missatge -->
    <div class="contingut contingut__resposta msg6" data-delay="3.5s">
        <p class="contingut__text" id="part1_4"></p>
    </div>
    <!-- composeTime() -->
    <div class="contingut contingut__resposta msg6 bottom" data-delay="3.5s">
        <div class="contingut__hora--resposta hora2"></div>
    </div>`
            contenidor.appendChild(about)

            document.getElementById('primeraPart').style.display = 'flex';
            document.getElementById('primeraPart').style.flexDirection = 'column';

            document.querySelector('#primeraPart #part1_2').textContent = 'For sure!'
            document.querySelector('#primeraPart #part1_1').textContent = 'More about!'
            document.querySelector('#primeraPart #part1_3').innerHTML = 'I absolutely love creating <span>minimal style</span> and I am really <span>interested in Frontend issues</span>, using and involving visual experiences in each project by focusing on <span>the user</span> that make them have <span>goosebumps</span> 😃'
            document.querySelector('#primeraPart #part1_4').textContent = 'I’ll tell you a secret: I love exercising, playing clarinet, my laptop, my camera, good company and a good landscape to share with cool people 😎'
            document.querySelector('#primeraPart').querySelector('.contingut__hora').textContent = composeTime()
            document.querySelector('#primeraPart').querySelector('.contingut__hora--resposta').textContent = composeTime()
        }

        document.querySelector('primeraPart').style.display = 'flex'

        var elemento = document.querySelector('#primeraPart')
        var distanciaPredeterminada = 100
        var rect = elemento.getBoundingClientRect()
        var scrollToY = window.scrollY + rect.top - distanciaPredeterminada
        console.log(scrollToY)
        window.scrollTo({ top: scrollToY, behavior: 'smooth' })
        if (window.width() < 1024) document.querySelector('.menu__wrap').slideToggle();

    } else if (selectBtn === 1) {

        if (!document.getElementById('segonaPart')) {
            const studies = document.createElement('section')
            studies.setAttribute('id', 'segonaPart')
            studies.innerHTML = `<div class="contingut contingut__pregunta pregunta__animacio">
            <a name="study"></a>
            <p class="contingut__text contingut__text--pregunta" id="part2_1"></p>
        </div>
        <div class="contingut contingut__pregunta1 pregunta__animacio bottom">
            <div class="contingut__hora hora">
                <p></p>
            </div>
        </div>
        <div class="escrivint">
            <div class="punts">
                <div class="punt"></div>
                <div class="punt"></div>
                <div class="punt"></div>
            </div>
        </div>
        <!-- Sise missatge -->
        <div class="contingut contingut__resposta msg4">
            <p class="contingut__text" id="part2_2"></p>
        </div>
        <!-- Septim missatge -->
        <div class="contingut contingut__resposta msg5">
            <p class="contingut__text" id="part2_3"></p>
        </div>
        <!-- Octau missatge -->
        <div class="contingut contingut__resposta msg6">
            <p class="contingut__text" id="part2_4"></p>
        </div>
        <div class="contingut contingut__resposta msg6 bottom">
            <div class="contingut__hora--resposta hora2">
                <p></p>
            </div>
        </div>`

            contenidor.appendChild(studies)
        }

        document.getElementById('segonaPart').style.display = 'flex';
        document.getElementById('segonaPart').style.flexDirection = 'column';


        document.querySelector('#part2_1').textContent = 'Studies?'
        document.querySelector('#part2_2').innerHTML = 'I currently study an Official Advanced Specific Vocational Training in Web Application Development where I am learning about Java, Python, JS code... And I studied <span>Interactive Digital Development Design at ESAT Valencia</span>  (2020-2021) and <span> Audiovisual Communication at the Polytechnic University of Valencia</span> (2014-2018).'
        document.querySelector('#part2_3').innerHTML = 'One thing that characterizes my learning is that it has been by <span>self-taught training</span>. My knowledge has increased thanks to every book, course, lecture and article.'
        document.querySelector('#part2_4').innerHTML = '<span>‘Never stop learning’</span>  could be my late motiv.'


        document.querySelector('#segonaPart').querySelector('.contingut__hora').textContent = composeTime()
        document.querySelector('#segonaPart').querySelector('.contingut__hora--resposta').textContent = composeTime()


        if (window.width() < 1024) document.querySelector('.menu__wrap').slideToggle();


        document.querySelector('#segonaPart').scrollIntoView({ block: "start", behavior: "smooth" });

    } else if (selectBtn === 2) {

        if (!document.querySelector('#terceraPart')) {
            const experience = document.createElement('section')
            experience.setAttribute('id', 'terceraPart')
            experience.innerHTML = `<div class="contingut contingut__pregunta pregunta__animacio">
            <a name="experience"></a>
            <p class="contingut__text contingut__text--pregunta" id="part3_1"></p>
        </div>
        <div class="contingut contingut__pregunta1 pregunta__animacio bottom">
            <div class="contingut__hora hora"></div>
        </div>
        <div>
            <div class="punts">
                <div class="punt"></div>
                <div class="punt"></div>
                <div class="punt"></div>
            </div>
        </div>
        `

            contenidor.appendChild(experience)
        }

        document.getElementById('terceraPart').style.display = 'flex';
        document.getElementById('terceraPart').style.flexDirection = 'column';


        document.querySelector('#part3_1').textContent = 'Experience?'


        if ($(window).width() < 1024) document.querySelector('.menu__wrap').slideToggle();


        document.querySelector('#terceraPart').scrollIntoView({ block: "start", behavior: "smooth" });

        setTimeout(() => {
            document.body.style.overflow = "hidden";
            grid.classList.remove('hidden')
        }, 1500)

    } else if (selectBtn === 3) {

        if (!document.querySelector('#quartaPart')) {
            const contact = document.createElement('section')
            contact.setAttribute('id', 'quartaPart')
            contact.innerHTML = `<a name="contact"></a>
            <div class="contingut contingut__pregunta pregunta__animacio" id="seleccio4">
                <p class="contingut__text contingut__text--pregunta" id="part4_1"></p>
            </div>
            <div class="contingut contingut__pregunta1 pregunta__animacio bottom">
                <div class="contingut__hora hora"></div>
            </div>
            <div class="escrivint">
                <div class="punts">
                    <div class="punt"></div>
                    <div class="punt"></div>
                    <div class="punt"></div>
                </div>
            </div>
            <!-- Decim quart missatge -->
            <div class="contingut contingut__resposta msg9">
                <p class="contingut__text" id="part4_2"></p>
            </div>
            
            <!-- Decim sext missatge -->
            <div class="contingut contingut__resposta msg11">
                <p class="contingut__text" id="part4_4"></p>
            </div>
            <div class="contingut contingut__resposta bottom">
                <div class="contingut__hora--resposta hora3"></div>
            </div>`

            contenidor.appendChild(contact)
        }

        document.getElementById('quartaPart').style.display = 'flex';
        document.getElementById('quartaPart').style.flexDirection = 'column';
        document.querySelector('#part4_1').textContent = 'Contact me!'
        document.querySelector('#part4_2').innerHTML = '<span>Join in</span> my vision of understanding life and feel free to talk to me for in-depht contact.'
        document.querySelector('#part4_4').innerHTML = '<span><a href="mailto:albertogarsan@outlook.com" target="_blank">Mail me</span>'
        document.querySelector('#quartaPart').querySelector('.contingut__hora').textContent = composeTime()
        document.querySelector('#quartaPart').querySelector('.contingut__hora--resposta').textContent = composeTime()


        if (window.width() < 1024) document.querySelector('.menu__wrap').slideToggle();

        document.querySelector('#quartaPart').scrollIntoView({ block: "start", behavior: "smooth" });
    } else {
        document.getElementById('primeraPart').style.display = 'none'
        document.getElementById('segonaPart').style.display = 'none'
        document.getElementById('terceraPart').style.display = 'none'
        document.getElementById('quartaPart').style.display = 'none'


        document.querySelector('#default').querySelector('.contingut__hora--resposta').textContent = composeTime()


        if (window.width() < 1024) document.querySelector('.menu__wrap').slideToggle();
    }

}

function menu() {
    document.querySelector(".menu__wrap").slideToggle()
    window.onresize = function () {
        if (window.width() > 1024) {
            document.querySelector("ul").removeAttribute('style');
        }
    }
}

function iniciarXat() {
    document.getElementById('hi').innerHTML = "Hi there! My name is <span>Alberto Garsan</span>. <br>I am a Valencia-based <span>UX Engineer</span>";
    document.getElementById('text1').innerHTML = "Exploring the limits between visual design, to learn about the users, to guide them through design thinking methodolgies like double diamond and code, <span> drives me nuts!</span>";
    document.querySelector('#default').querySelector('.contingut__hora--resposta').textContent = composeTime()
    document.querySelector('#btn1').textContent = 'About'
    document.querySelector('#btn2').textContent = 'Career'
    document.querySelector('#btn3').textContent = 'Experience'
    document.querySelector('#btn4').textContent = 'Contact'
    document.querySelector('#btn5').textContent = 'Hi, again!'
}

function removeWorksPage() {
    document.body.style.overflow = "auto";
    grid.classList.add('hidden')
}

function filterByUX() {
    console.log("funciona!")
    filters.forEach((filter) => {
        filter.classList.remove('active')
    })

    filters[1].classList.add('active')

    const uxCards = cards.filter((card) => card.dataset.filter == 'ux')

    //Eliminar tots els children del parent card (resetejar)
    const currentCards = [...parentCards.children]
    // Resetejar tots els children del parentCard
    for (let card of currentCards) {
        parentCards.removeChild(card)
    }

    /* cards.innerHTML = '' */

    //Omplir el parentCards amb els uxCards
    uxCards.forEach(card => {
        parentCards.appendChild(card)
    });

}

function filterByFrontend() {
    console.log("funciona!")
    filters.forEach((filter) => {
        filter.classList.remove('active')
    })

    filters[2].classList.add('active')

    const uxCards = cards.filter((card) => card.dataset.filter == 'frontend')

    //Eliminar tots els children del parent card (resetejar)
    const currentCards = [...parentCards.children]
    // Resetejar tots els children del parentCard
    for (let card of currentCards) {
        parentCards.removeChild(card)
    }

    /* cards.innerHTML = '' */

    //Omplir el parentCards amb els uxCards
    uxCards.forEach(card => {
        parentCards.appendChild(card)
    });
}

function resetFilter() {

    filters.forEach((filter) => {
        filter.classList.remove('active')
    })

    filters[0].classList.add('active')

    const currentCards = [...parentCards.children]
    // Resetejar tots els children del parentCard
    for (let card of currentCards) {
        parentCards.removeChild(card)
    }
    //Omplir el parentCards amb tots els cards
    cards.forEach(card => { parentCards.appendChild(card) })

}


