'use strict';

const PRINCIPLES = [
  {
    "id": 1,
    "title": "Conoce tu fuerza real",
    "category": "Información",
    "doctrine": "Principio 1: antes de actuar, convierte la situación en una lectura clara de información, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en información, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre conoce tu fuerza real en las próximas 24 horas?"
  },
  {
    "id": 2,
    "title": "Conoce la fuerza contraria",
    "category": "Terreno",
    "doctrine": "Principio 2: antes de actuar, convierte la situación en una lectura clara de terreno, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en terreno, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre conoce la fuerza contraria en las próximas 24 horas?"
  },
  {
    "id": 3,
    "title": "Elige el terreno",
    "category": "Recursos",
    "doctrine": "Principio 3: antes de actuar, convierte la situación en una lectura clara de recursos, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en recursos, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre elige el terreno en las próximas 24 horas?"
  },
  {
    "id": 4,
    "title": "No compitas en desventaja",
    "category": "Timing",
    "doctrine": "Principio 4: antes de actuar, convierte la situación en una lectura clara de timing, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en timing, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no compitas en desventaja en las próximas 24 horas?"
  },
  {
    "id": 5,
    "title": "Gana antes de moverte",
    "category": "Liderazgo",
    "doctrine": "Principio 5: antes de actuar, convierte la situación en una lectura clara de liderazgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en liderazgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre gana antes de moverte en las próximas 24 horas?"
  },
  {
    "id": 6,
    "title": "Reduce el coste de la victoria",
    "category": "Negociación",
    "doctrine": "Principio 6: antes de actuar, convierte la situación en una lectura clara de negociación, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en negociación, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre reduce el coste de la victoria en las próximas 24 horas?"
  },
  {
    "id": 7,
    "title": "Convierte el tiempo en aliado",
    "category": "Riesgo",
    "doctrine": "Principio 7: antes de actuar, convierte la situación en una lectura clara de riesgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en riesgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre convierte el tiempo en aliado en las próximas 24 horas?"
  },
  {
    "id": 8,
    "title": "No confundas impulso con decisión",
    "category": "Disciplina",
    "doctrine": "Principio 8: antes de actuar, convierte la situación en una lectura clara de disciplina, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en disciplina, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no confundas impulso con decisión en las próximas 24 horas?"
  },
  {
    "id": 9,
    "title": "Ataca el plan, no la persona",
    "category": "Competencia",
    "doctrine": "Principio 9: antes de actuar, convierte la situación en una lectura clara de competencia, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en competencia, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre ataca el plan, no la persona en las próximas 24 horas?"
  },
  {
    "id": 10,
    "title": "Protege tu línea de suministro",
    "category": "Ejecución",
    "doctrine": "Principio 10: antes de actuar, convierte la situación en una lectura clara de ejecución, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en ejecución, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre protege tu línea de suministro en las próximas 24 horas?"
  },
  {
    "id": 11,
    "title": "Haz visible lo importante",
    "category": "Información",
    "doctrine": "Principio 11: antes de actuar, convierte la situación en una lectura clara de información, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en información, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre haz visible lo importante en las próximas 24 horas?"
  },
  {
    "id": 12,
    "title": "Oculta tu intención táctica",
    "category": "Terreno",
    "doctrine": "Principio 12: antes de actuar, convierte la situación en una lectura clara de terreno, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en terreno, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre oculta tu intención táctica en las próximas 24 horas?"
  },
  {
    "id": 13,
    "title": "No luches por orgullo",
    "category": "Recursos",
    "doctrine": "Principio 13: antes de actuar, convierte la situación en una lectura clara de recursos, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en recursos, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no luches por orgullo en las próximas 24 horas?"
  },
  {
    "id": 14,
    "title": "Divide problemas grandes",
    "category": "Timing",
    "doctrine": "Principio 14: antes de actuar, convierte la situación en una lectura clara de timing, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en timing, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre divide problemas grandes en las próximas 24 horas?"
  },
  {
    "id": 15,
    "title": "Cierra rutas de desgaste",
    "category": "Liderazgo",
    "doctrine": "Principio 15: antes de actuar, convierte la situación en una lectura clara de liderazgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en liderazgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre cierra rutas de desgaste en las próximas 24 horas?"
  },
  {
    "id": 16,
    "title": "Usa la calma como ventaja",
    "category": "Negociación",
    "doctrine": "Principio 16: antes de actuar, convierte la situación en una lectura clara de negociación, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en negociación, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre usa la calma como ventaja en las próximas 24 horas?"
  },
  {
    "id": 17,
    "title": "Exige información verificable",
    "category": "Riesgo",
    "doctrine": "Principio 17: antes de actuar, convierte la situación en una lectura clara de riesgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en riesgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre exige información verificable en las próximas 24 horas?"
  },
  {
    "id": 18,
    "title": "Mide el precio de cada paso",
    "category": "Disciplina",
    "doctrine": "Principio 18: antes de actuar, convierte la situación en una lectura clara de disciplina, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en disciplina, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre mide el precio de cada paso en las próximas 24 horas?"
  },
  {
    "id": 19,
    "title": "Cambia el campo de juego",
    "category": "Competencia",
    "doctrine": "Principio 19: antes de actuar, convierte la situación en una lectura clara de competencia, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en competencia, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre cambia el campo de juego en las próximas 24 horas?"
  },
  {
    "id": 20,
    "title": "No anuncies lo que aún no puedes sostener",
    "category": "Ejecución",
    "doctrine": "Principio 20: antes de actuar, convierte la situación en una lectura clara de ejecución, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en ejecución, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no anuncies lo que aún no puedes sostener en las próximas 24 horas?"
  },
  {
    "id": 21,
    "title": "Fortalece la posición antes del avance",
    "category": "Información",
    "doctrine": "Principio 21: antes de actuar, convierte la situación en una lectura clara de información, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en información, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre fortalece la posición antes del avance en las próximas 24 horas?"
  },
  {
    "id": 22,
    "title": "Haz que la retirada sea digna",
    "category": "Terreno",
    "doctrine": "Principio 22: antes de actuar, convierte la situación en una lectura clara de terreno, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en terreno, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre haz que la retirada sea digna en las próximas 24 horas?"
  },
  {
    "id": 23,
    "title": "Evalúa el ánimo del equipo",
    "category": "Recursos",
    "doctrine": "Principio 23: antes de actuar, convierte la situación en una lectura clara de recursos, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en recursos, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre evalúa el ánimo del equipo en las próximas 24 horas?"
  },
  {
    "id": 24,
    "title": "Escucha los silencios",
    "category": "Timing",
    "doctrine": "Principio 24: antes de actuar, convierte la situación en una lectura clara de timing, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en timing, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre escucha los silencios en las próximas 24 horas?"
  },
  {
    "id": 25,
    "title": "No premies el caos",
    "category": "Liderazgo",
    "doctrine": "Principio 25: antes de actuar, convierte la situación en una lectura clara de liderazgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en liderazgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no premies el caos en las próximas 24 horas?"
  },
  {
    "id": 26,
    "title": "Elige una batalla decisiva",
    "category": "Negociación",
    "doctrine": "Principio 26: antes de actuar, convierte la situación en una lectura clara de negociación, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en negociación, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre elige una batalla decisiva en las próximas 24 horas?"
  },
  {
    "id": 27,
    "title": "Evita la guerra larga",
    "category": "Riesgo",
    "doctrine": "Principio 27: antes de actuar, convierte la situación en una lectura clara de riesgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en riesgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre evita la guerra larga en las próximas 24 horas?"
  },
  {
    "id": 28,
    "title": "Actúa cuando el rival se expone",
    "category": "Disciplina",
    "doctrine": "Principio 28: antes de actuar, convierte la situación en una lectura clara de disciplina, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en disciplina, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre actúa cuando el rival se expone en las próximas 24 horas?"
  },
  {
    "id": 29,
    "title": "Protege tu reputación",
    "category": "Competencia",
    "doctrine": "Principio 29: antes de actuar, convierte la situación en una lectura clara de competencia, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en competencia, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre protege tu reputación en las próximas 24 horas?"
  },
  {
    "id": 30,
    "title": "No confundas visibilidad con poder",
    "category": "Ejecución",
    "doctrine": "Principio 30: antes de actuar, convierte la situación en una lectura clara de ejecución, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en ejecución, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no confundas visibilidad con poder en las próximas 24 horas?"
  },
  {
    "id": 31,
    "title": "Calcula el peor caso",
    "category": "Información",
    "doctrine": "Principio 31: antes de actuar, convierte la situación en una lectura clara de información, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en información, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre calcula el peor caso en las próximas 24 horas?"
  },
  {
    "id": 32,
    "title": "Diseña dos salidas",
    "category": "Terreno",
    "doctrine": "Principio 32: antes de actuar, convierte la situación en una lectura clara de terreno, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en terreno, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre diseña dos salidas en las próximas 24 horas?"
  },
  {
    "id": 33,
    "title": "Usa recursos pequeños con precisión",
    "category": "Recursos",
    "doctrine": "Principio 33: antes de actuar, convierte la situación en una lectura clara de recursos, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en recursos, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre usa recursos pequeños con precisión en las próximas 24 horas?"
  },
  {
    "id": 34,
    "title": "Crea ventaja acumulativa",
    "category": "Timing",
    "doctrine": "Principio 34: antes de actuar, convierte la situación en una lectura clara de timing, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en timing, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre crea ventaja acumulativa en las próximas 24 horas?"
  },
  {
    "id": 35,
    "title": "No ataques sin mapa",
    "category": "Liderazgo",
    "doctrine": "Principio 35: antes de actuar, convierte la situación en una lectura clara de liderazgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en liderazgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no ataques sin mapa en las próximas 24 horas?"
  },
  {
    "id": 36,
    "title": "Entrena antes de necesitarlo",
    "category": "Negociación",
    "doctrine": "Principio 36: antes de actuar, convierte la situación en una lectura clara de negociación, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en negociación, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre entrena antes de necesitarlo en las próximas 24 horas?"
  },
  {
    "id": 37,
    "title": "Revisa las señales débiles",
    "category": "Riesgo",
    "doctrine": "Principio 37: antes de actuar, convierte la situación en una lectura clara de riesgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en riesgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre revisa las señales débiles en las próximas 24 horas?"
  },
  {
    "id": 38,
    "title": "Usa preguntas como exploración",
    "category": "Disciplina",
    "doctrine": "Principio 38: antes de actuar, convierte la situación en una lectura clara de disciplina, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en disciplina, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre usa preguntas como exploración en las próximas 24 horas?"
  },
  {
    "id": 39,
    "title": "No escales por ansiedad",
    "category": "Competencia",
    "doctrine": "Principio 39: antes de actuar, convierte la situación en una lectura clara de competencia, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en competencia, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no escales por ansiedad en las próximas 24 horas?"
  },
  {
    "id": 40,
    "title": "Haz simple la orden",
    "category": "Ejecución",
    "doctrine": "Principio 40: antes de actuar, convierte la situación en una lectura clara de ejecución, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en ejecución, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre haz simple la orden en las próximas 24 horas?"
  },
  {
    "id": 41,
    "title": "Reduce fricción interna",
    "category": "Información",
    "doctrine": "Principio 41: antes de actuar, convierte la situación en una lectura clara de información, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en información, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre reduce fricción interna en las próximas 24 horas?"
  },
  {
    "id": 42,
    "title": "Mantén reservas",
    "category": "Terreno",
    "doctrine": "Principio 42: antes de actuar, convierte la situación en una lectura clara de terreno, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en terreno, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre mantén reservas en las próximas 24 horas?"
  },
  {
    "id": 43,
    "title": "No agotes al mejor recurso",
    "category": "Recursos",
    "doctrine": "Principio 43: antes de actuar, convierte la situación en una lectura clara de recursos, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en recursos, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no agotes al mejor recurso en las próximas 24 horas?"
  },
  {
    "id": 44,
    "title": "Observa el ritmo contrario",
    "category": "Timing",
    "doctrine": "Principio 44: antes de actuar, convierte la situación en una lectura clara de timing, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en timing, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre observa el ritmo contrario en las próximas 24 horas?"
  },
  {
    "id": 45,
    "title": "Haz que el rival se canse solo",
    "category": "Liderazgo",
    "doctrine": "Principio 45: antes de actuar, convierte la situación en una lectura clara de liderazgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en liderazgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre haz que el rival se canse solo en las próximas 24 horas?"
  },
  {
    "id": 46,
    "title": "Sé flexible sin ser errático",
    "category": "Negociación",
    "doctrine": "Principio 46: antes de actuar, convierte la situación en una lectura clara de negociación, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en negociación, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre sé flexible sin ser errático en las próximas 24 horas?"
  },
  {
    "id": 47,
    "title": "Pacta desde la claridad",
    "category": "Riesgo",
    "doctrine": "Principio 47: antes de actuar, convierte la situación en una lectura clara de riesgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en riesgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre pacta desde la claridad en las próximas 24 horas?"
  },
  {
    "id": 48,
    "title": "No negocies contra ti mismo",
    "category": "Disciplina",
    "doctrine": "Principio 48: antes de actuar, convierte la situación en una lectura clara de disciplina, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en disciplina, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no negocies contra ti mismo en las próximas 24 horas?"
  },
  {
    "id": 49,
    "title": "Separa hechos de narrativas",
    "category": "Competencia",
    "doctrine": "Principio 49: antes de actuar, convierte la situación en una lectura clara de competencia, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en competencia, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre separa hechos de narrativas en las próximas 24 horas?"
  },
  {
    "id": 50,
    "title": "Prioriza el centro de gravedad",
    "category": "Ejecución",
    "doctrine": "Principio 50: antes de actuar, convierte la situación en una lectura clara de ejecución, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en ejecución, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre prioriza el centro de gravedad en las próximas 24 horas?"
  },
  {
    "id": 51,
    "title": "Identifica el punto que sostiene todo",
    "category": "Información",
    "doctrine": "Principio 51: antes de actuar, convierte la situación en una lectura clara de información, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en información, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre identifica el punto que sostiene todo en las próximas 24 horas?"
  },
  {
    "id": 52,
    "title": "No protejas sistemas rotos",
    "category": "Terreno",
    "doctrine": "Principio 52: antes de actuar, convierte la situación en una lectura clara de terreno, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en terreno, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no protejas sistemas rotos en las próximas 24 horas?"
  },
  {
    "id": 53,
    "title": "Convierte límites en reglas",
    "category": "Recursos",
    "doctrine": "Principio 53: antes de actuar, convierte la situación en una lectura clara de recursos, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en recursos, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre convierte límites en reglas en las próximas 24 horas?"
  },
  {
    "id": 54,
    "title": "Mide moral antes de carga",
    "category": "Timing",
    "doctrine": "Principio 54: antes de actuar, convierte la situación en una lectura clara de timing, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en timing, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre mide moral antes de carga en las próximas 24 horas?"
  },
  {
    "id": 55,
    "title": "No des batalla en niebla",
    "category": "Liderazgo",
    "doctrine": "Principio 55: antes de actuar, convierte la situación en una lectura clara de liderazgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en liderazgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no des batalla en niebla en las próximas 24 horas?"
  },
  {
    "id": 56,
    "title": "Construye inteligencia previa",
    "category": "Negociación",
    "doctrine": "Principio 56: antes de actuar, convierte la situación en una lectura clara de negociación, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en negociación, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre construye inteligencia previa en las próximas 24 horas?"
  },
  {
    "id": 57,
    "title": "Corta dependencia crítica",
    "category": "Riesgo",
    "doctrine": "Principio 57: antes de actuar, convierte la situación en una lectura clara de riesgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en riesgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre corta dependencia crítica en las próximas 24 horas?"
  },
  {
    "id": 58,
    "title": "Sincroniza acciones",
    "category": "Disciplina",
    "doctrine": "Principio 58: antes de actuar, convierte la situación en una lectura clara de disciplina, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en disciplina, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre sincroniza acciones en las próximas 24 horas?"
  },
  {
    "id": 59,
    "title": "Cierra puertas a la improvisación",
    "category": "Competencia",
    "doctrine": "Principio 59: antes de actuar, convierte la situación en una lectura clara de competencia, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en competencia, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre cierra puertas a la improvisación en las próximas 24 horas?"
  },
  {
    "id": 60,
    "title": "Haz reversible lo incierto",
    "category": "Ejecución",
    "doctrine": "Principio 60: antes de actuar, convierte la situación en una lectura clara de ejecución, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en ejecución, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre haz reversible lo incierto en las próximas 24 horas?"
  },
  {
    "id": 61,
    "title": "No gastes fuerza en símbolos",
    "category": "Información",
    "doctrine": "Principio 61: antes de actuar, convierte la situación en una lectura clara de información, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en información, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no gastes fuerza en símbolos en las próximas 24 horas?"
  },
  {
    "id": 62,
    "title": "Crea opciones antes de elegir",
    "category": "Terreno",
    "doctrine": "Principio 62: antes de actuar, convierte la situación en una lectura clara de terreno, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en terreno, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre crea opciones antes de elegir en las próximas 24 horas?"
  },
  {
    "id": 63,
    "title": "Lee incentivos",
    "category": "Recursos",
    "doctrine": "Principio 63: antes de actuar, convierte la situación en una lectura clara de recursos, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en recursos, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre lee incentivos en las próximas 24 horas?"
  },
  {
    "id": 64,
    "title": "Define victoria mínima",
    "category": "Timing",
    "doctrine": "Principio 64: antes de actuar, convierte la situación en una lectura clara de timing, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en timing, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre define victoria mínima en las próximas 24 horas?"
  },
  {
    "id": 65,
    "title": "Define derrota aceptable",
    "category": "Liderazgo",
    "doctrine": "Principio 65: antes de actuar, convierte la situación en una lectura clara de liderazgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en liderazgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre define derrota aceptable en las próximas 24 horas?"
  },
  {
    "id": 66,
    "title": "No sobrecargues el frente",
    "category": "Negociación",
    "doctrine": "Principio 66: antes de actuar, convierte la situación en una lectura clara de negociación, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en negociación, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no sobrecargues el frente en las próximas 24 horas?"
  },
  {
    "id": 67,
    "title": "Usa el margen como oxígeno",
    "category": "Riesgo",
    "doctrine": "Principio 67: antes de actuar, convierte la situación en una lectura clara de riesgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en riesgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre usa el margen como oxígeno en las próximas 24 horas?"
  },
  {
    "id": 68,
    "title": "Premia la disciplina",
    "category": "Disciplina",
    "doctrine": "Principio 68: antes de actuar, convierte la situación en una lectura clara de disciplina, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en disciplina, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre premia la disciplina en las próximas 24 horas?"
  },
  {
    "id": 69,
    "title": "Haz auditoría de supuestos",
    "category": "Competencia",
    "doctrine": "Principio 69: antes de actuar, convierte la situación en una lectura clara de competencia, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en competencia, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre haz auditoría de supuestos en las próximas 24 horas?"
  },
  {
    "id": 70,
    "title": "Cuida el timing del mensaje",
    "category": "Ejecución",
    "doctrine": "Principio 70: antes de actuar, convierte la situación en una lectura clara de ejecución, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en ejecución, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre cuida el timing del mensaje en las próximas 24 horas?"
  },
  {
    "id": 71,
    "title": "Aísla el conflicto",
    "category": "Información",
    "doctrine": "Principio 71: antes de actuar, convierte la situación en una lectura clara de información, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en información, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre aísla el conflicto en las próximas 24 horas?"
  },
  {
    "id": 72,
    "title": "Evita multiplicar enemigos",
    "category": "Terreno",
    "doctrine": "Principio 72: antes de actuar, convierte la situación en una lectura clara de terreno, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en terreno, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre evita multiplicar enemigos en las próximas 24 horas?"
  },
  {
    "id": 73,
    "title": "Aprende del primer contacto",
    "category": "Recursos",
    "doctrine": "Principio 73: antes de actuar, convierte la situación en una lectura clara de recursos, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en recursos, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre aprende del primer contacto en las próximas 24 horas?"
  },
  {
    "id": 74,
    "title": "Usa pruebas pequeñas",
    "category": "Timing",
    "doctrine": "Principio 74: antes de actuar, convierte la situación en una lectura clara de timing, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en timing, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre usa pruebas pequeñas en las próximas 24 horas?"
  },
  {
    "id": 75,
    "title": "Convierte datos en decisión",
    "category": "Liderazgo",
    "doctrine": "Principio 75: antes de actuar, convierte la situación en una lectura clara de liderazgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en liderazgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre convierte datos en decisión en las próximas 24 horas?"
  },
  {
    "id": 76,
    "title": "No improvises la retirada",
    "category": "Negociación",
    "doctrine": "Principio 76: antes de actuar, convierte la situación en una lectura clara de negociación, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en negociación, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no improvises la retirada en las próximas 24 horas?"
  },
  {
    "id": 77,
    "title": "Haz visible el coste oculto",
    "category": "Riesgo",
    "doctrine": "Principio 77: antes de actuar, convierte la situación en una lectura clara de riesgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en riesgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre haz visible el coste oculto en las próximas 24 horas?"
  },
  {
    "id": 78,
    "title": "No confundas velocidad con prisa",
    "category": "Disciplina",
    "doctrine": "Principio 78: antes de actuar, convierte la situación en una lectura clara de disciplina, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en disciplina, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no confundas velocidad con prisa en las próximas 24 horas?"
  },
  {
    "id": 79,
    "title": "Piensa en cadenas",
    "category": "Competencia",
    "doctrine": "Principio 79: antes de actuar, convierte la situación en una lectura clara de competencia, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en competencia, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre piensa en cadenas en las próximas 24 horas?"
  },
  {
    "id": 80,
    "title": "No alimentes la resistencia",
    "category": "Ejecución",
    "doctrine": "Principio 80: antes de actuar, convierte la situación en una lectura clara de ejecución, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en ejecución, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no alimentes la resistencia en las próximas 24 horas?"
  },
  {
    "id": 81,
    "title": "Usa neutralidad táctica",
    "category": "Información",
    "doctrine": "Principio 81: antes de actuar, convierte la situación en una lectura clara de información, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en información, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre usa neutralidad táctica en las próximas 24 horas?"
  },
  {
    "id": 82,
    "title": "Construye confianza operacional",
    "category": "Terreno",
    "doctrine": "Principio 82: antes de actuar, convierte la situación en una lectura clara de terreno, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en terreno, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre construye confianza operacional en las próximas 24 horas?"
  },
  {
    "id": 83,
    "title": "Elimina ambigüedad dañina",
    "category": "Recursos",
    "doctrine": "Principio 83: antes de actuar, convierte la situación en una lectura clara de recursos, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en recursos, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre elimina ambigüedad dañina en las próximas 24 horas?"
  },
  {
    "id": 84,
    "title": "Da instrucciones con criterio",
    "category": "Timing",
    "doctrine": "Principio 84: antes de actuar, convierte la situación en una lectura clara de timing, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en timing, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre da instrucciones con criterio en las próximas 24 horas?"
  },
  {
    "id": 85,
    "title": "Haz que la victoria sea sostenible",
    "category": "Liderazgo",
    "doctrine": "Principio 85: antes de actuar, convierte la situación en una lectura clara de liderazgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en liderazgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre haz que la victoria sea sostenible en las próximas 24 horas?"
  },
  {
    "id": 86,
    "title": "Gestiona la fatiga",
    "category": "Negociación",
    "doctrine": "Principio 86: antes de actuar, convierte la situación en una lectura clara de negociación, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en negociación, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre gestiona la fatiga en las próximas 24 horas?"
  },
  {
    "id": 87,
    "title": "Evalúa el terreno emocional",
    "category": "Riesgo",
    "doctrine": "Principio 87: antes de actuar, convierte la situación en una lectura clara de riesgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en riesgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre evalúa el terreno emocional en las próximas 24 horas?"
  },
  {
    "id": 88,
    "title": "No luches en el relato del rival",
    "category": "Disciplina",
    "doctrine": "Principio 88: antes de actuar, convierte la situación en una lectura clara de disciplina, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en disciplina, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no luches en el relato del rival en las próximas 24 horas?"
  },
  {
    "id": 89,
    "title": "Controla el marco",
    "category": "Competencia",
    "doctrine": "Principio 89: antes de actuar, convierte la situación en una lectura clara de competencia, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en competencia, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre controla el marco en las próximas 24 horas?"
  },
  {
    "id": 90,
    "title": "Reduce ruido antes de decidir",
    "category": "Ejecución",
    "doctrine": "Principio 90: antes de actuar, convierte la situación en una lectura clara de ejecución, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en ejecución, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre reduce ruido antes de decidir en las próximas 24 horas?"
  },
  {
    "id": 91,
    "title": "Haz preguntas incómodas pronto",
    "category": "Información",
    "doctrine": "Principio 91: antes de actuar, convierte la situación en una lectura clara de información, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en información, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre haz preguntas incómodas pronto en las próximas 24 horas?"
  },
  {
    "id": 92,
    "title": "Asegura el flanco débil",
    "category": "Terreno",
    "doctrine": "Principio 92: antes de actuar, convierte la situación en una lectura clara de terreno, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en terreno, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre asegura el flanco débil en las próximas 24 horas?"
  },
  {
    "id": 93,
    "title": "Ordena prioridades",
    "category": "Recursos",
    "doctrine": "Principio 93: antes de actuar, convierte la situación en una lectura clara de recursos, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en recursos, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre ordena prioridades en las próximas 24 horas?"
  },
  {
    "id": 94,
    "title": "No persigas victorias vacías",
    "category": "Timing",
    "doctrine": "Principio 94: antes de actuar, convierte la situación en una lectura clara de timing, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en timing, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre no persigas victorias vacías en las próximas 24 horas?"
  },
  {
    "id": 95,
    "title": "Usa el aprendizaje como ventaja",
    "category": "Liderazgo",
    "doctrine": "Principio 95: antes de actuar, convierte la situación en una lectura clara de liderazgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en liderazgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre usa el aprendizaje como ventaja en las próximas 24 horas?"
  },
  {
    "id": 96,
    "title": "Anticipa la reacción",
    "category": "Negociación",
    "doctrine": "Principio 96: antes de actuar, convierte la situación en una lectura clara de negociación, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en negociación, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre anticipa la reacción en las próximas 24 horas?"
  },
  {
    "id": 97,
    "title": "Elige el ritmo",
    "category": "Riesgo",
    "doctrine": "Principio 97: antes de actuar, convierte la situación en una lectura clara de riesgo, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en riesgo, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre elige el ritmo en las próximas 24 horas?"
  },
  {
    "id": 98,
    "title": "Acumula pequeñas certezas",
    "category": "Disciplina",
    "doctrine": "Principio 98: antes de actuar, convierte la situación en una lectura clara de disciplina, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en disciplina, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre acumula pequeñas certezas en las próximas 24 horas?"
  },
  {
    "id": 99,
    "title": "Sostén la coherencia",
    "category": "Competencia",
    "doctrine": "Principio 99: antes de actuar, convierte la situación en una lectura clara de competencia, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en competencia, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre sostén la coherencia en las próximas 24 horas?"
  },
  {
    "id": 100,
    "title": "Cierra el ciclo con revisión",
    "category": "Ejecución",
    "doctrine": "Principio 100: antes de actuar, convierte la situación en una lectura clara de ejecución, coste, posición y consecuencia. La ventaja nace de comprender el sistema antes de empujarlo.",
    "modern": "Aplicación moderna: úsalo en trabajo, negocio, proyectos o conflictos para decidir con menos reacción. Enfoca la acción en ejecución, datos útiles y pasos que puedas sostener.",
    "question": "¿Qué dato o movimiento cambiaría tu decisión sobre cierra el ciclo con revisión en las próximas 24 horas?"
  }
];

