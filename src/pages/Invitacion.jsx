import { useState } from 'react';
import {useLocation, Navigate} from 'react-router-dom';
import Modal from "react-modal";
import {
    Reproductor,
    Contador,
    Card,
    AnimarElemento,
    TimeLine,
    Detalles,
    Imagen,
    Banner,
    Galeria,
    Icono,
    Boton,
    Confirmacion,
    Hoteles,
    Footer ,
    Iglesia, 
    Recepcion, 
    Novia,
    Novio,
} from '../components/index.js';
import getData from '../../data.js';
import {obtnerTextoConfirmacion} from '../functions/obtenerTextoConfirmacion.js'
import '../styles/modal.css';
import '../styles/invitacion.css';

const Invitacion = () => {
  const data = getData('xv');
  
  const song = './music/song.mp3'

  const [play,setPlay] = useState(false); //estado para manejar la reproduccion del audio
  const [modalIsOpen, setModalIsopen] = useState(true);//estado para manejar el modal

  // VALIDACIÓN DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pasesParam = params.get("pases");

  const pases = Number(pasesParam); // lo convertimos a número
  let txt1 = "Lugar";
  let txt2 = "reservado";

  // Si pasesParam es null, no es un número, no es entero o está fuera de rango -> redirigir
  if (
    !pasesParam ||                // vacío o null
    Number.isNaN(pases) ||        // no es un número
    !Number.isInteger(pases) ||   // no es un entero
    pases < 1 || pases > 10       // fuera de rango
  ) {
    return <Navigate to="/notfound" />;
  }

  if (pases > 1) {
    txt1 = "Lugares";
    txt2 = "reservados";
  }

  //funcion para reproduccion de la musica cuando el modal se acepte
  const handlePlay = ()=>{
    setPlay(true);
    setModalIsopen(false)
  }
  return (
  <>
    <img src="./img/fondo.webp" alt="image-fondo" className='imagen-fondo' />
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={()=>setModalIsopen(false)}
      style={{
        content:{
          width:'80%',
          top:'50%',
          left:'50%',
          right:'auto',
          bottom:'auto',
          transform:'translate(-50%, -50%)',
          textAlign:'center',
          border:'none',
          boxShadow:'10px 10px 10px #bdbdbd',
          backgroundColor:'var(--colorPrincipal)',
        }
      }}
      contentLabel="Confirmacion de Reproducción"
      ariaHideApp={false} //necesario para evitar adverterncias en pruebas yu desarrollo
      shouldCloseOnOverlayClick={false}
    >
      <div className = 'modal-imagen-contenedor'>
        <Imagen ajustes={{imagen:'./img/modal.webp', ancho:'100%'}} />
      </div>
      <p className="modal-content">Para una mejor experiencia, por favor acepta la reproducción automática.</p>  
      <Boton ajustes={
        { texto:'Aceptar',
          funcion:handlePlay,
          estilos:{
            colorFondo:'var(--colorSecundario)',
            textColor:'var(--colorPrincipal)',
            forma:{
            arribaIzquierda:true,
            arribaDerecha:true,
            abajoIzquierda:true,
            abajoDerecha:true
          }
          },
          
        }} />
      
    </Modal>

    {
      
      play && (
        <>
          <Reproductor song={song} />
          <Banner 
            ajustes={{
                      imagen:'./img/header.webp', 
                      anchoImagen:'100%', 
                      anchoContenedor:'100%', 
                      clase:'banner-header', 
                      altoContenedor:'auto'}} />
        <Banner ajustes={{imagen:'./img/flor4.webp', anchoImagen:'100%', anchoContenedor:'100%', clase:'banner-flor4'}} />
          <AnimarElemento
            as={Card}
            ajustes={{variante:'papel', ancho:'80%',clase:'card-header'}}
            animacion={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            duracion={1}
          >
            <Banner ajustes={{
                      imagen:'./img/nombre.webp', 
                      anchoImagen:'100%', 
                      anchoContenedor:'100%', 
                      clase:'banner-monograma', 
                      altoContenedor:'auto'}} />
            
            <h2 style={{marginTop:'30px'}}>Celebremos juntos el día:</h2>
            <Banner ajustes={{
                      imagen:'./img/fecha.webp', 
                      anchoImagen:'100%', 
                      anchoContenedor:'100%', 
                      clase:'banner-fecha', 
                      altoContenedor:'auto'}} />
            
          </AnimarElemento>

         <Banner ajustes={{
                      imagen:'./img/images/5.webp', 
                      anchoImagen:'100%', 
                      anchoContenedor:'100%', 
                      clase:'banner-monograma sombra', 
                      altoContenedor:'auto'}} />

          <AnimarElemento 
            as={Card}
            ajustes={{variante:'papel', ancho:'80%',clase:'card-papas'}}
            animacion={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            duracion={1}>
            {data.type === "boda" && (
              <>
                <p>En compañia de nuestros padres</p>
                <h2>{data.padresNovio.papa}</h2>
                <h2>{data.padresNovio.mama}</h2>
                <h2>{data.padresNovia.papa}</h2>
                <h2>{data.padresNovia.mama}</h2>
                <p>Y de nuestros padrinos</p>
                <h2>{data.padrinos.padrino}</h2>
                <h2>{data.padrinos.madrina}</h2>
              </>
            )}
            {data.type === "xv" && (
              <>
                <p>Y siempre en compañia de un Rey y una Reina, que con su amor hacen de su historia un cuento de hadas.</p>
                <h2 style={{marginTop:'30px'}}>{data.padres.papa}</h2>
                <h2>{data.padres.mama}</h2>
                
                <Banner ajustes={{
                      imagen:'./img/flor1.webp', 
                      anchoImagen:'100%', 
                      anchoContenedor:'100%', 
                      clase:'banner-flor1', 
                      altoContenedor:'auto'}} />
              </>
            )}

            {data.type === "bautizo" && (
              <>
                <p>En compañia de mis padres</p>
                <h2>{data.padres.papa}</h2>
                <h2>{data.padres.mama}</h2>
                <p>Y de mis padrinos</p>
                <h2>{data.padrinos.padrino}</h2>
                <h2>{data.padrinos.madrina}</h2>
              </>
            )}
          </AnimarElemento>
          
          <Banner ajustes={{
                      imagen:'./img/images/4.webp', 
                      anchoImagen:'100%', 
                      anchoContenedor:'100%', 
                      clase:'banner-4', 
                      altoContenedor:'auto'}} />

          <AnimarElemento
            as={Card}
           ajustes={{ancho:'80%', variante:'papel', clase:'card-horarios'}}
          animacion={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          duracion={1}
           >
            


            <div style={{}}>
              <Banner ajustes={{
                      imagen:'./img/salon.webp', 
                      anchoImagen:'100%', 
                      anchoContenedor:'100%', 
                      clase:'banner-salon', 
                      altoContenedor:'auto'}} />
              <p className='card-horarios-titulo'>Recepción</p>
              <div className='card-horarios-item'>
                <Icono IconoSVG={Recepcion} ajustes ={{color:'var(--colorTexto)',ancho:'50px',alto:'50px'}}/>
                <h2>{data.recepcion.lugar}</h2>
              </div>
              <div className='card-horarios-direccion'>
                <p>{data.recepcion.direccion}, {data.recepcion.direccionCol}</p>
                <p>{data.recepcion.direccionCd} </p>
                <h3>{data.recepcion.hora}:{data.recepcion.minutos} Hrs.</h3>
              </div>
              <div className='card-horarios-boton'>
                <Boton ajustes={
                  { texto:'Cómo llegar',
                    link:`${data.recepcion.ubicacion}`, 
                    estilos:{
                      colorFondo:'var(--colorSecundario)',
                      textColor:'var(--colorPrincipal)',
                      forma:{
                        
                        arribaIzquierda:true,
                        arribaDerecha:true,
                        abajoIzquierda:true,
                        abajoDerecha:true
                      }
                    }
                  }
                } 
                />
              </div>
            </div> {/* <------- */}
            
          </AnimarElemento>
          <Banner ajustes={{imagen:'./img/images/8.webp', anchoImagen:'100%', anchoContenedor:'100%', clase:'banner-foto2 sombra'}} />
          <Contador 
            titulo={'¡Prepárate!'}
            subtitulo={'Nos vemos en: '}  
            fechaDia={data.fechaDia}
            fechaMes={data.fechaMes}
            fechaYear={data.fechaYear}
            hora={data.religiosa.hora}
            minutos={data.religiosa.minutos}
          />

          <Card ajustes={{ancho:'60%', variante:'papel', clase:'card-timeline'}}>
                <TimeLine timeLine={data.timeLine} tituloImagen={true} titulo={'./img/itinerario.webp'} anchoImagen={'80%'} />
          </Card>

          <Banner ajustes={{imagen:'./img/flor2.webp', anchoImagen:'100%', anchoContenedor:'100%', clase:'banner-foto2'}} />
          
          <Detalles tituloImagen={true} titulo={'./img/detalles.webp'} anchoImagen={'80%'} detalles={data.detalles} />
          <Banner ajustes={{imagen:'./img/flor3.webp', anchoImagen:'100%', anchoContenedor:'100%', clase:'banner-foto2'}} />

          <div className='lugares'>
            <p>Hemos reservado</p>
            <h2>{pases}</h2>
            <span>{txt1} en tu honor</span>
          </div>

          <Galeria data={data.imagenes} />

          <Confirmacion data = {data} pases = {Number(pases)} />

          
          <Hoteles data={data.hoteles} />
          


          
          <Footer />
        </>
      )
    }
  </>
  )
}

export default Invitacion