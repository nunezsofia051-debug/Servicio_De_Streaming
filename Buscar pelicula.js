import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// 1. Definición del Objeto Película
class Pelicula {
    String titulo;
    String genero;

    public Pelicula(String titulo, String genero) {
        this.titulo = titulo;
        this.genero = genero;
    }

    @Override
    public String toString() {
        return "Película: " + titulo + " | Género: " + genero;
    }
}

public class BuscadorPeliculas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Pelicula> catalogo = new ArrayList<>();

        // Carga de datos (Simulando una base de datos)
        catalogo.add(new Pelicula("Interstellar", "Ciencia Ficción"));
        catalogo.add(new Pelicula("El Padrino", "Drama"));
        catalogo.add(new Pelicula("Batman: El Caballero de la Noche", "Acción"));

        System.out.print("Ingrese el nombre de la película a buscar: ");
        String busqueda = sc.nextLine();

        boolean encontrada = false;

        // Estructura Repetitiva (Para cada película en el catálogo)
        for (Pelicula p : catalogo) {
            // Estructura Selectiva (Si el título contiene el texto buscado)
            if (p.titulo.toLowerCase().contains(busqueda.toLowerCase())) {
                System.out.println("Resultado: " + p);
                encontrada = true;
            }
        }

        if (!encontrada) {
            System.out.println("No se encontraron películas con ese nombre.");
        }
    }
}