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
    if (sessions) APP.sessions = JSON.parse(sessions);

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
  return new Date().toISOString().split('T')[0];
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

    demoSessions.push({
      id: `demo_${i}`,
      date: d.toISOString().split('T')[0],
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
      score: calculateScore({ energy, minutesTracker: parseInt(minutes), seriesCompleted: series, exercisesCompleted: completed ? routine.exercises.length : Math.floor(routine.exercises.length / 2), exercisesTotal: routine.exercises.length, routineCompleted: completed })
    });
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
  let score = 0;
  if (session.routineCompleted) score += 40;
  else if (session.exercisesCompleted >= session.exercisesTotal * 0.6) score += 25;
  else if (session.exercisesCompleted > 0) score += 10;

  if (session.energy) score += session.energy * 5; // max 25
  if (session.minutesTracker >= APP.settings.dailyMinTarget) score += 20;
  else score += Math.round((session.minutesTracker / APP.settings.dailyMinTarget) * 15);

  const seriesRatio = Math.min(1, session.seriesCompleted / APP.settings.dailySeriesTarget);
  score += Math.round(seriesRatio * 15);

  return Math.min(100, Math.round(score));
}

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
    const key = d.toISOString().split('T')[0];
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
    const key = d.toISOString().split('T')[0];
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
    const key = d.toISOString().split('T')[0];
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
    const key = d.toISOString().split('T')[0];
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
  // Close modal if open
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

