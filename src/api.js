
import axios from "axios";
export function getProduct(id){
    return axios.get('https://myeasykart.codeyogi.io/product/'+id).then(function(response){
        return response.data;
    });
    
}
export function getProducts(ids){
    let params = {ids: ids}
    return axios.get('https://myeasykart.codeyogi.io/products/bulk',{
        params,
    }).then((response)=>{
        return response.data;
    })
}
export function getData(sortBy,search,sortType,page){
    let params = {};
    if(sortBy){
        params.sortBy = sortBy;
    }
    if(sortType){
        params.sortType = sortType;
    }
    if(search){
        params.search = search;
    }
    params.page = +page;
    return axios.get('https://myeasykart.codeyogi.io/products',{
        params,
    }).then(function(response){
        return response.data;
    });

}
export function setCart(cart){
    return axios.post('https://myeasykart.codeyogi.io/carts',cart,{headers : {
        Authorization: localStorage.getItem("token"),
        }
    })
}
export function getCart(){
    return axios.get('https://myeasykart.codeyogi.io/carts',{headers : {
        Authorization: localStorage.getItem("token"),
        }
    })
}

export default getData;