import React, {FC, useState} from 'react';

interface Props {
    handleCountryInput(value: string): void
    handleResetContent(): void
}

const SearchForm: FC<Props> = ({handleCountryInput, handleResetContent}) => {
    const [country, setCountry] = useState<string>("")


    const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleCountryInput(country)
    }

    const handleResetOnClick = () => {
        setCountry("")
        handleResetContent()
    }

    return (
        <form onSubmit={handleSubmit} className={"search-form"}>
            <input onChange={handleInputOnChange} value={country} type="text" placeholder={"Input Country"}/>
            <button onClick={handleResetOnClick} className={"reset-btn"}>Reset</button>
            <button className={"send-btn"} type={"submit"}>Send</button>
        </form>
    );
};

export default SearchForm;