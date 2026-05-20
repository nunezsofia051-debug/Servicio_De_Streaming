let favoritos = [];

function agregarFavorito(pelicula) {
    if (favoritos.includes(pelicula)) {
        favoritos = favoritos.filter(fav => fav !== pelicula);
        console.log(`"${pelicula}" fue eliminada de favoritos.`);
    } else {
        favoritos.push(pelicula);
        console.log(`"${pelicula}" fue agregada a favoritos.`);
    }
}

agregarFavorito("Avengers");
agregarFavorito("Batman");
agregarFavorito("Avengers");

console.log("Lista de favoritos:", favoritos);