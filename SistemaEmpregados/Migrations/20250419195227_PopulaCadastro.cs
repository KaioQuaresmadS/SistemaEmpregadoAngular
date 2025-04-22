using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SistemaEmpregados.Migrations
{
    /// <inheritdoc />
    public partial class PopulaCadastro : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "cadastrosEmpregados",
                columns: new[] {"firstName", "lastName", "email", "contantNo", "City", "Address" },
                values: new object[,]
                    {
                        {"João", "Silva", "joao.silva@example.com", "31999999999", "Belo Horizonte", "Rua A, 123" },
                        {"Maria", "Oliveira", "maria.oliveira@example.com", "31988888888", "Contagem", "Rua B, 456" }
                    }
                );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.DeleteData(
                table: "cadastrosEmpregados",
                keyColumn: "EmpregadorId",
                keyValues: new object[] { 1, 2 }
                );
        }
    }
}
