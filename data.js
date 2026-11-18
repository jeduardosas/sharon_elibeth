import {arrayFotos} from './src/functions/arrayFotos.js';
const datosComunes = {
  frase:'',
  imagenes:arrayFotos(10),
  fechaDia:'13',
  fechaMes:'Diciembre',
  fechaYear:'2026',
  religiosa:{
    hora:'20',
    minutos:'00',
    lugar:'Maluma´s Eventos',
    direccion:'Blvd. H. Colegio Militar, s/n',
    direccionCol:'Cda. Club de Leones',
    direccionCd:'Iguala de la independencia, Gro.',
    ubicacion:'https://maps.app.goo.gl/3xnD1Pgk6meJNpiu5',

  },
  recepcion:{
    hora:'20',
    minutos:'00',
    lugar:'Maluma´s Eventos',
    direccion:'Blvd. H. Colegio Militar, s/n',
    direccionCol:'Cda. Club de Leones',
    direccionCd:'Iguala de la independencia, Gro.',
    ubicacion:'https://maps.app.goo.gl/3xnD1Pgk6meJNpiu5'
  },
  detalles: [
    {
      titulo: 'Lluvia de Sobres',
      contenido: [
        { tipo: 'texto', texto: 'Tu presencia es el mejor regalo, pero si deseas tener un detalle conmigo, agradeceré sea en efectivo, gracias.' }
        
      ]
    },
    {
      titulo: 'Código de Vestimenta',
      contenido: [
        { tipo: 'texto', texto: 'FORMAL ELEGANTE' },
        {tipo:'texto', texto:'El color rosa en todas sus tonalidades se reserva para la quinceañera.'},
        
        
      ]
    },
    
  ],
  timeLine:{
    settings:{
      bgColor:'#fff',
      color:'#000',
      lineColor:'#000',
    },
    protocol:[
      {
        id:1,
        time:' 20:00 Hrs.', 
        name:'Recepcion',
        icon:'recepcion',
      },

      {
        id:2,
        time:'21:00 Hrs.',
        name:'Protocolo',
        icon:'brindis',
      },
      {
        id:3,
        time:'22:00 Hrs.',
        name:'Cena',
        icon:'comida'
      },
      {
        id:4,
        time:'23:00 Hrs.',
        name:'Baile',
        icon:'musica'
      }
    ]
  },
  hoteles:[ //PENDIENTE
    {
      nombre:'Hotel Grand Plaza',
      direccion:'Miguel Hidalgo,7',
      direccion_colonia:'Centro, Iguala de la Independencia',
      telefono:'7333326990',
      tiempo:'8-12 min. al evento',
      precio:'Desde $1,507 MXN por noche',
      rating:'4.4',
      ubicacion:'https://maps.app.goo.gl/F7diNYwonneRNgz8A'
    },
    {
      nombre:'Hotel Maria Isabel',
      direccion:'Constitución, 3',
      direccion_colonia:'Centro, Iguala de la Independencia',
      telefono:'7333333233',
      tiempo:'7-10 min. al evento',
      precio:'Desde $1,391 MXN por noche',
      rating:'4.1',
      ubicacion:'https://maps.app.goo.gl/6MTB65ZT6jRmLcAx7'
    },
    {
      nombre:'Hotel Real 1900',
      direccion:'Miguel Hidalgo, 6',
      direccion_colonia:'Centro, Iguala de la Independencia',
      telefono:'7331101106',
      tiempo:'9-13 min. al evento',
      precio:'Desde $1,715 MXN por noche',
      rating:'4.6',
      ubicacion:'https://maps.app.goo.gl/ZwmuWzaLaxGmzd2B9'
    },

  ]

}

const tipoevento={
  
  boda:{
    type:'boda',
    nombreNovia:'katia',
    nombreNovio:'pepe',
    padresNovia:{
      papa:'Marin Sanmartin',
      mama:'Clara Ascencio'
    },
    padresNovio:{
      papa:'José Sánchez',
      mama:'Yolanda Soto',
    },
    padrinos:{
      padrino:'Carmelo Rebolledo',
      madrina:'Yazmin Ascencio',
    },
    confirmacion: [
      {
        id: 'novio',
        label: 'Confirmar con el Novio',
        telefono: '7331585936',
        icono:'novio'
      },
      {
        id: 'novia',
        label: 'Confirmar con la Novia',
        telefono: '7331533106',
        icono:'novia'
      }
    ]
  },
  
  bautizo:{
    type:'bautizo',
    nombre:'',
    padres:{
      papa:'',
      mama:''
    },
    padrinos:{
      padrino:'',
      madrina:''
    },
    confirmacion: [
      {
        id: 'general',
        label: 'Confirmar asistencia',
        telefono: '3312345678',
        icono:''
      }
    ]
  },
  
  xv:{
    type:'xv',
    nombre:'Sharon Elibeth',
    padres:{
      papa:'Gustavo Hernández Cervantes',
      mama:'Elizabeth Díaz Amezcua'
    },
    padrinos:{
      padrino:'',
      madrina:''
    },
    confirmacion: [
      {
        id: 'general',
        label: 'Confirmar',
        telefono: '7333006169',
        icono:''
      },
    ]
  }
}

const getData = (type)=>{
  return {...datosComunes, ...tipoevento[type]}
}

export default getData

