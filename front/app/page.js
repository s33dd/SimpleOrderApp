"use client";

import { useEffect, useState } from "react";
import { Orders } from "./components/orders";
import { createOrder, getAllOrders, getOrder } from "./services/orders";
import { Button} from "antd";
import { CreateOrder } from "./components/createOrder";
import { ViewOrder } from "./components/viewOrder";

export default function Home() {
    const defaultValues = {
        senderCity: "",
        senderAddress: "",
        recieverCity: "",
        recieverAddress: "",
        cargoWeight: 0,
        deliveryDate: ""
    }
    const [orders, setOrders] = useState([]);
    const [values, setValues] = useState(defaultValues);
    const [viewObject, setViewValues] = useState(defaultValues);
    const[isCreateOpen, setIsCreateOpen] = useState(false);
    const[isViewOpen, setIsViewOpen] = useState(false);

    useEffect(()=>{
        const getOrders = async() => {
            const orders = await getAllOrders();
            setOrders(orders);
        }

        getOrders();
    })

    const handleCreateOrder = async (newOrder) => {
        newOrder.deliveryDate = newOrder.deliveryDate.format("YYYY-MM-DD");
        createOrder(newOrder);
        closeCreateModal();

        const orders = await getAllOrders();
        setOrders(orders);
    }

    const openCreateModal = () => {
        setIsCreateOpen(true);
    }

    const openViewModal = () => {
        setIsViewOpen(true);
    }

    const closeCreateModal = () => {
        setIsCreateOpen(false);
    }

    const closeViewModal = () => {
        setIsViewOpen(false);
    }

    const handleClick = (order) => {
        const response = getOrder(order.id);
        response.then((obj)=>{
            console.log(obj);
            setViewValues(obj);
        });
        setIsViewOpen(true);
    }

    return (
        <div>
           <h1 style={{textAlign: "center", marginTop: "10px"}}>Список заказов</h1>
           <Button onClick={openCreateModal} type="primary" style={{marginLeft: "10px"}}>Добавить заказ</Button>
           <CreateOrder values={values} isOpen={isCreateOpen} handleCreate={handleCreateOrder} handleCancel={closeCreateModal}></CreateOrder>
           <Orders orders={orders} handleClick={handleClick}/>
           <ViewOrder values={viewObject} isOpen={isViewOpen} handleCancel={closeViewModal}/> 
        </div>
    )
}