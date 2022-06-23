const LANGUAGE_LIST = ['eng','es'];
const DEFAULT_LANGUAJE = 'eng';
const LIST_OF_CITIES= [
    {
        name: "Sevilla",
        key: "Sevilla",
        lat: 37.392529,
        lon: -5.994072
    },
    {
        name: "Tokio",
        key: "Tokio",
        lat: 35.652832,
        lon: 139.839478
    },
    {
        name: "Bogotá",
        key: "Bogotá",
        lat: 4.624335,
        lon: -74.063644
    },
    {
        name: "Toronto",
        key: "Toronto",
        lat: 43.651070,
        lon: -79.347015
    },
    {
        name: "Rome",
        key: "Rome",
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