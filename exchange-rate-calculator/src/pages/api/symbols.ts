// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default  async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "GYkd1PznxrSeTwYGD5EdEuJHejnkteSL");

    let requestOptions:RequestInit = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    if (req.method == "GET") {

        try {
            const response = await fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)           
           const symb = await response.json()
           res.status(200).json(symb)
            
        } catch (error) {
            console.error(error)
        }
    }
    
}
