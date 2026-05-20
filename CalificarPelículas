import json
import os

ARCHIVO_DB = "peliculas.json"

def cargar_peliculas():
    """Carga las películas desde el archivo JSON."""
    if not os.path.exists(ARCHIVO_DB):
        return {}
    try:
        with open(ARCHIVO_DB, "r", encoding="utf-8") as f:
            return json.load(f)
    except json.JSONDecodeError:
        return {}

def guardar_peliculas(peliculas):
    """Guarda las películas en el archivo JSON."""
    with open(ARCHIVO_DB, "w", encoding="utf-8") as f:
        json.dump(peliculas, f, indent=4, ensure_ascii=False)

def agregar_pelicula(peliculas):
    """Añade una nueva película con su calificación."""
    nombre = input("\n🎬 Nombre de la película: ").strip()
    if not nombre:
        print("⚠️ El nombre no puede estar vacío.")
        return
    
    try:
        nota = float(input("⭐ Calificación (0 al 10): "))
        if 0 <= nota <= 10:
            peliculas[nombre] = nota
            guardar_peliculas(peliculas)
            print(f"✅ ¡📌 '{nombre}' guardada con nota {nota}!")
        else:
            print("⚠️ La calificación debe estar entre 0 y 10.")
    except ValueError:
        print("⚠️ Por favor, introduce un número válido.")

def listar_peliculas(peliculas):
    """Muestra todas las películas guardadas."""
    if not peliculas:
        print("\n🍿 No hay películas registradas todavía.")
        return
    
    print("\n📜 --- Mis Calificaciones ---")
    for nombre, nota in peliculas.items():
        print(f"🎥 {nombre} - ⭐ {nota}/10")

def main():
    """Bucle principal de la aplicación."""
    peliculas = cargar_peliculas()
    
    while True:
        print("\n--- MENU PELÍCULAS ---")
        print("1. Agregar/Calificar película")
        print("2. Ver mis calificaciones")
        print("3. Salir")
        
        opcion = input("Selecciona una opción (1-3): ").strip()
        
        if opcion == "1":
            agregar_pelicula(peliculas)
        elif opcion == "2":
            listar_peliculas(peliculas)
        elif opcion == "3":
            print("\n👋 ¡Gracias por usar la app!🍿")
            break
        else:
            print("⚠️ Opción no válida. Intenta de nuevo.")

if __name__ == "__main__":
    main()
