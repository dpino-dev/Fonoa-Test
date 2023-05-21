import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "GYkd1PznxrSeTwYGD5EdEuJHejnkteSL");

    let requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    if (req.method == "POST") {

        const { from, to, amount } = req.body

        try {
            const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
            const convert = await response.json()
            res.status(200).json(convert)

        } catch (error) {
            console.error(error)
        }
    }
}