import Card from "antd/es/card/Card"

export const Orders = ({orders, handleClick}) => {
    if (orders.length > 0) {
        return (
            <div style={{margin: "5px", marginTop: "20px"}}>
                {orders.map((order) => (
                    <Card style={{cursor: "pointer"}} onClick={()=>handleClick(order)} key={order.id} title={'Заказ номер ' + order.id}>
                        <p><strong>Город отправителя:</strong> {order.senderCity}</p>
                        <p><strong>Адрес отправителя:</strong> {order.senderAddress}</p>
                        <p><strong>Город получателя:</strong> {order.recieverCity}</p>
                        <p><strong>Адрес получателя:</strong> {order.recieverAddress}</p>
                        <p><strong>Вес груза:</strong> {order.cargoWeight}</p>
                        <p><strong>Дата забора груза:</strong> {new Date(order.deliveryDate).toLocaleDateString()}</p>
                    </Card>
                ))}
            </div>
        )
    } else {
        return (
            <h1 style={{margin: "5px", marginTop: "20px", textAlign: "center"}}>
                Заказов нет.
            </h1>
        )
    }
    
}