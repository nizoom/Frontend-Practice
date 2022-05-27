const domStrings = {

    startBtn : document.getElementById('start-btn'),
    stopBtn : document.getElementById('stop-btn'),
    resetBtn : document.getElementById('reset-btn'),
    err : document.getElementById('err'),
    timer : document.getElementById('timer')

}


domStrings.startBtn.addEventListener('click', startWatch)

let watchStatus = true;

let seconds = 0

let minutes = 0

function startWatch(){

    watchStatus = true

    addSeconds()

    function addSeconds(){

        if(!watchStatus){

            console.log('ending');
    
            return 
        }
    
        console.log('starting watch')
    
        seconds++
    
        setDisplay()
    
        setTimeout(addSeconds, 1000)

    }


}


function setDisplay(){

    if( seconds > 59 ) {

        minutes ++
        seconds = 0
    }

    const secondsStr = seconds < 10 ? `0${seconds}` : seconds

    domStrings.timer.innerHTML = `${minutes}:${secondsStr}`

}


domStrings.stopBtn.addEventListener('click', endWatch)

function endWatch(){

    console.log('stopping watch')


     watchStatus = false;

}

domStrings.resetBtn.addEventListener('click', resetWatch)

function resetWatch(){

    seconds = 0

    minutes = 0;

    setDisplay();

    endWatch();

}