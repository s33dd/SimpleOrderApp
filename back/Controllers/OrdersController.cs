using Microsoft.AspNetCore.Mvc;
using OrderApp.Models;

namespace OrderApp.Controllers
{
    [ApiController]
	[Route("[controller]")]
	public class OrdersController : Controller {

		private readonly OrdersContext _orderContext;

        public OrdersController(OrdersContext context) {
            _orderContext = context;
        }

		[HttpPost]
		public ActionResult<OrderModel> Create(OrderModel model) {
			_orderContext.Orders.Add(model);
			_orderContext.SaveChanges();

			return CreatedAtAction(nameof(Create), model);
		}

		[HttpGet("{id}")]
		public ActionResult<OrderModel> Get(int id) {
			if (_orderContext.Orders == null) {
				return NotFound();
			}
			OrderModel order = _orderContext.Orders.Find(id);
			if (order == null) {
				return NotFound();
			}
			return Ok(order);
		}

		[HttpGet]
		public ActionResult<IEnumerable<OrderModel>> GetAll() {
			if (_orderContext.Orders == null) { 
				return NotFound();
			}

			return Ok(_orderContext.Orders.ToList());
		}
	}
}
