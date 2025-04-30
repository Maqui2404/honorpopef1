// src/components/recursos/VideosDocumentales.jsx
"use client";
import { useState } from "react";
import { Video } from "lucide-react";

const videos = [
  {
    id: 1,
    titulo: "Pope Francis: A Man of His Word",
    tipo: "Documental",
    descripcion: "Documental de Netflix sobre la vida y el pontificado de Francisco.",
    miniatura: "/img/videos/papa-del-pueblo.jpg",
    url: "https://www.netflix.com/title/80174177",
    plataforma: "Netflix"
  },
  {
    id: 2,
    titulo: "Pope Francis: A Man of His Word",
    tipo: "Documental",
    descripcion: "Documental de Wim Wenders que busca ser un viaje personal con el Papa.",
    miniatura: "/img/videos/man-of-his-word.jpg",
    url: "https://www.youtube.com/watch?v=MOmY8i-uBcY",
    plataforma: "YouTube (trailer)"
  },
  {
    id: 3,
    titulo: "Bendición Urbi et Orbi",
    tipo: "Mensaje",
    descripcion: "Bendición extraordinaria durante la pandemia (27 de marzo de 2020).",
    miniatura: "/img/videos/urbi-et-orbi-2020.jpg",
    url: "https://www.youtube.com/watch?v=5YceQ8YqYMc",
    plataforma: "YouTube"
  },
  {
    id: 4,
    titulo: "Firma del Documento sobre la Fraternidad Humana",
    tipo: "Evento histórico",
    descripcion: "Firma del histórico documento en Abu Dhabi (2019).",
    miniatura: "/img/videos/abu-dhabi-2019.jpg",
    url: "https://www.youtube.com/watch?v=ZGEqwwQr4Uw",
    plataforma: "YouTube"
  }
];

export default function VideosDocumentales() {
  const [expanded, setExpanded] = useState(false);
  
  const displayedVideos = expanded ? videos : videos.slice(0, 2);
  
  return (
    <div id="videos-documentales" className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Video className="w-6 h-6 text-yellow-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Videos y Documentales</h2>
      </div>
      
      <div className="space-y-6">
        {displayedVideos.map((video) => (
          <div key={video.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <div className="relative aspect-video rounded-md overflow-hidden mb-3">
              <img
                src={video.miniatura}
                alt={video.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                  <Video className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>
            
            <p className="text-sm text-yellow-600 font-medium">{video.tipo}</p>
            <h3 className="text-lg font-medium text-gray-800 mt-1">{video.titulo}</h3>
            <p className="text-sm text-gray-600 mt-1">{video.descripcion}</p>
            
            <a
              href={video.url}
              className="mt-3 inline-flex items-center px-4 py-2 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full hover:bg-yellow-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en {video.plataforma}
            </a>
          </div>
        ))}
      </div>
      
      {videos.length > 2 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-medium text-yellow-600 hover:text-yellow-800"
        >
          {expanded ? "Ver menos" : "Ver todos los videos"}
        </button>
      )}
    </div>
  );
}