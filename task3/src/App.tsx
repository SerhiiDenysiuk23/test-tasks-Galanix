import React, {useEffect, useState} from 'react';
import SearchForm from "./components/SearchForm";
import {searchRequest} from "./api/core";
import {University} from "./types/university";
import ResultItem from "./components/ResultItem";

function App() {
    const [universities, setUniversities] = useState<University[]>([])
    const [country, setCountry] = useState<string>("")

    const handleCountryInput = (value: string) => {
        setCountry(value)
    }

    const handleResetContent = () => {
        setUniversities([])
    }

    useEffect(() => {
        country.length &&
        searchRequest(country).then(
            res => {
                setUniversities(res)
            }
        )
    }, [country])

    return (
        <div className="App">
            <SearchForm handleResetContent={handleResetContent} handleCountryInput={handleCountryInput}/>

            {
                !!universities.length &&
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Country Code</th>
                        <th>Domains</th>
                        <th>Web Pages</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        universities.map((item, index) =>
                            <ResultItem item={item} index={index + 1} key={item.name + index}/>)
                    }
                    </tbody>
                </table>
            }
        </div>
    );
}

export default App;
