const LANGUAGE_LIST = ['en','sp'];
const DEFAULT_LANGUAJE = 'en';
const LIST_OF_CITIES= [
    {
        key: "sevilla",
        lat: 37.392529,
        lon: -5.994072
    },
    {
        key: "lisbon",
        lat: 38.736946,
        lon: -9.142685
    },
    {
        key: "panama_city",
        lat: 8.983333,
        lon: -79.516670
    },
    {
        key: "bogota",
        lat: 4.624335,
        lon: -74.063644
    },
    {
        key: "toronto",
        lat: 43.651070,
        lon: -79.347015
    },
    {
        key: "rome",
        lat: 41.902782,
        lon: 12.496366
    },
];
const DEFAULT_CITY = LIST_OF_CITIES[0].key;

export {
    DEFAULT_LANGUAJE,
    LIST_OF_CITIES,
    DEFAULT_CITY,
    LANGUAGE_LIST
}