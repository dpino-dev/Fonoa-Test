import React, { useEffect, useState } from 'react'
import { Select } from '@chakra-ui/react'

const SelectMenu = (props: any) => {
    const { options, direct, setValue} = props
    const [symbol, setSymbols] = useState(options.symbols)

    useEffect(() => {
        setSymbols(options.symbols)
    }, [options])

    const showOptons = () => {

        const result = []
        for (var key in symbol) {
            if (symbol.hasOwnProperty(key)) {
                result.push(
                    <option key={key} value={key}>{symbol[key]} ({key})</option>
                )
            }
        }

        return result;

    }

    const handleSelected = (e: any) => {

        setValue(e.target.value)
    }

    return (
        <>
            <Select id={direct} placeholder={direct} onChange={(e)=>{handleSelected(e)}}>
                {
                    showOptons()
                }
            </Select>
        </>
    )
}

export default SelectMenu