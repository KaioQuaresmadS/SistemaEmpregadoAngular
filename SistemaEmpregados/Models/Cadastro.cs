using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaEmpregados.Models
{
    public class Cadastro
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EmpregadorId { get; set; }

        [Required, MaxLength(50)]
        public string firstName { get; set; }

        [Required, MaxLength(50)]
        public string lastName { get; set; }

        [EmailAddress, MaxLength(50)]
        public string? email { get; set; }

        [Required, StringLength(11)]
        public string contantNo { get; set; }

        [MaxLength(50)]
        public string? City { get; set; }

        [MaxLength(50)]
        public string? Address { get; set; }

    }
}
