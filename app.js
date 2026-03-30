/* ============================================================
   AquaForce Training - app.js v1.0
   Fuerza + control + agua
   Modular vanilla JS PWA
   ============================================================ */

'use strict';

// ═══════════════════════════════════════════════════════════
// 1. DATA: RUTINAS SEMANALES
// ═══════════════════════════════════════════════════════════

const WEEKLY_ROUTINES = {
  0: { // Domingo
    name: 'Aguas Abiertas',
    focus: 'Adaptación + técnica en agua',
    tags: ['natacion', 'recovery'],
    duration: '45-90 min',
    goal: 'Adaptar al medio, mejorar técnica de patada y orientación en aguas abiertas',
    coach: 'Hoy es tu día en el agua. Enfócate en la técnica, no en la velocidad. El agua te enseña más que cualquier rutina en tierra.',
    load: 'moderada',
    tip: 'Revisa el equipo: gorra, gafas, boya. Hidrátate bien antes.',
    isSunday: true,
    exercises: [
      { id: 'warmup-swim', name: 'Entrada al agua / Calentamiento', sets: 1, reps: null, duration: '5 min', rest: 60, note: 'Entrar despacio, aclimatarse a la temperatura.' },
      { id: 'kick-drill', name: 'Drill de patada', sets: 3, reps: null, duration: '50m', rest: 90, note: 'Solo piernas, tabla si tienes. Foco en la cadera, no solo en los pies.' },
      { id: 'orientation', name: 'Orientación en agua abierta', sets: 2, reps: null, duration: '100m', rest: 120, note: 'Levanta la cabeza cada 6-8 brazadas. Elige un punto de referencia lejano.' },
      { id: 'open-swim', name: 'Nado continuo libre', sets: 1, reps: null, duration: '20-40 min', rest: 0, note: 'Ritmo cómodo. Escucha tu cuerpo. Disfruta el entorno.' },
      { id: 'cooldown-swim', name: 'Vuelta a la calma', sets: 1, reps: null, duration: '5 min', rest: 0, note: 'Nado suave, respiración lenta. Estira en el borde o en tierra.' }
    ]
  },
  1: { // Lunes
    name: 'Pierna + Core',
    focus: 'Fuerza de piernas para la patada + core profundo',
    tags: ['pierna', 'core', 'natacion'],
    duration: '25 min',
    goal: 'Fortalecer piernas para la patada en natación y activar core profundo',
    coach: 'Hoy toca pierna fuerte. Cada sentadilla, cada zancada te acerca a una patada más potente en el agua.',
    load: 'moderada',
    tip: 'Duerme al menos 7h. Tu musculatura se recupera de noche.',
    exercises: [
      { id: 'gato-vaca', name: 'Gato-Vaca', sets: 2, reps: 10, duration: null, rest: 30, note: 'Movilidad de columna. Inhala al bajar, exhala al subir.' },
      { id: 'kegel', name: 'Kegel', sets: 1, reps: 15, duration: null, rest: 20, note: 'Activa el suelo pélvico. Imprescindible para el core profundo.' },
      { id: 'flow-lunes', name: 'Flow: side kick + crawl + hip twist + push-up', sets: 2, reps: 5, duration: null, rest: 45, note: 'Movimiento fluido. No pares entre los 4 elementos.' },
      { id: 'zancada-trasera', name: 'Zancada trasera con barra', sets: 3, reps: 10, duration: null, rest: 60, note: 'Rodilla trasera toca el suelo suavemente. Torso erecto.' },
      { id: 'sentadilla', name: 'Sentadilla', sets: 3, reps: 12, duration: null, rest: 60, note: 'Pies a ancho de hombros. Rodillas siguen la línea de los pies.' },
      { id: 'flutter-kicks', name: 'Flutter kicks', sets: 3, reps: null, duration: '30 seg', rest: 45, note: 'Como en la piscina pero en el suelo. Cadera plana, pies juntos.' },
      { id: 'barra-pull', name: 'Barra: dominadas o colgarse', sets: 2, reps: 5, duration: null, rest: 60, note: 'Si no llegas, solo cuélgate 20 seg para descomprimir la columna.' }
    ]
  },
  2: { // Martes
    name: 'Funcional + Torso',
    focus: 'Estabilidad de hombros + control motor',
    tags: ['funcional', 'estabilidad', 'barra'],
    duration: '22 min',
    goal: 'Mejorar estabilidad de hombros y transferir control al agua',
    coach: 'Hoy es funcional. No es mucho peso, es mucho control. La calidad de movimiento define tu progreso real.',
    load: 'suave',
    tip: 'Hidratarte hoy facilita el rendimiento de mañana.',
    exercises: [
      { id: 'gato-vaca', name: 'Gato-Vaca', sets: 2, reps: 8, duration: null, rest: 30, note: 'Movilización matutina de columna.' },
      { id: 'kegel', name: 'Kegel', sets: 1, reps: 10, duration: null, rest: 20, note: 'Activa el suelo pélvico antes de empezar.' },
      { id: 'flow-martes', name: 'Flow: side kick + crawl + hip twist + push-up', sets: 2, reps: 5, duration: null, rest: 45, note: 'Ritmo fluido. Conecta el movimiento con la respiración.' },
      { id: 'halo', name: 'Lateral swing to halo con mancuerna', sets: 3, reps: 10, duration: null, rest: 45, note: 'Movimiento lento y controlado. Activa serrato y deltoides.' },
      { id: 'plank-shoulder', name: 'Plank shoulder taps', sets: 3, reps: 12, duration: null, rest: 45, note: 'Cadera firme. No rotes el torso al levantar la mano.' },
      { id: 'serrato-barra', name: 'Serrato en barra', sets: 3, reps: 8, duration: null, rest: 60, note: 'Protracción de escápulas al final del movimiento. Clave para la brazada.' },
      { id: 'push-up-barra', name: 'Push-up en barra', sets: 2, reps: 8, duration: null, rest: 60, note: 'Bajada lenta, 3 segundos. Codos a 45°.' }
    ]
  },
  3: { // Miércoles
    name: 'Recuperación Activa',
    focus: 'Movilidad + core suave',
    tags: ['recovery', 'core', 'estabilidad'],
    duration: '18 min',
    goal: 'Recuperar sin perder el hábito. Movilidad + core ligero.',
    coach: 'Hoy es recovery. No es día off, es día de escuchar al cuerpo. Esta sesión es lo que separa a los atletas de los aficionados.',
    load: 'suave',
    tip: 'Come bien hoy: proteína y verduras. Prepara el cuerpo para el jueves.',
    exercises: [
      { id: 'gato-vaca', name: 'Gato-Vaca', sets: 3, reps: 10, duration: null, rest: 20, note: 'Más series hoy, foco en movilidad y respiración.' },
      { id: 'kegel', name: 'Kegel', sets: 2, reps: 15, duration: null, rest: 20, note: 'Control consciente del suelo pélvico.' },
      { id: 'flow-suave', name: 'Flow suave: movilidad completa', sets: 2, reps: 4, duration: null, rest: 30, note: 'Sin prisa. Cada transición es parte del entrenamiento.' },
      { id: 'plank-light', name: 'Plancha ligera', sets: 2, reps: null, duration: '20 seg', rest: 40, note: 'No forzar. Solo activar.' },
      { id: 'serrato-suave', name: 'Serrato suave en barra', sets: 2, reps: 6, duration: null, rest: 45, note: 'Sin carga, solo movimiento de escápulas.' },
      { id: 'flutter-suave', name: 'Flutter kicks suave', sets: 2, reps: null, duration: '20 seg', rest: 40, note: 'Velocidad baja. Solo activar caderas.' }
    ]
  },
  4: { // Jueves
    name: 'Pierna Fuerte + Patada',
    focus: 'Máxima fuerza de piernas para la propulsión',
    tags: ['pierna', 'core', 'natacion', 'barra'],
    duration: '28 min',
    goal: 'Sesión de pierna más intensa de la semana. Transferencia directa a la patada.',
    coach: 'Hoy toca pierna fuerte. El jueves es el día donde construyes la base de tu patada. No te lo saltes.',
    load: 'alta',
    tip: 'Aliméntate bien antes. Un plátano o avena 30 min antes te dará energía sostenida.',
    exercises: [
      { id: 'gato-vaca', name: 'Gato-Vaca', sets: 2, reps: 10, duration: null, rest: 30, note: 'Activa la columna antes del trabajo fuerte.' },
      { id: 'kegel', name: 'Kegel', sets: 1, reps: 12, duration: null, rest: 20, note: 'Core profundo antes de las cargas.' },
      { id: 'flow-jueves', name: 'Flow: side kick + crawl + hip twist + push-up', sets: 3, reps: 5, duration: null, rest: 45, note: 'Hoy 3 series del flow. Prepara todo el cuerpo.' },
      { id: 'zancada-trasera', name: 'Zancada trasera con barra (carga)', sets: 4, reps: 10, duration: null, rest: 75, note: 'Más sets que el lunes. Añade carga si puedes.' },
      { id: 'sentadilla', name: 'Sentadilla profunda', sets: 4, reps: 12, duration: null, rest: 75, note: 'Baja al máximo rango. La profundidad activa glúteos y cadena posterior.' },
      { id: 'step-up', name: 'Step-up (banco o silla)', sets: 3, reps: 10, duration: null, rest: 60, note: 'Alternando piernas. Rodilla sube a 90°. El step-up imita la patada.' },
      { id: 'flutter-kicks', name: 'Flutter kicks', sets: 4, reps: null, duration: '35 seg', rest: 45, note: 'El núcleo del día. Simula la patada de crol.' },
      { id: 'barra-pull', name: 'Barra: dominadas / colgarse / pull-up asistido', sets: 3, reps: 6, duration: null, rest: 60, note: 'Termina con tracción. La cadena posterior completa el ciclo.' }
    ]
  },
  5: { // Viernes
    name: 'Funcional + Core + Barra',
    focus: 'Control total: torso, core y barra',
    tags: ['funcional', 'core', 'estabilidad', 'barra'],
    duration: '30 min',
    goal: 'Sesión completa de control: hombros, core, barra y coordinación',
    coach: 'El viernes es tu sesión más completa. Halo, plancha, barra, flutter. Todo conectado. Cierra la semana fuerte.',
    load: 'moderada',
    tip: 'Mañana es recovery. Puedes dar el máximo hoy.',
    exercises: [
      { id: 'gato-vaca', name: 'Gato-Vaca', sets: 2, reps: 10, duration: null, rest: 30, note: 'Movilización de columna. Siempre el primer paso.' },
      { id: 'kegel', name: 'Kegel', sets: 1, reps: 15, duration: null, rest: 20, note: 'Core profundo activo.' },
      { id: 'flow-viernes', name: 'Flow completo: side kick + crawl + hip twist + push-up', sets: 3, reps: 5, duration: null, rest: 45, note: 'El flow más completo de la semana.' },
      { id: 'halo', name: 'Lateral swing to halo con mancuerna', sets: 3, reps: 12, duration: null, rest: 45, note: 'Hoy más reps. Foco en hombros y serrato.' },
      { id: 'plank-shoulder', name: 'Plank shoulder taps', sets: 3, reps: 16, duration: null, rest: 45, note: 'Estabilidad lumbar máxima.' },
      { id: 'push-up-barra', name: 'Push-up en barra', sets: 3, reps: 10, duration: null, rest: 60, note: 'Bajada controlada. Foco en serrato anterior.' },
      { id: 'elevacion-piernas', name: 'Elevaciones de piernas en barra', sets: 3, reps: 10, duration: null, rest: 60, note: 'Core + cadera. Imita el movimiento de patada en posición vertical.' },
      { id: 'serrato-barra', name: 'Serrato en barra', sets: 3, reps: 10, duration: null, rest: 60, note: 'Escápulas activas. La clave de la brazada larga.' },
      { id: 'flutter-kicks', name: 'Flutter kicks', sets: 3, reps: null, duration: '30 seg', rest: 45, note: 'Para cerrar la semana con el patrón de patada.' },
      { id: 'biceps-opt', name: 'Bíceps o trapecio (opcional)', sets: 2, reps: 12, duration: null, rest: 60, note: 'Solo si la semana fue bien. No es obligatorio.' }
    ]
  },
  6: { // Sábado
    name: 'Activación Suave / Recovery',
    focus: 'Movilidad + activación ligera',
    tags: ['recovery', 'estabilidad'],
    duration: '15 min',
    goal: 'Mantener el hábito sin acumular fatiga. Preparar el cuerpo para el domingo en el agua.',
    coach: 'Sábado es para moverte sin esforzarte. Esta sesión te mantiene activo y te prepara para mañana en el agua.',
    load: 'suave',
    tip: 'Duerme bien esta noche. Mañana es aguas abiertas.',
    exercises: [
      { id: 'gato-vaca', name: 'Gato-Vaca', sets: 3, reps: 10, duration: null, rest: 20, note: 'El más importante del día. Abre la columna.' },
      { id: 'kegel', name: 'Kegel', sets: 2, reps: 12, duration: null, rest: 20, note: 'Core profundo, incluso en días suaves.' },
      { id: 'flow-sabado', name: 'Flow suave', sets: 2, reps: 4, duration: null, rest: 30, note: 'Sin explosividad. Movimiento fluido y consciente.' },
      { id: 'plank-light', name: 'Plancha ligera', sets: 2, reps: null, duration: '20 seg', rest: 30, note: 'Activa sin fatigar.' },
      { id: 'serrato-suave', name: 'Serrato suave', sets: 2, reps: 6, duration: null, rest: 30, note: 'Recuerda la protracción de escápulas para mañana.' },
      { id: 'flutter-suave', name: 'Flutter kicks suave', sets: 2, reps: null, duration: '15 seg', rest: 30, note: 'Solo para recordar el patrón antes de nadar mañana.' }
    ]
  }
};

