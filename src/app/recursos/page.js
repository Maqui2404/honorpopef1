"use client";
// src/app/recursos/page.js
import { Suspense } from "react";
import MiniHero from "../recursos/MiniHero";
import ResourcesAll from "../recursos/ResourcesAll";
import LoadingSpinner from "../recursos/LoadingSpinner";
import Image from 'next/image';

// Puedes guardar los datos en un archivo JSON separado o incluirlos aquí
const resourcesData = [
  {
    "id": 1,
    "tipo": "Libro",
    "subtipo": "Entrevista",
    "titulo": "El nombre de Dios es Misericordia",
    "autor": "Papa Francisco con Andrea Tornielli",
    "descripcion": "Conversación íntima sobre la misericordia como núcleo del Evangelio.",
    "fecha": "2016",
    "portada": "/img/libros/nombre-dios-misericordia.jpg",
    "plataforma": "Amazon",
    "urlOnline": "https://www.amazon.es/nombre-Dios-Misericordia-PLANETA-FRANCISCO/dp/8408149539",
    "fragmento": "/docs/fragmentos/nombre-dios-misericordia.pdf",
    "tags": ["misericordia", "entrevista", "evangelio"]
  },
  {
    "id": 2,
    "tipo": "Libro",
    "subtipo": "Reflexión social",
    "titulo": "Soñemos Juntos",
    "autor": "Papa Francisco",
    "descripcion": "El Papa propone cómo construir un futuro mejor tras la crisis.",
    "fecha": "2020",
    "portada": "/img/libros/sonemos-juntos.jpg",
    "plataforma": "Amazon",
    "urlOnline": "https://www.amazon.es/So%C3%B1emos-juntos-futuro-mejor-Francisco/dp/8401026741",
    "fragmento": "/docs/fragmentos/sonemos-juntos.pdf",
    "tags": ["futuro", "esperanza", "reconstrucción"]
  },
  {
    "id": 3,
    "tipo": "Libro",
    "subtipo": "Biografía",
    "titulo": "Francisco: Vida y Revolución",
    "autor": "Elisabetta Piqué",
    "descripcion": "Biografía no oficial basada en la experiencia personal de la autora.",
    "fecha": "2013",
    "portada": "/img/libros/francisco-vida-revolucion.jpg",
    "plataforma": "Amazon",
    "urlOnline": "https://www.amazon.es/Francisco-Vida-revoluci%C3%B3n-Elisabetta-Piqu%C3%A9/dp/8415880375",
    "fragmento": null,
    "tags": ["biografía", "revolución", "vida de Francisco"]
  },
  // {
  //   "id": 4,
  //   "tipo": "Libro",
  //   "subtipo": "Comentario",
  //   "titulo": "La encíclica verde",
  //   "autor": "Varios autores",
  //   "descripcion": "Análisis y comentarios sobre Laudato Si' y ecología integral.",
  //   "fecha": "2016",
  //   "portada": "/img/libros/enciclica-verde.jpg",
  //   "plataforma": "Amazon",
  //   "urlOnline": "https://www.amazon.es/enc%C3%ADclica-verde-ESTUDIOS-SOCIEDAD-COMUNICACI%C3%93N/dp/8416842043",
  //   "fragmento": null,
  //   "tags": ["ecología", "medio ambiente", "Laudato Si'"]
  // },
  {
    "id": 5,
    "tipo": "Documento",
    "subtipo": "Encíclica",
    "titulo": "Laudato Si'",
    "autor": "Papa Francisco",
    "descripcion": "Sobre el cuidado de la casa común.",
    "fecha": "2015",
    "portada": "/img/documents/laudato-si.jpg",
    "plataforma": "Vatican.va",
    "urlPdf": "/docs/laudato-si.pdf",
    "urlOnline": "https://www.vatican.va/content/francesco/es/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html",
    "tags": ["ecología", "cuidado de la creación"]
  },
  {
    "id": 6,
    "tipo": "Documento",
    "subtipo": "Encíclica",
    "titulo": "Fratelli Tutti",
    "autor": "Papa Francisco",
    "descripcion": "Sobre la fraternidad y la amistad social.",
    "fecha": "2020",
    "portada": "/img/documents/fratelli-tutti.jpg",
    "plataforma": "Vatican.va",
    "urlPdf": "/docs/fratelli-tutti.pdf",
    "urlOnline": "https://www.vatican.va/content/francesco/es/encyclicals/documents/papa-francesco_20201003_enciclica-fratelli-tutti.html",
    "tags": ["fraternidad", "amistad social", "solidaridad"]
  },
  {
    "id": 7,
    "tipo": "Documento",
    "subtipo": "Exhortación Apostólica",
    "titulo": "Evangelii Gaudium",
    "autor": "Papa Francisco",
    "descripcion": "Sobre el anuncio del Evangelio en el mundo actual.",
    "fecha": "2013",
    "portada": "/img/documents/evangelii-gaudium.jpg",
    "plataforma": "Vatican.va",
    "urlPdf": "/docs/evangelii-gaudium.pdf",
    "urlOnline": "https://www.vatican.va/content/francesco/es/apost_exhortations/documents/papa-francesco_esortazione-ap_20131124_evangelii-gaudium.html",
    "tags": ["evangelización", "alegría"]
  },
  {
    "id": 8,
    "tipo": "Documento",
    "subtipo": "Exhortación Apostólica",
    "titulo": "Amoris Laetitia",
    "autor": "Papa Francisco",
    "descripcion": "Sobre el amor en la familia.",
    "fecha": "2016",
    "portada": "/img/documents/amoris-laetitia.jpg",
    "plataforma": "Vatican.va",
    "urlPdf": "/docs/amoris-laetitia.pdf",
    "urlOnline": "https://www.vatican.va/content/francesco/es/apost_exhortations/documents/papa-francesco_esortazione-ap_20160319_amoris-laetitia.html",
    "tags": ["familia", "amor", "pastoral familiar"]
  },
  {
    "id": 9,
    "tipo": "Documento",
    "subtipo": "Carta Apostólica",
    "titulo": "Misericordiae Vultus",
    "autor": "Papa Francisco",
    "descripcion": "Convocatoria del Jubileo Extraordinario de la Misericordia.",
    "fecha": "2015",
    "portada": "/img/documents/misericordiae-vultus.jpg",
    "plataforma": "Vatican.va",
    "urlPdf": "/docs/misericordiae-vultus.pdf",
    "urlOnline": "https://www.vatican.va/content/francesco/es/bulls/documents/papa-francesco_bolla_20150411_misericordiae-vultus.html",
    "tags": ["jubileo", "misericordia"]
  },
  {
    "id": 10,
    "tipo": "Película",
    "subtipo": "Biografía dramatizada",
    "titulo": "Francisco, el Padre Jorge",
    "autor": "Beda Docampo Feijóo",
    "descripcion": "Película basada en hechos reales sobre la vida de Jorge Mario Bergoglio antes de ser Papa.",
    "fecha": "2015",
    "portada": "/img/peliculas/francisco-padre-jorge.jpg",
    "plataforma": "Amazon Prime Video (alquiler), DVD",
    "urlOnline": "https://www.amazon.com/-/es/Francisco-El-Padre-Jorge-DVD/dp/B01M6UT1KW",
    "tags": ["película", "biografía", "dramatización", "Bergoglio"]
  },
  {
    "id": 11,
    "tipo": "Video",
    "subtipo": "Documental",
    "titulo": "Pope Francis: A Man of His Word",
    "autor": "Wim Wenders",
    "descripcion": "Documental íntimo sobre el pensamiento y el mensaje del Papa Francisco.",
    "fecha": "2018",
    "portada": "/img/videos/man-of-his-word.jpg",
    "plataforma": "YouTube (trailer), Prime Video (completo)",
    "urlOnline": "https://www.youtube.com/watch?v=MOmY8i-uBcY",
    "tags": ["documental", "francisco", "wim wenders"]
  },
  {
    "id": 12,
    "tipo": "Video",
    "subtipo": "Documental",
    "titulo": "Francesco",
    "autor": "Evgeny Afineevsky",
    "descripcion": "Documental social que aborda temas como migración, derechos humanos y medio ambiente.",
    "fecha": "2020",
    "portada": "/img/videos/francesco.jpg",
    "plataforma": "Vimeo, Amazon Video",
    "urlOnline": "https://www.youtube.com/watch?v=K-5ixrW3PAI",
    "tags": ["documental", "derechos humanos", "francisco"]
  },
  {
    "id": 13,
    "tipo": "Video",
    "subtipo": "Serie Documental",
    "titulo": "Historias de una generación con el Papa Francisco",
    "autor": "Netflix",
    "descripcion": "Serie documental basada en testimonios de vida y sabiduría, comentados por Francisco.",
    "fecha": "2021",
    "portada": "/img/videos/historias-generacion.jpg",
    "plataforma": "Netflix",
    "urlOnline": "https://www.netflix.com/title/81306329",
    "tags": ["serie", "sabiduría", "testimonios"]
  },
  {
    "id": 14,
    "tipo": "Video",
    "subtipo": "Conversaciones",
    "titulo": "Encuentros del Papa Francisco con Jóvenes",
    "autor": "Vatican Media",
    "descripcion": "Charlas y encuentros con jóvenes en sínodos y Jornadas Mundiales de la Juventud.",
    "fecha": "2016–2023",
    "portada": "/img/videos/encuentros-jovenes.jpg",
    "plataforma": "YouTube",
    "urlOnline": "https://www.youtube.com/user/vatican",
    "tags": ["jóvenes", "encuentros", "Jornada Mundial"]
  },
  {
    "id": 15,
    "tipo": "Video",
    "subtipo": "Conversaciones - Encuentros del Papa Francisco con Jóvenes",
    "titulo": "AMÉN - FRANCISCO RESPONDE",
    "autor": "Vatican Media",
    "descripcion": "Diez jóvenes de varias partes del mundo se reúnen en Roma con el Papa Francisco con el objetivo de conversar y transmitirle las principales preocupaciones de su generación. Lo que les espera es un encuentro sin precedentes, una conversación cara a cara y un evento único.",
    "fecha": "2023",
    "portada": "/img/videos/amenfranciscoresponde1.jpg",
    "plataforma": "Disney+",
    "urlOnline": "https://youtu.be/IBwYpUYQaTQ",
    "tags": ["jóvenes", "encuentros", "AMÉN", "Francisco Responde"]
  }
];

export default function RecursosPage() {
  return (
    <main className="bg-white">
      <MiniHero />
      
      <Suspense fallback={<LoadingSpinner />}>
        <ResourcesAll data={resourcesData} />
      </Suspense>
    </main>
  );
}