

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const d = new Date().getDay();

const now = new Date();

const milli = now.getTime();



document.getElementById('day').innerHTML = days[d];
document.getElementById('time').innerHTML = milli;    
   

