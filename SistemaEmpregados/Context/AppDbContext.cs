using Microsoft.EntityFrameworkCore;
using SistemaEmpregados.Models;

namespace SistemaEmpregados.Context
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }


        public DbSet<Cadastro>cadastrosEmpregados{get; set;}
    }
}
