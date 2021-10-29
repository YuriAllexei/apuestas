import { PersistentSet, PersistentUnorderedMap, PersistentVector, Context} from "near-sdk-as";


export class Deuda{

   tipo: string
   jugador: Jugador;
   cantidad: number;
   fechaCreado: Date;
   fechaSaldado: Date; 
  saldado:boolean

  constructor(jugador: Jugador,cantidad:number,año:number,mes:number,dia:number,tipo:string){
    this.jugador=jugador
    this.cantidad=cantidad
    this.fechaCreado=new Date(500000)
    this.saldado=false
    this.tipo=tipo
  }

  imprimirDeuda():string{
    const saldado :string =this.saldado ? this.fechaSaldado.toDateString() : "No ha sido saldada"
    return `{Persona:${this.jugador.toDeuda(this.tipo)},Cantidad:${this.cantidad},FechaDeuda:${this.fechaCreado.toDateString()},FechaSaldado:${saldado}}` 
    
    
  }

}


  export class Solicitud{
    tipo: string
    jugador: Jugador
    cantidad: number
    interes: number


    constructor(tipo:string,jugador: Jugador,cantidad:number,interes:number){
      this.tipo=tipo
      this.jugador=jugador
      this.cantidad=cantidad
      this.interes=interes
    }

    toString(): string{
      return `{tipo:${this.tipo},jugador:${this.jugador.toString()},cantidad${this.cantidad},interes:${this.interes}}`
    }



  }

  export class Jugador{
     nombreJ: string;
     idNear: string;
     fondos: number;
     transacciones: PersistentUnorderedMap<string,number>;
     adeudos: PersistentVector<Deuda>;
     deudores: PersistentVector<Deuda>;
     historial: PersistentVector<Apuesta>;
     verificado: boolean;
     deuda: number;
     adeudo: number;
     prestamos: boolean;
    requests: Map<string,Solicitud>;
    constructor(nombreJ:string,idNear:string,prestamo:boolean){
        this.nombreJ=nombreJ
        this.idNear=idNear
        this.adeudos=new PersistentVector<Deuda>(idNear+"a")
        this.deudores=new PersistentVector<Deuda>(idNear+"d")
        this.historial=new PersistentVector<Apuesta>("h")
        this.transacciones=new PersistentUnorderedMap<string,number>("t")
        this.prestamos=prestamo
        this.verificado=false
        this.requests=new Map<string,Solicitud>()
    }

    toDeuda(tipo:string):string{


        if (tipo==="adeudo") {
            return `{nombreJ:${this.nombreJ},idNear:${this.idNear},verificado:${this.verificado},fondos:${this.fondos},adeudos:${this.adeudo}}`
        }
        else{
            return `{nombreJ:${this.nombreJ},idNear:${this.idNear},verificado:${this.verificado},fondos:${this.fondos},deudores:${this.deuda}}`
        }
    }

    toString():string{
        return `{nombreJ:${this.nombreJ},idNear:${this.idNear},verificado:${this.verificado},fondos:${this.fondos},deudores:${this.deuda},transacciones:${this.transacciones},historial:${this.historial},adeudos:${this.adeudos},deudores:${this.deudores},Prestamos:${this.prestamos}}`

    }   
}
export class Apuesta{
    entrada: number
    jugadores: PersistentVector<Jugador> | null
    tipo: number
    resultado: string
    len: number  

  constructor(entrada: number,jugadores: PersistentVector<Jugador> | null,tipo: number,resultado:string){
    this.entrada=entrada
    this.jugadores=jugadores
    this.tipo=tipo
    this.resultado=resultado
    this.len =jugadores ? jugadores.length : 0
  }
  apuestaToString(): string{
    return `{entrada:${this.entrada},jugadores:${this.jugadores},tipo:${this.tipo},resultado:${this.resultado},len:${this.len}}`
  }
}

export let  jugadorRegistry= new PersistentUnorderedMap<string,Jugador>("j");
export let  apuestasRegistry=new PersistentVector<Apuesta>("a");