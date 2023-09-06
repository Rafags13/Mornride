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
export default BikeProfiles;