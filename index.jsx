import React, { useState } from 'react';
import { X } from 'lucide-react';

const AlberoCittadinanza = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const fruitsData = {
    'frutto1-1': {
      title: 'Cosa è l\'Agenda 2030',
      content: 'L\'Agenda 2030 per lo Sviluppo Sostenibile è un programma d\'azione per le persone, il pianeta e la prosperità sottoscritto nel settembre 2015 dai governi dei 193 Paesi membri dell\'ONU.',
      emoji: '📋',
      color: '#4CAF50'
    },
    'frutto1-2': {
      title: 'I 17 Obiettivi',
      content: 'Include 17 Obiettivi per lo Sviluppo Sostenibile che spaziano dall\'eliminazione della povertà al consumo responsabile, dalla lotta al cambiamento climatico alla pace e giustizia.',
      emoji: '🎯',
      color: '#4CAF50'
    },
    'frutto1-3': {
      title: 'Il nostro ruolo',
      content: 'Come cittadini possiamo contribuire attraverso scelte quotidiane consapevoli, partecipazione attiva e sensibilizzazione nella nostra comunità.',
      emoji: '👥',
      color: '#4CAF50'
    },
    'frutto2-1': {
      title: 'Funzioni Esponenziali',
      content: 'Modellano fenomeni a crescita rapida: popolazione mondiale, diffusione di informazioni online, interesse composto. Formula: y = a × bˣ',
      emoji: '📈',
      color: '#2196F3'
    },
    'frutto2-2': {
      title: 'Funzioni Logaritmiche',
      content: 'Utili per fenomeni che crescono rapidamente poi rallentano: apprendimento, percezione umana, scala Richter. Formula: y = logₐ(x)',
      emoji: '📊',
      color: '#2196F3'
    },
    'frutto2-3': {
      title: 'Applicazioni alla Cittadinanza',
      content: 'Capire questi modelli aiuta a prendere decisioni informate su temi ambientali, economici e sociali.',
      emoji: '🔢',
      color: '#2196F3'
    },
    'frutto3-1': {
      title: 'Obiettivo 16: Pace e Giustizia',
      content: '"Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels."',
      emoji: '⚖️',
      color: '#FF9800'
    },
    'frutto3-2': {
      title: 'Active Citizenship',
      content: '"Active citizenship means people getting involved in their local communities and democracy at all levels, from towns to cities to nationwide activity."',
      emoji: '🌍',
      color: '#FF9800'
    },
    'frutto3-3': {
      title: 'Our Responsibility',
      content: '"As global citizens, we have the responsibility to understand world issues and to contribute to community building and peace."',
      emoji: '🤝',
      color: '#FF9800'
    },
    'frutto4-1': {
      title: 'Progetto "Il Banco Vince Sempre"',
      content: 'Iniziativa di prevenzione contro il gioco d\'azzardo patologico promossa da Caritas e Tavolo di Cittadinanza Attiva.',
      emoji: '🎲',
      color: '#9C27B0'
    },
    'frutto4-2': {
      title: 'Conversazione con Enzo Nucci',
      content: 'L\'inviato di guerra ci ha mostrato come i conflitti distruggono le comunità e l\'importanza della pace per lo sviluppo sostenibile.',
      emoji: '📰',
      color: '#9C27B0'
    },
    'frutto4-3': {
      title: 'La Nostra Riflessione',
      content: 'Queste esperienze ci hanno insegnato che la cittadinanza attiva significa anche prevenire problemi sociali e comprendere realtà complesse.',
      emoji: '💭',
      color: '#9C27B0'
    }
  };

  const Fruit = ({ id, x, y, data }) => {
    return (
      <div
        onClick={() => setSelectedFruit(id)}
        className="fruit-icon absolute flex items-center justify-center rounded-full cursor-pointer"
        style={{
          left: x,
          top: y,
          transform: 'translate(-50%, -50%)',
          width: '60px',
          height: '60px',
          backgroundColor: data.color,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        <span className="text-3xl select-none">{data.emoji}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-green-50 to-emerald-100 p-2 sm:p-4 md:p-8">
      <style>{`
        .fruit-icon {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
        }
        .fruit-icon:hover {
          transform: translate(-50%, -50%) scale(1.25) rotate(5deg);
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.3));
        }
        .fruit-icon:active {
          transform: translate(-50%, -50%) scale(1.1);
        }
        .tree-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
        .tree-image {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 10px 30px rgba(0,0,0,0.2));
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .pulse-hint {
          animation: pulse 2s ease-in-out infinite;
        }
        @media (max-width: 640px) {
          .fruit-icon {
            width: 50px !important;
            height: 50px !important;
            font-size: 24px !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 md:mb-8 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight">
            🌳 L'Albero della Cittadinanza Attiva
          </h1>
          <p className="text-base sm:text-lg md:text-xl italic text-gray-700 max-w-3xl mx-auto px-4">
            "La cittadinanza è l'occasione per fare la differenza nel luogo in cui appartieni."
            <br />
            <span className="text-sm sm:text-base text-gray-600">- Charles Handy</span>
          </p>
          <p className="mt-3 sm:mt-4 text-gray-700 font-semibold text-sm sm:text-base">
            Classe 4CIT - Trimestre 2025/2026
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50 rounded-3xl shadow-2xl p-3 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-green-100/30 to-transparent pointer-events-none"></div>
          
          <div className="tree-container relative">
            <img 
              src="https://i.ibb.co/pKCxGsv/tree-icon.png" 
              alt="Albero della Cittadinanza" 
              className="tree-image"
              onError={(e) => {
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="text-center p-8 text-gray-600">Caricamento albero...</div>';
                }
              }}
            />
            
            <Fruit id="frutto1-1" x="20%" y="18%" data={fruitsData['frutto1-1']} />
            <Fruit id="frutto1-2" x="26%" y="23%" data={fruitsData['frutto1-2']} />
            <Fruit id="frutto1-3" x="17%" y="28%" data={fruitsData['frutto1-3']} />
            
            <Fruit id="frutto2-1" x="76%" y="16%" data={fruitsData['frutto2-1']} />
            <Fruit id="frutto2-2" x="72%" y="22%" data={fruitsData['frutto2-2']} />
            <Fruit id="frutto2-3" x="80%" y="26%" data={fruitsData['frutto2-3']} />
            
            <Fruit id="frutto3-1" x="48%" y="12%" data={fruitsData['frutto3-1']} />
            <Fruit id="frutto3-2" x="43%" y="19%" data={fruitsData['frutto3-2']} />
            <Fruit id="frutto3-3" x="54%" y="18%" data={fruitsData['frutto3-3']} />
            
            <Fruit id="frutto4-1" x="52%" y="50%" data={fruitsData['frutto4-1']} />
            <Fruit id="frutto4-2" x="45%" y="58%" data={fruitsData['frutto4-2']} />
            <Fruit id="frutto4-3" x="52%" y="66%" data={fruitsData['frutto4-3']} />
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-center relative z-10">
            <div className="p-3 sm:p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-500 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="font-bold text-green-700 text-sm sm:text-base">Area Umanistica</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Agenda 2030</div>
            </div>
            <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-500 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="font-bold text-blue-700 text-sm sm:text-base">Matematica</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Funzioni e Modelli</div>
            </div>
            <div className="p-3 sm:p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border-2 border-orange-500 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="font-bold text-orange-700 text-sm sm:text-base">Inglese</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Active Citizenship</div>
            </div>
            <div className="p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-500 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="font-bold text-purple-700 text-sm sm:text-base">Esperienze</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Progetti e Realtà</div>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 text-center text-gray-600 text-xs sm:text-sm px-4 pulse-hint">
          💡 Tocca le icone sull'albero per scoprire i contenuti di cittadinanza attiva
        </div>
      </div>

      {selectedFruit && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50"
          onClick={() => setSelectedFruit(null)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-5 sm:p-6 md:p-8 relative animate-fade-in max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFruit(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-700 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2"
              aria-label="Chiudi"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-4 sm:mb-5">
              <span className="text-5xl sm:text-6xl md:text-7xl">{fruitsData[selectedFruit].emoji}</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 text-center px-8">
              {fruitsData[selectedFruit].title}
            </h2>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center px-2">
              {fruitsData[selectedFruit].content}
            </p>
            
            <div className="mt-5 sm:mt-6 flex justify-center">
              <button
                onClick={() => setSelectedFruit(null)}
                className="px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all text-white shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
                style={{ 
                  backgroundColor: fruitsData[selectedFruit].color
                }}
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlberoCittadinanza;