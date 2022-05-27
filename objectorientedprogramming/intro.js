const domStrings = {

    startBtn : document.getElementById('start-btn'),
    stopBtn : document.getElementById('stop-btn'),
    resetBtn : document.getElementById('reset-btn'),
    err : document.getElementById('err'),
    timer : document.getElementById('timer')

}


domStrings.startBtn.addEventListener('click', startWatch)

let watchStatus = true;

let seconds = 50

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

    const longerThanAMinute = seconds > 59 ? true : false

    const minutes = longerThanAMinute ? Math.floor(seconds / 60) : '00';

    const totalMinutesInSeconds = minutes * 60 

    const totalSeconds = totalMinutesInSeconds + seconds 

    console.log(longerThanAMinute)

    const secondsForDisplay = longerThanAMinute ?  totalSeconds - totalMinutesInSeconds : seconds 

    console.log(`${minutes}:${secondsForDisplay}`); 

    domStrings.timer.innerHTML = `${minutes}:${secondsForDisplay}`

}


domStrings.stopBtn.addEventListener('click', endWatch)

function endWatch(){

    console.log('stopping watch')


     watchStatus = false;

}

domStrings.resetBtn.addEventListener('click', resetWatch)

function resetWatch(){

    seconds = 0

    setDisplay();

    endWatch();

}