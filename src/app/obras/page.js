// src/app/obras/page.js
import WorksSection from '../../components/WorksSection';

export default function ObrasPage() {
  return (
    <div className="pt-16 pb-24">
      <div className="bg-slate-800 text-white py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Obras y Aportes</h1>
          <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
            El legado del Papa Francisco a través de sus acciones y documentos más importantes.
          </p>
        </div>
      </div>
      
      <WorksSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold mb-6">Viajes Apostólicos</h2>
        <p className="text-lg text-gray-700 mb-6">
          El Papa Francisco realizó más de 40 viajes apostólicos fuera de Italia, visitando todos los continentes habitados. Entre sus visitas más significativas se encuentran:
        </p>
        
        <ul className="list-disc pl-6 mb-10 space-y-2 text-lg text-gray-700">
          <li>Brasil (2013): Su primer viaje internacional para la Jornada Mundial de la Juventud.</li>
          <li>Tierra Santa (2014): Visita a Jordania, Palestina e Israel.</li>
          <li>Estados Unidos (2015): Visita histórica que incluyó un discurso ante el Congreso.</li>
          <li>Cuba (2015): Contribuyendo al acercamiento entre Cuba y Estados Unidos.</li>
          <li>México (2016): Con una significativa visita a la frontera con Estados Unidos.</li>
          <li>Emiratos Árabes Unidos (2019): Primera visita de un Papa a la Península Arábiga.</li>
          <li>Irak (2021): Visita histórica a pesar de la pandemia y los riesgos de seguridad.</li>
        </ul>
        
        <h2 className="text-3xl font-bold mb-6">Grandes Reformas</h2>
        <p className="text-lg text-gray-700 mb-6">
          El pontificado de Francisco se caracterizó por importantes reformas estructurales en la Iglesia:
        </p>
        
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li className="mb-4">Reforma de la Curia Romana: Culminando en la constitución apostólica <em>Praedicate Evangelium</em> (2022).</li>
          <li className="mb-4">Transparencia financiera: Reorganización del Banco Vaticano (IOR) y creación de la Secretaría de Economía.</li>
          <li className="mb-4">Sinodalidad: Promoción de un modelo de Iglesia más participativo y corresponsable.</li>
          <li className="mb-4">Actualización del Código de Derecho Canónico: Fortaleciendo las normas contra los abusos.</li>
          <li>Apertura de los archivos históricos del Vaticano: Facilitando el acceso a los investigadores.</li>
        </ul>
      </div>
    </div>
  );
}