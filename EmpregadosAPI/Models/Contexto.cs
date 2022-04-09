using Microsoft.EntityFrameworkCore;

namespace EmpregadosAPI.Models
{
    public class Contexto : DbContext
    {
        public DbSet<Empregado> Empregados { get; set; }

        public Contexto(DbContextOptions<Contexto> opcoes) : base(opcoes) {
        }
        
        
    }
}