const domain = "https://zapp-gvnp.onrender.com"

export const getAllUsers = async () => {
const route = "/getAllUsers";
return await AppFetch(route , "GET" , null);
}
const AppFetch = async (route , method , body) => {
    const url = domain + route;

    const params = {
        method : method || "GET",
    };

    if (body) {

    params.body = body;
    }

    return await fetch(url , params)
    .then(res => res.json())
    .then(resJson => resJson)
    .catch(e => console.log("fetch error" , e));
};