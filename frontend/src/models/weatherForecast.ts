import type { Climate } from "./climate";
import type { Location } from "./location";

export interface WeatherForecast {
    location: Location
    climate: Climate
}