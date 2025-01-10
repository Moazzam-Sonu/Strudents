namespace StrudentCurd.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<StrudentCurd.Model.Stuent> Stuent { get; set; }
    }
}
