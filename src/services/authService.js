export async function login(authDetail){
    const requestOptions={
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(authDetail)
    }
    const response= await fetch("http://localhost:8000/login",requestOptions);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();

    if(data.accessToken){
        sessionStorage.setItem("token",JSON.stringify(data.accessToken));
        sessionStorage.setItem("userID",JSON.stringify(data.user.id));
        sessionStorage.setItem("userName",JSON.stringify(data.user.name));
    }

    return data;
}

export async function register(authDetail){
    const requestOptions= {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(authDetail)
    }
    const response= await fetch("http://localhost:8000/register",requestOptions);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data= await response.json();
    return data;
}

export async function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userID");
    sessionStorage.removeItem("userName");

}

