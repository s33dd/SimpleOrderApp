namespace OrderApp.Models
{
    public class OrderModel
    {

        public int Id { get; set; }

        public string SenderCity { get; set; }

        public string SenderAddress { get; set; }

        public string RecieverCity { get; set; }

        public string RecieverAddress { get; set; }

        public double CargoWeight { get; set; }

        public DateTime DeliveryDate { get; set; }
    }
}
