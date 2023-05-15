const baseURL = "http://universities.hipolabs.com/search?"

export const searchRequest = async (country: string) => {
    try {
        const response = await fetch(baseURL + `country=${country}`,{
            method: "GET"
        })
        return response.json()
    }
    catch (e){
        console.error(e)
    }
}