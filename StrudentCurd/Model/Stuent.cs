using System.ComponentModel.DataAnnotations;

namespace StrudentCurd.Model
{
    public class Stuent
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string RollNo { get; set; }
        public string Course { get; set; }
    }
}
