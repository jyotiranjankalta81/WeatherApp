const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');


const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    
    if(cityVal == ""){
        city_name.innerText = `plz write the city name before seaarch`;
        datahide.classList.add('data_hide');
        
    }else{
        try {
            
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=48c48a9dd9290c799563ed790523077d`;
            const response =  await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}` ;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if(tempMood=="Clear"){
                temp_status.innerHTML=
                "<i class ='fas fa-sun' style='color: yellow;'></i>";
            }else if(tempMood=="Clouds"){
                temp_status.innerHTML=
                "<i class ='fas fa-cloud' style='color: sky;'></i>";
            }else if(tempMood=="Rain"){
                temp_status.innerHTML=
                "<i class ='fas fa-cloud-rain' style='color: rain;'></i>";
            }else {
                temp_status.innerHTML=
                "<i class ='fas fa-sun' style='color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText = `plz write the city name before `;
            datahide.classList.add('data_hide');
            
        }

    }
    

}
submitBtn.addEventListener('click', getInfo);