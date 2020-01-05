
function showTime(){
  let date=new Date();
  let hours=date.getHours();
  let minutes=date.getMinutes();
  let seconds=date.getSeconds();
    
    //convert format+am pm
  let formatHours=convertFormat(hours);  
    
  hours=checkTime(hours);
    //time>12  time===0 
    //time<10 +0

  hours=addZero(hours);
  minutes=addZero(minutes);
  seconds=addZero(seconds);
  document.getElementById('clock').innerHTML=`${hours}:${minutes}:${seconds}:${formatHours}`;  
  //formatHours pass hours to change format
}

function convertFormat(time){
  let format='AM';
  if(time>=12){
    format='PM';
  }
  return format;
}

function checkTime(time){
  if(time>12){
    time=time-12;

  }
  if(time===0){
    time=12;
  }
  return time;
}

function addZero(time){
  if(time<10){
    time="0"+time;
  }
  return time;
}

showTime()
setInterval(showTime,1000)