function gestionarSuscripcion(usuario, plan, pagoAprobado) {

    if (pagoAprobado) {
        console.log(`${usuario} actualizó su suscripción al plan ${plan}.`);
    } else {
        console.log(`Error en el pago de ${usuario}. No se pudo actualizar la suscripción.`);
    }

}

gestionarSuscripcion("Sofia", "Premium", true);
gestionarSuscripcion("Rafael", "Básico", false);