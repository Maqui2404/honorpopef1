// src/app/frases/page.js
import QuotesSection from '../../components/QuotesSection';

export default function FrasesPage() {
  const categorizedQuotes = [
    {
      category: "Sobre la Misericordia",
      quotes: [
        "Dios no se cansa de perdonarnos, nosotros sí nos cansamos de pedir perdón.",
        "La misericordia de Dios es infinita, pero hay que ir a buscarla.",
        "El que no se siente pecador no se acerca al Dios que perdona.",
        "Si el Señor no se cansara de perdonarnos, no existiríamos."
      ]
    },
    {
      category: "Sobre la Pobreza y la Justicia Social",
      quotes: [
        "La pobreza no es una fatalidad: tiene causas que deben ser reconocidas y combatidas.",
        "La economía no debe ser un mecanismo de acumulación, sino la adecuada administración de la casa común.",
        "Cuando el dinero se convierte en un ídolo, dirige las opciones de los seres humanos.",
        "Mientras no se resuelvan los problemas de los pobres, renunciando a la autonomía absoluta de los mercados y de la especulación financiera, no se resolverán los problemas del mundo."
      ]
    },
    {
      category: "Sobre la Fe y la Esperanza",
      quotes: [
        "No dejemos que nos roben la esperanza.",
        "La fe pasa por la cruz. Es necesario confiar en la acción de Dios, en su bondad que a pesar de nuestra maldad siempre está presente.",
        "Una fe que no nos pone en crisis es una fe en crisis.",
        "La esperanza es la más humilde de las virtudes, porque permanece escondida en los pliegues de la vida, pero es similar a la levadura que hace fermentar toda la masa."
      ]
    }
  ];

  return (
    <div className="pt-16 pb-24">
      <div className="bg-slate-800 text-white py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Frases Célebres</h1>
          <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
            Palabras de sabiduría que reflejan el pensamiento del Papa Francisco..
          </p>
        </div>
      </div>
      
      <QuotesSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Frases por Categorías</h2>
        
        {categorizedQuotes.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">{section.category}</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {section.quotes.map((quote, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-lg text-gray-800 italic">&quot;{quote}&quot;</p>
                  <p className="mt-4 text-gray-600">— Papa Francisco</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}