const subBox   = document.getElementById ('sub-box');
const subText  = document.getElementById ('sub');
const loader   = document.getElementById ('loader');
const mark     = document.getElementById ('check-mark');

let anim       = false;
let loadTime   = Math.random () * 2000 + 1000;

// Первая анимация "анимация нажатия"
function frsitAnim () {
    anim = true;
    subBox.style.backgroundColor = 'rgb(0, 172, 23)';
    subBox.style.color = '#fff';
    subText.style.letterSpacing = '0.7px';
    setTimeout (function () {
        subText.style.letterSpacing = 'normal';
    }, 150)
}

// Вторая анимация - преобразования блока в круг и убирание текста внутри него
function secondAnim () {
    subText.style.transition = '200ms';
    subText.style.opacity = '0';

    subBox.style.transition = '200ms';
    subBox.style.width = '50px';
    subBox.style.background = 'none';
}

// Третья анимация "анимация загрузки"
function thirdAnim () {
    let loadDeg = 0;
    loader.style.transition = '250ms';
    loader.style.display = 'block';
    loader.style.opacity = '1';

    loader.style.transition = '0ms';

    let load = setInterval (function () {
        if (loadDeg < 360) {
            loadDeg += 4;
            loader.style.transform = 'rotate(' + loadDeg + 'deg)';
        }else {
            loadDeg = 0;
            loader.style.transform = 'rotate(' + loadDeg + 'deg)';
        }
        console.log (loadDeg);

        // Остановка анимации загрузки
        setTimeout (function () {clearInterval (load);}, loadTime)
    }, 10)
}

// Четвертая анимация - преобразование блока в первоначальный вид и появление галочки
function firdAnim () {
    loader.style.transition = '100ms';
    loader.style.opacity = '0';
    setTimeout (function () {loader.style.display = 'none';}, 100)

    subBox.style.transition = '150ms';
    subBox.style.width = '200px';
    subBox.style.backgroundColor = 'rgb(0, 172, 23)';

    mark.style.display    = 'block';
    mark.style.opacity    = '1';

    setTimeout (function () {
        mark.style.width      = '15px';
        mark.style.height     = '15px';
        mark.style.transition = '200ms';
        mark.style.padding    = '18px 0';
    }, 50)
}

// Сборка 4 частей в одну
function startAnimation () {
    if (anim == false) {
        frsitAnim ()
        setTimeout (function () {
            secondAnim ()
            setTimeout (function () {
                thirdAnim ()

                setTimeout (function () {
                    firdAnim ()
                }, loadTime)
            }, 200)
        }, 350)
    }
}