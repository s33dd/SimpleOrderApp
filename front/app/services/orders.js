export const getAllOrders = async () => {
    const response = await fetch("https://localhost:7253/Orders");

    return response.json();
}

export const createOrder = async (newOrder) => {
    await fetch("https://localhost:7253/Orders", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
    });
}

export const getOrder = async (id) => {
    const response = await fetch(`https://localhost:7253/Orders/${id}`);

    return response.json();
}