function renderExerciseList(exercises) {
  const list = document.getElementById('today-exercise-list');
  list.innerHTML = '';

  exercises.forEach((ex, i) => {
    const isDone = APP.completedExercises.has(ex.id);
    const card = document.createElement('div');
    card.className = `exercise-card${isDone ? ' completed' : ''}`;
    card.id = `ex-card-${ex.id}`;

    const repStr = ex.reps ? `${ex.reps} reps` : (ex.duration || '');
    const setsStr = `${ex.sets} series`;

    card.innerHTML = `
      <div class="ex-head">
        <div class="ex-name">
          <span style="color:var(--text-muted);font-size:12px;margin-right:4px">${i+1}.</span>
          ${ex.name}
        </div>
        <div class="ex-status">${isDone ? '✓' : ''}</div>
      </div>
      <div class="ex-meta">
        <span style="color:var(--aqua)">${setsStr}</span>
        <span class="sep">·</span>
        <span>${repStr}</span>
        ${ex.rest ? `<span class="sep">·</span><span>Descanso ${ex.rest}s</span>` : ''}
      </div>
      <div class="ex-note">${ex.note}</div>
      <div class="ex-actions">
        <button class="btn btn-primary btn-sm" style="flex:1" onclick="openTimerModal(${i})">
          ▶ Iniciar
        </button>
        <button class="btn btn-ghost btn-sm" style="flex:1" onclick="markExerciseDone('${ex.id}')">
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
  if (APP.completedExercises.has(exId)) {
    APP.completedExercises.delete(exId);
  } else {
    APP.completedExercises.add(exId);
  }
  saveToStorage();
  renderToday();
  showToast(APP.completedExercises.has(exId) ? '✓ Ejercicio completado' : 'Ejercicio desmarcado', 'success');
}

function completeRoutine() {
  const todaySession = getTodaySession();
  const routine = getTodayRoutine();
  const exercises = APP.currentRoutineExercises;
  const exDone = APP.completedExercises.size;

  const session = {
    id: 'session_' + Date.now(),
    date: getTodayKey(),
    routineName: routine.name,
    sessionType: 'casa',
    energy: 3,
    minutesTracker: parseInt(routine.duration) || 25,
    seriesCompleted: exercises.reduce((s, e) => s + e.sets, 0),
    exercisesCompleted: exDone,
    exercisesTotal: exercises.length,
    routineCompleted: exDone >= exercises.length * 0.8,
    pain: 'ninguna',
    notes: '',
    score: 0
  };
  session.score = calculateScore(session);

  // Remove any existing today session
  APP.sessions = APP.sessions.filter(s => s.date !== getTodayKey());
  APP.sessions.push(session);
  saveToStorage();

  showToast(`¡Sesión guardada! Score: ${session.score}`, 'success');
  navigateTo('dashboard');
}

// Mode selector (in today page)
function setTodayMode(mode) {
  APP.currentMode = mode;
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  renderExerciseList(getModifiedExercises(getTodayRoutine().exercises, mode));
}

// ═══════════════════════════════════════════════════════════
// 9. TIMER MODAL
// ═══════════════════════════════════════════════════════════

function openTimerModal(exerciseIndex) {
  const exercises = APP.currentRoutineExercises;
  if (exerciseIndex >= exercises.length) return;

  APP.currentExerciseIndex = exerciseIndex;
  APP.currentExercise = exercises[exerciseIndex];
  APP.currentSeriesCount = 0;
  APP.timerSeconds = 0;
  APP.timerRunning = false;
  APP.timerState = 'idle';

  if (APP.timerInterval) clearInterval(APP.timerInterval);

  updateTimerModal();
  document.getElementById('timer-modal').classList.remove('hidden');
}

function updateTimerModal() {
  const ex = APP.currentExercise;
  const exercises = APP.currentRoutineExercises;
  const idx = APP.currentExerciseIndex;

  document.getElementById('modal-ex-order').textContent = `Ejercicio ${idx + 1} de ${exercises.length}`;
  document.getElementById('modal-ex-name').textContent = ex.name;

  const repStr = ex.reps ? `${ex.reps} reps` : (ex.duration || '');
  document.getElementById('modal-ex-target').textContent = `${ex.sets} series · ${repStr}`;
  document.getElementById('modal-rest-val').textContent = ex.rest ? `${ex.rest}s` : '—';
  document.getElementById('modal-reps-val').textContent = repStr;
  document.getElementById('modal-ex-progress').textContent = `${idx + 1}/${exercises.length}`;

  // Update series circle
  document.getElementById('series-current').textContent = APP.currentSeriesCount;
  document.getElementById('series-total').textContent = ex.sets;

  const seriesPct = APP.currentSeriesCount / ex.sets;
  const circumference = 427;
  document.getElementById('series-fill').style.strokeDashoffset =
    circumference - (circumference * seriesPct);

  // Timer display
  document.getElementById('timer-display').textContent = formatTime(APP.timerSeconds);

  // State badge
  const badge = document.getElementById('modal-state-badge');
  if (APP.timerState === 'work') {
    badge.className = 'state-badge work';
    badge.innerHTML = '<div class="state-indicator"></div>TRABAJO';
  } else if (APP.timerState === 'rest') {
    badge.className = 'state-badge rest';
    badge.innerHTML = '<div class="state-indicator"></div>DESCANSO';
  } else if (APP.timerState === 'done') {
    badge.className = 'state-badge done';
    badge.innerHTML = '<div class="state-indicator"></div>COMPLETADO';
  } else {
    badge.className = 'state-badge work';
    badge.innerHTML = '<div class="state-indicator" style="animation:none;opacity:0.3"></div>LISTO';
  }

  // Button states
  const btnStart = document.getElementById('modal-btn-start');
  const btnCompleteSet = document.getElementById('modal-btn-complete-set');
  const btnRest = document.getElementById('modal-btn-rest');

  if (APP.timerState === 'idle') {
    btnStart.disabled = false;
    btnStart.textContent = '▶ Iniciar serie';
    btnCompleteSet.disabled = true;
    btnRest.disabled = true;
  } else if (APP.timerState === 'work') {
    btnStart.textContent = APP.timerRunning ? '⏸ Pausar' : '▶ Continuar';
    btnStart.disabled = false;
    btnCompleteSet.disabled = false;
    btnRest.disabled = true;
  } else if (APP.timerState === 'rest') {
    btnStart.textContent = APP.timerRunning ? '⏸ Pausar descanso' : '▶ Continuar';
    btnStart.disabled = false;
    btnCompleteSet.disabled = true;
    btnRest.disabled = true;
  } else if (APP.timerState === 'done') {
    btnStart.disabled = true;
    btnStart.textContent = '✓ Ejercicio listo';
    btnCompleteSet.disabled = true;
    btnRest.disabled = true;
  }
}

function startTimer() {
  if (APP.timerState === 'idle') {
    APP.timerState = 'work';
    APP.timerSeconds = 0;
    APP.timerRunning = true;
  } else {
    APP.timerRunning = !APP.timerRunning;
  }

  if (APP.timerRunning) {
    APP.timerInterval = setInterval(() => {
      APP.timerSeconds++;
      document.getElementById('timer-display').textContent = formatTime(APP.timerSeconds);
      // Timer circle: just keep counting up (no max for open timer)
    }, 1000);
  } else {
    clearInterval(APP.timerInterval);
  }

  updateTimerModal();
}

function resetTimer() {
  clearInterval(APP.timerInterval);
  APP.timerSeconds = 0;
  APP.timerRunning = false;
  document.getElementById('timer-display').textContent = '00:00';
  document.getElementById('timer-fill').style.strokeDashoffset = '0';
}

function completeSet() {
  clearInterval(APP.timerInterval);
  APP.timerRunning = false;
  APP.currentSeriesCount++;

  if (APP.currentSeriesCount >= APP.currentExercise.sets) {
    APP.timerState = 'done';
    markExerciseDone(APP.currentExercise.id);
    showToast('✓ Ejercicio completado!', 'success');
  } else {
    APP.timerState = 'rest';
    // Auto-start rest countdown
    const restSecs = APP.currentExercise.rest || 60;
    APP.timerSeconds = restSecs;
    document.getElementById('timer-display').textContent = formatTime(APP.timerSeconds);
    APP.timerRunning = true;
    APP.timerInterval = setInterval(() => {
      APP.timerSeconds--;
      document.getElementById('timer-display').textContent = formatTime(Math.max(0, APP.timerSeconds));
      if (APP.timerSeconds <= 0) {
        clearInterval(APP.timerInterval);
        APP.timerRunning = false;
        APP.timerState = 'work';
        APP.timerSeconds = 0;
        showToast('¡Descanso terminado! Siguiente serie', 'success');
        updateTimerModal();
      }
    }, 1000);
  }

  updateTimerModal();
}

function nextExercise() {
  clearInterval(APP.timerInterval);
  APP.timerRunning = false;
  const nextIdx = APP.currentExerciseIndex + 1;
  if (nextIdx < APP.currentRoutineExercises.length) {
    openTimerModal(nextIdx);
  } else {
    document.getElementById('timer-modal').classList.add('hidden');
    showToast('🎉 ¡Rutina completada!', 'success');
  }
}

function closeTimerModal() {
  clearInterval(APP.timerInterval);
  APP.timerRunning = false;
  document.getElementById('timer-modal').classList.add('hidden');
  renderToday();
}

// ═══════════════════════════════════════════════════════════
// 10. DASHBOARD
// ═══════════════════════════════════════════════════════════

function renderDashboard() {
  const todaySession = getTodaySession();
  const streak = getStreak();
  const weekStats = getWeekStats();

  // Score circle
  const score = todaySession ? todaySession.score : 0;
  const scoreLabel = todaySession ? getScoreLabel(score) : 'Sin sesión aún';
  const scoreColor = getScoreColor(score);

  const circumference = 553; // 2π * 88
  const offset = circumference - (circumference * score / 100);
  const fill = document.getElementById('main-score-fill');
  fill.className = `fill ${scoreColor}`;

  // Animate after paint
  setTimeout(() => { fill.style.strokeDashoffset = offset; }, 100);

  document.getElementById('main-score-num').textContent = score > 0 ? score : '—';
  document.getElementById('main-score-num').style.color = `var(--${scoreColor})`;
  document.getElementById('dash-score-status').textContent = scoreLabel;

  // Phrase
  document.getElementById('dash-phrase').textContent = getPhrase(score);

  // Cards
  const minutes = todaySession ? todaySession.minutesTracker : 0;
  const targetMin = APP.settings.dailyMinTarget;
  document.getElementById('dc-time').textContent = minutes;
  document.getElementById('dc-time-sub').textContent = `de ${targetMin} min meta`;
  document.getElementById('dc-time-bar').style.width = Math.min(100, (minutes / targetMin) * 100) + '%';

  const series = todaySession ? todaySession.seriesCompleted : 0;
  const targetSeries = APP.settings.dailySeriesTarget;
  document.getElementById('dc-series').textContent = series;
  document.getElementById('dc-series-sub').textContent = `completadas hoy`;
  document.getElementById('dc-series-bar').style.width = Math.min(100, (series / targetSeries) * 100) + '%';

  const exDone = todaySession ? todaySession.exercisesCompleted : 0;
  const exTotal = todaySession ? todaySession.exercisesTotal : getTodayRoutine().exercises.length;
  document.getElementById('dc-exercises').textContent = exDone;
  document.getElementById('dc-exercises-sub').textContent = `de ${exTotal} planificados`;
  document.getElementById('dc-exercises-bar').style.width = exTotal > 0 ? Math.min(100, (exDone / exTotal) * 100) + '%' : '0%';

  // Energy
  const energy = todaySession ? todaySession.energy : 0;
  document.getElementById('dc-energy').textContent = energy || '—';
  document.getElementById('dc-energy-label').textContent = energy ? getEnergyLabel(energy) : 'Sin registrar';
  document.querySelectorAll('.energy-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i < energy);
  });

  // Carga
  const routine = getTodayRoutine();
  ['suave', 'moderada', 'alta'].forEach(c => {
    const el = document.getElementById('carga-' + c);
    el.className = 'carga-pill ' + c + (routine.load === c ? ' active' : '');
  });

  // Streak & week
  document.getElementById('dc-streak').textContent = streak;
  document.getElementById('dc-week-label').textContent = `Esta semana: ${weekStats.daysCompleted}/7`;

  // Week dots
  const weekDots = getWeekDots();
  const weekDotsEl = document.getElementById('dc-week-dots');
  weekDotsEl.innerHTML = weekDots.map(d =>
    `<div class="week-dot${d.done ? ' done' : ''}${d.isToday ? ' today' : ''}"></div>`
  ).join('');

  // 7-day history
  const last7 = getLast7Days();
  document.getElementById('dc-history').innerHTML = last7.map(day => `
    <div class="history-day${day.session ? ' done' : ''}${day.isToday ? ' today' : ''}">
      <div class="hd-day">${day.label}</div>
      <div class="hd-score">${day.session ? day.session.score : '—'}</div>
      <div class="hd-dot"></div>
    </div>
  `).join('');

  // Recommendations
  const recs = getRecommendations();
  document.getElementById('dc-recs').innerHTML = recs.map(r => `
    <div style="padding:8px 0;border-bottom:1px solid var(--border);font-family:var(--font-body);font-size:13px;color:var(--text-secondary);line-height:1.4">
      → ${r}
    </div>
  `).join('');
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

  const session = {
    id: 'session_' + Date.now(),
    date: getTodayKey(),
    routineName: routine.name,
    sessionType,
    energy,
    minutesTracker: minutes,
    seriesCompleted: APP.completedExercises.size * 3, // estimate
    exercisesCompleted: APP.completedExercises.size,
    exercisesTotal: routine.exercises.length,
    routineCompleted: minutes >= parseInt(routine.duration) || APP.completedExercises.size >= routine.exercises.length * 0.8,
    pain,
    notes,
    score: 0
  };
  session.score = calculateScore(session);

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
  document.getElementById('modal-btn-rest').addEventListener('click', () => {
    // Manual rest
    APP.timerState = 'rest';
    APP.timerSeconds = APP.currentExercise.rest || 60;
    APP.timerRunning = true;
    clearInterval(APP.timerInterval);
    APP.timerInterval = setInterval(() => {
      APP.timerSeconds--;
      document.getElementById('timer-display').textContent = formatTime(Math.max(0, APP.timerSeconds));
      if (APP.timerSeconds <= 0) {
        clearInterval(APP.timerInterval);
        APP.timerRunning = false;
        APP.timerState = 'work';
        APP.timerSeconds = 0;
        updateTimerModal();
        showToast('¡Vuelve al trabajo!', 'success');
      }
    }, 1000);
    updateTimerModal();
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
