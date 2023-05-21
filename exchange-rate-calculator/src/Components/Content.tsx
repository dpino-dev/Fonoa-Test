import React, { use, useEffect, useState } from 'react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Stack,
    Button,
    Box,
    Text,
    Center,
    Tag,
} from '@chakra-ui/react'
import SelectMenu from './SelectMenu'


const Content = () => {
    const format = (val: string) => `$` + val
    const parse = (val: string) => val==''?'':val.replace(/^\$/,'')
    const [value, setValue] = useState('')
    const [coins, setCoins] = useState({});
    const [valueTo, setValueTo] = useState('')
    const [valueFrom, setValueFrom] = useState('')
    const [exchange, setExchangeResult] = useState({})


    const getListCoins = async () => {

        const response = await fetch("http://localhost:3000/api/symbols", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })
        const data = await response.json()
        setCoins(data)
        
    }

    useEffect(() => {
        try {
            getListCoins()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const getExchangeRate = async () => {

        const obj = {
            to: valueTo,
            from: valueFrom,
            amount: value
        }

        const response = await fetch("http://localhost:3000/api/convert", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(obj)
        })
        const data = await response.json()
        setExchangeResult(data)

    }

    const [long, setLong] = useState(0)
    useEffect(() => {
        setLong(Object.keys(exchange).length)
    }, [exchange])

    const showResult = () => {

        const result = []
        for (const [key, value] of Object.entries(exchange)) {
            if (key === 'result') {
                result.push(<Box key={key}><Tag colorScheme='whatsapp'><Text fontSize={'2xl'}>{value as string}</Text></Tag></Box>)
            }
        }

        return result
    }

    return (
        <>
            <Box>
                <Stack spacing='5px'>
                    <NumberInput                       
                        onChange={(valueString) =>(Number(valueString)<= 0 )?setValue(parse(" ")):setValue(parse(valueString))}
                        value={format(value)}                                               
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper  />
                        </NumberInputStepper>
                    </NumberInput>
                    <SelectMenu options={coins} direct={'From'} setValue={setValueFrom} />
                    <Center>
                        <Text fontSize={'md'}>to</Text>
                    </Center>
                    <SelectMenu options={coins} direct={'To'} setValue={setValueTo} />
                    <Button className='btnConvert'onClick={() => { getExchangeRate(); }} size='md' colorScheme='blue'>Convert...</Button>
                    <Center>
                        {
                            showResult()
                        }
                    </Center>
                </Stack>
            </Box>
        </>
    )
}

export default Content