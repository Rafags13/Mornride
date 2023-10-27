import { FilterProps } from "../../components/FilterButton";
import { ImageProps } from "../model/ImageProps";

const BikeProfiles = [
    {
        "id": 1,
        "bikes": [
            {
                "colorHex": "#FE0000",
                "images": [
                    require('../../../assets/1/full-bike.png'),
                    require(`../../../assets/1/back-wheel.png`),
                    require(`../../../assets/1/front-bike.png`),
                    require(`../../../assets/1/front-wheel.png`)
                ]
            },
            {
                "colorHex": "#2071AF",
                "images": [
                    require('../../../assets/2/full-bike.png'),
                    require(`../../../assets/2/back-wheel.png`),
                    require(`../../../assets/2/front-bike.png`),
                    require(`../../../assets/2/front-wheel.png`)
                ]
            }
        ],
        "currentBikeImage": require('../../../assets/1/full-bike.png'),
        "title": "TDR 3.000 - Mountain Bike",
        "description": "Express your love for all-round terrain with your favorite bike, " +
            "The Vitessa 2.00. Comes with an aerodynamic frame structure and equipped with " +
            "parts that are capable of flat and uphill track, the Vitessa 2.00 is a complete" +
            " all-rounder bike that prioritizes speed and toughness.",
        "stock": 8,
        "avaliableColors": ['#FE0000', '#2071AF'],
        "rankAverage": 4.5,
        "reviewCount": 80,
        "categories": [
            'mountain',
            'kid',
            'parts',
            'eletronic',
        ],
        "price": 1300.90,
    },
    {
        "id": 2,
        "bikes": [
            {
                "colorHex": "#7CC3BB",
                "images": [
                    require('../../../assets/2/full-bike.png'),
                    require(`../../../assets/2/back-wheel.png`),
                    require(`../../../assets/2/front-bike.png`),
                    require(`../../../assets/2/front-wheel.png`)
                ]
            },
            {
                "colorHex": "#f0f0f0",
                "images": [
                    require('../../../assets/1/full-bike.png'),
                    require(`../../../assets/1/back-wheel.png`),
                    require(`../../../assets/1/front-bike.png`),
                    require(`../../../assets/1/front-wheel.png`)
                ]
            }
        ],
        "currentBikeImage": require('../../../assets/2/full-bike.png'),
        "title": "Tuskar Elim - E - Series Bike",
        "description": "Express your love for all-round terrain with your favorite bike, " +
            "The Vitessa 2.00. Comes with an aerodynamic frame structure and equipped with " +
            "parts that are capable of flat and uphill track, the Vitessa 2.00 is a complete" +
            " all-rounder bike that prioritizes speed and toughness.",
        "stock": 4,
        "avaliableColors": ['#7CC3BB', '#f0f0f0'],
        "rankAverage": 4.0,
        "price": 1485.90,
        "reviewCount": 32,
        "categories": [
            'mountain',
            'parts',
            'ergonomic',
        ]
    },
]

export const images: ImageProps[] = [
    {
        id: 1,
        image: require('../../../assets/mountain2.jpg'),
        description: 'ARE YOU PREPARED TO ADVENTURE WITH SUPER BIKES?',
        button: {
            label: 'Discover now',
            typeOfButton: "info",
            collection: "eletronic"
        }
    },
    {
        id: 2,
        image: require('../../../assets/mountain.jpg'),
        description: 'ITS CLIMBING AND GOING DOWN STEEP TRAILS OR JUMPING HIGH AT BIKE PARKS',
        button: {
            label: 'Shop now',
            collection: "mountain"
        }
    },
    {
        id: 3,
        image: require('../../../assets/mountain3.jpg'),
        description: 'OUR BIKES ARE BUILT FROM YOUR MOUNTAIN ADVENTURES!',
        button: {
            label: 'See now',
            collection: "mountain"
        }
    },
];

export const labelsFilter: FilterProps[] = [
    {
        label: 'All',
        option: ''
    },
    {
        label: 'E-Series',
        option: 'eletronic'
    },
    {
        label: 'Mountain Bike',
        option: 'mountain'
    },
    {
        label: 'Parts',
        option: 'parts'
    },
    {
        label: 'Ergonomic Bikes',
        option: 'ergonomic'
    },
    {
        label: 'Kids',
        option: 'kid'
    },
]

export default BikeProfiles;