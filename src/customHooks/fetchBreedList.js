const fetchBreedList = async({queryKey}) => { 

    const animal = queryKey[1];

    if(!animal) return []

    const api = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    )

    if(!api.ok){
        throw new Error(`breeds/${animal} fetch no ok`)
    }

    return api.json()

}

export default fetchBreedList;
