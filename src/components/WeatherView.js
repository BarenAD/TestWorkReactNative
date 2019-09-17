import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

const ConditionStatus = {
    "clear": "ясно",
    "partly-cloudy": "малооблачно",
    "cloudy": "облачно с прояснениями",
    "overcast": "пасмурно",
    "partly-cloudy-and-light-rain": "небольшой дождь",
    "partly-cloudy-and-rain": "дождь",
    "overcast-and-rain": "сильный дождь",
    "overcast-thunderstorms-with-rain": "сильный дождь, гроза",
    "cloudy-and-light-rain ": "небольшой дождь",
    "overcast-and-light-rain": "небольшой дождь",
    "cloudy-and-rain": "дождь",
    "overcast-and-wet-snow": "дождь со снегом",
    "partly-cloudy-and-light-snow ": "небольшой снег",
    "partly-cloudy-and-snow": "снег",
    "overcast-and-snow ": "снегопад",
    "cloudy-and-light-snow": "небольшой снег",
    "overcast-and-light-snow": "снег",
    "cloudy-and-snow ": "снег"
};

export default class WeatherView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          city: null,
          temp: null,
          condition: null,
          wind_speed: null,
          date: null
        };

        this.weather_load = this.weather_load.bind(this);
    }

    get_weather()
    {
        this.props.on_get_weather(this.weather_load);
    }

    weather_load(Response)
    {
        let Data = Response.fact;
        this.setState({
            city: Response.info.tzinfo.name,
            temp: Data.temp,
            condition: ConditionStatus[Data.condition],
            wind_speed: Data.wind_speed,
            date: Response.now_dt
        });
    }

    render()
    {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-around',
                    alignContent: 'space-around',
                    alignItems: 'center'
                }}
            >
                <View>
                    <Text>Какое-то тз инфо)))): {this.state.city}</Text>
                    <Text>Температура: {this.state.temp}</Text>
                    <Text>Погода: {this.state.condition}</Text>
                    <Text>Скорость ветра: {this.state.wind_speed} м/c</Text>
                    <Text>Дата: {this.state.date}</Text>
                </View>
                <Button
                    onPress={() => this.get_weather()}
                    title={"получить погоду"}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});