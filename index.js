document.querySelector('button').addEventListener('click', () => {
    console.log('threw');
    let f1= document.querySelector('.f1');
    let f2= document.querySelector('.f2');
    let f3= document.querySelector('.f3');
    let f4= document.querySelector('.f4');
    let f5= document.querySelector('.f5');
    let f6= document.querySelector('.f6');
    let f7= document.querySelector('.f7');
    let f8= document.querySelector('.f8');
    let f9= document.querySelector('.f9');

    function dice(){
        function clear(){
            let num6 = f1.classList.add('invisible') +f3.classList.add('invisible') +f4.classList.add('invisible') +f5.classList.add('invisible') +f6.classList.add('invisible') +f7.classList.add('invisible') +f9.classList.add('invisible');
        }
        clear();

        let result = Math.floor(Math.random()*6+1);
        console.log('random number:'+ result );

        if (result===1){
        let num1 = f5.classList.remove('invisible');
            return num1}
        if (result===2){
            let num2 = f1.classList.remove('invisible') + f9.classList.remove('invisible');
            return num2}
        if (result===3){
            let num3 = f1.classList.remove('invisible') + f9.classList.remove('invisible') + f5.classList.remove('invisible');
            return num3}
        if (result===4){
            let num4 = f1.classList.remove('invisible') +f3.classList.remove('invisible') +f7.classList.remove('invisible') +f9.classList.remove('invisible');
            return num4}
        if (result===5){// let num6 = f1.classList.remove('invisible') +f3.classList.remove('invisible') +f4.classList.remove('invisible') +f6.classList.remove('invisible') +f7.classList.remove('invisible') +f9.classList.remove('invisible');

            let num5 = f1.classList.remove('invisible') +f3.classList.remove('invisible') +f7.classList.remove('invisible') +f9.classList.remove('invisible') + f5.classList.remove('invisible');
            return num5}
        if (result===6){
            let num6 = f1.classList.remove('invisible') +f3.classList.remove('invisible') +f4.classList.remove('invisible') +f6.classList.remove('invisible') +f7.classList.remove('invisible') +f9.classList.remove('invisible');
            return num6
            };
    };
    dice();
});