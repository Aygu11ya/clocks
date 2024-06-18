const second = document.querySelector('.s'),
      minute = document.querySelector('.m'),
      hours  = document.querySelector('.h'),
      hNum   = document.querySelector('.hours'),
      mNum   = document.querySelector('.minutes');

function clocks() {
    let time = new Date(),
        sec  = time.getSeconds() * 6,
        min  = time.getMinutes() * 6,
        hr   = time.getHours() * 30;
        second.style = `transform: rotate(${sec}deg);`    
        minute.style = `transform: rotate(${min}deg);`    
        hours.style  = `transform: rotate(${hr}deg); `  
        
        // for (let i = 0; i < transform ; i++) {
        //     answer  += time 
            
        // }  
        
        hNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
        mNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
        
        
        setTimeout(() => clocks(), 1000 );
        
}

clocks()

const links = document.querySelectorAll('.tabsItem'),
      tabs  = document.querySelectorAll('.tabsContentItem')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener ( 'click', function (){
        // links[i].classList.remove('active')
        
        for (let x=0; x< links.length; x++) {
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }
        tab(this, tabs[i])
    })
}  

function tab(el, arr) {
    el.classList.add('active')
    arr.classList.add('active')
}

const watchBtn  =  document.querySelector('.stopwatch__btn'),
      secWatch  =  document.querySelector('.stopwatch__seconds'),
      minWatch  =  document.querySelector('.stopwatch__minutes'),
      hourWatch = document.querySelector('.stopwatch__hours'),
      watchInfo = document.querySelector('.tabsLink__span');
      
      
watchBtn.addEventListener('click', function () {
    if(this.innerHTML === 'start'){
        this.innerHTML = 'stop'
        watchInfo.classList.add('active')
        let second = 0
        setTimeout(() => stopWatch(this, second), 1000);          
        }else if(this.innerHTML === 'stop'){
       watchInfo.classList.remove('active')
       watchInfo.classList.add('active_clear')
       this.innerHTML = 'clear'
       setTimeout(() => stopWatch(this.innerHTML, second), 1000);       
    }else{
        watchInfo.classList.remove('active_clear') 
        this.innerHTML = 'start'
        secWatch.innerHTML = minWatch.innerHTML = hourWatch.innerHTML = '00'
               
    }

        
})    
    
function stopWatch(btn, second) {
    if(btn.innerHTML === 'stop' ){
        if(second === 59){
            second = 0
            secWatch.innerHTML = second
            if (minWatch.innerHTML == 59) {
                minWatch.innerHTML = '0' + 0 // Пришлось добавить '0' + 0, т.к иначе у нас в итоге один 0 будет на старте после первого круга,
            // а не два нуля, как положено
                hourWatch.innerHTML++
                hourWatch.innerHTML = hourWatch.innerHTML < 10 ? '0' + hourWatch.innerHTML++ : hourWatch.innerHTML++ // а тернарный нужно было добавить в соотстветствующие условия, под минуты и часы отдельно

            }else{ 
                minWatch.innerHTML++
                minWatch.innerHTML = minWatch.innerHTML < 10 ? '0' + minWatch.innerHTML++ : minWatch.innerHTML++ // ну и сюда) а ещё вы забыли указать инкремент(++) поэтому просто нули дубилровались, т.к вы ему сказали так сделать, получается он нули считал обычной строкой, т.к по умолчанию типом данных любого HTML элемента внутри является строка, даже если вы напишите цифру 0, для него это не число, это строка, поэтому когда вы ему просто без инкремента указали изменение через innerHTML, он просто прибавлял ноль к нулю, тем самым выстраивая цепочку нулей, делал вам конкатенацию строк, а не складывание чисел, а как только я указал после innerHTML++, он перевёл строку внутри в числовой тип данных, и от строчного типа данных не осталось ничего.
            }
        }else{
            second++
            secWatch.innerHTML = second
        }
        setTimeout(() => stopWatch(btn, second), 1000);
        secWatch.innerHTML = second < 10 ? '0'  + second : second 
        // hourWatch.innerHTML = hourWatch.innerHTML < 10 ? '0'  + hourWatch.innerHTML : hourWatch.innerHTML
        // minWatch.innerHTML = minWatch.innerHTML < 10 ? '0' + minWatch.innerHTML : minWatch.innerHTML
    }
}
    
    