// ═══════════════════════════════════════════════════════════
// 2. DATA: BIBLIOTECA DE EJERCICIOS
// ═══════════════════════════════════════════════════════════

const EXERCISE_LIBRARY = [
  {
    id: 'gato-vaca',
    name: 'Gato-Vaca',
    categories: ['recovery', 'core'],
    objetivo: 'Movilizar la columna vertebral, activar el core profundo y la respiración diafragmática.',
    musculos: 'Erectores espinales, multífidos, transverso abdominal',
    tecnica: 'En cuadrupedia, alterna entre flexión completa de columna (gato: espalda redonda, cabeza abajo) y extensión (vaca: lordosis, mirada al frente). Coordina con la respiración.',
    errores: 'Moverse solo en la zona lumbar, olvidar la cervical, no sincronizar con la respiración.',
    dificultad: 1,
    variantes: {
      facil: 'Solo el movimiento de cadera, sin mover la zona cervical.',
      media: 'Versión completa con pausa de 2 seg en cada extremo.',
      avanzado: 'Con carga pequeña en la espalda para mayor conciencia corporal.'
    },
    natacion: 'Activa la ondulación de cadera que se transfiere al nado de mariposa y a la posición de crol.'
  },
  {
    id: 'kegel',
    name: 'Kegel',
    categories: ['core', 'estabilidad'],
    objetivo: 'Activar el suelo pélvico como base del core profundo para estabilizar la columna.',
    musculos: 'Suelo pélvico, transverso abdominal, multífidos',
    tecnica: 'Contrae el suelo pélvico (como si cortaras el flujo de orina), mantén 5-10 seg, libera. Respira con normalidad durante la contracción.',
    errores: 'Aguantar la respiración, contraer glúteos o muslos en lugar del suelo pélvico, hacer el movimiento rápido sin control.',
    dificultad: 1,
    variantes: {
      facil: 'Contracciones rápidas sin mantener (5 reps).',
      media: 'Contracción sostenida 8-10 seg (10-15 reps).',
      avanzado: 'Combinado con respiración de Pilates y plank.'
    },
    natacion: 'La estabilidad central reduce la resistencia hidrodinámica y mejora la posición horizontal en el agua.'
  },
  {
    id: 'flow-lunes',
    name: 'Flow: Side kick + Crawl + Hip twist + Push-up',
    categories: ['funcional', 'core', 'estabilidad'],
    objetivo: 'Activar el sistema nervioso, mejorar la coordinación motriz y calentar todo el cuerpo en un solo circuito de movimiento.',
    musculos: 'Complejo glúteo, oblicuos, serrato, pectoral, hombros',
    tecnica: 'Ejecuta los 4 movimientos en secuencia sin parar: patada lateral → posición de bear crawl → rotación de cadera → push-up. Un ciclo = 1 rep.',
    errores: 'Apresurarse entre los movimientos, perder la alineación en el crawl, hacer el push-up con codos abiertos.',
    dificultad: 2,
    variantes: {
      facil: 'Solo los primeros 2 elementos: side kick + crawl.',
      media: 'Secuencia completa a ritmo moderado.',
      avanzado: 'Añadir pausa de 1 seg en posición de crawl y en la bajada del push-up.'
    },
    natacion: 'La rotación de cadera y el trabajo de estabilidad lateral se transfieren directamente a la rotación de cuerpo en crol.'
  },
  {
    id: 'zancada-trasera',
    name: 'Zancada trasera con barra',
    categories: ['pierna', 'core'],
    objetivo: 'Fortalecer cuádriceps, glúteos e isquiotibiales con énfasis en la estabilidad unilateral.',
    musculos: 'Cuádriceps, glúteo mayor, isquiotibiales, core estabilizador',
    tecnica: 'De pie con barra en trapecios, da un paso largo hacia atrás. La rodilla trasera baja hasta casi tocar el suelo. El torso permanece erecto. Vuelve al centro con el pie delantero.',
    errores: 'Rodilla delantera pasa la punta del pie, tronco inclinado hacia adelante, paso muy corto.',
    dificultad: 2,
    variantes: {
      facil: 'Sin barra, manos en la cadera.',
      media: 'Con barra sin carga o mancuernas ligeras.',
      avanzado: 'Con peso en barra o haciendo la versión con step para mayor rango.'
    },
    natacion: 'Fortalece la cadena posterior de la pierna, directamente implicada en la patada de crol.'
  },
  {
    id: 'sentadilla',
    name: 'Sentadilla',
    categories: ['pierna'],
    objetivo: 'Desarrollar fuerza global de las piernas con énfasis en cuádriceps y glúteos.',
    musculos: 'Cuádriceps, glúteo mayor, isquiotibiales, core, aductores',
    tecnica: 'Pies a ancho de hombros o algo más. Baja como si fueras a sentarte: caderas atrás, rodillas siguen la dirección de los pies. Profundidad mínima: muslos paralelos al suelo.',
    errores: 'Rodillas hacia adentro (valgo), talones se levantan, redondear la espalda, poca profundidad.',
    dificultad: 2,
    variantes: {
      facil: 'Sentadilla asistida con silla o pared.',
      media: 'Sentadilla libre con barra o mancuernas.',
      avanzado: 'Sentadilla búlgara o pistol squat progresivo.'
    },
    natacion: 'Activa la cadena cinética completa de la pierna. Mejora la potencia de la patada y la posición de cadera en el agua.'
  },
  {
    id: 'step-up',
    name: 'Step-up (banco o silla)',
    categories: ['pierna', 'estabilidad'],
    objetivo: 'Fuerza unilateral de pierna, equilibrio y control de la cadera.',
    musculos: 'Cuádriceps, glúteos, isquiotibiales, tibial anterior',
    tecnica: 'Coloca un pie sobre el banco o silla. Empuja desde ese pie para subir, sin impulso del pie de abajo. El torso permanece erecto.',
    errores: 'Usar el pie de abajo como rebote, rodilla del pie de arriba cae hacia adentro, inclinar el torso.',
    dificultad: 2,
    variantes: {
      facil: 'Altura baja (20-25 cm).',
      media: 'Altura estándar (40 cm) con control de bajada.',
      avanzado: 'Con mancuernas + pausa en la cima 2 seg.'
    },
    natacion: 'Imita el rango de movimiento y la fuerza excéntrica que usa la pierna en la patada de delfín.'
  },
  {
    id: 'flutter-kicks',
    name: 'Flutter kicks',
    categories: ['pierna', 'core', 'natacion'],
    objetivo: 'Replicar en tierra el patrón de la patada de crol. Fortalecer cadera y core mientras se activa el patrón neuromuscular de la patada.',
    musculos: 'Flexores de cadera, recto femoral, core, cuádriceps',
    tecnica: 'Tumbado boca arriba, espalda baja pegada al suelo (activa core). Piernas extendidas a 20-30 cm del suelo. Movimiento alternado, tobillo activo (punta levemente hacia adentro como en crol).',
    errores: 'Lumbar despegada del suelo, rodillas flexionadas, pies demasiado altos, rango de movimiento demasiado amplio.',
    dificultad: 2,
    variantes: {
      facil: '15 seg, piernas un poco más altas.',
      media: '30 seg, piernas bajas con espalda plana.',
      avanzado: '45 seg + brazos estirados sobre la cabeza como si nadaras.'
    },
    natacion: 'Transferencia directa. Es literalmente el entrenamiento en tierra de la patada de crol.'
  },
  {
    id: 'halo',
    name: 'Lateral swing to halo con mancuerna',
    categories: ['estabilidad', 'funcional'],
    objetivo: 'Activar serrato anterior, deltoides, manguito rotador y mejorar la movilidad de hombro bajo carga ligera.',
    musculos: 'Serrato anterior, deltoides (las 3 cabezas), trapecio, core oblicuo',
    tecnica: 'Sujeta la mancuerna con ambas manos. Swing lateral (lleva la mancuerna a un lado con rotación de cadera) y después haz el halo: describe un círculo completo alrededor de la cabeza, manteniendo los codos semiflexionados.',
    errores: 'Codos demasiado extendidos, perder el control del peso por encima de la cabeza, encorvar los hombros.',
    dificultad: 2,
    variantes: {
      facil: 'Solo el halo sin el swing lateral.',
      media: 'Swing + halo completo.',
      avanzado: 'De pie sobre una pierna para añadir demanda de equilibrio.'
    },
    natacion: 'El serrato anterior es el músculo clave de la brazada larga en crol. Su activación mejora la tracción en el agua.'
  },
  {
    id: 'plank-shoulder',
    name: 'Plank shoulder taps',
    categories: ['core', 'estabilidad'],
    objetivo: 'Estabilidad anti-rotacional del core, fuerza de hombros y control de la posición plank.',
    musculos: 'Transverso abdominal, oblicuos, deltoides, tríceps, serrato',
    tecnica: 'Posición de plank en manos. Sin rotar la cadera, lleva una mano al hombro contrario. Alterna. La cadera queda completamente estable.',
    errores: 'Rotar o elevar la cadera al levantar la mano, colocar los pies demasiado juntos, colapsar los hombros.',
    dificultad: 2,
    variantes: {
      facil: 'Pies separados a ancho de cadera.',
      media: 'Pies juntos, cadencia lenta.',
      avanzado: 'Añadir un pequeño peso en la muñeca.'
    },
    natacion: 'La estabilidad anti-rotacional es exactamente lo que el nadador necesita para no desperdiciar energía en movimientos laterales del torso.'
  },
  {
    id: 'push-up-barra',
    name: 'Push-up en barra',
    categories: ['barra', 'estabilidad'],
    objetivo: 'Fuerza de empuje con énfasis en la posición y activación del serrato anterior.',
    musculos: 'Pectoral, tríceps, serrato anterior, deltoides anterior, core',
    tecnica: 'Con la barra en el suelo o en soporte bajo, baja el pecho hacia la barra. Codos a 45° del cuerpo. Al subir, termina con protracción de escápulas (leve redondeo de la parte alta de la espalda).',
    errores: 'Codos a 90°, no completar la protracción al final, cabeza adelantada.',
    dificultad: 2,
    variantes: {
      facil: 'Push-up de rodillas.',
      media: 'Push-up completo con barra.',
      avanzado: 'Push-up con pausa de 2 seg abajo + protracción exagerada arriba.'
    },
    natacion: 'La protracción al final del push-up activa exactamente el serrato que usas en la fase de tracción de la brazada.'
  },
  {
    id: 'elevacion-piernas',
    name: 'Elevaciones de piernas en barra',
    categories: ['barra', 'core', 'natacion'],
    objetivo: 'Core con especial énfasis en flexores de cadera y recto abdominal. Patrón vertical de la patada.',
    musculos: 'Recto abdominal, iliopsoas, recto femoral, oblicuos',
    tecnica: 'Colgado de la barra con agarre supino o prono. Eleva las piernas manteniendo la espalda baja activa. Al inicio, rodillas flexionadas. Progresa a piernas rectas.',
    errores: 'Balancear el cuerpo, no controlar la bajada, perder la tensión abdominal en la parte baja del movimiento.',
    dificultad: 3,
    variantes: {
      facil: 'Elevación de rodillas (90°).',
      media: 'Piernas a 45° con control.',
      avanzado: 'Piernas rectas a 90° + pequeña rotación de pelvis al final.'
    },
    natacion: 'Entrenamiento directo del core vertical para la patada de mariposa y para mantener la posición horizontal en el agua.'
  },
  {
    id: 'serrato-barra',
    name: 'Serrato en barra',
    categories: ['barra', 'estabilidad', 'natacion'],
    objetivo: 'Aislar y fortalecer el serrato anterior, el músculo de la brazada larga.',
    musculos: 'Serrato anterior, trapecio inferior, romboides',
    tecnica: 'Colgado de la barra, sin doblar los codos, lleva las escápulas hacia abajo y afuera (protracción + depresión). Mantén 2 seg. Vuelve a la posición neutral.',
    errores: 'Doblar los codos (convierte el ejercicio en una dominada), encogerse de hombros en lugar de bajar las escápulas.',
    dificultad: 2,
    variantes: {
      facil: 'Solo la bajada de escápulas, sin separación.',
      media: 'Protracción completa con pausa.',
      avanzado: 'Añadir rotación de pelvis en la posición de máxima protracción.'
    },
    natacion: 'El serrato es responsable del 30-40% de la potencia de la brazada. Su fortalecimiento es la mejora más directa posible para el nado.'
  },
  {
    id: 'biceps-opt',
    name: 'Bíceps / Trapecio (opcional)',
    categories: ['funcional', 'barra'],
    objetivo: 'Complementar el trabajo de brazada con fuerza de codo y complejo trapecio-romboides.',
    musculos: 'Bíceps braquial, braquial, trapecio, romboides',
    tecnica: 'Curl de bíceps con mancuerna: codo fijo, supinación completa al subir. O shrug de trapecio: encogimiento de hombros con control.',
    errores: 'Balancear el cuerpo, usar momentum, no completar el rango.',
    dificultad: 1,
    variantes: {
      facil: 'Curl de bíceps con banda elástica.',
      media: 'Curl alternado con mancuerna.',
      avanzado: 'Curl inclinado en banco para mayor estiramiento.'
    },
    natacion: 'Complemento secundario. No prioritario, pero apoya la tracción en el agua.'
  }
];

