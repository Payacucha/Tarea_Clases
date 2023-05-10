class Persona {
    public  nombre        :string;
    public  identificacion:string;
    public  edad          :number;
    public  direccion     :string;

    constructor (nombre : string, identificacion:string, edad:number, direccion:string){
        this.nombre         = nombre;
        this.identificacion = identificacion;
        this.edad           = edad;
        this.direccion      = direccion
    }
    saludar(){
        console.log("Mi nombre es " + this.nombre + " y tengo " + this.edad + " ,vivo en el sector de " + this.direccion + " y mi identificación es la siguiente " + this.identificacion )
        console.log("Soy estudiante de la carrera de software")
    }
}

const persona = new Persona("Sebastan", "12175172594", 20, "Rio Coca");
persona.saludar();
const per2 = new Persona("Samanta", "1243456775", 22, "Inca");
per2.saludar();


class Estudiante extends Persona{
    public numeroMatricula  : number
    public nivel            : string;
    
    constructor(nombre:string, identificacion:string, edad:number, direccion:string, numeroMatricula:number, nivel:string){
        super(nombre,identificacion,edad,direccion);
        this.numeroMatricula = numeroMatricula;
        this.nivel           = nivel;

    }

}

class Docente extends Persona {
    public contrato : string;
    public titulo   : string;
    constructor(nombre:string, identificacion:string,edad:number,direccion:string, contrato:string, titulo:string){
        super(nombre,identificacion,edad,direccion);
        this.contrato   = contrato;
        this.titulo     = titulo
    }
}

class Empleado {
    public nombre           : string;
    public horasTrabajadas  : number;
    public salarioPorHora   : number;

    constructor(nombre: string, horasTrabajadas: number, salarioPorHora: number) {
        this.nombre             = nombre;
        this.horasTrabajadas    = horasTrabajadas;
        this.salarioPorHora     = salarioPorHora;
    }
    public calcularSueldo(): number {
      return this.horasTrabajadas * this.salarioPorHora;
    }
}

const empleado1 = new Empleado("Andres", 500, 5);
console.log(`El sueldo de ${empleado1.nombre} es: ${empleado1.calcularSueldo()}`);

const empleado2 = new Empleado("Sebastian", 350, 10);
console.log(`El sueldo de ${empleado2.nombre} es: ${empleado2.calcularSueldo()}`);