const SCENARIOS = [
  {
    "id": 1,
    "title": "El rival con más presupuesto",
    "category": "Competencia",
    "text": "Te enfrentas a alguien con más visibilidad y recursos. Copiar su estrategia te llevaría a su terreno fuerte.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 2,
    "title": "Reunión que se vuelve hostil",
    "category": "Negociación",
    "text": "La otra parte presiona para que decidas rápido y aceptes condiciones ambiguas.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 3,
    "title": "Proyecto sin margen",
    "category": "Recursos",
    "text": "Tienes poco margen de tiempo, dinero o energía. Cualquier error se paga caro.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 4,
    "title": "Equipo agotado",
    "category": "Liderazgo",
    "text": "El equipo necesita dirección, pero también hay fatiga y señales de desconfianza.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 5,
    "title": "Oferta con presión artificial",
    "category": "Negociación",
    "text": "La otra parte presiona para que decidas rápido y aceptes condiciones ambiguas.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 6,
    "title": "Cliente que cambia el terreno",
    "category": "Terreno",
    "text": "Las reglas del entorno no están claras y parte del problema viene de jugar en el campo equivocado.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 7,
    "title": "Jefe pide resultado imposible",
    "category": "Riesgo",
    "text": "La decisión puede abrir una ventaja, pero también crear un coste difícil de revertir.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 8,
    "title": "Competidor copia tu idea",
    "category": "Competencia",
    "text": "Te enfrentas a alguien con más visibilidad y recursos. Copiar su estrategia te llevaría a su terreno fuerte.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 9,
    "title": "Crisis de reputación",
    "category": "Ejecución",
    "text": "La idea puede funcionar, pero solo si reduces complejidad y alineas a las personas correctas.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 10,
    "title": "Demasiadas prioridades",
    "category": "Disciplina",
    "text": "La presión emocional empuja a responder rápido, aunque el movimiento no esté calculado.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 11,
    "title": "Lanzamiento contra un gigante",
    "category": "Competencia",
    "text": "Te enfrentas a alguien con más visibilidad y recursos. Copiar su estrategia te llevaría a su terreno fuerte.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 12,
    "title": "Conflicto entre dos aliados",
    "category": "Liderazgo",
    "text": "El equipo necesita dirección, pero también hay fatiga y señales de desconfianza.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 13,
    "title": "Proveedor crítico falla",
    "category": "Recursos",
    "text": "Tienes poco margen de tiempo, dinero o energía. Cualquier error se paga caro.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 14,
    "title": "Datos incompletos",
    "category": "Información",
    "text": "Faltan datos críticos. Actuar ahora puede ser valentía o simple ceguera.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 15,
    "title": "Ventaja que caduca",
    "category": "Timing",
    "text": "Hay una ventana de oportunidad, pero moverse demasiado pronto puede revelar tu intención.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 16,
    "title": "Negociación salarial",
    "category": "Negociación",
    "text": "La otra parte presiona para que decidas rápido y aceptes condiciones ambiguas.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 17,
    "title": "Producto con críticas",
    "category": "Ejecución",
    "text": "La idea puede funcionar, pero solo si reduces complejidad y alineas a las personas correctas.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 18,
    "title": "Rival provoca públicamente",
    "category": "Disciplina",
    "text": "La presión emocional empuja a responder rápido, aunque el movimiento no esté calculado.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 19,
    "title": "Equipo dividido",
    "category": "Liderazgo",
    "text": "El equipo necesita dirección, pero también hay fatiga y señales de desconfianza.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 20,
    "title": "Plazo trampa",
    "category": "Riesgo",
    "text": "La decisión puede abrir una ventaja, pero también crear un coste difícil de revertir.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 21,
    "title": "Terreno legal ambiguo",
    "category": "Riesgo",
    "text": "La decisión puede abrir una ventaja, pero también crear un coste difícil de revertir.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 22,
    "title": "Nueva oportunidad confusa",
    "category": "Información",
    "text": "Faltan datos críticos. Actuar ahora puede ser valentía o simple ceguera.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 23,
    "title": "Demasiado éxito inicial",
    "category": "Disciplina",
    "text": "La presión emocional empuja a responder rápido, aunque el movimiento no esté calculado.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 24,
    "title": "Ataque frontal tentador",
    "category": "Competencia",
    "text": "Te enfrentas a alguien con más visibilidad y recursos. Copiar su estrategia te llevaría a su terreno fuerte.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 25,
    "title": "Alianza incómoda",
    "category": "Negociación",
    "text": "La otra parte presiona para que decidas rápido y aceptes condiciones ambiguas.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 26,
    "title": "Recursos mínimos",
    "category": "Recursos",
    "text": "Tienes poco margen de tiempo, dinero o energía. Cualquier error se paga caro.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 27,
    "title": "Mercado saturado",
    "category": "Terreno",
    "text": "Las reglas del entorno no están claras y parte del problema viene de jugar en el campo equivocado.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 28,
    "title": "Decisión bajo cansancio",
    "category": "Disciplina",
    "text": "La presión emocional empuja a responder rápido, aunque el movimiento no esté calculado.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 29,
    "title": "Cambio de reglas",
    "category": "Terreno",
    "text": "Las reglas del entorno no están claras y parte del problema viene de jugar en el campo equivocado.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 30,
    "title": "Fuga de talento",
    "category": "Liderazgo",
    "text": "El equipo necesita dirección, pero también hay fatiga y señales de desconfianza.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 31,
    "title": "Rumor que distorsiona",
    "category": "Información",
    "text": "Faltan datos críticos. Actuar ahora puede ser valentía o simple ceguera.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 32,
    "title": "Coste oculto",
    "category": "Riesgo",
    "text": "La decisión puede abrir una ventaja, pero también crear un coste difícil de revertir.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 33,
    "title": "Ventana de oportunidad",
    "category": "Timing",
    "text": "Hay una ventana de oportunidad, pero moverse demasiado pronto puede revelar tu intención.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 34,
    "title": "Guerra de precios",
    "category": "Competencia",
    "text": "Te enfrentas a alguien con más visibilidad y recursos. Copiar su estrategia te llevaría a su terreno fuerte.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 35,
    "title": "Objetivo mal definido",
    "category": "Ejecución",
    "text": "La idea puede funcionar, pero solo si reduces complejidad y alineas a las personas correctas.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 36,
    "title": "Plan demasiado complejo",
    "category": "Ejecución",
    "text": "La idea puede funcionar, pero solo si reduces complejidad y alineas a las personas correctas.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 37,
    "title": "Socio que retrasa",
    "category": "Negociación",
    "text": "La otra parte presiona para que decidas rápido y aceptes condiciones ambiguas.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 38,
    "title": "Victoria que desgasta",
    "category": "Recursos",
    "text": "Tienes poco margen de tiempo, dinero o energía. Cualquier error se paga caro.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 39,
    "title": "Presión por responder ya",
    "category": "Timing",
    "text": "Hay una ventana de oportunidad, pero moverse demasiado pronto puede revelar tu intención.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 40,
    "title": "Contrario imprevisible",
    "category": "Información",
    "text": "Faltan datos críticos. Actuar ahora puede ser valentía o simple ceguera.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 41,
    "title": "Cliente estratégico",
    "category": "Negociación",
    "text": "La otra parte presiona para que decidas rápido y aceptes condiciones ambiguas.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 42,
    "title": "Equipo nuevo",
    "category": "Liderazgo",
    "text": "El equipo necesita dirección, pero también hay fatiga y señales de desconfianza.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 43,
    "title": "Fallo público",
    "category": "Ejecución",
    "text": "La idea puede funcionar, pero solo si reduces complejidad y alineas a las personas correctas.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 44,
    "title": "Proyecto heredado",
    "category": "Terreno",
    "text": "Las reglas del entorno no están claras y parte del problema viene de jugar en el campo equivocado.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 45,
    "title": "Objetivo rival desconocido",
    "category": "Información",
    "text": "Faltan datos críticos. Actuar ahora puede ser valentía o simple ceguera.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 46,
    "title": "Sobrecarga de tareas",
    "category": "Disciplina",
    "text": "La presión emocional empuja a responder rápido, aunque el movimiento no esté calculado.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 47,
    "title": "Decisión irreversible",
    "category": "Riesgo",
    "text": "La decisión puede abrir una ventaja, pero también crear un coste difícil de revertir.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 48,
    "title": "Presupuesto recortado",
    "category": "Recursos",
    "text": "Tienes poco margen de tiempo, dinero o energía. Cualquier error se paga caro.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 49,
    "title": "Competencia interna",
    "category": "Liderazgo",
    "text": "El equipo necesita dirección, pero también hay fatiga y señales de desconfianza.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  },
  {
    "id": 50,
    "title": "Cierre de campaña",
    "category": "Timing",
    "text": "Hay una ventana de oportunidad, pero moverse demasiado pronto puede revelar tu intención.",
    "options": [
      {
        "text": "Atacar de frente para mostrar fuerza.",
        "score": 0,
        "feedback": "Mala lectura: mostrar fuerza puede tranquilizar el ego, pero también aumenta el desgaste y te coloca donde el otro espera."
      },
      {
        "text": "Pausar, recopilar dos datos críticos y redefinir el terreno.",
        "score": 2,
        "feedback": "Buena decisión: reduces niebla, cambias el campo de juego y evitas pagar por una victoria impulsiva."
      },
      {
        "text": "Imitar lo que hace la parte contraria.",
        "score": 0,
        "feedback": "Débil: copiar suele reforzar la ventaja del rival, porque él ya domina ese terreno."
      },
      {
        "text": "Buscar una vía indirecta con bajo coste y aprendizaje rápido.",
        "score": 3,
        "feedback": "Excelente: prueba pequeña, coste limitado y ventaja por información antes de comprometer recursos grandes."
      }
    ]
  }
];

const QUIZ = [
  {
    "id": 1,
    "category": "Información",
    "question": "Según el principio “Conoce tu fuerza real”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 2,
    "category": "Terreno",
    "question": "Según el principio “Conoce la fuerza contraria”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 3,
    "category": "Recursos",
    "question": "Según el principio “Elige el terreno”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 4,
    "category": "Timing",
    "question": "Según el principio “No compitas en desventaja”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 5,
    "category": "Liderazgo",
    "question": "Según el principio “Gana antes de moverte”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 6,
    "category": "Negociación",
    "question": "Según el principio “Reduce el coste de la victoria”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 7,
    "category": "Riesgo",
    "question": "Según el principio “Convierte el tiempo en aliado”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 8,
    "category": "Disciplina",
    "question": "Según el principio “No confundas impulso con decisión”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 9,
    "category": "Competencia",
    "question": "Según el principio “Ataca el plan, no la persona”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 10,
    "category": "Ejecución",
    "question": "Según el principio “Protege tu línea de suministro”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 11,
    "category": "Información",
    "question": "Según el principio “Haz visible lo importante”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 12,
    "category": "Terreno",
    "question": "Según el principio “Oculta tu intención táctica”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 13,
    "category": "Recursos",
    "question": "Según el principio “No luches por orgullo”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 14,
    "category": "Timing",
    "question": "Según el principio “Divide problemas grandes”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 15,
    "category": "Liderazgo",
    "question": "Según el principio “Cierra rutas de desgaste”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 16,
    "category": "Negociación",
    "question": "Según el principio “Usa la calma como ventaja”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 17,
    "category": "Riesgo",
    "question": "Según el principio “Exige información verificable”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 18,
    "category": "Disciplina",
    "question": "Según el principio “Mide el precio de cada paso”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 19,
    "category": "Competencia",
    "question": "Según el principio “Cambia el campo de juego”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 20,
    "category": "Ejecución",
    "question": "Según el principio “No anuncies lo que aún no puedes sostener”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 21,
    "category": "Información",
    "question": "Según el principio “Fortalece la posición antes del avance”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 22,
    "category": "Terreno",
    "question": "Según el principio “Haz que la retirada sea digna”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 23,
    "category": "Recursos",
    "question": "Según el principio “Evalúa el ánimo del equipo”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 24,
    "category": "Timing",
    "question": "Según el principio “Escucha los silencios”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 25,
    "category": "Liderazgo",
    "question": "Según el principio “No premies el caos”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 26,
    "category": "Negociación",
    "question": "Según el principio “Elige una batalla decisiva”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 27,
    "category": "Riesgo",
    "question": "Según el principio “Evita la guerra larga”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 28,
    "category": "Disciplina",
    "question": "Según el principio “Actúa cuando el rival se expone”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 29,
    "category": "Competencia",
    "question": "Según el principio “Protege tu reputación”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 30,
    "category": "Ejecución",
    "question": "Según el principio “No confundas visibilidad con poder”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 31,
    "category": "Información",
    "question": "Según el principio “Calcula el peor caso”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 32,
    "category": "Terreno",
    "question": "Según el principio “Diseña dos salidas”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 33,
    "category": "Recursos",
    "question": "Según el principio “Usa recursos pequeños con precisión”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 34,
    "category": "Timing",
    "question": "Según el principio “Crea ventaja acumulativa”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 35,
    "category": "Liderazgo",
    "question": "Según el principio “No ataques sin mapa”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 36,
    "category": "Negociación",
    "question": "Según el principio “Entrena antes de necesitarlo”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 37,
    "category": "Riesgo",
    "question": "Según el principio “Revisa las señales débiles”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 38,
    "category": "Disciplina",
    "question": "Según el principio “Usa preguntas como exploración”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 39,
    "category": "Competencia",
    "question": "Según el principio “No escales por ansiedad”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 40,
    "category": "Ejecución",
    "question": "Según el principio “Haz simple la orden”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 41,
    "category": "Información",
    "question": "Según el principio “Reduce fricción interna”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 42,
    "category": "Terreno",
    "question": "Según el principio “Mantén reservas”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 43,
    "category": "Recursos",
    "question": "Según el principio “No agotes al mejor recurso”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 44,
    "category": "Timing",
    "question": "Según el principio “Observa el ritmo contrario”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 45,
    "category": "Liderazgo",
    "question": "Según el principio “Haz que el rival se canse solo”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 46,
    "category": "Negociación",
    "question": "Según el principio “Sé flexible sin ser errático”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 47,
    "category": "Riesgo",
    "question": "Según el principio “Pacta desde la claridad”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 48,
    "category": "Disciplina",
    "question": "Según el principio “No negocies contra ti mismo”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 49,
    "category": "Competencia",
    "question": "Según el principio “Separa hechos de narrativas”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 50,
    "category": "Ejecución",
    "question": "Según el principio “Prioriza el centro de gravedad”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 51,
    "category": "Información",
    "question": "Según el principio “Identifica el punto que sostiene todo”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 52,
    "category": "Terreno",
    "question": "Según el principio “No protejas sistemas rotos”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 53,
    "category": "Recursos",
    "question": "Según el principio “Convierte límites en reglas”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 54,
    "category": "Timing",
    "question": "Según el principio “Mide moral antes de carga”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 55,
    "category": "Liderazgo",
    "question": "Según el principio “No des batalla en niebla”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 56,
    "category": "Negociación",
    "question": "Según el principio “Construye inteligencia previa”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 57,
    "category": "Riesgo",
    "question": "Según el principio “Corta dependencia crítica”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 58,
    "category": "Disciplina",
    "question": "Según el principio “Sincroniza acciones”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 59,
    "category": "Competencia",
    "question": "Según el principio “Cierra puertas a la improvisación”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 60,
    "category": "Ejecución",
    "question": "Según el principio “Haz reversible lo incierto”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 61,
    "category": "Información",
    "question": "Según el principio “No gastes fuerza en símbolos”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 62,
    "category": "Terreno",
    "question": "Según el principio “Crea opciones antes de elegir”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 63,
    "category": "Recursos",
    "question": "Según el principio “Lee incentivos”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 64,
    "category": "Timing",
    "question": "Según el principio “Define victoria mínima”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 65,
    "category": "Liderazgo",
    "question": "Según el principio “Define derrota aceptable”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 66,
    "category": "Negociación",
    "question": "Según el principio “No sobrecargues el frente”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 67,
    "category": "Riesgo",
    "question": "Según el principio “Usa el margen como oxígeno”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 68,
    "category": "Disciplina",
    "question": "Según el principio “Premia la disciplina”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 69,
    "category": "Competencia",
    "question": "Según el principio “Haz auditoría de supuestos”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 70,
    "category": "Ejecución",
    "question": "Según el principio “Cuida el timing del mensaje”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 71,
    "category": "Información",
    "question": "Según el principio “Aísla el conflicto”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 72,
    "category": "Terreno",
    "question": "Según el principio “Evita multiplicar enemigos”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 73,
    "category": "Recursos",
    "question": "Según el principio “Aprende del primer contacto”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 74,
    "category": "Timing",
    "question": "Según el principio “Usa pruebas pequeñas”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 75,
    "category": "Liderazgo",
    "question": "Según el principio “Convierte datos en decisión”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 76,
    "category": "Negociación",
    "question": "Según el principio “No improvises la retirada”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 77,
    "category": "Riesgo",
    "question": "Según el principio “Haz visible el coste oculto”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 78,
    "category": "Disciplina",
    "question": "Según el principio “No confundas velocidad con prisa”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 79,
    "category": "Competencia",
    "question": "Según el principio “Piensa en cadenas”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 80,
    "category": "Ejecución",
    "question": "Según el principio “No alimentes la resistencia”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 81,
    "category": "Información",
    "question": "Según el principio “Usa neutralidad táctica”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 82,
    "category": "Terreno",
    "question": "Según el principio “Construye confianza operacional”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 83,
    "category": "Recursos",
    "question": "Según el principio “Elimina ambigüedad dañina”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 84,
    "category": "Timing",
    "question": "Según el principio “Da instrucciones con criterio”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 85,
    "category": "Liderazgo",
    "question": "Según el principio “Haz que la victoria sea sostenible”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 86,
    "category": "Negociación",
    "question": "Según el principio “Gestiona la fatiga”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 87,
    "category": "Riesgo",
    "question": "Según el principio “Evalúa el terreno emocional”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 88,
    "category": "Disciplina",
    "question": "Según el principio “No luches en el relato del rival”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 89,
    "category": "Competencia",
    "question": "Según el principio “Controla el marco”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 90,
    "category": "Ejecución",
    "question": "Según el principio “Reduce ruido antes de decidir”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 91,
    "category": "Información",
    "question": "Según el principio “Haz preguntas incómodas pronto”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 92,
    "category": "Terreno",
    "question": "Según el principio “Asegura el flanco débil”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 93,
    "category": "Recursos",
    "question": "Según el principio “Ordena prioridades”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 94,
    "category": "Timing",
    "question": "Según el principio “No persigas victorias vacías”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 95,
    "category": "Liderazgo",
    "question": "Según el principio “Usa el aprendizaje como ventaja”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 96,
    "category": "Negociación",
    "question": "Según el principio “Anticipa la reacción”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 97,
    "category": "Riesgo",
    "question": "Según el principio “Elige el ritmo”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 98,
    "category": "Disciplina",
    "question": "Según el principio “Acumula pequeñas certezas”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 99,
    "category": "Competencia",
    "question": "Según el principio “Sostén la coherencia”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  },
  {
    "id": 100,
    "category": "Ejecución",
    "question": "Según el principio “Cierra el ciclo con revisión”, ¿qué acción suele ser más estratégica?",
    "choices": [
      "Responder rápido para no parecer débil.",
      "Actuar solo después de leer objetivo, terreno, coste y datos críticos.",
      "Copiar al rival para neutralizarlo.",
      "Elegir la opción más visible aunque sea cara."
    ],
    "answer": 1,
    "explanation": "La estrategia no premia la reacción automática: premia claridad, terreno favorable, coste sostenible e información suficiente."
  }
];


const CAMPAIGN = [
  {
    id: 1,
    chapter: 'I · Cálculo inicial',
    title: 'La sala de mapas',
    briefing: 'Te encargan salvar un proyecto que ya consume energía, dinero y reputación. Todos piden acción inmediata, pero el terreno aún está borroso.',
    objective: 'Decidir si conviene actuar, observar o rediseñar el objetivo antes del primer movimiento.',
    options: [
      { text: 'Ordenar una auditoría rápida de información, costes y aliados antes de prometer nada.', score: 3, effects: { information: 12, resources: -3, momentum: 4, honor: 4 }, result: 'Creas una imagen real del campo. Pierdes unas horas, pero ganas control y evitas una promesa suicida.' },
      { text: 'Anunciar una ofensiva total para levantar la moral del equipo.', score: 1, effects: { information: -6, resources: -10, momentum: 8, honor: 2 }, result: 'La moral sube un día, pero ahora todos esperan resultados sin que sepas dónde está el cuello de botella.' },
      { text: 'Cancelar el proyecto sin estudiar el terreno.', score: 0, effects: { information: -4, resources: 8, momentum: -10, honor: -8 }, result: 'Ahorras recursos, pero transmites miedo. Has evitado una batalla sin demostrar criterio.' }
    ]
  },
  {
    id: 2,
    chapter: 'II · Coste de la guerra',
    title: 'La campaña demasiado larga',
    briefing: 'Tus recursos empiezan a agotarse. El equipo todavía puede avanzar, pero cada semana perdida hace más cara la victoria.',
    objective: 'Reducir desgaste sin abandonar la misión.',
    options: [
      { text: 'Recortar objetivos secundarios y concentrar recursos en una victoria pequeña pero verificable.', score: 3, effects: { resources: 10, momentum: 8, honor: 3, information: 2 }, result: 'El frente se estrecha y el equipo recupera tracción. Menos gloria, más avance real.' },
      { text: 'Mantener todos los objetivos para no parecer débil.', score: 1, effects: { resources: -14, momentum: -4, honor: 1, information: 0 }, result: 'La ambición intacta impresiona por fuera, pero dentro aumenta el cansancio.' },
      { text: 'Pedir más recursos sin cambiar el plan.', score: 1, effects: { resources: 4, momentum: -3, honor: -3, information: -2 }, result: 'Consigues aire temporal, pero no arreglas la fuga principal.' }
    ]
  },
  {
    id: 3,
    chapter: 'III · Atacar la estrategia',
    title: 'El rival visible',
    briefing: 'Un competidor te supera en tamaño y ruido. Imitarlo parece tentador, pero su fuerza principal es justo donde tú eres débil.',
    objective: 'Derrotar el plan del rival sin chocar con su músculo.',
    options: [
      { text: 'Buscar un nicho ignorado y cambiar el criterio de comparación.', score: 3, effects: { information: 6, resources: 3, momentum: 10, honor: 5 }, result: 'Sales de su campo fuerte. Ahora el rival necesita perseguirte, no al revés.' },
      { text: 'Copiar sus mensajes, estética y ritmo.', score: 0, effects: { information: -3, resources: -8, momentum: -5, honor: -6 }, result: 'Te vuelves una sombra de alguien más fuerte. La comparación te destruye.' },
      { text: 'Atacar públicamente al rival para ganar atención.', score: 1, effects: { momentum: 4, honor: -10, resources: -5, information: -2 }, result: 'Consigues ruido, pero conviertes el conflicto en el terreno favorito del contrario.' }
    ]
  },
  {
    id: 4,
    chapter: 'IV · Disposición táctica',
    title: 'La fortaleza antes del ataque',
    briefing: 'Hay una oportunidad clara, pero tu retaguardia tiene fallos: documentación incompleta, dependencias frágiles y roles confusos.',
    objective: 'Fortificar antes de exponerte.',
    options: [
      { text: 'Cerrar vulnerabilidades críticas antes de lanzar.', score: 3, effects: { resources: -4, information: 8, momentum: 4, honor: 5 }, result: 'El lanzamiento tarda un poco más, pero ya no depende de suerte.' },
      { text: 'Lanzar ahora y corregir mientras todo arde.', score: 1, effects: { momentum: 8, resources: -12, information: -2, honor: -4 }, result: 'Ganas velocidad, pero abres demasiados frentes a la vez.' },
      { text: 'Esperar hasta que todo sea perfecto.', score: 1, effects: { resources: -5, momentum: -10, information: 3, honor: 0 }, result: 'La prudencia se transforma en parálisis. Ningún terreno será perfecto.' }
    ]
  },
  {
    id: 5,
    chapter: 'V · Energía',
    title: 'El golpe coordinado',
    briefing: 'El equipo trabaja, pero cada persona empuja en una dirección distinta. Hay esfuerzo, no energía concentrada.',
    objective: 'Transformar fuerza dispersa en impulso común.',
    options: [
      { text: 'Definir una prioridad única, dueño claro y cadencia de revisión.', score: 3, effects: { momentum: 12, resources: 4, honor: 4, information: 4 }, result: 'La energía deja de fugarse. El equipo sabe qué proteger y qué ignorar.' },
      { text: 'Pedir más esfuerzo general.', score: 0, effects: { resources: -10, momentum: -6, honor: -3, information: 0 }, result: 'Más presión sin dirección solo aumenta el desgaste.' },
      { text: 'Delegar todo sin seguimiento para demostrar confianza.', score: 1, effects: { momentum: -3, information: -8, resources: 2, honor: 2 }, result: 'La confianza sin claridad se convierte en niebla operativa.' }
    ]
  },
  {
    id: 6,
    chapter: 'VI · Vacío y lleno',
    title: 'El hueco en la muralla',
    briefing: 'La fuerza contraria está blindada en lo visible, pero descuida tiempos de respuesta, soporte y pequeñas necesidades reales.',
    objective: 'Atacar el vacío, no la armadura.',
    options: [
      { text: 'Mapear frustraciones pequeñas y convertirlas en ventaja concreta.', score: 3, effects: { information: 10, momentum: 8, resources: 2, honor: 4 }, result: 'Encuentras un punto blando. No parecía heroico, pero era decisivo.' },
      { text: 'Competir en el atributo donde el rival presume más.', score: 0, effects: { resources: -12, momentum: -5, information: -2, honor: -2 }, result: 'Has golpeado la parte más protegida de la muralla.' },
      { text: 'Esperar a que el rival cometa un error evidente.', score: 1, effects: { momentum: -7, resources: -2, information: 2, honor: 0 }, result: 'Esperar puede servir, pero sin exploración es pasividad disfrazada.' }
    ]
  },
  {
    id: 7,
    chapter: 'VII · Maniobra',
    title: 'El camino indirecto',
    briefing: 'El camino más corto está saturado. Llegarás antes solo si aceptas una ruta menos obvia.',
    objective: 'Ganar posición sin agotar al equipo.',
    options: [
      { text: 'Usar una ruta indirecta con hitos claros y bajo coste.', score: 3, effects: { resources: 6, momentum: 9, information: 4, honor: 3 }, result: 'La ruta parece humilde, pero coloca al equipo donde importa.' },
      { text: 'Forzar el camino directo porque es el más visible.', score: 1, effects: { resources: -10, momentum: 2, information: -2, honor: 1 }, result: 'Avanzas, pero pagando un peaje innecesario.' },
      { text: 'Cambiar de ruta cada vez que aparece resistencia.', score: 0, effects: { resources: -6, momentum: -9, information: -4, honor: -5 }, result: 'La maniobra sin disciplina se convierte en deriva.' }
    ]
  },
  {
    id: 8,
    chapter: 'VIII · Variación táctica',
    title: 'La regla que debe romperse',
    briefing: 'Una norma habitual funcionó antes, pero el contexto ha cambiado. Repetirla podría ser cómodo y peligroso.',
    objective: 'Adaptar sin perder coherencia.',
    options: [
      { text: 'Revisar la regla, conservar el principio y cambiar la ejecución.', score: 3, effects: { information: 8, honor: 5, momentum: 6, resources: 1 }, result: 'No traicionas la estrategia: la actualizas.' },
      { text: 'Repetir exactamente lo que funcionó en el pasado.', score: 1, effects: { information: -5, momentum: -2, resources: -4, honor: 1 }, result: 'La experiencia ayuda, pero usada sin lectura del terreno se vuelve lastre.' },
      { text: 'Cambiarlo todo para parecer innovador.', score: 0, effects: { information: -2, momentum: -6, resources: -8, honor: -5 }, result: 'Rompes continuidad sin crear ventaja.' }
    ]
  },
  {
    id: 9,
    chapter: 'IX · Marcha',
    title: 'Señales en el terreno',
    briefing: 'El entorno emite señales: retrasos, silencios, excusas, entusiasmo repentino. No todas significan lo que parecen.',
    objective: 'Leer señales antes de interpretar intenciones.',
    options: [
      { text: 'Separar hechos, patrones y suposiciones antes de decidir.', score: 3, effects: { information: 12, honor: 2, momentum: 3, resources: 2 }, result: 'La niebla baja. No sabes todo, pero dejas de inventar lo que falta.' },
      { text: 'Actuar según la primera impresión.', score: 0, effects: { information: -10, momentum: 2, honor: -4, resources: -4 }, result: 'La velocidad sin lectura convierte señales en ruido.' },
      { text: 'Ignorar las señales para no complicarte.', score: 1, effects: { information: -6, resources: 1, momentum: -4, honor: -1 }, result: 'Lo que no miras no desaparece; solo madura fuera de tu control.' }
    ]
  },
  {
    id: 10,
    chapter: 'X · Terreno',
    title: 'Terreno estrecho',
    briefing: 'El margen de error es pequeño. Una mala decisión bloqueará opciones futuras.',
    objective: 'Mantener salidas antes de comprometer todo.',
    options: [
      { text: 'Diseñar una prueba reversible con criterios de retirada.', score: 3, effects: { resources: 5, information: 8, momentum: 4, honor: 4 }, result: 'Avanzas sin hipotecar el futuro. Buena estrategia: movimiento con salida.' },
      { text: 'Apostarlo todo para evitar dudas.', score: 0, effects: { resources: -16, momentum: 6, honor: -6, information: -3 }, result: 'La épica no compensa quemar puentes necesarios.' },
      { text: 'No moverte hasta que el riesgo sea cero.', score: 1, effects: { momentum: -9, resources: -3, information: 1, honor: 0 }, result: 'Riesgo cero significa también aprendizaje cero.' }
    ]
  },
  {
    id: 11,
    chapter: 'XI · Nueve terrenos',
    title: 'Terreno de muerte',
    briefing: 'No quedan muchas salidas. La presión es real, pero también puede crear concentración absoluta.',
    objective: 'Convertir urgencia en foco, no en pánico.',
    options: [
      { text: 'Reducir la misión a una acción decisiva, asignar roles y ejecutar con revisión corta.', score: 3, effects: { momentum: 14, honor: 6, information: 3, resources: -3 }, result: 'La presión se ordena. La gente deja de debatir el miedo y empieza a actuar.' },
      { text: 'Abrir diez frentes para encontrar una salida por fuerza bruta.', score: 0, effects: { resources: -16, momentum: -8, information: -4, honor: -2 }, result: 'Multiplicas el caos justo cuando necesitabas foco.' },
      { text: 'Ocultar la gravedad para no preocupar al equipo.', score: 1, effects: { honor: -7, information: -5, momentum: -2, resources: 0 }, result: 'La calma falsa rompe confianza cuando la realidad aparece.' }
    ]
  },
  {
    id: 12,
    chapter: 'XII · Ataque con fuego',
    title: 'El recurso irreversible',
    briefing: 'Tienes una acción potente, pero casi irreversible: quemará relación, presupuesto o reputación si sale mal.',
    objective: 'Usar fuerza extrema solo con condiciones correctas.',
    options: [
      { text: 'Definir condiciones de uso, daño máximo aceptable y alternativa menos destructiva.', score: 3, effects: { information: 7, resources: 4, honor: 5, momentum: 3 }, result: 'Dominas el fuego porque primero delimitas el incendio.' },
      { text: 'Usarlo ya para demostrar determinación.', score: 0, effects: { resources: -14, honor: -10, momentum: 4, information: -3 }, result: 'La fuerza sin contención gana atención y pierde futuro.' },
      { text: 'Renunciar siempre a cualquier acción fuerte.', score: 1, effects: { honor: 2, momentum: -8, resources: 2, information: 0 }, result: 'La prudencia absoluta puede convertirse en impotencia.' }
    ]
  },
  {
    id: 13,
    chapter: 'XIII · Inteligencia',
    title: 'La red de información',
    briefing: 'La campaña llega al final. La diferencia entre victoria y desgaste depende de la calidad de tus fuentes.',
    objective: 'Cerrar la campaña con aprendizaje verificable y ventaja futura.',
    options: [
      { text: 'Crear una red de feedback: datos, personas honestas, revisión y memoria de decisiones.', score: 3, effects: { information: 14, honor: 6, resources: 4, momentum: 6 }, result: 'No solo resuelves esta campaña: construyes inteligencia para la siguiente.' },
      { text: 'Quedarte con la versión que confirma que tenías razón.', score: 0, effects: { information: -12, honor: -4, momentum: -2, resources: 0 }, result: 'La victoria aparente se pudre si no aprendes nada.' },
      { text: 'Delegar toda la información en una sola fuente cómoda.', score: 1, effects: { information: -6, resources: 2, honor: -2, momentum: 0 }, result: 'Una fuente única puede ser útil, pero también vuelve ciego el sistema.' }
    ]
  }
];


const STORAGE_KEY = 'sunTzuStrategyLabCampaign.v4';
const LEGACY_STORAGE_KEYS = ['sunTzuStrategyLabCampaign.v3'];
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const state = loadState();
let currentAnalysis = null;
let currentGeneral = null;
let currentScenario = null;
let currentQuestion = null;
let drawnCard = null;
let scenarioAnswered = false;
let questionAnswered = false;

function initialState(){return {skin:'obsidian',plans:[],journal:[],favorites:[],training:{answered:0,correct:0,seen:[],lastQuestionId:null},scenarios:{played:0,score:0,history:[],lastScenarioId:null},campaign:{current:1,completed:[],score:0,honor:50,information:50,resources:50,momentum:50,log:[],ending:''},daily:{date:'',done:false},stats:{clarity:20,discipline:20,info:20},meta:{version:4,storageWarning:false}};}
function safeJSON(value){try{return JSON.parse(value);}catch{return null;}}
function storageGet(key){try{return localStorage.getItem(key);}catch{return null;}}
function storageSet(key,value){try{localStorage.setItem(key,value);return true;}catch{return false;}}
function storageRemove(key){try{localStorage.removeItem(key);return true;}catch{return false;}}
function asArray(value){return Array.isArray(value)?value:[];}
function asObject(value){return value && typeof value==='object' && !Array.isArray(value) ? value : {};}
function asNumber(value, fallback=0, min=-Infinity, max=Infinity){const n=Number(value);return Number.isFinite(n)?clamp(n,min,max):fallback;}
function normalizeJournalItem(item={}){return {id:String(item.id||newId()),title:String(item.title||'Entrada sin título').slice(0,140),tags:String(item.tags||'').slice(0,160),body:String(item.body||'').slice(0,5000),createdAt:isValidDate(item.createdAt)?item.createdAt:new Date().toISOString()};}
function normalizePlan(plan={}){return {...plan,id:String(plan.id||newId()),title:String(plan.title||'Plan estratégico').slice(0,160),type:String(plan.type||'plan').slice(0,80),createdAt:isValidDate(plan.createdAt)?plan.createdAt:new Date().toISOString()};}
function normalizeState(input){const base=initialState(); const saved=asObject(input); const campaign=asObject(saved.campaign); return {
  ...base,
  skin:['obsidian','parchment','jade','crimson','midnight'].includes(saved.skin)?saved.skin:base.skin,
  plans:asArray(saved.plans).slice(0,150).map(normalizePlan),
  journal:asArray(saved.journal).slice(0,300).map(normalizeJournalItem),
  favorites:[...new Set(asArray(saved.favorites).map(Number).filter(id=>PRINCIPLES.some(p=>p.id===id)))].slice(0,100),
  training:{...base.training,...asObject(saved.training),answered:asNumber(asObject(saved.training).answered,0,0,100000),correct:asNumber(asObject(saved.training).correct,0,0,100000),seen:asArray(asObject(saved.training).seen).slice(-200)},
  scenarios:{...base.scenarios,...asObject(saved.scenarios),played:asNumber(asObject(saved.scenarios).played,0,0,100000),score:asNumber(asObject(saved.scenarios).score,0,0,300000),history:asArray(asObject(saved.scenarios).history).slice(0,60)},
  campaign:{...base.campaign,current:asNumber(campaign.current,1,1,CAMPAIGN.length+1),completed:[...new Set(asArray(campaign.completed).map(Number).filter(id=>id>=1&&id<=CAMPAIGN.length))],score:asNumber(campaign.score,0,0,CAMPAIGN.length*3),honor:asNumber(campaign.honor,50,0,100),information:asNumber(campaign.information,50,0,100),resources:asNumber(campaign.resources,50,0,100),momentum:asNumber(campaign.momentum,50,0,100),log:asArray(campaign.log).slice(0,80),ending:String(campaign.ending||'').slice(0,120)},
  daily:{...base.daily,...asObject(saved.daily)},
  stats:{clarity:asNumber(asObject(saved.stats).clarity,20,0,100),discipline:asNumber(asObject(saved.stats).discipline,20,0,100),info:asNumber(asObject(saved.stats).info,20,0,100)},
  meta:{...base.meta,...asObject(saved.meta),version:4}
};}
function loadState(){for(const key of [STORAGE_KEY,...LEGACY_STORAGE_KEYS]){const raw=storageGet(key);if(raw){return normalizeState(safeJSON(raw));}}return initialState();}
function saveState(){const ok=storageSet(STORAGE_KEY, JSON.stringify(state));if(!ok){state.meta.storageWarning=true;toast('No se pudo guardar: almacenamiento local bloqueado o lleno');}return ok;}
function newId(){return globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():String(Date.now()+Math.random()).replace('.','');}
function isValidDate(v){return typeof v==='string' && !Number.isNaN(Date.parse(v));}
function escapeHTML(v){return String(v ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));}
function nl2br(v){return escapeHTML(v).replace(/\n/g,'<br>');}
function clamp(n,min,max){return Math.max(min,Math.min(max,n));}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)];}
function pickWithoutLast(arr,lastId){const pool=arr.filter(x=>x.id!==lastId);return pick(pool.length?pool:arr);}
function todayKey(){return new Date().toISOString().slice(0,10);}
function toast(msg){const node=$('#toast');if(!node)return;node.textContent=msg;node.classList.add('show');clearTimeout(toast._timer);toast._timer=setTimeout(()=>node.classList.remove('show'),2200);}
function downloadFile(name, type, content){const blob=new Blob([content],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),250);}
function copyText(text){if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(()=>toast('Copiado al portapapeles')).catch(()=>fallbackCopyText(text));}else{fallbackCopyText(text);}}
function fallbackCopyText(text){const ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');ta.className='copy-buffer';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');toast('Copiado al portapapeles');}catch{toast('No se pudo copiar');}ta.remove();}

