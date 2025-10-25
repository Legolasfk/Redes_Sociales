using Microsoft.AspNetCore.Mvc;

namespace WebRedes.Controllers
{
    public class RedesController : Controller
    {
        public IActionResult Lienzo()
        {
            return View();
        }
    }
}
