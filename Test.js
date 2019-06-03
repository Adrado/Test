class Test
{
    constructor()
    {
        this.Name = "Jose";
        alert(()=>this.DiHola());
        alert(this.DiHola);
        alert(this.DiHola());
    }

    DiHola()
    {
        return "Hola " + this.Name;
    }
}