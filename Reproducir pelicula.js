import java.awt.Desktop;
import java.net.URI;

// Extendemos la clase Pelicula para que tenga un link
class PeliculaStreaming extends Pelicula {
    String url;

    public PeliculaStreaming(String titulo, String genero, String url) {
        super(titulo, genero);
        this.url = url;
    }
}

public class Reproductor {
    // MÉTODO DE REPRODUCCIÓN (La lógica de acción)
    public static void reproducir(PeliculaStreaming p) {
        System.out.println("🎬 Iniciando reproducción de: " + p.titulo);
        
        try {
            // Esto abre el navegador con el link de la película
            Desktop.getDesktop().browse(new URI(p.url));
        } catch (Exception e) {
            System.out.println("❌ Error al conectar con el servidor de video.");
        }
    }

    public static void main(String[] args) {
        // Ejemplo de uso
        PeliculaStreaming p1 = new PeliculaStreaming("Interstellar", "Sci-Fi", "https://tu-plataforma.com/play/123");
        
        reproducir(p1);
    }
}