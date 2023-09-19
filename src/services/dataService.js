function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const userID = JSON.parse(sessionStorage.getItem("userID"));
    
    return { token, userID };
}

export async function getUser() {
    const { token, userID } = getSession();
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await fetch(
        `http://localhost:8000/600/users/${userID}`,
        requestOptions
    );
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function getUserOrders() {
    const { token, userID } = getSession();
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await fetch(
        `http://localhost:8000/660/orders?user.id=${userID}`,
        requestOptions
    );
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function createOrder({ cartList, total, user }) {
    const { token, userID } = getSession();
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: userID,
        },
    };
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(order),
    };

    const response = await fetch(
        "http://localhost:8000/660/orders",
        requestOptions
    );
    console.log(response);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}
