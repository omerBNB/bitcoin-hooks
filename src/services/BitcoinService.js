import axios from 'axios'

export const BitcoinSerivce = {
    getRate,
    getMarketPrice
}
const apitest = {
    "status": "ok",
    "name": "Market Price (USD)",
    "unit": "USD",
    "period": "day",
    "description": "Average USD market price across major bitcoin exchanges.",
    "values": [
        {
            "x": 1668556800,
            "y": 16873.56
        },
        {
            "x": 1668643200,
            "y": 16662.24
        },
        {
            "x": 1668729600,
            "y": 16682.44
        },
        {
            "x": 1668816000,
            "y": 16683.22
        },
        {
            "x": 1668902400,
            "y": 16687.8
        },
        {
            "x": 1668988800,
            "y": 16260.41
        },
        {
            "x": 1669075200,
            "y": 15759.61
        },
        {
            "x": 1669161600,
            "y": 16194.75
        },
        {
            "x": 1669248000,
            "y": 16606.77
        },
        {
            "x": 1669334400,
            "y": 16592.67
        },
        {
            "x": 1669420800,
            "y": 16507.44
        },
        {
            "x": 1669507200,
            "y": 16453.47
        },
        {
            "x": 1669593600,
            "y": 16420.2
        },
        {
            "x": 1669680000,
            "y": 16208.96
        },
        {
            "x": 1669766400,
            "y": 16432.73
        },
        {
            "x": 1669852800,
            "y": 17170.62
        },
        {
            "x": 1669939200,
            "y": 16971.57
        },
        {
            "x": 1670025600,
            "y": 17091.23
        },
        {
            "x": 1670112000,
            "y": 16894.23
        },
        {
            "x": 1670198400,
            "y": 17117.57
        },
        {
            "x": 1670284800,
            "y": 16967.02
        },
        {
            "x": 1670371200,
            "y": 17085.45
        },
        {
            "x": 1670457600,
            "y": 16836.05
        },
        {
            "x": 1670544000,
            "y": 17234.58
        },
        {
            "x": 1670630400,
            "y": 17128.55
        },
        {
            "x": 1670716800,
            "y": 17124.99
        },
        {
            "x": 1670803200,
            "y": 17098.61
        },
        {
            "x": 1670889600,
            "y": 17206.87
        },
        {
            "x": 1670976000,
            "y": 17771.03
        },
        {
            "x": 1671062400,
            "y": 17802.44
        },
        {
            "x": 1671148800,
            "y": 17357.47
        },
        {
            "x": 1671235200,
            "y": 16637.6
        },
        {
            "x": 1671321600,
            "y": 16783.6
        },
        {
            "x": 1671408000,
            "y": 16745.99
        },
        {
            "x": 1671494400,
            "y": 16439.89
        },
        {
            "x": 1671580800,
            "y": 16904.64
        },
        {
            "x": 1671667200,
            "y": 16813.62
        },
        {
            "x": 1671753600,
            "y": 16818.68
        },
        {
            "x": 1671840000,
            "y": 16779.71
        },
        {
            "x": 1671926400,
            "y": 16838.1
        },
        {
            "x": 1672012800,
            "y": 16826.86
        },
        {
            "x": 1672099200,
            "y": 16915.7
        },
        {
            "x": 1672185600,
            "y": 16699.0
        },
        {
            "x": 1672272000,
            "y": 16539.28
        },
        {
            "x": 1672358400,
            "y": 16630.49
        },
        {
            "x": 1672444800,
            "y": 16599.69
        },
        {
            "x": 1672531200,
            "y": 16526.78
        },
        {
            "x": 1672617600,
            "y": 16613.71
        },
        {
            "x": 1672704000,
            "y": 16671.54
        },
        {
            "x": 1672790400,
            "y": 16669.6
        },
        {
            "x": 1672876800,
            "y": 16850.63
        },
        {
            "x": 1672963200,
            "y": 16826.41
        },
        {
            "x": 1673049600,
            "y": 16951.97
        },
        {
            "x": 1673136000,
            "y": 16945.2
        },
        {
            "x": 1673222400,
            "y": 17108.41
        },
        {
            "x": 1673308800,
            "y": 17192.07
        },
        {
            "x": 1673395200,
            "y": 17443.68
        },
        {
            "x": 1673481600,
            "y": 17934.6
        },
        {
            "x": 1673568000,
            "y": 18859.32
        },
        {
            "x": 1673654400,
            "y": 19933.36
        },
        {
            "x": 1673740800,
            "y": 20955.15
        },
        {
            "x": 1673827200,
            "y": 20880.99
        },
        {
            "x": 1673913600,
            "y": 21190.49
        },
        {
            "x": 1674000000,
            "y": 21145.18
        },
        {
            "x": 1674086400,
            "y": 20672.78
        },
        {
            "x": 1674172800,
            "y": 21087.76
        },
        {
            "x": 1674259200,
            "y": 22693.45
        },
        {
            "x": 1674345600,
            "y": 22772.5
        },
        {
            "x": 1674432000,
            "y": 22724.23
        },
        {
            "x": 1674518400,
            "y": 22924.37
        },
        {
            "x": 1674604800,
            "y": 22634.47
        },
        {
            "x": 1674691200,
            "y": 23089.74
        },
        {
            "x": 1674777600,
            "y": 23008.29
        },
        {
            "x": 1674864000,
            "y": 23075.81
        },
        {
            "x": 1674950400,
            "y": 23032.23
        },
        {
            "x": 1675036800,
            "y": 23755.85
        },
        {
            "x": 1675123200,
            "y": 22836.09
        },
        {
            "x": 1675209600,
            "y": 23133.91
        },
        {
            "x": 1675296000,
            "y": 23722.02
        },
        {
            "x": 1675382400,
            "y": 23454.41
        },
        {
            "x": 1675468800,
            "y": 23440.09
        },
        {
            "x": 1675555200,
            "y": 23328.24
        },
        {
            "x": 1675641600,
            "y": 22936.95
        },
        {
            "x": 1675728000,
            "y": 22763.74
        },
        {
            "x": 1675814400,
            "y": 23254.79
        },
        {
            "x": 1675900800,
            "y": 22964.87
        },
        {
            "x": 1675987200,
            "y": 21794.05
        },
        {
            "x": 1676073600,
            "y": 21638.55
        },
        {
            "x": 1676160000,
            "y": 21861.84
        },
        {
            "x": 1676246400,
            "y": 21787.25
        },
        {
            "x": 1676332800,
            "y": 21787.99
        },
        {
            "x": 1676419200,
            "y": 22211.8
        },
        {
            "x": 1676505600,
            "y": 24340.73
        },
        {
            "x": 1676592000,
            "y": 23544.67
        },
        {
            "x": 1676678400,
            "y": 24572.97
        },
        {
            "x": 1676764800,
            "y": 24641.94
        },
        {
            "x": 1676851200,
            "y": 24290.18
        },
        {
            "x": 1676937600,
            "y": 24834.81
        },
        {
            "x": 1677024000,
            "y": 24438.1
        },
        {
            "x": 1677110400,
            "y": 24185.67
        },
        {
            "x": 1677196800,
            "y": 23946.39
        },
        {
            "x": 1677283200,
            "y": 23192.02
        },
        {
            "x": 1677369600,
            "y": 23176.76
        },
        {
            "x": 1677456000,
            "y": 23563.11
        },
        {
            "x": 1677542400,
            "y": 23497.62
        },
        {
            "x": 1677628800,
            "y": 23128.3
        },
        {
            "x": 1677715200,
            "y": 23641.68
        },
        {
            "x": 1677801600,
            "y": 23467.36
        },
        {
            "x": 1677888000,
            "y": 22351.72
        },
        {
            "x": 1677974400,
            "y": 22348.51
        },
        {
            "x": 1678060800,
            "y": 22427.56
        },
        {
            "x": 1678147200,
            "y": 22410.62
        },
        {
            "x": 1678233600,
            "y": 22197.49
        },
        {
            "x": 1678320000,
            "y": 21698.33
        },
        {
            "x": 1678406400,
            "y": 20363.36
        },
        {
            "x": 1678492800,
            "y": 20224.85
        },
        {
            "x": 1678579200,
            "y": 20656.78
        },
        {
            "x": 1678665600,
            "y": 22205.32
        },
        {
            "x": 1678752000,
            "y": 24213.74
        },
        {
            "x": 1678838400,
            "y": 24767.46
        },
        {
            "x": 1678924800,
            "y": 24376.39
        },
        {
            "x": 1679011200,
            "y": 25053.64
        },
        {
            "x": 1679097600,
            "y": 27462.77
        },
        {
            "x": 1679184000,
            "y": 26975.39
        },
        {
            "x": 1679270400,
            "y": 28045.84
        },
        {
            "x": 1679356800,
            "y": 27790.89
        },
        {
            "x": 1679443200,
            "y": 28191.53
        },
        {
            "x": 1679529600,
            "y": 27306.32
        },
        {
            "x": 1679616000,
            "y": 28332.42
        },
        {
            "x": 1679702400,
            "y": 27496.2
        },
        {
            "x": 1679788800,
            "y": 27496.06
        },
        {
            "x": 1679875200,
            "y": 27999.84
        },
        {
            "x": 1679961600,
            "y": 27141.23
        },
        {
            "x": 1680048000,
            "y": 27274.72
        },
        {
            "x": 1680134400,
            "y": 28355.92
        },
        {
            "x": 1680220800,
            "y": 28033.06
        },
        {
            "x": 1680307200,
            "y": 28479.75
        },
        {
            "x": 1680393600,
            "y": 28465.04
        },
        {
            "x": 1680480000,
            "y": 28185.2
        },
        {
            "x": 1680566400,
            "y": 27802.23
        },
        {
            "x": 1680652800,
            "y": 28169.5
        },
        {
            "x": 1680739200,
            "y": 28180.4
        },
        {
            "x": 1680825600,
            "y": 28039.94
        },
        {
            "x": 1680912000,
            "y": 27925.55
        },
        {
            "x": 1680998400,
            "y": 27956.01
        },
        {
            "x": 1681084800,
            "y": 28336.18
        },
        {
            "x": 1681171200,
            "y": 29656.24
        },
        {
            "x": 1681257600,
            "y": 30234.98
        },
        {
            "x": 1681344000,
            "y": 29899.24
        },
        {
            "x": 1681430400,
            "y": 30407.6
        },
        {
            "x": 1681516800,
            "y": 30486.05
        }
    ]
}
async function getRate(coins) {
    let res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return res.data
}

function getMarketPrice(){
    return apitest
}

function getConfirmedTransactions(){

}

