const Adress = "https://api.weather.yandex.ru";
const Location = [55.3333, 86.0833];

export default class WeatherModel
{
    constructor()
    {
        this.getBasicWeather = this.getBasicWeather.bind(this);
        this.__post_http_request = this.__post_http_request.bind(this);
    }

    getBasicWeather(CALLBACK)
    {
        this.__post_http_request(
            null,
            Adress+"/v1/forecast?lat="+Location[0]+"&lon="+Location[1],
            CALLBACK,
            null);
    }

    __post_http_request(ObjectPackage, API, CALLBACK, props_for_callback) {
        // let PackagePOST = new FormData();
        let MyHeaders = new Headers();

        MyHeaders.append("X-Yandex-API-Key", "797da65d-e1fa-4a72-a199-147b36b6f789");
        // if (ObjectPackage !== null) {
        //     for (let key in ObjectPackage) {
        //         if (key !== "authorization") {
        //             PackagePOST.set(key, ObjectPackage[key]);
        //         }
        //     }
        // }
        fetch(API, {
            method: 'GET',
            headers: MyHeaders,
            // body: PackagePOST
        }).then(response => {
            if (response.status >= 200 && response.status <= 299) {
                //console.log("Успешный запрос к серверу!\n" + response.status + "  " + response.statusText);
                return response.json();
            } else {
                switch (response.statusText) {
                    default:
                        console.log("Ошибка запроса к серверу!\n" + response.status + "  " + response.statusText);
                        break;
                }
                return null;
            }
        }).then(body => {
            if (body !== null) {
                if (CALLBACK !== null) {
                    if (props_for_callback !== null) {
                        CALLBACK(body, props_for_callback);
                    } else {
                        CALLBACK(body);
                    }
                }
            }
        });
    }
}