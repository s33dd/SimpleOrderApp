using Microsoft.EntityFrameworkCore;

namespace OrderApp.Models
{
    public class OrdersContext : DbContext
    {
        public DbSet<OrderModel> Orders { get; set; }

        public OrdersContext(DbContextOptions<OrdersContext> options) : base(options) {

        }
    }
}
