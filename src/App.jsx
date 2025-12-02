import React, { useState } from 'react';
import { X, Shield, Globe, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const AlberoCittadinanza = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [interactiveValue, setInteractiveValue] = useState(1.5);
  const [bacteriaTime, setBacteriaTime] = useState(0);
  const [decayYears, setDecayYears] = useState(0);
  const [gdprQuizScore, setGdprQuizScore] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [schoolRules, setSchoolRules] = useState({
    rispetto: false,
    puntualita: false,
    collaborazione: false,
    dispositivi: false
  });

  const generateExponentialData = (base) => {
    const data = [];
    for (let x = 0; x <= 10; x++) {
      data.push({
        x: x,
        y: Math.pow(base, x)
      });
    }
    return data;
  };

  const generateBacteriaData = (time) => {
    const data = [];
    const K = 1000;
    const r = 0.5;  
    for (let t = 0; t <= 20; t++) {
      const N = K / (1 + Math.exp(-r * (t - 10)));
      data.push({
        ore: t,
        batteri: Math.round(N),
        highlight: t === Math.round(time)
      });
    }
    return data;
  };

  const generateDecayData = (years) => {
    const data = [];
    const halfLife = 5730;
    for (let t = 0; t <= 30000; t += 2000) {
      const amount = 100 * Math.pow(0.5, t / halfLife);
      data.push({
        anni: t,
        percentuale: amount.toFixed(2),
        highlight: Math.abs(t - years) < 2000
      });
    }
    return data;
  };

  const gdprQuestions = [
    {
      question: "Quale diritto ti garantisce il GDPR?",
      options: ["Diritto all'oblio (cancellazione dati)", "Diritto di copiare dati altrui", "Diritto di vendere dati"],
      correct: 0
    },
    {
      question: "Cosa significa 'consenso informato'?",
      options: ["Accettare senza leggere", "Sapere come verranno usati i tuoi dati prima di accettare", "Dare i dati solo agli amici"],
      correct: 1
    },
    {
      question: "Chi protegge i dati in Italia?",
      options: ["La Polizia", "Il Garante per la protezione dei dati personali", "Il Sindaco"],
      correct: 1
    }
  ];

  const digitalServices = [
    { id: 'spid', name: 'SPID', icon: '🆔', desc: 'Identità digitale unica' },
    { id: 'cie', name: 'CIE', icon: '💳', desc: 'Carta d\'Identità Elettronica' },
    { id: 'pagopa', name: 'PagoPA', icon: '💰', desc: 'Pagamenti verso la PA' },
    { id: 'io', name: 'App IO', icon: '📱', desc: 'Servizi pubblici in un\'app' },
    { id: 'anpr', name: 'ANPR', icon: '👥', desc: 'Anagrafe nazionale' },
    { id: 'pec', name: 'PEC', icon: '📧', desc: 'Email certificata' }
  ];

  const fruitsData = {
    'frutto1-1': {
      title: 'Agenda 2030: Un Patto Globale per il Futuro',
      content: 'Nel settembre 2015, 193 Paesi membri dell\'ONU hanno sottoscritto l\'Agenda 2030 per lo Sviluppo Sostenibile, un programma ambizioso che rappresenta un vero e proprio patto tra le nazioni per affrontare le sfide più urgenti del nostro tempo. Non è solo un documento politico: è una visione di futuro in cui dignità umana, prosperità economica e protezione del pianeta camminano insieme. L\'Agenda riconosce che povertà, disuguaglianza, crisi climatica e ingiustizia sono interconnesse, e che solo attraverso un approccio integrato possiamo costruire un mondo sostenibile. È il più grande impegno collettivo della storia moderna per garantire che nessuno sia lasciato indietro.',
      emoji: '🌐',
      color: '#4CAF50',
      type: 'text'
    },
    'frutto1-2': {
      title: 'I 17 Obiettivi: Una Mappa per Trasformare il Mondo',
      content: 'I 17 Obiettivi di Sviluppo Sostenibile (SDGs) sono una bussola universale che guida l\'umanità verso un futuro migliore. Dall\'eliminazione della povertà estrema (Goal 1) alla lotta contro il cambiamento climatico (Goal 13), dalla parità di genere (Goal 5) alla pace e giustizia (Goal 16), ogni obiettivo rappresenta una sfida cruciale per la sopravvivenza e il benessere del pianeta. Questi obiettivi non sono isolati: il raggiungimento di uno sostiene e amplifica gli altri. Per esempio, l\'educazione di qualità (Goal 4) è fondamentale per raggiungere tutti gli altri obiettivi. L\'Agenda 2030 ci ricorda che lo sviluppo sostenibile deve bilanciare tre dimensioni: economica, sociale e ambientale.',
      emoji: '🎯',
      color: '#4CAF50',
      type: 'text'
    },
    'frutto1-3': {
      title: 'Cittadinanza Attiva: Dal Globale al Locale',
      content: 'L\'Agenda 2030 non è solo responsabilità dei governi: ciascuno di noi ha un ruolo fondamentale. Come giovani cittadini, possiamo essere agenti di cambiamento attraverso scelte quotidiane consapevoli: ridurre gli sprechi alimentari (Goal 12), promuovere l\'uguaglianza a scuola e nella comunità (Goal 10), partecipare attivamente alla vita democratica (Goal 16). Ogni volta che scegliamo prodotti sostenibili, risparmiamo energia, rispettiamo la diversità o ci informiamo criticamente, contribuiamo a realizzare gli SDGs. La cittadinanza attiva significa trasformare la consapevolezza in azione, portare il cambiamento globale nella nostra realtà locale. Perché il futuro sostenibile non si costruisce solo nei palazzi del potere, ma nelle nostre case, nelle nostre scuole, nelle nostre comunità.',
      emoji: '💚',
      color: '#4CAF50',
      type: 'text'
    },
    'frutto2-1': {
      title: 'Crescita Esponenziale: Il Linguaggio della Natura',
      content: 'La funzione esponenziale y = aˣ modella fenomeni che crescono in modo rapido e accelerato. Sperimenta cambiando la base per vedere come varia la crescita!',
      emoji: '📈',
      color: '#2196F3',
      type: 'exponential'
    },
    'frutto2-2': {
      title: 'Batteri e Fermentazione: Matematica della Vita',
      content: 'Durante la fermentazione, i batteri crescono seguendo una curva logistica. Muovi il cursore per vedere l\'evoluzione della colonia nel tempo!',
      emoji: '🦠',
      color: '#2196F3',
      type: 'bacteria'
    },
    'frutto2-3': {
      title: 'Decadimento Esponenziale: Il Carbonio-14',
      content: 'Il Carbonio-14 decade con emivita (tempo di dimezzamento) di 5.730 anni. Esplora come gli archeologi datano i reperti antichi!',
      emoji: '📉',
      color: '#2196F3',

      type: 'decay'
    },
    'frutto3-1': {
      title: 'Goal 16: Building Peace and Justice',
      content: 'Goal 16 is one of the 17 Sustainable Development Goals created by the United Nations to achieve by 2030. As you wrote in class, "it is one of the most important goals because without peace, it is hard to achieve the others." This goal promotes peaceful societies, access to justice for all, and effective institutions. It addresses critical issues like reducing violence, ending exploitation and trafficking (especially against children), and ensuring that everyone can live safely in their communities.',
      emoji: '⚖️',
      color: '#FF9800'
    },
    'frutto3-2': {
      title: 'The Rule of Law: Justice for Everyone',
      content: 'A fundamental principle of Goal 16 is the rule of law, which means "everyone, including the government, must follow the same laws." This ensures equal access to justice regardless of wealth or social status. Strong institutions must be accountable and transparent to fight corruption effectively. When people trust their governments and feel safe in their neighborhoods, society becomes more stable and prosperous. Justice is not just about punishing wrongdoing - it is about creating systems where everyone\'s rights are protected.',
      emoji: '🤝',
      color: '#FF9800'
    },
    'frutto3-3': {
      title: 'Global Cooperation and Active Citizenship',
      content: 'To achieve Goal 16, "international cooperation is necessary" - countries must work together to combat crime, share knowledge, and build better institutions. But it is not just about governments. As young citizens, we also have a role to play. We can promote peace by respecting diversity, standing against discrimination, and participating in our communities. Freedom of information and expression are essential rights that allow citizens to hold institutions accountable. When we stay informed and engaged, we contribute to making "the world safer and fairer for everyone."',
      emoji: '🌍',
      color: '#FF9800'
    },
    'frutto4-1': {
      title: 'Ecologia e Sostenibilità Ambientale',
      content: 'Il nostro pianeta affronta sfide senza precedenti: cambiamento climatico, perdita di biodiversità, inquinamento. Come giovani cittadini, abbiamo visitato il centro di raccolta differenziata della nostra città e partecipato a progetti di riforestazione urbana. Abbiamo imparato che ogni nostra scelta quotidiana - dal consumo di plastica all\'uso dell\'energia - ha un impatto diretto sul futuro. La sostenibilità non è solo un concetto astratto, ma una responsabilità concreta che inizia dalle nostre azioni. Proteggere l\'ambiente significa proteggere il nostro futuro e quello delle generazioni che verranno.',
      emoji: '🌍',
      color: '#9C27B0',
      type: 'text'
    },
    'frutto4-2': {
      title: 'Dialogo con le Fragilità Sociali',
      content: 'Durante il nostro percorso di cittadinanza attiva, abbiamo incontrato realtà che spesso rimangono invisibili: il progetto "Il Banco Vince Sempre" contro il gioco d\'azzardo patologico, le testimonianze di chi vive la marginalità, le storie di chi cerca rifugio dalla guerra. L\'inviato Enzo Nucci ci ha aperto gli occhi sulla devastazione dei conflitti e sull\'importanza della pace. Queste esperienze ci hanno insegnato che la vera cittadinanza non si ferma alla teoria: significa guardare negli occhi la sofferenza, ascoltare senza giudicare, e impegnarsi concretamente per costruire una società più giusta e inclusiva.',
      emoji: '♠️',
      color: '#9C27B0',
      type: 'text'
    },
    'frutto4-3': {
      title: 'Il Nostro Impegno per il Futuro',
      content: 'Questo progetto ci ha trasformati. Non siamo più solo studenti che ascoltano lezioni, ma cittadini consapevoli che guardano il mondo con occhi diversi. Abbiamo capito che la cittadinanza attiva non è un dovere imposto, ma una scelta di responsabilità verso noi stessi e gli altri. Ogni giorno possiamo fare la differenza: con il volontariato, con scelte di consumo responsabili, con il rispetto per l\'ambiente, con la solidarietà verso chi è in difficoltà. Il cambiamento inizia da noi, dalle nostre piccole azioni quotidiane che, sommate insieme, possono davvero trasformare il mondo. Siamo pronti a essere il cambiamento che vogliamo vedere.',
      emoji: '✨',
      color: '#9C27B0',
      type: 'text'
    },
    'frutto5-1': {
      title: 'GDPR in Italia: Proteggere i Dati nell\'Era Digitale',
      content: 'Il Regolamento Generale sulla Protezione dei Dati (GDPR) è la legge europea che protegge la privacy dei cittadini nell\'era digitale. In Italia, il Garante per la protezione dei dati personali vigila sul rispetto di queste norme.',
      emoji: '🔒',
      color: '#00BCD4',
      type: 'gdpr'
    },
    'frutto5-2': {
      title: 'Cittadini Digitali e Pubblica Amministrazione',
      content: 'La digitalizzazione della Pubblica Amministrazione sta trasformando il rapporto tra cittadini e istituzioni. SPID, CIE, PagoPA, App IO: questi strumenti rendono i servizi pubblici più accessibili, veloci e trasparenti.',
      emoji: '🏛️',
      color: '#00BCD4',
      type: 'digital-services'
    },
    'frutto5-3': {
      title: 'Il Rispetto delle Regole a Scuola',
      content: 'La scuola è il primo luogo dove impariamo a essere cittadini responsabili. Le regole scolastiche non sono imposizioni arbitrarie, ma principi che ci preparano alla vita in società.',
      emoji: '📚',
      color: '#00BCD4',
      type: 'school-rules'
    }
  };

  const Fruit = ({ id, x, y, data }) => {
    return (
      <div
        onClick={() => setSelectedFruit(id)}
        className="fruit-icon absolute flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-110"
        style={{
          left: x,
          top: y,
          transform: 'translate(-50%, -50%)',
          width: '60px',
          height: '60px',
          backgroundColor: data.color,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 -3px 8px rgba(0,0,0,0.2), inset 0 3px 8px rgba(255,255,255,0.4)',
          border: '3px solid rgba(255,255,255,0.6)',
          borderRadius: '50%',
          position: 'absolute',
          zIndex: 10,
          backdropFilter: 'blur(2px)'
        }}
      >
        <span className="text-3xl select-none drop-shadow-lg filter brightness-110">{data.emoji}</span>
      </div>
    );
  };

  const renderInteractiveContent = () => {
    const fruit = fruitsData[selectedFruit];
    
    if (fruit.type === 'exponential') {
      const data = generateExponentialData(interactiveValue);
      return (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 mb-4">{fruit.content}</p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <label className="font-semibold text-gray-700">Base (a): {interactiveValue.toFixed(1)}</label>
              <input
                type="range"
                min="1.1"
                max="3"
                step="0.1"
                value={interactiveValue}
                onChange={(e) => setInteractiveValue(parseFloat(e.target.value))}
                className="w-64"
              />
            </div>
            
            <div className="bg-white p-3 rounded mb-3">
              <p className="text-center font-mono text-lg">
                y = {interactiveValue.toFixed(1)}<sup>x</sup>
              </p>
              <p className="text-center text-sm text-gray-600 mt-2">
                Per x = 5: y = {Math.pow(interactiveValue, 5).toFixed(2)}
              </p>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" label={{ value: 'x', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'y', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="y" stroke="#2196F3" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700">
              <strong>💡 Applicazione alla cittadinanza:</strong> La diffusione di informazioni sui social media segue questa curva. 
              Quando condividiamo notizie verificate sull'Agenda 2030, la consapevolezza cresce esponenzialmente!
            </p>
          </div>
        </div>
      );
    }
    
    if (fruit.type === 'bacteria') {
      const data = generateBacteriaData(bacteriaTime);
      const currentBacteria = data[Math.round(bacteriaTime)]?.batteri || 0;
      
      return (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 mb-4">{fruit.content}</p>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <label className="font-semibold text-gray-700">Tempo (ore): {bacteriaTime.toFixed(0)}</label>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={bacteriaTime}
                onChange={(e) => setBacteriaTime(parseFloat(e.target.value))}
                className="w-64"
              />
            </div>
            
            <div className="bg-white p-3 rounded mb-3">
              <p className="text-center font-mono text-lg">
                N(t) = K / (1 + e<sup>-r(t-10)</sup>)
              </p>
              <p className="text-center text-2xl font-bold text-purple-600 mt-2">
                {currentBacteria} batteri
              </p>
              <p className="text-center text-sm text-gray-600">
                {bacteriaTime < 8 ? '📈 Fase esponenziale' : 
                 bacteriaTime < 15 ? '🔄 Fase di rallentamento' : 
                 '📊 Fase stazionaria'}
              </p>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ore" label={{ value: 'Ore', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Batteri', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="batteri" stroke="#9C27B0" strokeWidth={3} 
                      dot={(props) => {
                        const { cx, cy, payload } = props;
                        return payload.highlight ? 
                          <circle cx={cx} cy={cy} r={6} fill="#FF9800" /> : 
                          <circle cx={cx} cy={cy} r={3} fill="#9C27B0" />;
                      }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700">
              <strong>💡 Analogia sociale:</strong> La diffusione di pratiche sostenibili segue la stessa curva! 
              Iniziano lentamente, poi accelerano quando diventano popolari, infine si stabilizzano nella società.
            </p>
          </div>
        </div>
      );
    }
    
    if (fruit.type === 'decay') {
      const data = generateDecayData(decayYears);
      const currentAmount = (100 * Math.pow(0.5, decayYears / 5730)).toFixed(2);
      
      return (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 mb-4">{fruit.content}</p>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <label className="font-semibold text-gray-700">Anni trascorsi: {decayYears}</label>
              <input
                type="range"
                min="0"
                max="30000"
                step="1000"
                value={decayYears}
                onChange={(e) => setDecayYears(parseFloat(e.target.value))}
                className="w-64"
              />
            </div>
            
            <div className="bg-white p-3 rounded mb-3">
              <p className="text-center font-mono text-lg">
                N(t) = N₀ · (½)<sup>t/5730</sup>
              </p>
              <p className="text-center text-2xl font-bold text-red-600 mt-2">
                {currentAmount}% rimasto
              </p>
              <p className="text-center text-sm text-gray-600">
                Emivita del C-14: 5.730 anni
              </p>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="anni" label={{ value: 'Anni', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: '%', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="percentuale" stroke="#f44336" strokeWidth={3} 
                      dot={(props) => {
                        const { cx, cy, payload } = props;
                        return payload.highlight ? 
                          <circle cx={cx} cy={cy} r={6} fill="#FF9800" /> : 
                          <circle cx={cx} cy={cy} r={3} fill="#f44336" />;
                      }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700">
              <strong>💡 Decadimento positivo:</strong> L'analfabetismo globale è passato dall'88% (1800) al 14% (oggi)! 
              Anche la povertà estrema segue una curva di decadimento - dimostra che il progresso verso l'Agenda 2030 è misurabile.
            </p>
          </div>
        </div>
      );
    }

    if (fruit.type === 'gdpr') {
      return (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 mb-4">{fruit.content}</p>
          
          <div className="bg-cyan-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-cyan-800 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Quiz: Conosci i tuoi diritti GDPR?
            </h3>
            
            {gdprQuizScore === null ? (
              <div>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <p className="font-semibold text-lg mb-3">
                    {currentQuestion + 1}. {gdprQuestions[currentQuestion].question}
                  </p>
                  <div className="space-y-2">
                    {gdprQuestions[currentQuestion].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (idx === gdprQuestions[currentQuestion].correct) {
                            if (currentQuestion < gdprQuestions.length - 1) {
                              setCurrentQuestion(currentQuestion + 1);
                            } else {
                              setGdprQuizScore(3);
                            }
                          } else {
                            alert('Riprova! 💭');
                          }
                        }}
                        className="w-full text-left p-3 bg-cyan-100 hover:bg-cyan-200 rounded-lg transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  {gdprQuestions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full ${
                        idx <= currentQuestion ? 'bg-cyan-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-2xl font-bold text-green-600 mb-2">
                  Complimenti! 🎉
                </p>
                <p className="text-gray-700 mb-4">
                  Hai risposto correttamente a tutte le domande!
                </p>
                <button
                  onClick={() => {
                    setGdprQuizScore(null);
                    setCurrentQuestion(0);
                  }}
                  className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600"
                >
                  Ripeti il quiz
                </button>
              </div>
            )}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">🔑 Diritti fondamentali del GDPR:</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>✓ <strong>Diritto all'oblio:</strong> cancellare i tuoi dati</li>
              <li>✓ <strong>Diritto di accesso:</strong> sapere quali dati hanno su di te</li>
              <li>✓ <strong>Diritto alla portabilità:</strong> trasferire i tuoi dati</li>
              <li>✓ <strong>Diritto di rettifica:</strong> correggere dati errati</li>
            </ul>
          </div>
        </div>
      );
    }

    if (fruit.type === 'digital-services') {
      const toggleService = (id) => {
        setSelectedServices(prev => 
          prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
      };

      return (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 mb-4">{fruit.content}</p>
          
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6" />
              Esplora i Servizi Digitali della PA
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {digitalServices.map(service => (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedServices.includes(service.id)
                      ? 'bg-indigo-500 text-white shadow-lg scale-105'
                      : 'bg-white hover:bg-indigo-100'
                  }`}
                >
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <div className="font-bold">{service.name}</div>
                  <div className="text-sm opacity-90">{service.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">📊 Servizi selezionati: {selectedServices.length}/6</h4>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={[{ name: 'Progresso', value: (selectedServices.length / 6) * 100 }]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
              {selectedServices.length === 6 && (
                <p className="text-center text-green-600 font-bold mt-2">
                  🎉 Hai scoperto tutti i servizi digitali!
                </p>
              )}
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 Perché sono importanti?</strong> Questi strumenti rendono lo Stato più efficiente, trasparente e accessibile. 
              Un cittadino digitale consapevole sa usarli per esercitare i propri diritti e doveri.
            </p>
          </div>
        </div>
      );
    }

    if (fruit.type === 'school-rules') {
      const toggleRule = (key) => {
        setSchoolRules(prev => ({ ...prev, [key]: !prev[key] }));
      };

      const allChecked = Object.values(schoolRules).every(v => v);

      return (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 mb-4">{fruit.content}</p>
          
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-amber-800 mb-4">
              📋 Checklist: Le Regole del Buon Cittadino a Scuola
            </h3>
            
            <div className="space-y-3">
              <div
                onClick={() => toggleRule('rispetto')}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  schoolRules.rispetto ? 'bg-green-100 border-2 border-green-500' : 'bg-white border-2 border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    schoolRules.rispetto ? 'bg-green-500 border-green-500' : 'border-gray-400'
                  }`}>
                    {schoolRules.rispetto && <CheckCircle className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <div className="font-bold">Rispetto per compagni e insegnanti</div>
                    <div className="text-sm text-gray-600">Ascoltare senza interrompere, usare un linguaggio rispettoso, non simulare azioni di violenza </div>
                  </div>
                </div>
              </div>

              <div
                onClick={() => toggleRule('puntualita')}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  schoolRules.puntualita ? 'bg-green-100 border-2 border-green-500' : 'bg-white border-2 border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    schoolRules.puntualita ? 'bg-green-500 border-green-500' : 'border-gray-400'
                  }`}>
                    {schoolRules.puntualita && <CheckCircle className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <div className="font-bold">Puntualità e responsabilità</div>
                    <div className="text-sm text-gray-600">Arrivare in orario, consegnare compiti nei tempi stabiliti</div>
                  </div>
                </div>
              </div>

              <div
                onClick={() => toggleRule('collaborazione')}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  schoolRules.collaborazione ? 'bg-green-100 border-2 border-green-500' : 'bg-white border-2 border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    schoolRules.collaborazione ? 'bg-green-500 border-green-500' : 'border-gray-400'
                  }`}>
                    {schoolRules.collaborazione && <CheckCircle className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <div className="font-bold">Collaborazione e inclusione</div>
                    <div className="text-sm text-gray-600">Aiutare i compagni, valorizzare le diversità</div>
                  </div>
                </div>
              </div>

              <div
                onClick={() => toggleRule('dispositivi')}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  schoolRules.dispositivi ? 'bg-green-100 border-2 border-green-500' : 'bg-white border-2 border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    schoolRules.dispositivi ? 'bg-green-500 border-green-500' : 'border-gray-400'
                  }`}>
                    {schoolRules.dispositivi && <CheckCircle className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <div className="font-bold">Uso responsabile dei dispositivi</div>
                    <div className="text-sm text-gray-600">Non usare il cellulare durante le lezioni, rispettare la privacy altrui</div>
                  </div>
                </div>
              </div>
            </div>

            {allChecked && (
              <div className="mt-4 p-4 bg-green-500 text-white rounded-lg text-center">
                <p className="font-bold text-lg">🌟 Ottimo lavoro!</p>
                <p className="text-sm">Hai compreso tutte le regole fondamentali della cittadinanza scolastica!</p>
              </div>
            )}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 Perché le regole?</strong> Le regole a scuola non limitano la libertà, ma creano uno spazio sicuro 
              dove tutti possono imparare e crescere. Sono la base per diventare cittadini responsabili nella società.
            </p>
          </div>
        </div>
      );
    }
    
    return <p className="text-lg text-gray-700 leading-relaxed">{fruit.content}</p>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white p-2 md:p-8">
      <style>{`
        #visible1 {
          display: none;
        }
        #visibleinter {
          display: block;
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
        .fruit-icon {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }
        .fruit-icon:hover {
          transform: translate(-50%, -50%) scale(1.3) rotate(8deg) translateY(-8px) !important;
          filter: drop-shadow(0 12px 24px rgba(0,0,0,0.4));
        }
        
        @media (max-width: 768px) {
          .fruit-icon {
            width: 33px !important;
            height: 33px !important;
            border-width: 2px !important;
          }
          .fruit-icon span {
            font-size: 1.5rem !important;
          }
          .fruit-icon:hover {
            transform: translate(-50%, -50%) scale(1.2) !important;
          }
            #visibleinter {
              display: none;
            }
            #visible1 {
              display: block;
            }
        }
        
        input[type="range"] {
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 5px;
          background: #d3d3d3;
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2196F3;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2196F3;
          cursor: pointer;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            🌳 L'Albero della Cittadinanza Attiva
          </h1>
          <p className="text-base md:text-xl italic text-gray-600 px-4">
            "L'educazione è l'arma più potente che puoi usare per cambiare il mondo."
            <br />
            <span className="text-sm md:text-base">- Nelson Mandela</span>
          </p>
          <p className="mt-4 text-gray-700 font-semibold text-sm md:text-base" id='visibleinter'>Classe 4CIT - Trimestre 2025/2026 by Ruscitto M. & Pernarella M.</p>
          <p className="mt-4 text-gray-700 font-semibold text-sm md:text-base" id='visible1'>Classe 4CIT - Trimestre 2025/2026 </p>
          <p className="mt-4 text-gray-700 font-semibold text-sm md:text-base" id= 'visible1'>by Ruscitto M. & Pernarella M. </p>
        </div>

        <div className="bg-gradient-to-b from-sky-50 to-green-50 rounded-2xl shadow-2xl p-2 md:p-8">
          <div className="tree-container relative">
            <img
              src="/albero-cartoon.jpg"
              alt="Albero della Cittadinanza"
              className="tree-image"
            />

            {/* RAMO 1: Area Umanistica - SINISTRA ALTO */}
            <Fruit id="frutto1-1" x="25%" y="30%" data={fruitsData['frutto1-1']} />
            <Fruit id="frutto1-2" x="18%" y="42%" data={fruitsData['frutto1-2']} />
            <Fruit id="frutto1-3" x="22%" y="55%" data={fruitsData['frutto1-3']} />

            {/* RAMO 2: Matematica - DESTRA ALTO */}
            <Fruit id="frutto2-1" x="75%" y="30%" data={fruitsData['frutto2-1']} />
            <Fruit id="frutto2-2" x="82%" y="42%" data={fruitsData['frutto2-2']} />
            <Fruit id="frutto2-3" x="78%" y="55%" data={fruitsData['frutto2-3']} />

            {/* RAMO 3: Inglese - CENTRO ALTO */}
            <Fruit id="frutto3-1" x="50%" y="19%" data={fruitsData['frutto3-1']} />
            <Fruit id="frutto3-2" x="42%" y="27%" data={fruitsData['frutto3-2']} />
            <Fruit id="frutto3-3" x="58%" y="27%" data={fruitsData['frutto3-3']} />

            {/* RAMO 4: Esperienze - CENTRO BASSO */}
            <Fruit id="frutto4-1" x="38%" y="53%" data={fruitsData['frutto4-1']} />
            <Fruit id="frutto4-2" x="50%" y="58%" data={fruitsData['frutto4-2']} />
            <Fruit id="frutto4-3" x="62%" y="53%" data={fruitsData['frutto4-3']} />

            {/* RAMO 5: Informatica - BASSO */}
            <Fruit id="frutto5-1" x="50%" y="44%" data={fruitsData['frutto5-1']} />
            <Fruit id="frutto5-2" x="40%" y="40%" data={fruitsData['frutto5-2']} />
            <Fruit id="frutto5-3" x="60%" y="40%" data={fruitsData['frutto5-3']} />
          </div>

          <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 text-center text-xs md:text-base">
            <div className="p-2 md:p-3 bg-green-50 rounded-lg border-2 border-green-500">
              <div className="font-bold text-green-700">Area Umanistica</div>
              <div className="text-xs text-gray-600">Agenda 2030</div>
            </div>
            <div className="p-2 md:p-3 bg-blue-50 rounded-lg border-2 border-blue-500">
              <div className="font-bold text-blue-700">Area Scientifica</div>
              <div className="text-xs text-gray-600">Funzioni</div>
            </div>
            <div className="p-2 md:p-3 bg-orange-50 rounded-lg border-2 border-orange-500">
              <div className="font-bold text-orange-700">Area dei Linguaggi</div>
              <div className="text-xs text-gray-600">Goal 16</div>
            </div>
            <div className="p-2 md:p-3 bg-purple-50 rounded-lg border-2 border-purple-500">
              <div className="font-bold text-purple-700">Esperienze di realtà</div>
              <div className="text-xs text-gray-600">Progetti</div>
            </div>
            <div className="p-2 md:p-3 bg-cyan-50 rounded-lg border-2 border-cyan-500 col-span-2 md:col-span-1">
              <div className="font-bold text-cyan-700">Area Informatica</div>
              <div className="text-xs text-gray-600">GDPR, Cittadini e pubblica amministrazione, rispetto delle regole</div>
            </div>
          </div>
        </div>

        {selectedFruit && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 md:p-6 flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 md:gap-3">
                    <span className="text-3xl md:text-4xl">{fruitsData[selectedFruit].emoji}</span>
                    <span className="text-base md:text-2xl leading-tight">{fruitsData[selectedFruit].title}</span>
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedFruit(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors ml-2"
                >
                  <X size={24} className="md:w-7 md:h-7" />
                </button>
              </div>
              
              <div className="p-4 md:p-6">
                {renderInteractiveContent()}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 md:mt-8 text-center text-gray-600">
          <p className="text-xs md:text-sm px-4">
            👆 Clicca sui frutti dell'albero per esplorare i contenuti del progetto
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlberoCittadinanza;