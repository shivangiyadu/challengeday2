document.addEventListener("DOMContentLoaded",function()
{
function display_current_time()
{
    const date=new Date();
    const original_hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();

    let hours=original_hours;
    let session="AM";

    if(hours==0)
    {
        hours=12;
    }
    else if(hours>12)
    {
        hours=hours-12;
        session="PM";
    }

   const timeString=`${hours}:${minutes}:${seconds} ${session}`;  
   document.getElementById('clock').textContent=timeString; 
}
   display_current_time();

   const second_interval=setInterval(display_current_time,1000);
});