// ═══════════════════════════════════════════════════════════
// 3. STATE MANAGEMENT
// ═══════════════════════════════════════════════════════════

const APP = {
  currentPage: 'home',
  currentMode: 'normal',
  currentDayOfWeek: new Date().getDay(),
  completedExercises: new Set(),
  totalExercisesToday: 0,
  timerInterval: null,
  timerSeconds: 0,
  timerRunning: false,
  currentExerciseIndex: 0,
  currentSeriesCount: 0,
  currentExercise: null,
  currentRoutineExercises: [],
  timerState: 'idle', // idle | work | rest | done

  settings: {
    name: 'Atleta',
    goal: 'Funcional + agua',
    mode: 'normal',
    dailyMinTarget: 25,
    dailySeriesTarget: 20
  },

  sessions: [] // Array of session log objects
};

// ═══════════════════════════════════════════════════════════
// 4. STORAGE
// ═══════════════════════════════════════════════════════════

function saveToStorage() {
  try {
    localStorage.setItem('af_sessions', JSON.stringify(APP.sessions));
    localStorage.setItem('af_settings', JSON.stringify(APP.settings));
    localStorage.setItem('af_completed_today', JSON.stringify({
      date: getTodayKey(),
      exercises: Array.from(APP.completedExercises)
    }));
  } catch(e) { console.warn('Storage error:', e); }
}

function loadFromStorage() {
  try {
    const sessions = localStorage.getItem('af_sessions');
    if (sessions) {
      const parsed = JSON.parse(sessions);
      // Normalizar sesiones antiguas (v1.0/v1.1) que tienen score como número, no objeto
      APP.sessions = parsed.map(s => {
        if (!s.scoreData && typeof s.score === 'number') {
          // Reconstruir scoreData aproximado a partir del score total
          s.scoreData = {
            total: s.score,
            completion: Math.round(s.score * 0.4),
            volume:     Math.round(s.score * 0.25),
            time:       Math.round(s.score * 0.2),
            energy:     Math.round(s.score * 0.1),
            consistency: Math.round(s.score * 0.05)
          };
        }
        // Asegurar que score sea número
        if (s.scoreData && typeof s.score !== 'number') {
          s.score = s.scoreData.total || 0;
        }
        return s;
      });
    }

    const settings = localStorage.getItem('af_settings');
    if (settings) APP.settings = { ...APP.settings, ...JSON.parse(settings) };

    const completedToday = localStorage.getItem('af_completed_today');
    if (completedToday) {
      const parsed = JSON.parse(completedToday);
      if (parsed.date === getTodayKey()) {
        APP.completedExercises = new Set(parsed.exercises);
      }
    }
  } catch(e) { console.warn('Load error:', e); }
}

function getTodayKey() {
  // IMPORTANTE: usar fecha LOCAL, no UTC (toISOString usa UTC y puede desfasar un día)
  return localDateKey(new Date());
}

