import { Input, InputNumber, Modal, Form, Button, DatePicker } from "antd"
import FormItem from "antd/es/form/FormItem";
import { useEffect, useState } from "react";

export const CreateOrder = ({values, isOpen, handleCancel, handleCreate}) => {
    const [senderCity, setSenderCity] = useState("");
    const [senderAddress, setSenderAddress] = useState("");
    const [recieverCity, setRecieverCity] = useState("");
    const [recieverAddress, setRecieverAddress] = useState("");
    const [cargoWeight, setCargoWeight] = useState(0);
    const [deliveryDate, setDeliveryDate] = useState("");

    useEffect(()=>{
        setSenderCity(values.senderCity);
        setSenderAddress(values.senderAddress);
        setRecieverCity(values.recieverCity);
        setRecieverAddress(values.recieverAddress);
        setCargoWeight(values.cargoWeight);
        setDeliveryDate(values.deliveryDate);
    }, [values])
    return (
        <Modal
            destroyOnClose={true}
            title={"Создание нового заказа"} 
            open={isOpen} 
            onCancel={handleCancel}
            footer={[]}>
            <Form 
                style={{display: "flex", flexDirection: "column"}}
                name="form"
                onFinish={handleCreate}>
                    <FormItem
                        name="senderCity"
                    >
                        <Input
                            required
                            className="input-field"
                            value={senderCity}
                            onChange={(e)=>setSenderCity(e.target.value)}
                            placeholder="Город отправителя"
                        />
                    </FormItem>
                    <FormItem
                        name="senderAddress"
                    >
                        <Input 
                            required
                            className="input-field"
                            value={senderAddress}
                            onChange={(e)=>setSenderAddress(e.target.value)}
                            placeholder="Адрес отправителя"
                        />
                    </FormItem>
                    <FormItem
                        name="recieverCity"
                    >
                        <Input
                            required
                            className="input-field"
                            value={recieverCity}
                            onChange={(e)=>setRecieverCity(e.target.value)}
                            placeholder="Город получателя"
                        />
                    </FormItem>
                    <FormItem
                        name="recieverAddress"
                    >
                        <Input
                            required
                            className="input-field"
                            value={recieverAddress}
                            onChange={(e)=>setRecieverAddress(e.target.value)}
                            placeholder="Адрес получателя"
                        />
                    </FormItem>
                    <FormItem
                        name="deliveryDate"
                        label="Дата забора груза"
                        rules={[{ required: true, message: 'Выберите дату!' }]}
                    >
                        <DatePicker
                            placeholder="Выберите дату"
                            value={deliveryDate}
                            onChange={(date, dateString)=>{setDeliveryDate(dateString)}}
                        />
                    </FormItem>
                    <FormItem
                        name="cargoWeight"
                        label={"Вес груза"}
                    >
                            <InputNumber
                                min={0.1}
                                required
                                value={cargoWeight}
                                onChange={(weight)=>{setCargoWeight(weight)}}
                            />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">Добавить заказ</Button>
                    </FormItem>
            </Form>
        </Modal>
    )
}