const fetchSearch = async ({queryKey}) => {
    const {animal, location, breed } = queryKey[1];

    const api = await fetch (
        `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )

    if(!api.ok){
        throw new Error('pet search nor ok ')
    }

    return api.json()
}

export default fetchSearch;
