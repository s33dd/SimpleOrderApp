import { Modal } from "antd"

export const ViewOrder = ({values, isOpen, handleCancel}) => {
    return (
        <Modal
            title={"Просмотр заказа"} 
            open={isOpen} 
            onCancel={handleCancel}
            footer={[]}
        >
            <div>
                <p><strong>Город отправителя:</strong> {values.senderCity}</p>
                <p><strong>Адрес отправителя:</strong> {values.senderAddress}</p>
                <p><strong>Город получателя:</strong> {values.recieverCity}</p>
                <p><strong>Адрес получателя:</strong> {values.recieverAddress}</p>
                <p><strong>Вес груза:</strong> {values.cargoWeight}</p>
                <p><strong>Дата забора груза:</strong> {new Date(values.deliveryDate).toLocaleDateString()}</p>
            </div>
        </Modal>
    )
}