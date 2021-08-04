var cname=document.querySelector('#cname')
var tmp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
var buttn=document.querySelector('#dop')
var entercity=document.querySelector('#mcity')
var descrip = document.querySelector('#description')
var ftemp=document.querySelector('#ft')
apikey='e770cbdebbbebf7027b40a16db462b1a'
function tempchange(tempr){return (tempr-273).toFixed(2)}
buttn.addEventListener('click',function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+entercity.value+'&appid='+apikey).then(res=>res.json())
        .then(data=>{
        var countname = data['name']
        var descrip = data['weather']['0']['description']
        var tempar = data['main']['temp']
        var windy = data['wind']['speed']
        var feelt=data['main']['feels_like']

        cname.innerHTML=`Your city: ${countname}`
        tmp.innerHTML = `Temperature: ${tempchange(tempar)} C`
        description.innerHTML = `Weather conditions: ${descrip}`
        wind.innerHTML = `Wind Speed: ${windy} km/h`
        ftemp.innerHTML=`Feels like: ${tempchange(feelt)} C`

    })
        .catch(err => alert('You entered Wrong city name'))
})