using Microsoft.AspNetCore.Mvc;
using EmpregadosAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace EmpregadosAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class EmpregadosController : ControllerBase
    {
        private readonly Contexto _contexto;

        public EmpregadosController(Contexto contexto)
        {
            _contexto = contexto;
        }

        //Obter todos os empregados
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empregado>>> GetAllAsync(){
            return await _contexto.Empregados.ToListAsync();
        }

        //Obter empregado pelo ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Empregado>> GetIdAsync(int id){
            Empregado empregado = await _contexto.Empregados.FindAsync(id);

            if(empregado == null)
                return NotFound();
            return empregado;
        }

        //Cadastrar empregado
        [HttpPost]
        public async Task<ActionResult<Empregado>> SetEmpregadoAsync(Empregado empregado){
            await _contexto.Empregados.AddAsync(empregado);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        //Atualizar empregado
        [HttpPut]
        public async Task<ActionResult> UpdateEmpregadoAsync(Empregado empregado){
            _contexto.Empregados.Update(empregado);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        //Excluir empregado
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEmpregadoAsync(int id){
            Empregado empregado = await _contexto.Empregados.FindAsync(id);

            if(empregado == null)
                return NotFound();

            _contexto.Remove(empregado);
            await _contexto.SaveChangesAsync();

            return Ok();
        }       
    }
}