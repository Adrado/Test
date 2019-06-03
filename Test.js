class Test
{
    constructor()
    {
        this.Name = "Jose";
        alert(()=>this.DiHola());
        alert(this.DiHola);
        alert(this.DiHola());
    }

    //Funciones
    DiHola()
    {
        return "Hola " + this.Name;
    }
}