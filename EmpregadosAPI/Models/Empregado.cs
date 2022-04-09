using Microsoft.EntityFrameworkCore;

namespace EmpregadosAPI.Models
{
    
    public class Empregado
    {
        public int Id { get; set; } 

        public int Agencia { get; set; }
        
        public string Nome { get; set; }

        public string DataNascimento { get; set; }

        public string Matricula { get; set; }

        public string Funcao { get; set; }

        public string Escolaridade { get; set; }
    }
}