// Helper: fecha local en formato YYYY-MM-DD
function localDateKey(d) {
  const y  = d.getFullYear();
  const m  = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${dd}`;
}

function loadDemoData() {
  // Create 10 days of realistic demo sessions
  const today = new Date();
  const demoSessions = [];
  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const sessionTypes = ['casa', 'casa', 'casa', 'recovery', 'casa', 'casa', 'recovery', 'aguas', 'casa', 'casa'];

  for (let i = 9; i >= 1; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dow = d.getDay();
    const routine = WEEKLY_ROUTINES[dow];
    const energy = Math.floor(Math.random() * 2) + 3; // 3-5
    const completed = Math.random() > 0.2; // 80% completion rate
    const minutes = completed ? Math.floor(Math.random() * 10) + routine.duration.split('-')[0].replace(/\D/g,'') * 1 : Math.floor(Math.random() * 10) + 8;
    const series = completed ? Math.floor(Math.random() * 5) + 12 : Math.floor(Math.random() * 8) + 3;

    const s = {
      id: `demo_${i}`,
      date: localDateKey(d),
      routineName: routine.name,
      sessionType: sessionTypes[i] || 'casa',
      energy,
      minutesTracker: parseInt(minutes),
      seriesCompleted: series,
      exercisesCompleted: completed ? Math.floor(Math.random() * 2) + routine.exercises.length - 1 : Math.floor(routine.exercises.length / 2),
      exercisesTotal: routine.exercises.length,
      routineCompleted: completed,
      pain: 'ninguna',
      notes: '',
      scoreData: null,
      score: 0
    };
    const sd = calculateScore(s);
    s.scoreData = sd;
    s.score = sd.total;
    demoSessions.push(s);
  }

  APP.sessions = demoSessions;
  saveToStorage();
  showToast('¡Datos demo cargados!', 'success');
  refreshAllUI();
}

// ═══════════════════════════════════════════════════════════
// 5. HELPERS
// ═══════════════════════════════════════════════════════════

function getTodayRoutine() {
  return WEEKLY_ROUTINES[APP.currentDayOfWeek];
}

function getTomorrowRoutine() {
  return WEEKLY_ROUTINES[(APP.currentDayOfWeek + 1) % 7];
}

function getModifiedExercises(exercises, mode) {
  return exercises.map(ex => {
    const e = { ...ex };
    if (mode === 'ligero') {
      e.sets = Math.max(1, Math.ceil(ex.sets * 0.6));
      if (e.reps) e.reps = Math.max(5, Math.ceil(ex.reps * 0.7));
    } else if (mode === 'intenso') {
      e.sets = Math.ceil(ex.sets * 1.3);
      if (e.reps) e.reps = Math.ceil(ex.reps * 1.2);
    }
    return e;
  });
}

function formatDate(d) {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function calculateScore(session) {
  // ── 5 componentes con pesos calibrados ──────────────────
  // 1. Completion  (0-35): porcentaje de ejercicios realizados
  // 2. Volume      (0-25): series vs. total planeado
  // 3. Time        (0-20): minutos vs. meta diaria
  // 4. Energy      (0-10): energía reportada (1-5 → 2-10)
  // 5. Consistency (0-10): bonus por racha activa

  let completion = 0;
  const exRatio = session.exercisesTotal > 0
    ? session.exercisesCompleted / session.exercisesTotal : 0;

  if (session.routineCompleted || exRatio >= 1)   completion = 35;
  else if (exRatio >= 0.8)                        completion = 30;
  else if (exRatio >= 0.6)                        completion = 22;
  else if (exRatio >= 0.4)                        completion = 14;
  else if (exRatio >= 0.2)                        completion =  7;
  else if (session.exercisesCompleted > 0)        completion =  3;

  // Volume: series reales vs. planeadas de la rutina
  const routine    = WEEKLY_ROUTINES[new Date().getDay()];
  const plannedSets = (routine.exercises || []).reduce((s, e) => s + (e.sets || 0), 0);
  const seriesRatio = plannedSets > 0
    ? Math.min(1, session.seriesCompleted / plannedSets) : 0;
  const volume = Math.round(seriesRatio * 25);

  // Time vs. meta
  const targetMin = APP.settings.dailyMinTarget;
  const timeRatio = targetMin > 0
    ? Math.min(1, session.minutesTracker / targetMin) : 0;
  const time = Math.round(timeRatio * 20);

  // Energy (1→2, 2→4, 3→6, 4→8, 5→10)
  const energy = session.energy ? session.energy * 2 : 0;

  // Consistency bonus
  const streak = getStreak();
  const consistency = streak >= 7 ? 10
    : streak >= 5 ? 8
    : streak >= 3 ? 5
    : streak >= 1 ? 3 : 0;

  const total = completion + volume + time + energy + consistency;
  return {
    total:      Math.min(100, Math.round(total)),
    completion: Math.min(35, completion),
    volume:     Math.min(25, volume),
    time:       Math.min(20, time),
    energy:     Math.min(10, energy),
    consistency:Math.min(10, consistency)
  };
}

// ── calculateLoad: basada en el volumen real de la rutina ──
function calculateLoad(exercises, mode) {
  if (!exercises || exercises.length === 0) return 'suave';

  const totalSets = exercises.reduce((s, e) => s + (e.sets || 0), 0);
  const avgRest   = exercises.reduce((s, e) => s + (e.rest || 60), 0) / exercises.length;

  // Clasificación base por volumen + densidad de trabajo
  let load;
  if (totalSets >= 22 || (totalSets >= 16 && avgRest <= 45))      load = 'alta';
  else if (totalSets >= 13 || (totalSets >= 10 && avgRest <= 50)) load = 'moderada';
  else                                                              load = 'suave';

  // Ajuste por modo del usuario
  if (mode === 'intenso' && load === 'suave')    load = 'moderada';
  if (mode === 'intenso' && load === 'moderada') load = 'alta';
  if (mode === 'ligero'  && load === 'alta')     load = 'moderada';
  if (mode === 'ligero'  && load === 'moderada') load = 'suave';

  return load;
}

const LOAD_DESC = {
  suave:    'Sesión ligera: movilidad y activación. Perfecta para recuperar.',
  moderada: 'Carga equilibrada: fuerza + técnica. Tu zona de progreso.',
  alta:     'Sesión exigente: máximo volumen. Asegúrate de dormir y comer bien.'
};

function getScoreLabel(score) {
  if (score >= 85) return 'Excelente';
  if (score >= 70) return 'Bien completado';
  if (score >= 50) return 'Parcial';
  if (score >= 25) return 'Recovery';
  return 'No completado';
}

function getScoreColor(score) {
  if (score >= 85) return 'aqua';
  if (score >= 70) return 'green';
  if (score >= 50) return 'yellow';
  if (score >= 25) return 'orange';
  return 'red';
}

function getEnergyLabel(energy) {
  const labels = { 1: 'Muy bajo', 2: 'Bajo', 3: 'Medio', 4: 'Sólido', 5: 'Fuerte' };
  return labels[energy] || '—';
}

function getStreak() {
  if (APP.sessions.length === 0) return 0;
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = localDateKey(d);
    const session = APP.sessions.find(s => s.date === key);
    if (session && session.routineCompleted) streak++;
    else if (i > 0) break;
  }
  return streak;
}

function getWeekStats() {
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay()); // Sunday
  let daysCompleted = 0, totalMinutes = 0;

  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    const key = localDateKey(d);
    const session = APP.sessions.find(s => s.date === key);
    if (session) {
      if (session.routineCompleted) daysCompleted++;
      totalMinutes += session.minutesTracker || 0;
    }
  }
  return { daysCompleted, totalMinutes, totalSessions: APP.sessions.length };
}

function getTodaySession() {
  return APP.sessions.find(s => s.date === getTodayKey());
}

function getLast7Days() {
  const days = [];
  const today = new Date();
  const dayShort = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = localDateKey(d);
    const session = APP.sessions.find(s => s.date === key);
    days.push({
      label: dayShort[d.getDay()],
      isToday: i === 0,
      session
    });
  }
  return days;
}

function getWeekDots() {
  const today = new Date();
  const todayDow = today.getDay();
  const dots = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - todayDow + i);
    const key = localDateKey(d);
    const session = APP.sessions.find(s => s.date === key);
    dots.push({
      isToday: i === todayDow,
      done: session && session.routineCompleted
    });
  }
  return dots;
}

function getPhrase(score) {
  if (score >= 85) return '"Hoy sumaste control, no solo volumen. Eso se nota en el agua."';
  if (score >= 70) return '"Buen trabajo: mantuviste técnica y consistencia."';
  if (score >= 50) return '"La constancia está subiendo. Cada sesión cuenta."';
  if (score > 0) return '"Hoy fue recovery. El descanso activo también entrena."';
  const streak = getStreak();
  if (streak > 3) return '"Tu racha habla por sí sola. Muéstrate hoy también."';
  return '"La constancia construye más que la intensidad. Muéstrate hoy."';
}

function getRecommendations() {
  const recs = [];
  const stats = getWeekStats();
  const todaySession = getTodaySession();
  const streak = getStreak();

  if (streak > 5) recs.push('Llevas ' + streak + ' días seguidos. Considera un recovery si sientes fatiga acumulada.');
  if (stats.daysCompleted >= 5) recs.push('La próxima semana sube 1-2 reps en push-up en barra y zancadas.');
  if (stats.daysCompleted <= 2 && stats.totalSessions > 0) recs.push('Esta semana fue complicada. Sigue: incluso 15 min cuenta como sesión.');
  if (APP.currentDayOfWeek === 4) recs.push('Hoy es jueves: tu sesión más intensa. Dale prioridad a las piernas.');
  if (APP.currentDayOfWeek === 3) recs.push('Hoy es miércoles. Recovery activo: no te lo saltes, es parte del plan.');
  if (todaySession && todaySession.energy <= 2) recs.push('Energía baja hoy. Reduce las series y mantén la movilidad. No te fuerces.');
  if (!todaySession) recs.push('Aún no has registrado la sesión de hoy. ¡Ve a entrenar!');

  if (recs.length === 0) recs.push('Mantén el volumen esta semana. Estás en zona de adaptación óptima.');
  return recs;
}

// ═══════════════════════════════════════════════════════════
// 6. NAVIGATION
// ═══════════════════════════════════════════════════════════

function navigateTo(page) {
  // Close modal and stop any running timer
  stopTimer();
  document.getElementById('timer-modal').classList.add('hidden');

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');

  const navEl = document.querySelector(`[data-page="${page}"]`);
  if (navEl) navEl.classList.add('active');

  APP.currentPage = page;

  // Refresh page-specific UI
  if (page === 'home')      renderHome();
  if (page === 'today')     renderToday();
  if (page === 'dashboard') renderDashboard();
  if (page === 'exercises') renderExerciseLibrary();
  if (page === 'settings')  renderSettings();
}

// ═══════════════════════════════════════════════════════════
// 7. HOME PAGE
// ═══════════════════════════════════════════════════════════

function renderHome() {
  const today = new Date();
  const routine = getTodayRoutine();
  const tomorrow = getTomorrowRoutine();
  const todaySession = getTodaySession();
  const stats = getWeekStats();
  const streak = getStreak();

  // Date & day
  document.getElementById('home-date').textContent = formatDate(today);
  document.getElementById('home-day-name').textContent = routine.name;
  document.getElementById('home-focus').textContent = routine.focus;
  document.getElementById('home-coach-msg').textContent = routine.coach;
  document.getElementById('home-duration').textContent = routine.duration;
  document.getElementById('home-goal-pill').textContent = routine.goal.split('.')[0].substring(0, 25) + '…';
  document.getElementById('home-streak').textContent = streak;

  // Tags
  renderTags('home-tags', routine.tags);

  // Completed today?
  const completedBanner = document.getElementById('home-completed-banner');
  if (todaySession && todaySession.routineCompleted) {
    completedBanner.style.display = 'flex';
    document.getElementById('btn-start-routine').textContent = '↩ Volver a la rutina';
  } else {
    completedBanner.style.display = 'none';
    document.getElementById('btn-start-routine').textContent = '▶ Empezar rutina';
  }

  // Mini stats
  document.getElementById('stat-week-days').textContent = stats.daysCompleted;
  document.getElementById('stat-week-min').textContent = stats.totalMinutes;
  document.getElementById('stat-total-sessions').textContent = APP.sessions.length;

  // Tomorrow
  document.getElementById('tomorrow-name').textContent = tomorrow.name;
  document.getElementById('tomorrow-tip').textContent = tomorrow.tip;
  document.getElementById('tomorrow-load-badge').textContent = tomorrow.load.charAt(0).toUpperCase() + tomorrow.load.slice(1);
  document.getElementById('tomorrow-load-badge').className = 'tag ' + (tomorrow.load === 'alta' ? 'core' : tomorrow.load === 'moderada' ? 'estabilidad' : 'recovery');
  renderTags('tomorrow-tags', tomorrow.tags);
}

function renderTags(containerId, tags) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = tags.map(t => `<span class="tag ${t}">${t.charAt(0).toUpperCase() + t.slice(1)}</span>`).join('');
}

// ═══════════════════════════════════════════════════════════
// 8. TODAY PAGE (RUTINA DEL DÍA)
// ═══════════════════════════════════════════════════════════

function renderToday() {
  const today = new Date();
  const dow = today.getDay();
  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const routine = getTodayRoutine();
  const exercises = getModifiedExercises(routine.exercises, APP.currentMode);

  APP.currentRoutineExercises = exercises;
  APP.totalExercisesToday = exercises.length;
  _lastRenderedExIds = ''; // fresh page load → full draw with stagger

  document.getElementById('today-day-label').textContent = dayNames[dow].toUpperCase();
  document.getElementById('today-routine-name').textContent = routine.name;
  document.getElementById('today-routine-goal').textContent = routine.goal;
  renderTags('today-tags', routine.tags);

  // Special Sunday view
  if (routine.isSunday) {
    renderSundayView();
    return;
  }

  renderExerciseList(exercises);
  updateTodayProgress();
}

function renderSundayView() {
  const routine = getTodayRoutine();
  const list = document.getElementById('today-exercise-list');
  list.innerHTML = `
    <div class="sunday-banner">
      <div class="sunday-icon">🌊</div>
      <div class="sunday-title">Aguas Abiertas</div>
      <div class="sunday-sub">${routine.goal}</div>
      <div class="sunday-pillars">
        <span class="sunday-pillar">Adaptación</span>
        <span class="sunday-pillar">Técnica</span>
        <span class="sunday-pillar">Patada</span>
        <span class="sunday-pillar">Orientación</span>
        <span class="sunday-pillar">Control</span>
      </div>
    </div>
  `;

  // Still show exercises below
  routine.exercises.forEach((ex, i) => {
    const card = document.createElement('div');
    card.className = 'exercise-card' + (APP.completedExercises.has(ex.id) ? ' completed' : '');
    card.innerHTML = `
      <div class="ex-head">
        <div class="ex-name">${ex.name}</div>
        <div class="ex-status">${APP.completedExercises.has(ex.id) ? '✓' : ''}</div>
      </div>
      <div class="ex-meta">
        <span>${ex.duration || (ex.reps + ' reps')}</span>
        ${ex.rest ? `<span class="sep">·</span><span>Descanso ${ex.rest}s</span>` : ''}
      </div>
      <div class="ex-note">${ex.note}</div>
      <div class="ex-actions">
        <button class="btn btn-ghost btn-sm" onclick="markExerciseDone('${ex.id}')">
          ${APP.completedExercises.has(ex.id) ? '✓ Completado' : 'Marcar completado'}
        </button>
      </div>
    `;
    list.appendChild(card);
  });
}

// Track last rendered exercises to enable partial updates
let _lastRenderedExIds = '';

function renderExerciseList(exercises, forceRedraw = false) {
  const list = document.getElementById('today-exercise-list');
  const newIds = exercises.map(e => e.id + (APP.completedExercises.has(e.id) ? '_done' : '')).join(',');

  // Smart partial update: if only completion state changed, just update individual cards
  if (!forceRedraw && _lastRenderedExIds.split(',').map(x => x.split('_done')[0]).join(',') === exercises.map(e => e.id).join(',')) {
    exercises.forEach(ex => {
      const card = document.getElementById(`ex-card-${ex.id}`);
      if (!card) return;
      const isDone = APP.completedExercises.has(ex.id);
      const wasMarked = card.classList.contains('completed');
      if (isDone !== wasMarked) {
        card.className = `exercise-card stagger-item${isDone ? ' completed' : ''}`;
        const statusEl = card.querySelector('.ex-status');
        if (statusEl) statusEl.textContent = isDone ? '✓' : '';
        const doneBtn = card.querySelector('.ex-done-btn');
        if (doneBtn) doneBtn.textContent = isDone ? '✓ Hecho' : 'Completado';
      }
    });
    _lastRenderedExIds = newIds;
    updateTodayProgress();
    return;
  }

  // Full redraw with stagger entrance
  list.innerHTML = '';
  _lastRenderedExIds = newIds;

  exercises.forEach((ex, i) => {
    const isDone = APP.completedExercises.has(ex.id);
    const card = document.createElement('div');
    card.className = `exercise-card stagger-item${isDone ? ' completed' : ''}`;
    card.id = `ex-card-${ex.id}`;

    const repStr  = ex.reps ? `${ex.reps} reps` : (ex.duration || '');
    const setsStr = `${ex.sets} series`;
    const restStr = ex.rest ? `${ex.rest}s descanso` : '';

    card.innerHTML = `
      <div class="ex-head">
        <div class="ex-name">
          <span style="color:var(--text-muted);font-size:11px;margin-right:5px;font-family:var(--font-ui)">${String(i+1).padStart(2,'0')}</span>${ex.name}
        </div>
        <div class="ex-status">${isDone ? '✓' : ''}</div>
      </div>
      <div class="ex-meta">
        <span style="color:var(--aqua);font-weight:700">${setsStr}</span>
        <span class="sep">·</span>
        <span>${repStr}</span>
        ${restStr ? `<span class="sep">·</span><span>${restStr}</span>` : ''}
      </div>
      <div class="ex-note">${ex.note}</div>
      <div class="ex-actions">
        <button class="btn btn-primary btn-sm" style="flex:2" onclick="openTimerModal(${i})">
          ▶ Iniciar
        </button>
        <button class="btn btn-ghost btn-sm ex-done-btn" style="flex:1" onclick="markExerciseDone('${ex.id}')">
          ${isDone ? '✓ Hecho' : 'Completado'}
        </button>
      </div>
    `;
    list.appendChild(card);
  });
}

function updateTodayProgress() {
  const total = APP.totalExercisesToday;
  const done = APP.completedExercises.size;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  document.getElementById('today-progress-fill').style.width = pct + '%';
  document.getElementById('today-progress-text').textContent = `${done} / ${total}`;
}

function markExerciseDone(exId) {
  const wasDone = APP.completedExercises.has(exId);
  if (wasDone) APP.completedExercises.delete(exId);
  else         APP.completedExercises.add(exId);

  saveToStorage();

  // Smart update: only patch the card, skip full re-render
  const exercises = APP.currentRoutineExercises;
  if (exercises.length > 0) {
    renderExerciseList(exercises); // uses partial-update path internally
  }

  // Show toast only when marking as done (not undoing)
  if (!wasDone) showToast('✓ Completado', 'success');

  updateTodayProgress();
}

function completeRoutine() {
  const routine = getTodayRoutine();
  const exercises = APP.currentRoutineExercises;
  const exDone = APP.completedExercises.size;

  const plannedSets = exercises.reduce((s, e) => s + e.sets, 0);

  const session = {
    id: 'session_' + Date.now(),
    date: getTodayKey(),
    routineName: routine.name,
    sessionType: 'casa',
    energy: 3,
    minutesTracker: parseInt(routine.duration) || 25,
    seriesCompleted: Math.round(plannedSets * (exDone / (exercises.length || 1))),
    exercisesCompleted: exDone,
    exercisesTotal: exercises.length,
    routineCompleted: exDone >= exercises.length * 0.8,
    pain: 'ninguna',
    notes: '',
    scoreData: null
  };
  const scoreData = calculateScore(session);
  session.scoreData = scoreData;
  session.score = scoreData.total;

  APP.sessions = APP.sessions.filter(s => s.date !== getTodayKey());
  APP.sessions.push(session);
  saveToStorage();

  showToast(`¡Sesión guardada! Score: ${session.score}`, 'success');
  navigateTo('dashboard');
}

// Mode selector (in today page)
function setTodayMode(mode) {
  APP.currentMode = mode;
  _lastRenderedExIds = ''; // force full redraw on mode change
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  renderExerciseList(getModifiedExercises(getTodayRoutine().exercises, mode), true);
}

// ═══════════════════════════════════════════════════════════
// 9. TIMER MODAL
// ═══════════════════════════════════════════════════════════
//
// MÁQUINA DE ESTADOS:
//
//  idle ──[Iniciar serie]──► work ──[Completar serie]──► rest_running
//                              ▲                              │
//                              │                    (cuenta regresiva)
//                              │                              │
//                              │                       rest_done
//                              │                    (botón habilitado)
//                              └──[Completar descanso]────────┘
//
//  Si ya se hicieron todas las series → done (ejercicio completado)
//
// ═══════════════════════════════════════════════════════════

// Guarda el total de segundos de descanso del ejercicio actual
// para poder mostrar el arco del círculo izquierdo durante el countdown
let REST_TOTAL_SECS = 0;

function stopTimer() {
  clearInterval(APP.timerInterval);
  APP.timerInterval = null;
  APP.timerRunning = false;
}

function openTimerModal(exerciseIndex) {
  const exercises = APP.currentRoutineExercises;
  if (exerciseIndex >= exercises.length) return;

  stopTimer();

  APP.currentExerciseIndex = exerciseIndex;
  APP.currentExercise     = exercises[exerciseIndex];
  APP.currentSeriesCount  = 0;
  APP.timerSeconds        = 0;
  APP.timerState          = 'idle'; // idle | work | rest_running | rest_done | done
  REST_TOTAL_SECS         = 0;

  updateTimerModal();
  document.getElementById('timer-modal').classList.remove('hidden');
}

function updateTimerModal() {
  const ex  = APP.currentExercise;
  const idx = APP.currentExerciseIndex;
  const exercises = APP.currentRoutineExercises;

  // ── Textos de cabecera ──────────────────────────────────
  document.getElementById('modal-ex-order').textContent =
    `Ejercicio ${idx + 1} de ${exercises.length}`;
  document.getElementById('modal-ex-name').textContent = ex.name;

  const repStr = ex.reps ? `${ex.reps} reps` : (ex.duration || '');
  document.getElementById('modal-ex-target').textContent =
    `${ex.sets} series · ${repStr}`;
  document.getElementById('modal-rest-val').textContent =
    ex.rest ? `${ex.rest}s` : '—';
  document.getElementById('modal-reps-val').textContent = repStr;
  document.getElementById('modal-ex-progress').textContent =
    `${idx + 1}/${exercises.length}`;

  // ── Círculo derecho: series ─────────────────────────────
  document.getElementById('series-current').textContent = APP.currentSeriesCount;
  document.getElementById('series-total').textContent   = ex.sets;

  // r=66 → circumference = 2π×66 ≈ 415
  const CIRC = 415;
  const seriesPct = APP.currentSeriesCount / ex.sets;
  document.getElementById('series-fill').style.strokeDashoffset =
    CIRC - CIRC * seriesPct;

  // Pulse ring on series circle
  const seriesCircle = document.getElementById('series-circle');
  seriesCircle.classList.remove('is-working', 'is-resting');
  if (APP.timerState === 'work') seriesCircle.classList.add('is-working');

  // ── Círculo izquierdo: timer ────────────────────────────
  document.getElementById('timer-display').textContent =
    formatTime(Math.max(0, APP.timerSeconds));

  const timerFill   = document.getElementById('timer-fill');
  const timerCircle = document.getElementById('timer-circle');
  timerCircle.classList.remove('is-working', 'is-resting');

  if ((APP.timerState === 'rest_running' || APP.timerState === 'rest_done') &&
      REST_TOTAL_SECS > 0) {
    const restPct = Math.max(0, APP.timerSeconds) / REST_TOTAL_SECS;
    timerFill.style.strokeDashoffset = CIRC - CIRC * restPct;
    timerFill.classList.remove('aqua');
    timerFill.classList.add('orange');
    timerCircle.classList.add('is-resting');
  } else {
    timerFill.style.strokeDashoffset = 0;
    timerFill.classList.remove('orange');
    timerFill.classList.add('aqua');
    if (APP.timerState === 'work') timerCircle.classList.add('is-working');
  }

  // ── Badge de estado ────────────────────────────────────
  const badge = document.getElementById('modal-state-badge');
  const STATES = {
    idle:         { cls: 'work',  label: 'LISTO',    pulse: false },
    work:         { cls: 'work',  label: 'TRABAJO',  pulse: true  },
    rest_running: { cls: 'rest',  label: 'DESCANSO', pulse: true  },
    rest_done:    { cls: 'rest',  label: '¡LISTO!',  pulse: false },
    done:         { cls: 'done',  label: 'COMPLETADO', pulse: false }
  };
  const st = STATES[APP.timerState] || STATES.idle;
  badge.className = `state-badge ${st.cls}`;
  badge.innerHTML = `<div class="state-indicator"${st.pulse ? '' : ' style="animation:none;opacity:0.4"'}></div>${st.label}`;

  // ── Botones ────────────────────────────────────────────
  const btnStart       = document.getElementById('modal-btn-start');
  const btnCompleteSet = document.getElementById('modal-btn-complete-set');
  const btnRest        = document.getElementById('modal-btn-rest');

  // Reset visual por defecto
  btnStart.disabled       = false;
  btnCompleteSet.disabled = true;
  btnRest.disabled        = true;
  btnRest.textContent     = '⏸ Iniciar descanso';

  switch (APP.timerState) {

    case 'idle':
      btnStart.textContent     = '▶ Iniciar serie';
      btnCompleteSet.disabled  = true;
      btnRest.disabled         = true;
      break;

    case 'work':
      btnStart.textContent     = APP.timerRunning ? '⏸ Pausar' : '▶ Continuar';
      btnCompleteSet.disabled  = false;   // ← habilita "Completar serie"
      btnRest.disabled         = true;
      break;

    case 'rest_running':
      btnStart.textContent     = APP.timerRunning ? '⏸ Pausar descanso' : '▶ Continuar descanso';
      btnCompleteSet.disabled  = true;
      btnRest.disabled         = true;    // ← "Completar descanso" deshabilitado mientras corre
      btnRest.textContent      = '⏳ Completar descanso';
      break;

    case 'rest_done':
      btnStart.disabled        = true;    // ← no se puede "iniciar" durante rest_done
      btnStart.textContent     = '⏸ Pausar descanso';
      btnCompleteSet.disabled  = true;
      btnRest.disabled         = false;   // ← ¡SE HABILITA! pulsa para cerrar descanso
      btnRest.textContent      = '✓ Completar descanso';
      break;

    case 'done':
      btnStart.disabled        = true;
      btnStart.textContent     = '✓ Ejercicio listo';
      btnCompleteSet.disabled  = true;
      btnRest.disabled         = true;
      break;
  }
}

// ── Iniciar / Pausar (solo afecta a work y rest_running) ──
function startTimer() {
  if (APP.timerState === 'idle') {
    // Primera pulsación: arranca el cronómetro de trabajo
    APP.timerState   = 'work';
    APP.timerSeconds = 0;
    _runWorkTimer();

  } else if (APP.timerState === 'work') {
    // Pausar / reanudar
    if (APP.timerRunning) {
      stopTimer();
    } else {
      _runWorkTimer();
    }

  } else if (APP.timerState === 'rest_running') {
    // Pausar / reanudar el descanso
    if (APP.timerRunning) {
      stopTimer();
    } else {
      _runRestTimer();
    }
  }
  // En rest_done y done el botón está disabled → no se ejecuta

  updateTimerModal();
}

function _runWorkTimer() {
  stopTimer();
  APP.timerRunning = true;
  APP.timerInterval = setInterval(() => {
    APP.timerSeconds++;
    document.getElementById('timer-display').textContent =
      formatTime(APP.timerSeconds);
  }, 1000);
}

function _runRestTimer() {
  stopTimer();
  APP.timerRunning = true;
  APP.timerInterval = setInterval(() => {
    if (APP.timerSeconds <= 0) {
      // Descanso terminado → rest_done
      stopTimer();
      APP.timerSeconds = 0;
      APP.timerState   = 'rest_done';
      showToast('⏰ ¡Descanso completado! Pulsa "Completar descanso"', 'success');
      updateTimerModal();
      return;
    }
    APP.timerSeconds--;
    document.getElementById('timer-display').textContent =
      formatTime(Math.max(0, APP.timerSeconds));

    // Actualiza arco del círculo izquierdo (r=66 → CIRC=415)
    if (REST_TOTAL_SECS > 0) {
      const CIRC = 415;
      const restPct = APP.timerSeconds / REST_TOTAL_SECS;
      document.getElementById('timer-fill').style.strokeDashoffset =
        CIRC - CIRC * restPct;
    }
  }, 1000);
}

// ── Reiniciar cronómetro (solo timer de trabajo) ──────────
function resetTimer() {
  if (APP.timerState === 'rest_running' || APP.timerState === 'rest_done') return;
  stopTimer();
  APP.timerSeconds = 0;
  APP.timerState   = 'idle';
  document.getElementById('timer-display').textContent = '00:00';
  document.getElementById('timer-fill').style.strokeDashoffset = '0';
  updateTimerModal();
}

// ── Completar serie ───────────────────────────────────────
function completeSet() {
  if (APP.timerState !== 'work') return;

  stopTimer();
  APP.currentSeriesCount++;

  // Bump animation on series circle number
  const seriesNum = document.getElementById('series-current');
  if (seriesNum) {
    seriesNum.classList.remove('series-bump');
    void seriesNum.offsetWidth; // force reflow
    seriesNum.classList.add('series-bump');
    seriesNum.textContent = APP.currentSeriesCount;
  }

  // Actualiza el arco de series inmediatamente
  const CIRC = 415;
  const seriesPct = APP.currentSeriesCount / APP.currentExercise.sets;
  document.getElementById('series-fill').style.strokeDashoffset =
    CIRC - CIRC * seriesPct;

  if (APP.currentSeriesCount >= APP.currentExercise.sets) {
    // ── Todas las series completadas ──
    APP.timerState = 'done';
    markExerciseDone(APP.currentExercise.id);
    showToast('🎯 ¡Ejercicio completado!', 'success');
    updateTimerModal();

  } else {
    // ── Quedan series: iniciar countdown de descanso ──
    const restSecs = APP.currentExercise.rest || 60;
    REST_TOTAL_SECS  = restSecs;
    APP.timerSeconds = restSecs;
    APP.timerState   = 'rest_running';

    document.getElementById('timer-display').textContent = formatTime(restSecs);
    document.getElementById('timer-fill').classList.remove('aqua');
    document.getElementById('timer-fill').classList.add('orange');

    showToast(`Serie ${APP.currentSeriesCount}/${APP.currentExercise.sets} ✓ — Descansando ${restSecs}s`);
    updateTimerModal();
    _runRestTimer();
  }
}

// ── Completar descanso (solo en rest_done) ────────────────
function completeRest() {
  if (APP.timerState !== 'rest_done') return;

  stopTimer();
  // Resetea todo al estado idle listo para la siguiente serie
  APP.timerSeconds = 0;
  REST_TOTAL_SECS  = 0;
  APP.timerState   = 'idle';

  // Resetea visualmente el círculo izquierdo a aqua/lleno
  const timerFill = document.getElementById('timer-fill');
  timerFill.style.strokeDashoffset = '0';
  timerFill.classList.remove('orange');
  timerFill.classList.add('aqua');

  document.getElementById('timer-display').textContent = '00:00';
  showToast('▶ ¡A por la siguiente serie!', 'success');
  updateTimerModal();
}

function nextExercise() {
  stopTimer();
  const nextIdx = APP.currentExerciseIndex + 1;
  if (nextIdx < APP.currentRoutineExercises.length) {
    openTimerModal(nextIdx);
  } else {
    document.getElementById('timer-modal').classList.add('hidden');
    showToast('🎉 ¡Rutina completada!', 'success');
  }
}

function closeTimerModal() {
  stopTimer();
  document.getElementById('timer-modal').classList.add('hidden');
  renderToday();
}

// ═══════════════════════════════════════════════════════════
// 10. DASHBOARD
// ═══════════════════════════════════════════════════════════

// Set a value with a short CSS pop animation on the element
function setVal(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  if (el.textContent === String(text)) return; // no-op if same
  el.textContent = text;
  el.style.transition = 'none';
  el.style.transform  = 'scale(1.15)';
  el.style.opacity    = '0.5';
  requestAnimationFrame(() => {
    el.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease';
    el.style.transform  = 'scale(1)';
    el.style.opacity    = '1';
  });
}

function setBar(id, pct) {
  const el = document.getElementById(id);
  if (el) el.style.width = Math.min(100, Math.max(0, pct)) + '%';
}

// Weekly cumulative stats
function getWeeklyScore() {
  const today = new Date();
  const todayDow = today.getDay();
  let total = 0, count = 0, best = 0;

  for (let i = 0; i <= todayDow; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - todayDow + i);
    const y = d.getFullYear(), m = String(d.getMonth()+1).padStart(2,'0'), dd = String(d.getDate()).padStart(2,'0');
    const key = `${y}-${m}-${dd}`;
    const session = APP.sessions.find(s => s.date === key);
    if (session && session.score > 0) {
      total += session.score;
      count++;
      if (session.score > best) best = session.score;
    }
  }
  return {
    avg:   count > 0 ? Math.round(total / count) : 0,
    total: Math.round(total),
    best,
    count
  };
}

function renderDashboard() {
  try {
    const todaySession = getTodaySession();
    const streak       = getStreak();
    const weekStats    = getWeekStats();
    const weekScore    = getWeeklyScore();
    const routine      = getTodayRoutine();
    const exercises    = getModifiedExercises(routine.exercises || [], APP.currentMode);

    // ── Score hoy ───────────────────────────────────────────
    // Compatibilidad: score puede ser número directo o estar en scoreData.total
    const rawScore  = todaySession
      ? (todaySession.scoreData?.total ?? todaySession.score ?? 0)
      : 0;
    const score      = Math.min(100, Math.max(0, Math.round(rawScore)));
    const scoreLabel = todaySession ? getScoreLabel(score) : 'Sin sesión aún';
    const scoreColor = getScoreColor(score);

    // ── Círculo principal ────────────────────────────────────
    const CIRC_MAIN = 578; // 2π × 92
    const offset    = CIRC_MAIN - (CIRC_MAIN * score / 100);
    const fill = document.getElementById('main-score-fill');
    if (fill) {
      fill.className = `fill ${scoreColor}`;
      // Forzar reflow para que la transición se dispare desde 578
      fill.style.transition = 'none';
      fill.style.strokeDashoffset = CIRC_MAIN;
      requestAnimationFrame(() => {
        fill.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.22, 0.61, 0.36, 1)';
        fill.style.strokeDashoffset = offset;
      });
    }

    // Número del score
    const numEl = document.getElementById('main-score-num');
    if (numEl) {
      numEl.textContent  = score > 0 ? score : '—';
      numEl.style.color  = `var(--${scoreColor})`;
    }

    const statusEl = document.getElementById('dash-score-status');
    if (statusEl) {
      statusEl.textContent = scoreLabel;
      statusEl.style.color = score > 0 ? `var(--${scoreColor})` : 'var(--aqua)';
    }

    // Glow class en la sección
    const section = document.getElementById('dash-score-section');
    if (section) {
      section.className = 'dash-score-section'
        + (score >= 85 ? ' score-high'
         : score >= 70 ? ' score-good'
         : score >= 50 ? ' score-med'
         : score  >  0 ? ' score-low' : '');
    }

    // ── Breakdown de componentes ─────────────────────────────
    const sd = todaySession?.scoreData || {};
    const compCompletion = Math.min(35, sd.completion || 0);
    const compVolume     = Math.min(25, sd.volume     || 0);
    const compTime       = Math.min(20, sd.time       || 0);
    const compEnergy     = Math.min(10, sd.energy     || 0);

    const compMap = {
      'sc-completion': { val: compCompletion, max: 35 },
      'sc-volume':     { val: compVolume,     max: 25 },
      'sc-time':       { val: compTime,       max: 20 },
      'sc-energy-comp':{ val: compEnergy,     max: 10 }
    };
    Object.entries(compMap).forEach(([id, {val, max}]) => {
      setVal(id, val);
      const el = document.getElementById(id);
      const parent = el?.closest('.score-component');
      if (parent) {
        setTimeout(() => parent.style.setProperty('--bar', (val / max * 100) + '%'), 120);
      }
    });

    // ── Score semanal acumulado ──────────────────────────────
    const weekScoreEl = document.getElementById('dc-week-score');
    if (weekScoreEl) setVal('dc-week-score', weekScore.avg || '—');
    const weekBestEl = document.getElementById('dc-week-best');
    if (weekBestEl) setVal('dc-week-best', weekScore.best || '—');

    // ── Frase motivacional ───────────────────────────────────
    const phraseEl = document.getElementById('dash-phrase');
    if (phraseEl) phraseEl.textContent = getPhrase(score);

    // ── Métricas del día ────────────────────────────────────
    const minutes   = todaySession ? (todaySession.minutesTracker || 0) : 0;
    const targetMin = APP.settings.dailyMinTarget || 25;

    // dc-time: actualizamos SOLO el span interno si existe, si no lo creamos una vez
    let timeNumEl = document.getElementById('dc-time-num');
    if (!timeNumEl) {
      const timeEl = document.getElementById('dc-time');
      if (timeEl) {
        timeEl.innerHTML = '<span id="dc-time-num">0</span><span class="dc-unit">min</span>';
        timeNumEl = document.getElementById('dc-time-num');
      }
    }
    if (timeNumEl) setVal('dc-time-num', minutes);
    const timeSubEl = document.getElementById('dc-time-sub');
    if (timeSubEl) timeSubEl.textContent = `de ${targetMin} min meta`;
    setTimeout(() => setBar('dc-time-bar', (minutes / targetMin) * 100), 120);

    const plannedSets = exercises.reduce((s, e) => s + (e.sets || 0), 0);
    const series      = todaySession ? (todaySession.seriesCompleted || 0) : 0;
    setVal('dc-series', series);
    const seriesSubEl = document.getElementById('dc-series-sub');
    if (seriesSubEl) seriesSubEl.textContent = `de ${plannedSets} planificadas`;
    setTimeout(() => setBar('dc-series-bar', plannedSets > 0 ? (series / plannedSets) * 100 : 0), 160);

    const exDone  = todaySession ? (todaySession.exercisesCompleted || 0) : 0;
    const exTotal = exercises.length;
    setVal('dc-exercises', exDone);
    const exSubEl = document.getElementById('dc-exercises-sub');
    if (exSubEl) exSubEl.textContent = `de ${exTotal} planificados`;
    setTimeout(() => setBar('dc-exercises-bar', exTotal > 0 ? (exDone / exTotal) * 100 : 0), 200);

    // Energy
    const energy   = todaySession ? (todaySession.energy || 0) : 0;
    const energyEl = document.getElementById('dc-energy');
    if (energyEl) {
      energyEl.textContent = energy || '—';
      energyEl.style.color = energy >= 4 ? 'var(--green)'
        : energy >= 3 ? 'var(--yellow)'
        : energy  >  0 ? 'var(--orange)'
        : 'var(--text-muted)';
    }
    const energyLabelEl = document.getElementById('dc-energy-label');
    if (energyLabelEl) energyLabelEl.textContent = energy ? getEnergyLabel(energy) : 'Sin registrar';
    document.querySelectorAll('.energy-seg').forEach((seg, i) => {
      seg.classList.toggle('active', i < energy);
    });

    // ── Carga del día ────────────────────────────────────────
    const load = calculateLoad(exercises, APP.currentMode);
    ['suave', 'moderada', 'alta'].forEach(c => {
      const el = document.getElementById('carga-' + c);
      if (el) el.className = `carga-pill ${c}${load === c ? ' active' : ''}`;
    });
    const cargaDetailEl = document.getElementById('carga-detail');
    if (cargaDetailEl) cargaDetailEl.textContent = LOAD_DESC[load];

    // ── Racha & semana ───────────────────────────────────────
    setVal('dc-streak', streak);
    const weekLabelEl = document.getElementById('dc-week-label');
    if (weekLabelEl) weekLabelEl.textContent = `Esta semana: ${weekStats.daysCompleted}/7 días`;

    const weekDotsEl = document.getElementById('dc-week-dots');
    if (weekDotsEl) {
      weekDotsEl.innerHTML = getWeekDots().map(d =>
        `<div class="week-dot${d.done ? ' done' : ''}${d.isToday ? ' today' : ''}"></div>`
      ).join('');
    }

    // ── Historial 7 días ────────────────────────────────────
    const SESSION_ICONS = { casa: '🏠', recovery: '☁️', aguas: '🌊' };
    const historyEl = document.getElementById('dc-history');
    if (historyEl) {
      const last7 = getLast7Days();
      historyEl.innerHTML = last7.map(day => {
        const s = day.session;
        const sc = s ? Math.min(100, Math.max(0, s.score || 0)) : 0;
        const scorePct   = sc + '%';
        const scoreCol   = s ? `var(--${getScoreColor(sc)})` : 'var(--border)';
        const icon       = s ? (SESSION_ICONS[s.sessionType] || '🏠') : '·';
        const isPartial  = s && !s.routineCompleted;
        return `<div class="history-day${s ? ' done' : ''}${isPartial ? ' partial' : ''}${day.isToday ? ' today' : ''}"
                     style="--score-pct:${scorePct};--score-color:${scoreCol}">
                  <div class="hd-day">${day.label}</div>
                  <div class="hd-icon">${icon}</div>
                  <div class="hd-score">${s && sc > 0 ? sc : '—'}</div>
                </div>`;
      }).join('');
    }

    // ── Recomendaciones ──────────────────────────────────────
    const recsEl = document.getElementById('dc-recs');
    if (recsEl) {
      const recs = getRecommendations();
      recsEl.innerHTML = recs.map(r =>
        `<div class="rec-item"><span class="rec-arrow">→</span>${r}</div>`
      ).join('');
    }

  } catch (err) {
    console.error('[renderDashboard] Error:', err);
  }
}

// ═══════════════════════════════════════════════════════════
// 11. EXERCISE LIBRARY
// ═══════════════════════════════════════════════════════════

let activeFilter = 'all';
let searchQuery = '';

function renderExerciseLibrary() {
  const list = document.getElementById('exercise-library-list');
  const query = searchQuery.toLowerCase();

  const filtered = EXERCISE_LIBRARY.filter(ex => {
    const matchesFilter = activeFilter === 'all' || ex.categories.includes(activeFilter);
    const matchesSearch = !query ||
      ex.name.toLowerCase().includes(query) ||
      ex.objetivo.toLowerCase().includes(query) ||
      ex.musculos.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  list.innerHTML = '';

  if (filtered.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);font-family:var(--font-body)">No hay ejercicios que coincidan.</div>';
    return;
  }

  filtered.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'ex-library-card';
    card.innerHTML = `
      <div class="elc-name">${ex.name}</div>
      <div class="elc-cats">${ex.categories.map(c => `<span class="tag ${c}">${c.charAt(0).toUpperCase() + c.slice(1)}</span>`).join('')}</div>
      <div class="elc-obj">${ex.objetivo}</div>
      <div class="elc-muscles">💪 ${ex.musculos}</div>
      <div style="margin-top:10px">
        <button class="btn btn-ghost btn-sm" onclick="toggleExDetail('${ex.id}')">
          Ver detalles ↓
        </button>
      </div>
      <div class="elc-details" id="detail-${ex.id}">
        <div class="elc-detail-section">
          <h4>Técnica correcta</h4>
          <p>${ex.tecnica}</p>
        </div>
        <div class="elc-detail-section">
          <h4>Errores comunes</h4>
          <p>${ex.errores}</p>
        </div>
        <div class="elc-detail-section">
          <h4>Variantes</h4>
          <div class="variantes">
            <div class="variante facil">
              <div class="v-level">🟢 Fácil</div>
              <p>${ex.variantes.facil}</p>
            </div>
            <div class="variante media">
              <div class="v-level">🟡 Media</div>
              <p>${ex.variantes.media}</p>
            </div>
            <div class="variante avanzado">
              <div class="v-level">🔴 Avanzado</div>
              <p>${ex.variantes.avanzado}</p>
            </div>
          </div>
        </div>
        ${ex.natacion ? `
        <div class="natacion-tag">
          <div style="font-family:var(--font-ui);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--aqua);margin-bottom:3px">🌊 TRANSFERENCIA A NATACIÓN</div>
          <p>${ex.natacion}</p>
        </div>` : ''}
      </div>
    `;
    list.appendChild(card);
  });
}

function toggleExDetail(id) {
  const detail = document.getElementById('detail-' + id);
  if (!detail) return;
  const isOpen = detail.classList.contains('open');
  detail.classList.toggle('open', !isOpen);
  const btn = detail.previousElementSibling.querySelector('button');
  if (btn) btn.textContent = isOpen ? 'Ver detalles ↓' : 'Ocultar ↑';
}

// ═══════════════════════════════════════════════════════════
// 12. SETTINGS
// ═══════════════════════════════════════════════════════════

function renderSettings() {
  document.getElementById('cfg-name').value = APP.settings.name;
  document.getElementById('cfg-goal').value = APP.settings.goal;
  document.getElementById('cfg-daily-min').value = APP.settings.dailyMinTarget;
  document.getElementById('cfg-daily-series').value = APP.settings.dailySeriesTarget;

  // Mode selector
  document.querySelectorAll('[data-cfg-mode]').forEach(btn => {
    const modeClass = btn.dataset.cfgMode;
    btn.className = `mode-btn ${modeClass}${APP.settings.mode === modeClass ? ' active' : ''}`;
  });

  const modeDescs = {
    ligero: 'Sesiones reducidas (60% del volumen). Ideal cuando tienes fatiga o poco tiempo.',
    normal: 'Sesiones completas con el volumen recomendado.',
    intenso: 'Volumen aumentado (130%). Solo úsalo si llevas al menos 2 semanas seguidas.'
  };
  document.getElementById('cfg-mode-desc').textContent = modeDescs[APP.settings.mode];

  // Log
  renderSessionLog();
}

function renderSessionLog() {
  const log = document.getElementById('sessions-log');
  if (APP.sessions.length === 0) {
    log.innerHTML = '<div style="text-align:center;padding:24px;color:var(--text-muted);font-family:var(--font-body)">Aún no hay sesiones guardadas.</div>';
    return;
  }

  const sorted = [...APP.sessions].reverse().slice(0, 10);
  log.innerHTML = sorted.map(s => {
    const d = new Date(s.date + 'T12:00:00');
    const dateStr = formatDate(d);
    return `
      <div class="log-entry">
        <div>
          <div class="le-date">${dateStr}</div>
          <div class="le-name">${s.routineName}</div>
          <div class="le-meta">${s.minutesTracker}min · ${s.seriesCompleted} series · Energía ${s.energy}/5</div>
        </div>
        <div class="le-score" style="color:var(--${getScoreColor(s.score)})">${s.score}</div>
      </div>
    `;
  }).join('');
}

function saveSession() {
  const sessionType = document.querySelector('.session-type-btn.selected')?.dataset.stype || 'casa';
  const energyBtn = document.querySelector('.energy-btn.selected');
  const energy = energyBtn ? parseInt(energyBtn.dataset.e) : 3;
  const minutes = parseInt(document.getElementById('manual-time').value) || 20;
  const pain = document.getElementById('manual-pain').value || 'ninguna';
  const notes = document.getElementById('manual-notes').value || '';
  const routine = getTodayRoutine();
  const exercises = APP.currentRoutineExercises.length
    ? APP.currentRoutineExercises : routine.exercises;

  const session = {
    id: 'session_' + Date.now(),
    date: getTodayKey(),
    routineName: routine.name,
    sessionType,
    energy,
    minutesTracker: minutes,
    seriesCompleted: APP.completedExercises.size * 3,
    exercisesCompleted: APP.completedExercises.size,
    exercisesTotal: exercises.length,
    routineCompleted: minutes >= parseInt(routine.duration) || APP.completedExercises.size >= exercises.length * 0.8,
    pain,
    notes,
    scoreData: null,
    score: 0
  };
  const scoreData = calculateScore(session);
  session.scoreData = scoreData;
  session.score = scoreData.total;

  APP.sessions = APP.sessions.filter(s => s.date !== getTodayKey());
  APP.sessions.push(session);
  saveToStorage();

  showToast(`✓ Sesión guardada! Score: ${session.score}`, 'success');
  renderSettings();
}

// ═══════════════════════════════════════════════════════════
// 13. TOAST
// ═══════════════════════════════════════════════════════════

let toastTimeout;
function showToast(msg, type = '') {
  const toast = document.getElementById('app-toast');
  toast.textContent = msg;
  toast.className = `toast${type ? ' ' + type : ''} show`;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ═══════════════════════════════════════════════════════════
// 14. EVENT LISTENERS
// ═══════════════════════════════════════════════════════════

function bindEvents() {

  // ── Navigation ──
  document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.page));
  });

  // ── Home ──
  document.getElementById('btn-start-routine').addEventListener('click', () => navigateTo('today'));
  document.getElementById('btn-see-tomorrow').addEventListener('click', () => {
    showToast(`Mañana: ${getTomorrowRoutine().name}`);
    const card = document.getElementById('tomorrow-card');
    card.style.border = '1px solid var(--border-strong)';
    setTimeout(() => card.style.border = '1px solid var(--border-orange)', 600);
  });

  // ── Today: mode buttons ──
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => setTodayMode(btn.dataset.mode));
  });

  // ── Complete routine button ──
  document.getElementById('btn-complete-routine').addEventListener('click', completeRoutine);

  // ── Timer modal ──
  document.getElementById('modal-btn-start').addEventListener('click', startTimer);
  document.getElementById('modal-btn-reset').addEventListener('click', resetTimer);
  document.getElementById('modal-btn-complete-set').addEventListener('click', completeSet);
  // Botón de descanso: en rest_done actúa como "Completar descanso"
  document.getElementById('modal-btn-rest').addEventListener('click', () => {
    completeRest();
  });
  document.getElementById('modal-btn-next-ex').addEventListener('click', nextExercise);
  document.getElementById('modal-btn-close').addEventListener('click', closeTimerModal);

  // ── Exercise library filters ──
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderExerciseLibrary();
    });
  });

  document.getElementById('exercise-search').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderExerciseLibrary();
  });

  // ── Settings: mode ──
  document.querySelectorAll('[data-cfg-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      APP.settings.mode = btn.dataset.cfgMode;
      APP.currentMode = btn.dataset.cfgMode;
      saveToStorage();
      renderSettings();
      showToast('Modo cambiado: ' + btn.dataset.cfgMode);
    });
  });

  // ── Settings: name/goal ──
  document.getElementById('cfg-name').addEventListener('input', e => {
    APP.settings.name = e.target.value;
    saveToStorage();
  });
  document.getElementById('cfg-goal').addEventListener('input', e => {
    APP.settings.goal = e.target.value;
    saveToStorage();
  });
  document.getElementById('cfg-daily-min').addEventListener('input', e => {
    APP.settings.dailyMinTarget = parseInt(e.target.value) || 25;
    saveToStorage();
  });
  document.getElementById('cfg-daily-series').addEventListener('input', e => {
    APP.settings.dailySeriesTarget = parseInt(e.target.value) || 20;
    saveToStorage();
  });

  // ── Session type selector ──
  document.querySelectorAll('.session-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.session-type-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // ── Energy selector ──
  document.querySelectorAll('.energy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.energy-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // ── Save session ──
  document.getElementById('btn-save-session').addEventListener('click', saveSession);

  // ── Demo & Clear ──
  document.getElementById('btn-load-demo').addEventListener('click', loadDemoData);
  document.getElementById('btn-clear-data').addEventListener('click', () => {
    if (confirm('¿Borrar todos los datos? Esta acción no se puede deshacer.')) {
      APP.sessions = [];
      APP.completedExercises = new Set();
      localStorage.clear();
      showToast('Datos borrados', 'error');
      refreshAllUI();
    }
  });
}

// ═══════════════════════════════════════════════════════════
// 15. INIT
// ═══════════════════════════════════════════════════════════

function refreshAllUI() {
  if (APP.currentPage === 'home') renderHome();
  if (APP.currentPage === 'today') renderToday();
  if (APP.currentPage === 'dashboard') renderDashboard();
  if (APP.currentPage === 'exercises') renderExerciseLibrary();
  if (APP.currentPage === 'settings') renderSettings();
}

function init() {
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('[SW] Registered', reg.scope))
      .catch(err => console.warn('[SW] Failed:', err));
  }

  // Load persisted data
  loadFromStorage();

  // Set current day
  APP.currentDayOfWeek = new Date().getDay();

  // Bind all events
  bindEvents();

  // Initial render
  navigateTo('home');

  console.log('🌊 AquaForce Training v1.0 iniciado');
  console.log(`📅 Hoy: ${new Date().toLocaleDateString('es-PE')} (día ${APP.currentDayOfWeek})`);
  console.log(`🏋️ Rutina: ${getTodayRoutine().name}`);
}

// ── Bootstrap ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
