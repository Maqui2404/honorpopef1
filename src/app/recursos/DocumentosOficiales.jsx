// src/components/recursos/DocumentosOficiales.jsx
"use client";
import { useState } from "react";
import { FileText } from "lucide-react";

const documentos = [
  {
    id: 1,
    tipo: "Encíclica",
    titulo: "Laudato Si'",
    fecha: "2015",
    descripcion: "Sobre el cuidado de la casa común.",
    urlPdf: "/docs/laudato-si.pdf",
    urlOnline: "https://www.vatican.va/content/francesco/es/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html"
  },
  {
    id: 2,
    tipo: "Encíclica",
    titulo: "Fratelli Tutti",
    fecha: "2020",
    descripcion: "Sobre la fraternidad y la amistad social.",
    urlPdf: "/docs/fratelli-tutti.pdf",
    urlOnline: "https://www.vatican.va/content/francesco/es/encyclicals/documents/papa-francesco_20201003_enciclica-fratelli-tutti.html"
  },
  {
    id: 3,
    tipo: "Exhortación Apostólica",
    titulo: "Evangelii Gaudium",
    fecha: "2013",
    descripcion: "Sobre el anuncio del Evangelio en el mundo actual.",
    urlPdf: "/docs/evangelii-gaudium.pdf",
    urlOnline: "https://www.vatican.va/content/francesco/es/apost_exhortations/documents/papa-francesco_esortazione-ap_20131124_evangelii-gaudium.html"
  },
  {
    id: 4,
    tipo: "Exhortación Apostólica",
    titulo: "Amoris Laetitia",
    fecha: "2016",
    descripcion: "Sobre el amor en la familia.",
    urlPdf: "/docs/amoris-laetitia.pdf",
    urlOnline: "https://www.vatican.va/content/francesco/es/apost_exhortations/documents/papa-francesco_esortazione-ap_20160319_amoris-laetitia.html"
  },
  {
    id: 5,
    tipo: "Carta Apostólica",
    titulo: "Misericordiae Vultus",
    fecha: "2015",
    descripcion: "Bula de convocación del Jubileo Extraordinario de la Misericordia.",
    urlPdf: "/docs/misericordiae-vultus.pdf",
    urlOnline: "https://www.vatican.va/content/francesco/es/bulls/documents/papa-francesco_bolla_20150411_misericordiae-vultus.html"
  }
];

export default function DocumentosOficiales() {
  const [expanded, setExpanded] = useState(false);
  
  const displayedDocumentos = expanded ? documentos : documentos.slice(0, 3);
  
  return (
    <div id="documentos-oficiales" className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <FileText className="w-6 h-6 text-yellow-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Documentos Oficiales</h2>
      </div>
      
      <div className="space-y-4">
        {displayedDocumentos.map((doc) => (
          <div key={doc.id} className="border-b border-gray-100 pb-4">
            <p className="text-sm text-yellow-600 font-medium">{doc.tipo} • {doc.fecha}</p>
            <h3 className="text-lg font-medium text-gray-800 mt-1">{doc.titulo}</h3>
            <p className="text-sm text-gray-600 mt-1">{doc.descripcion}</p>
            
            <div className="mt-3 flex space-x-3">
              <a
                href={doc.urlPdf}
                className="inline-flex items-center text-xs font-medium text-yellow-700 hover:text-yellow-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-4 h-4 mr-1" />
                Descargar PDF
              </a>
              
              <a
                href={doc.urlOnline}
                className="inline-flex items-center text-xs font-medium text-gray-600 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer online
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {documentos.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-medium text-yellow-600 hover:text-yellow-800"
        >
          {expanded ? "Ver menos" : "Ver todos los documentos"}
        </button>
      )}
    </div>
  );
}