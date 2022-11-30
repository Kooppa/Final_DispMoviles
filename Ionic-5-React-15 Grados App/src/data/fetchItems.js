export const fetchItems = async() => {


    const url = `https://localhost:7163/api/Item/GetAll`
    const resp = await fetch( url );
    //data es el tipo principal del json que se llama
    const { data } = await resp.json();

    const Items = data;
    console.log(Items);
    return Items;

}
export default fetchItems