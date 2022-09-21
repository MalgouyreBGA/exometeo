import { Component, OnInit } from '@angular/core';
// add
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})

export class MeteoComponent implements OnInit {
  nomApi: string;
  WeatherData:any;
  ville:string;
  key:string;
  //data:any;

  // 4 propriétés de meteo
  /* forecast: any[];
  errorMessage: any;
  ville: string;
  disabledForecastbutton: boolean = true;
*/
  constructor(/*add private meteoService: MeteoService*/) {
    this.nomApi = `OpenWeather API`  
    this.ville = "dijon";
    /*
    // la méthode qui récupère les données émis par le openweather api
    recevezLesDonnees(ville: string){
    this.meteoService.recevezLeMeteo(ville).subscribe( data=> {
      data = this.forecast;},
      // error mngt
      error=> { 
        this.errorMessage = <any>error; 
        console.log(error)
      }                                                           
    )
    }
    // la methode de la soumission
    onSubmit(){
      this.meteoService.recevezLeMeteo(this.ville).subscribe(data => { data =this.forecast},
        error=> error = this.errorMessage);
         this.onResetControls()
    }
    //la methode pour performer la recherhce
    onSearch(event:Event){
      this.ville = (<HTMLInputElement>event.target).value;
      this.disabledForecastbutton = false;
    }
    // la méthode pour réinitialiser la forme après soumission
    onResetControls(){
      this.ville = '';
      this.disabledForecastbutton= true;
    } */
  }
  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData(this.ville);
    console.log(this.WeatherData);
  }

  getWeatherData(ville: string){
    if (ville != "") {
      //ville = ville.toLowerCase() not necessary?
      //key a moi a metre sur constant plus tard !!!!!!!!!!!!!!!!!!
      this.key = "8e0e6da438494e60fb8e79ec03165390"
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${this.key}`)
      .then(response=>response.json())
      .then(data=>{this.setWeatherData(data);})

      // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
      // this.setWeatherData(data);
    } else {
      console.log("Attention : l'input de la ville est vide")
    }
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

  //a moi
  villeChange(){
    let adresse = (document.getElementById('adresse') as HTMLInputElement).value
    this.getWeatherData(adresse);
  }

}