function init(){
  document.body.dataset.skin = state.skin || 'obsidian';
  $('#skinSelect').value = state.skin || 'obsidian';
  setupNavigation(); setupForms(); setupLibrary(); setupSimulator(); setupCampaign(); setupTraining(); setupJournal(); setupData(); setupDaily();
  renderAll();
  if('serviceWorker' in navigator && location.protocol !== 'file:'){navigator.serviceWorker.register('./sw.js').catch(()=>{});}
}
function setMenu(open){document.body.classList.toggle('menu-open',open);$('#menuToggle')?.setAttribute('aria-expanded',open?'true':'false');}
function setupNavigation(){
  $('#menuToggle')?.addEventListener('click',()=>setMenu(!document.body.classList.contains('menu-open')));
  $('#menuBackdrop')?.addEventListener('click',()=>setMenu(false));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false);});
  $$('#mainNav .nav-item').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.view)));
  $$('[data-go]').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.go)));
  $('#skinSelect').addEventListener('change',e=>{state.skin=e.target.value;document.body.dataset.skin=state.skin;saveState();});
  $('#resetDemoBtn').addEventListener('click',()=>{if(confirm('¿Seguro que quieres borrar progreso, diario y favoritos?')){storageRemove(STORAGE_KEY);LEGACY_STORAGE_KEYS.forEach(storageRemove);location.reload();}});
}
function showView(id){
  $$('.view').forEach(v=>v.classList.toggle('is-visible',v.id===id));
  $$('#mainNav .nav-item').forEach(b=>{const active=b.dataset.view===id;b.classList.toggle('is-active',active);b.setAttribute('aria-current',active?'page':'false');});
  setMenu(false); $('#main')?.focus({preventScroll:true});
  if(id==='library') renderLibrary(); if(id==='journal') renderJournal(); if(id==='campaign') renderCampaign(); if(id==='dashboard') renderDashboard();
}
function renderAll(){renderMetrics();renderDashboard();renderCampaign();renderFavorites();renderLibrary();renderJournal();renderScenarioHistory();drawRadar();}
function renderMetrics(){
  state.plans=asArray(state.plans); state.favorites=asArray(state.favorites); state.journal=asArray(state.journal);
  $('#metricPlans').textContent=state.plans.length;
  $('#metricFavs').textContent=state.favorites.length;
  const score = state.training.answered ? Math.round((state.training.correct/state.training.answered)*100) : 0;
  $('#metricScore').textContent=score+'%';
  $('#metricLevel').textContent = levelName();
  if($('#metricMissions')) $('#metricMissions').textContent = `${state.campaign.completed.length}/${CAMPAIGN.length}`;
  $('#meterClarity').value=state.stats.clarity; $('#meterDiscipline').value=state.stats.discipline; $('#meterInfo').value=state.stats.info;
  $('#meterScenarios').value=SCENARIOS.length?Math.min(100,Math.round((state.scenarios.played/SCENARIOS.length)*100)):0;
}
function levelName(){const points=state.training.correct+state.scenarios.score+state.plans.length*2+state.favorites.length+state.campaign.score; if(points>190)return 'Maestro'; if(points>120)return 'General'; if(points>70)return 'Estratega'; if(points>30)return 'Táctico'; return 'Aprendiz';}
function setupDaily(){ $('#completeDailyBtn').addEventListener('click',()=>{const alreadyDone=state.daily.date===todayKey()&&state.daily.done; state.daily={date:todayKey(),done:true}; if(!alreadyDone){state.stats.discipline=clamp(state.stats.discipline+4,0,100);} saveState(); renderDashboard(); renderMetrics(); toast(alreadyDone?'Reto diario ya estaba completado':'Reto diario completado');}); }
function renderDashboard(){
  const idx = Math.abs(hashCode(todayKey())) % PRINCIPLES.length; const p=PRINCIPLES[idx]; const done=state.daily.date===todayKey()&&state.daily.done;
  $('#dailyChallenge').innerHTML=`<p class="tag">${escapeHTML(p.category)}</p><h4>${escapeHTML(p.title)}</h4><p>${escapeHTML(p.question)}</p><p class="muted">${done?'Completado hoy.':'Escribe una respuesta breve en tu diario o aplica una microacción.'}</p>`;
  const recent=$('#recentPlans');
  if(!state.plans.length){recent.className='empty-state'; recent.textContent='Aún no hay análisis guardados.';} else {recent.className='compact-list'; recent.innerHTML=state.plans.slice(-5).reverse().map(plan=>`<div class="list-item"><strong>${escapeHTML(plan.title)}</strong><span class="muted">${escapeHTML(plan.type)} · ${new Date(plan.createdAt).toLocaleDateString()}</span></div>`).join('');}
  const weakness = weakestCategories(); $('#weaknessBox').innerHTML = weakness.map(w=>`<span class="tag">${escapeHTML(w)}</span>`).join('') || '<span class="muted">Entrena y simula para detectar patrones.</span>';
  drawRadar(); renderMetrics();
}
function hashCode(s){let h=0;for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0;}return h;}
function weakestCategories(){const counts={}; state.scenarios.history.forEach(h=>{if(h.score<2)counts[h.category]=(counts[h.category]||0)+1;}); return Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,6).map(x=>x[0]);}
function drawRadar(){const c=$('#radarCanvas'); if(!c)return; const ctx=c.getContext('2d'); const vals=[state.stats.clarity,state.stats.discipline,state.stats.info,Math.min(100,state.scenarios.score*4),Math.min(100,state.training.correct*2)]; const labels=['Claridad','Disciplina','Info','Simulación','Entreno']; ctx.clearRect(0,0,c.width,c.height); const cx=c.width/2, cy=c.height/2, r=78; ctx.strokeStyle='rgba(255,255,255,.22)'; ctx.fillStyle='rgba(255,255,255,.06)'; for(let ring=1;ring<=4;ring++){ctx.beginPath(); for(let i=0;i<5;i++){const a=-Math.PI/2+i*2*Math.PI/5; const rr=r*ring/4; const x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr; i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.closePath();ctx.stroke();} ctx.beginPath(); vals.forEach((v,i)=>{const a=-Math.PI/2+i*2*Math.PI/5; const rr=r*v/100; const x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr; i?ctx.lineTo(x,y):ctx.moveTo(x,y);}); ctx.closePath(); ctx.fillStyle='rgba(217,164,65,.28)'; ctx.strokeStyle='rgba(217,164,65,.85)'; ctx.lineWidth=2; ctx.fill(); ctx.stroke(); ctx.fillStyle=getComputedStyle(document.body).getPropertyValue('--muted'); ctx.font='12px system-ui'; labels.forEach((lab,i)=>{const a=-Math.PI/2+i*2*Math.PI/5; ctx.fillText(lab,cx+Math.cos(a)*(r+12)-24,cy+Math.sin(a)*(r+12)+4);});}

function setupForms(){
  $('#quickCardBtn').addEventListener('click',()=>{const p=pick(PRINCIPLES); $('#quickCardOutput').innerHTML=`<strong>${escapeHTML(p.title)}</strong><br>${escapeHTML(p.question)}`;});
  $('#strategyForm').addEventListener('submit',e=>{e.preventDefault(); currentAnalysis=buildAnalysis(); $('#analysisOutput').innerHTML=renderAnalysis(currentAnalysis); $('#analysisActions').classList.remove('hidden'); state.stats.clarity=clamp(state.stats.clarity+6,0,100); state.stats.info=clamp(state.stats.info+4,0,100); saveState(); renderMetrics();});
  $('#clearFormBtn').addEventListener('click',()=>{$('#strategyForm').reset(); $('#analysisOutput').className='empty-state'; $('#analysisOutput').textContent='Completa el formulario y pulsa Analizar.'; $('#analysisActions').classList.add('hidden'); currentAnalysis=null;});
  $('#saveAnalysisBtn').addEventListener('click',()=>savePlan(currentAnalysis,'Análisis estratégico'));
  $('#copyAnalysisBtn').addEventListener('click',()=> currentAnalysis && copyText(planToMarkdown(currentAnalysis)));
  $('#generalForm').addEventListener('submit',e=>{e.preventDefault(); currentGeneral=buildGeneralPlan(); $('#generalOutput').innerHTML=renderAnalysis(currentGeneral); $('#generalActions').classList.remove('hidden'); state.stats.clarity=clamp(state.stats.clarity+8,0,100); state.stats.discipline=clamp(state.stats.discipline+4,0,100); saveState(); renderMetrics();});
  $('#saveGeneralBtn').addEventListener('click',()=>savePlan(currentGeneral,'Plan del General'));
  $('#copyGeneralBtn').addEventListener('click',()=> currentGeneral && copyText(planToMarkdown(currentGeneral)));
}
function value(id){return $(id).value.trim();}
function buildAnalysis(){
  const type=value('#situationType'), objective=value('#objective'), resources=value('#resources'), constraints=value('#constraints'), opponent=value('#opponent'), unknowns=value('#unknowns');
  const urgency=Number(value('#urgency')), risk=Number(value('#risk')), advantage=Number(value('#advantage'));
  const posture = advantage<=2 && urgency<=3 ? 'Vía indirecta: evita choque frontal y busca terreno favorable.' : urgency>=4 && risk>=3 ? 'Acción rápida controlada: prueba pequeña, umbral de salida claro.' : risk<=2 ? 'Defensa inteligente: gana información antes de comprometer recursos.' : 'Avance medido: actúa por fases y revisa coste.';
  const ps = recommendPrinciples(type, urgency, risk, advantage);
  return {title: objective.slice(0,90)||'Análisis estratégico', type, createdAt:new Date().toISOString(), sections:[
    ['Diagnóstico', `La situación parece dominada por ${unknowns?'incertidumbre e información incompleta':'gestión de recursos y lectura del terreno'}. El objetivo debe protegerse sin convertir la decisión en una guerra larga.`],
    ['Postura recomendada', posture],
    ['Principios aplicables', ps.map(p=>p.title)],
    ['Plan en 5 pasos', [
      'Define victoria mínima y límite de pérdida aceptable.',
      unknowns ? 'Resuelve primero los datos críticos: '+unknowns : 'Recopila dos datos que puedan cambiar la decisión.',
      resources ? 'Usa tus recursos con precisión: '+resources : 'Reserva energía para el movimiento decisivo.',
      opponent ? 'No ataques la fuerza contraria directamente; busca su dependencia o punto débil: '+opponent : 'No luches contra una sombra: identifica la presión real.',
      'Ejecuta una prueba pequeña, mide resultado y decide si escalar, pivotar o retirarte.'
    ]],
    ['Riesgo a vigilar', constraints || 'Confundir movimiento con progreso y gastar recursos antes de leer el terreno.'],
    ['Alternativa', 'Retrasar la decisión solo si ese tiempo compra información real. Esperar sin aprender es pasividad; esperar para observar es estrategia.']
  ]};
}
function buildGeneralPlan(){
  const mission=value('#gMission'), terrain=value('#gTerrain'), resources=value('#gResources'), opposition=value('#gOpposition'), signals=value('#gSignals');
  const ps=[PRINCIPLES[2],PRINCIPLES[15],PRINCIPLES[30],PRINCIPLES[61],PRINCIPLES[99]];
  return {title: mission.slice(0,90)||'Plan del General', type:'Modo General', createdAt:new Date().toISOString(), sections:[
    ['Misión', mission], ['Lectura del terreno', terrain || 'Terreno insuficientemente definido: la primera acción es mapear reglas, actores y límites.'],
    ['Centro de gravedad', opposition ? `La fuerza contraria parece sostenerse en: ${opposition}. Busca dependencia, ritmo y coste oculto.` : 'Aún no hay fuerza contraria clara. No diseñes una batalla hasta identificar contra qué luchas.'],
    ['Principios maestros', ps.map(p=>p.title)],
    ['Plan del General', [
      'Establece victoria mínima, victoria ideal y derrota aceptable.',
      'Divide el terreno en zonas: fuerte, débil, incierta y neutral.',
      resources ? `Concentra recursos: ${resources}. No los repartas en demasiados frentes.` : 'Lista recursos reales y reservas antes de prometer movimiento.',
      'Ejecuta una maniobra indirecta de bajo coste para obtener información.',
      signals ? `Escala solo si aparecen estas señales: ${signals}.` : 'Define señales objetivas antes de escalar.'
    ]],
    ['Orden inmediata', 'En las próximas 24 horas, escribe el dato más incierto, la persona clave y el coste máximo tolerable. Sin esas tres piezas, no hay ofensiva seria.']
  ]};
}
function recommendPrinciples(type, urgency, risk, advantage){const map={negociacion:'Negociación',conflicto:'Disciplina',competencia:'Competencia',proyecto:'Ejecución',decision:'Riesgo',liderazgo:'Liderazgo'}; let pool=PRINCIPLES.filter(p=>p.category===map[type]); if(urgency>=4) pool=pool.concat(PRINCIPLES.filter(p=>p.category==='Timing')); if(risk<=2) pool=pool.concat(PRINCIPLES.filter(p=>p.category==='Información')); if(advantage<=2) pool=pool.concat(PRINCIPLES.filter(p=>p.category==='Terreno')); return [...new Map(pool.map(p=>[p.id,p])).values()].slice(0,5);}
function renderAnalysis(plan){return `<div class="analysis-block">${plan.sections.map(([title,content])=>`<section><h5>${escapeHTML(title)}</h5>${Array.isArray(content)?`<ol>${content.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ol>`:`<p>${nl2br(content)}</p>`}</section>`).join('')}</div>`;}
function savePlan(plan, fallbackTitle){if(!plan)return; const now=new Date().toISOString(); state.plans.push({...plan,id:newId(),title:plan.title||fallbackTitle,createdAt:now}); state.plans=state.plans.slice(-150); state.journal.unshift({id:newId(),title:plan.title||fallbackTitle,tags:plan.type,body:planToMarkdown(plan),createdAt:now}); state.journal=state.journal.slice(0,300); saveState(); renderAll(); toast('Guardado en planes y diario');}
function planToMarkdown(plan){return `# ${plan.title}\n\n${plan.sections.map(([t,c])=>`## ${t}\n${Array.isArray(c)?c.map(x=>`- ${x}`).join('\n'):c}`).join('\n\n')}`;}

function setupSimulator(){ $('#newScenarioBtn').addEventListener('click',loadScenario); loadScenario(); }
function loadScenario(){scenarioAnswered=false;currentScenario=pickWithoutLast(SCENARIOS,state.scenarios.lastScenarioId); state.scenarios.lastScenarioId=currentScenario.id; $('#scenarioTag').textContent=currentScenario.category; $('#scenarioTitle').textContent=currentScenario.title; $('#scenarioText').textContent=currentScenario.text; $('#scenarioFeedback').className='feedback-box'; $('#scenarioFeedback').textContent='Elige una respuesta.'; $('#scenarioOptions').innerHTML=currentScenario.options.map((op,i)=>`<button class="option-button" type="button" data-i="${i}">${escapeHTML(op.text)}</button>`).join(''); $$('#scenarioOptions .option-button').forEach(b=>b.addEventListener('click',()=>answerScenario(Number(b.dataset.i))));}
function answerScenario(i){if(scenarioAnswered)return;scenarioAnswered=true;const op=currentScenario.options[i]; if(!op)return; $$('#scenarioOptions .option-button').forEach(btn=>btn.disabled=true); state.scenarios.played++; state.scenarios.score+=op.score; state.scenarios.history.unshift({title:currentScenario.title,category:currentScenario.category,score:op.score,choice:op.text,date:new Date().toISOString()}); state.scenarios.history=state.scenarios.history.slice(0,30); if(op.score>=2) state.stats.discipline=clamp(state.stats.discipline+3,0,100); else state.stats.discipline=clamp(state.stats.discipline-1,0,100); saveState(); $('#scenarioFeedback').className='feedback-box '+(op.score>=2?'good':'bad'); $('#scenarioFeedback').innerHTML=`<strong>${op.score>=3?'Excelente':op.score>=2?'Correcto':'Débil'}.</strong> ${escapeHTML(op.feedback)}`; renderAll();}
function renderScenarioHistory(){const box=$('#scenarioHistory'); if(!box)return; if(!state.scenarios.history.length){box.className='compact-list empty-state'; box.textContent='Aún no has jugado escenarios.'; return;} box.className='compact-list'; box.innerHTML=state.scenarios.history.slice(0,8).map(h=>`<div class="list-item"><strong>${escapeHTML(h.title)}</strong><span class="muted">${escapeHTML(h.category)} · ${escapeHTML(h.score)}/3 · ${new Date(h.date).toLocaleDateString()}</span></div>`).join('');}


function setupCampaign(){
  $('#resetCampaignBtn')?.addEventListener('click',()=>{if(confirm('¿Reiniciar solo la campaña?')){state.campaign=initialState().campaign; saveState(); renderAll(); toast('Campaña reiniciada');}});
  $('#campaignJournalBtn')?.addEventListener('click',saveCampaignChronicle);
}
function currentCampaignMission(){return CAMPAIGN.find(m=>m.id===state.campaign.current) || CAMPAIGN[CAMPAIGN.length-1];}
function renderCampaign(){
  if(!$('#campaignMissionTitle')) return;
  const camp=state.campaign;
  ['honor','information','resources','momentum'].forEach(k=>{camp[k]=clamp(Number(camp[k] ?? 50),0,100);});
  $('#campHonor').value=camp.honor; $('#campHonorText').textContent=camp.honor;
  $('#campInfo').value=camp.information; $('#campInfoText').textContent=camp.information;
  $('#campResources').value=camp.resources; $('#campResourcesText').textContent=camp.resources;
  $('#campMomentum').value=camp.momentum; $('#campMomentumText').textContent=camp.momentum;
  $('#campaignRank').textContent='Rango: '+campaignRank();
  renderCampaignMap(); renderCampaignLog();
  if(camp.completed.length>=CAMPAIGN.length){renderCampaignEnding(); return;}
  const mission=currentCampaignMission();
  $('#campaignChapter').textContent=mission.chapter;
  $('#campaignMissionTitle').textContent=mission.title;
  $('#campaignBriefing').textContent=mission.briefing;
  $('#campaignObjective').innerHTML=`<strong>Objetivo:</strong> ${escapeHTML(mission.objective)}`;
  $('#campaignOptions').innerHTML=mission.options.map((op,i)=>`<button class="option-button" type="button" data-campaign-choice="${i}">${escapeHTML(op.text)}</button>`).join('');
  $$('[data-campaign-choice]').forEach(btn=>btn.addEventListener('click',()=>answerCampaign(Number(btn.dataset.campaignChoice))));
  $('#campaignOutcome').className='feedback-box';
  $('#campaignOutcome').textContent='Elige una orden para avanzar.';
}
function answerCampaign(choiceIndex){
  const mission=currentCampaignMission();
  const option=mission.options[choiceIndex];
  if(!mission || !option) return;
  Object.entries(option.effects||{}).forEach(([k,v])=>{state.campaign[k]=clamp(Number(state.campaign[k]||0)+v,0,100);});
  state.campaign.score += option.score;
  if(!state.campaign.completed.includes(mission.id)) state.campaign.completed.push(mission.id);
  state.campaign.log.unshift({missionId:mission.id,chapter:mission.chapter,title:mission.title,choice:option.text,result:option.result,score:option.score,effects:option.effects,date:new Date().toISOString()});
  state.campaign.log=state.campaign.log.slice(0,40);
  state.campaign.current = Math.min(CAMPAIGN.length+1, mission.id+1);
  state.stats.discipline=clamp(state.stats.discipline+(option.score>=2?4:-1),0,100);
  state.stats.info=clamp(state.stats.info+(option.effects?.information>0?3:0),0,100);
  saveState();
  $('#campaignOutcome').className='feedback-box '+(option.score>=2?'good':'bad');
  $('#campaignOutcome').innerHTML=`<strong>${option.score>=3?'Orden excelente':option.score>=2?'Orden sólida':'Orden peligrosa'}.</strong> ${escapeHTML(option.result)}<br><small>${campaignEffectText(option.effects)}</small><br><button class="secondary-button continue-campaign" type="button" id="continueCampaignBtn">Continuar campaña</button>`;
  $$('#campaignOptions .option-button').forEach(btn=>btn.disabled=true);
  $('#continueCampaignBtn')?.addEventListener('click',renderCampaign);
  renderMetrics(); renderCampaignMap(); renderCampaignLog();
}
function campaignEffectText(effects={}){return Object.entries(effects).map(([k,v])=>`${campaignLabel(k)} ${v>0?'+':''}${v}`).join(' · ');}
function campaignLabel(k){return ({honor:'Honor',information:'Información',resources:'Recursos',momentum:'Impulso'}[k]||k);}
function campaignRank(){
  const c=state.campaign; const total=(c.honor+c.information+c.resources+c.momentum)/4 + c.score*2;
  if(c.completed.length>=CAMPAIGN.length && total>=125) return 'Maestro de la campaña';
  if(total>=105) return 'General estratégico';
  if(total>=85) return 'Comandante táctico';
  if(total>=65) return 'Oficial prudente';
  return 'Aprendiz de estrategia';
}
function renderCampaignMap(){
  const box=$('#campaignMap'); if(!box) return;
  box.innerHTML=CAMPAIGN.map(m=>{
    const done=state.campaign.completed.includes(m.id); const active=state.campaign.current===m.id;
    return `<button class="mission-node ${done?'done':''} ${active?'active':''}" type="button" data-jump-mission="${m.id}" title="${escapeHTML(m.title)}"><span>${m.id}</span><small>${escapeHTML(m.chapter.split('·')[0].trim())}</small></button>`;
  }).join('');
  $$('[data-jump-mission]').forEach(btn=>btn.addEventListener('click',()=>{const id=Number(btn.dataset.jumpMission); if(id===state.campaign.current){renderCampaign();}else if(state.campaign.completed.includes(id)){toast('Misión ya completada: revisa la crónica');}else{toast('Completa las misiones anteriores para desbloquearla');}}));
}
function renderCampaignLog(){
  const box=$('#campaignLog'); if(!box) return;
  if(!state.campaign.log.length){box.className='compact-list empty-state'; box.textContent='Aún no hay movimientos.'; return;}
  box.className='compact-list';
  box.innerHTML=state.campaign.log.slice(0,10).map(item=>`<div class="list-item"><strong>${escapeHTML(item.chapter)} · ${escapeHTML(item.title)}</strong><span class="muted">${new Date(item.date).toLocaleString()} · ${escapeHTML(item.score)}/3</span><p>${escapeHTML(item.result)}</p></div>`).join('');
}
function renderCampaignEnding(){
  const c=state.campaign;
  const average=(c.honor+c.information+c.resources+c.momentum)/4;
  const title = average>=75 && c.score>=32 ? 'Final: victoria sin desgaste' : average>=55 ? 'Final: victoria costosa' : 'Final: supervivencia estratégica';
  const body = average>=75 && c.score>=32
    ? 'Has construido una campaña equilibrada: información alta, recursos vivos, honor intacto e impulso suficiente. No has ganado por fuerza bruta, sino por lectura del terreno.'
    : average>=55
      ? 'Has cumplido la campaña, pero con costes visibles. La victoria existe, aunque deja lecciones duras para la próxima operación.'
      : 'Has llegado al final, pero demasiado cerca del colapso. La campaña enseña que resistir no siempre equivale a vencer.';
  state.campaign.ending=title; saveState();
  $('#campaignChapter').textContent='Campaña completada';
  $('#campaignMissionTitle').textContent=title;
  $('#campaignBriefing').textContent=body;
  $('#campaignObjective').innerHTML=`<strong>Puntuación final:</strong> ${state.campaign.score}/${CAMPAIGN.length*3} · <strong>Rango:</strong> ${escapeHTML(campaignRank())}`;
  $('#campaignOptions').innerHTML='<button class="primary-button" type="button" id="saveFinalChronicleBtn">Guardar final en diario</button><button class="secondary-button" type="button" id="restartFinalCampaignBtn">Jugar otra vez</button>';
  $('#saveFinalChronicleBtn')?.addEventListener('click',saveCampaignChronicle);
  $('#restartFinalCampaignBtn')?.addEventListener('click',()=>{state.campaign=initialState().campaign; saveState(); renderAll();});
  $('#campaignOutcome').className='feedback-box good';
  $('#campaignOutcome').textContent='Has desbloqueado el final de campaña.';
}
function saveCampaignChronicle(){
  const c=state.campaign;
  const lines=[`# Crónica de campaña`, ``, `Rango: ${campaignRank()}`, `Puntuación: ${c.score}/${CAMPAIGN.length*3}`, `Honor: ${c.honor}`, `Información: ${c.information}`, `Recursos: ${c.resources}`, `Impulso: ${c.momentum}`, ``, ...c.log.slice().reverse().map(item=>`## ${item.chapter} · ${item.title}\nOrden: ${item.choice}\nResultado: ${item.result}\nPuntuación: ${escapeHTML(item.score)}/3`)];
  state.journal.unshift({id:(globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():String(Date.now())),title:'Crónica de campaña',tags:'campaña, estrategia, sun tzu',body:lines.join('\n'),createdAt:new Date().toISOString()});
  saveState(); renderJournal(); toast('Crónica guardada en diario');
}

function setupCards(){ }
function setupLibrary(){
  const cats=[...new Set(PRINCIPLES.map(p=>p.category))]; $('#categoryFilter').innerHTML='<option value="all">Todas las categorías</option>'+cats.map(c=>`<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
  $('#globalSearch').addEventListener('input',renderLibrary); $('#categoryFilter').addEventListener('change',renderLibrary);
  $('#drawCardBtn').addEventListener('click',drawCard);
}
function drawCard(){drawnCard=pick(PRINCIPLES); $('#drawnCard').innerHTML=`<p class="card-kicker">${escapeHTML(drawnCard.category)}</p><h4>${escapeHTML(drawnCard.title)}</h4><p>${escapeHTML(drawnCard.modern)}</p><small>${escapeHTML(drawnCard.question)}</small><button class="secondary-button" type="button" id="favDrawnBtn">Guardar favorita</button>`; $('#favDrawnBtn').addEventListener('click',()=>toggleFavorite(drawnCard.id));}
function toggleFavorite(id){if(state.favorites.includes(id)){state.favorites=state.favorites.filter(x=>x!==id);toast('Eliminada de favoritas');}else{state.favorites.push(id);toast('Guardada como favorita');}saveState();renderAll();}
function renderFavorites(){const box=$('#favoriteCards'); if(!box)return; if(!state.favorites.length){box.className='compact-list empty-state';box.textContent='Sin favoritas todavía.';return;} box.className='compact-list'; box.innerHTML=state.favorites.map(id=>PRINCIPLES.find(p=>p.id===id)).filter(Boolean).map(p=>`<div class="list-item"><strong>${escapeHTML(p.title)}</strong><span class="muted">${escapeHTML(p.category)}</span></div>`).join('');}
function renderLibrary(){const q=($('#globalSearch')?.value||'').toLowerCase(); const cat=$('#categoryFilter')?.value||'all'; const list=PRINCIPLES.filter(p=>(cat==='all'||p.category===cat)&&[p.title,p.category,p.doctrine,p.modern,p.question].join(' ').toLowerCase().includes(q)); $('#principleList').innerHTML=list.map(p=>`<article class="principle-card"><span class="tag">${escapeHTML(p.category)}</span><h4>${escapeHTML(p.id+'. '+p.title)}</h4><p>${escapeHTML(p.modern)}</p><p><strong>Pregunta:</strong> ${escapeHTML(p.question)}</p><button class="ghost-button" type="button" data-fav="${p.id}">${state.favorites.includes(p.id)?'Quitar favorita':'Guardar favorita'}</button></article>`).join('') || '<div class="empty-state">No hay resultados.</div>'; $$('[data-fav]').forEach(b=>b.addEventListener('click',()=>toggleFavorite(Number(b.dataset.fav))));}

function setupTraining(){ $('#nextQuestionBtn').addEventListener('click',loadQuestion); loadQuestion(); }
function loadQuestion(){questionAnswered=false;currentQuestion=pickWithoutLast(QUIZ,state.training.lastQuestionId); state.training.lastQuestionId=currentQuestion.id; $('#questionCategory').textContent=currentQuestion.category; $('#questionText').textContent=currentQuestion.question; $('#questionFeedback').className='feedback-box'; $('#questionFeedback').textContent='Elige una respuesta.'; $('#questionOptions').innerHTML=currentQuestion.choices.map((c,i)=>`<button class="option-button" type="button" data-i="${i}">${escapeHTML(c)}</button>`).join(''); $$('#questionOptions .option-button').forEach(b=>b.addEventListener('click',()=>answerQuestion(Number(b.dataset.i))));}
function answerQuestion(i){if(questionAnswered)return;questionAnswered=true; $$('#questionOptions .option-button').forEach(btn=>btn.disabled=true); const ok=i===currentQuestion.answer; state.training.answered++; if(ok){state.training.correct++; state.stats.info=clamp(state.stats.info+2,0,100);} state.training.seen.push(currentQuestion.id); state.training.seen=state.training.seen.slice(-100); saveState(); $('#questionFeedback').className='feedback-box '+(ok?'good':'bad'); $('#questionFeedback').innerHTML=`<strong>${ok?'Correcto':'Incorrecto'}.</strong> ${escapeHTML(currentQuestion.explanation)}`; renderAll();}

function setupJournal(){ $('#journalForm').addEventListener('submit',e=>{e.preventDefault(); state.journal.unshift({id:(globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():String(Date.now())),title:value('#journalTitleInput'),tags:value('#journalTagsInput'),body:value('#journalBodyInput'),createdAt:new Date().toISOString()}); e.target.reset(); state.stats.clarity=clamp(state.stats.clarity+3,0,100); saveState(); renderAll(); toast('Entrada guardada');}); $('#journalSearch').addEventListener('input',renderJournal); $('#exportMdBtn').addEventListener('click',()=>downloadFile('sun-tzu-diario.md','text/markdown',journalMarkdown()));}
function renderJournal(){const q=($('#journalSearch')?.value||'').toLowerCase(); state.journal=asArray(state.journal); const list=state.journal.filter(j=>[j.title,j.tags,j.body].join(' ').toLowerCase().includes(q)); const box=$('#journalEntries'); if(!list.length){box.className='compact-list empty-state';box.textContent='Sin entradas.';return;} box.className='compact-list'; box.innerHTML=list.map(j=>{const preview=String(j.body||'').slice(0,650)+(String(j.body||'').length>650?'…':''); return `<div class="list-item"><strong>${escapeHTML(j.title)}</strong><span class="muted">${escapeHTML(j.tags||'sin etiquetas')} · ${isValidDate(j.createdAt)?new Date(j.createdAt).toLocaleString():'sin fecha'}</span><p>${nl2br(preview)}</p><button class="ghost-button" data-del-journal="${escapeHTML(j.id)}" type="button">Eliminar</button></div>`;}).join(''); $$('[data-del-journal]').forEach(b=>b.addEventListener('click',()=>{state.journal=state.journal.filter(j=>j.id!==b.dataset.delJournal);saveState();renderJournal();renderMetrics();}));}
function journalMarkdown(){return state.journal.map(j=>`# ${j.title}\n\n- Fecha: ${j.createdAt}\n- Etiquetas: ${j.tags||''}\n\n${j.body}`).join('\n\n---\n\n');}

function setupData(){ $('#exportJsonBtn').addEventListener('click',()=>downloadFile('sun-tzu-strategy-lab-campaign-backup.json','application/json',JSON.stringify(state,null,2))); $('#exportCsvBtn').addEventListener('click',()=>downloadFile('sun-tzu-diario.csv','text/csv',journalCsv())); $('#importJsonBtn').addEventListener('click',importJson); }
function safeCsvCell(value){let text=String(value||''); if(/^[=+@-]/.test(text.trim())) text="'"+text; return '"'+text.replace(/"/g,'""')+'"';}
function journalCsv(){const rows=[['title','tags','createdAt','body'],...state.journal.map(j=>[j.title,j.tags,j.createdAt,j.body])]; return rows.map(r=>r.map(safeCsvCell).join(',')).join('\n');}
function importJson(){const file=$('#importFile').files?.[0]; if(!file){toast('Elige un archivo JSON');return;} if(file.size>1_000_000){toast('Archivo demasiado grande para una copia local');return;} const reader=new FileReader(); reader.onload=()=>{try{const imported=JSON.parse(reader.result); const normalized=normalizeState(imported); Object.keys(state).forEach(k=>delete state[k]); Object.assign(state, normalized); saveState(); renderAll(); toast('Datos importados y validados');}catch{toast('JSON no válido');}}; reader.onerror=()=>toast('No se pudo leer el archivo'); reader.readAsText(file);}

document.addEventListener('DOMContentLoaded',()=>{init();});
