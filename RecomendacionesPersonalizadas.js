# hu09_recomendaciones.py
from base_datos import CATALOGO_COMPLETO

def gestionar_recomendaciones(perfil, es_permitido_fn):
    """HU-09: Genera sugerencias basadas en afinidad de géneros."""
    print("\n🧠 --- HU-09: Recomendaciones Personalizadas ---")
    
    if not perfil["generos_favoritos"]:
        print("💡 Configura primero tus géneros favoritos en el menú principal.")
        return
        
    gustos = set(perfil["generos_favoritos"])
    recomendaciones = []

    for peli in CATALOGO_COMPLETO:
        # Valida que el control parental autorice la película
        if not es_permitido_fn(peli, perfil):
            continue
            
        # Calcula el porcentaje de afinidad matemática
        coincidencias = gustos.intersection(set(peli["generos"]))
        if coincidencias:
            afinidad = int((len(coincidencias) / len(gustos)) * 100)
            recomendaciones.append((peli["titulo"], afinidad, peli["edad"], peli["generos"]))

    # Ordena de mayor a menor coincidencia
    recomendaciones.sort(key=lambda x: x[1], reverse=True)

    if not recomendaciones:
        print("🍿 No hay películas que coincidan con tus géneros seleccionados.")
        return

    for titulo, afi, edad, gens in recomendaciones:
        print(f"🎯 {titulo} | Afinidad: {afi}% | Clasificación: [{edad}] | Géneros: {gens}")
