using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaEmpregados.Context;
using SistemaEmpregados.Models;

namespace SistemaEmpregados.Controllers
{

        [ApiController]
        [Route("api/[controller]")]
        public class EmpregadosController : ControllerBase
        {
            private readonly AppDbContext _context;
            public EmpregadosController(AppDbContext context)
            {
                _context = context;
            }

        [HttpGet]
        public ActionResult<IEnumerable<Cadastro>> Get()
        {
            var empregados = _context.cadastrosEmpregados.ToList();
            return Ok(empregados);
        }

    [HttpGet("{id:int}", Name = "ObterEmpregado")]
    public ActionResult<Cadastro> Get(int id)
    {
      var empregado = _context.cadastrosEmpregados.FirstOrDefault(e => e.EmpregadorId == id);
      if (empregado == null)
      {
        return NotFound("Empregado não encontrado!");
      }
      return empregado;
    }

    [HttpPost]
    public ActionResult Post(Cadastro cadastro)
    {
      if(cadastro is null)
      {
        return BadRequest();

      }
      _context.cadastrosEmpregados.Add(cadastro);
      _context.SaveChanges();

      return new CreatedAtRouteResult("ObterEmpregado", new { id = cadastro.EmpregadorId }, cadastro);
    }

    [HttpPut]
    public ActionResult Put(int id, Cadastro cadastro)
    {
      if(id != cadastro.EmpregadorId)
      {
        return BadRequest();
      }
      _context.Entry(cadastro).State = EntityState.Modified;
      _context.SaveChanges();
      return Ok(cadastro);
    }

  }
};
