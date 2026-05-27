# 🎬 Servicio de Streaming

## 📖 Historia de Usuario
Como usuario del sistema,
quiero poder buscar y reproducir películas,
para disfrutar contenido de entretenimiento de manera rápida y sencilla.

---

## 👥 Integrantes
- Sofia Nuñez
- Rafael Godoy
- Miguel Farias
- Dilan Galvan 

---

## 📚 Materia
Alfabetizacion Diital, Introduccion al Analasis Sistemico

---

## 👨‍🏫 Profesor
(Narciso Perez)

---

## 💻 Nombre del Sistema
Servicio de Streaming

---

## Herramientas que usamos 
- Git y GitHub
- ChatGPT
- JavaScript

---

## ⚙ Funcionalidades
- Registrar usuario
- Iniciar sesión
- Buscar películas
- Reproducir películas
- Agregar favoritos
- Ver catálogo de películas

---

# 📑 Historias de Usuario

##  Registro de usuario

**COMO** visitante  
**QUIERO** crear una cuenta en la plataforma  
**PARA** acceder al catálogo de películas y guardar mis preferencias.

### ✅ Criterios de aceptación

- **DADO** que el usuario se encuentra en la pantalla de registro  
  **CUANDO** completa correctamente sus datos y presiona “Crear cuenta”  
  **ENTONCES** el sistema debe registrar la cuenta exitosamente.

- **DADO** que el correo ya existe en el sistema  
  **CUANDO** el usuario intenta registrarse  
  **ENTONCES** el sistema debe mostrar un mensaje indicando que el correo ya está en uso.

---

##  Inicio de sesión

**COMO** usuario registrado  
**QUIERO** iniciar sesión con mi correo y contraseña  
**PARA** acceder a mi perfil y contenido personalizado.

### ✅ Criterios de aceptación

- **DADO** que el usuario posee una cuenta válida  
  **CUANDO** ingresa correctamente sus credenciales  
  **ENTONCES** el sistema debe permitir el acceso.

- **DADO** que la contraseña es incorrecta  
  **CUANDO** el usuario intenta iniciar sesión  
  **ENTONCES** el sistema debe mostrar un mensaje de error.

---

##  Buscar películas

**COMO** usuario  
**QUIERO** buscar películas por nombre o género  
**PARA** encontrar contenido de manera rápida.

### ✅ Criterios de aceptación

- **DADO** que el usuario está en el catálogo  
  **CUANDO** escribe el nombre de una película en el buscador  
  **ENTONCES** el sistema debe mostrar resultados relacionados.

- **DADO** que el usuario selecciona un género  
  **CUANDO** aplica el filtro  
  **ENTONCES** el sistema debe mostrar únicamente películas de ese género.

---

##  Reproducir película

**COMO** usuario suscripto  
**QUIERO** reproducir una película  
**PARA** verla desde cualquier dispositivo.

### ✅ Criterios de aceptación

- **DADO** que el usuario tiene una suscripción activa  
  **CUANDO** selecciona una película y presiona “Reproducir”  
  **ENTONCES** el sistema debe iniciar la reproducción.

- **DADO** que la conexión a internet es inestable  
  **CUANDO** la película se está reproduciendo  
  **ENTONCES** el sistema debe reducir automáticamente la calidad del video.

---

##  Crear lista de favoritos

**COMO** usuario  
**QUIERO** guardar películas en favoritos  
**PARA** acceder rápidamente a ellas más adelante.

### ✅ Criterios de aceptación

- **DADO** que el usuario visualiza una película  
  **CUANDO** presiona el botón “Agregar a favoritos”  
  **ENTONCES** el sistema debe guardar la película en su lista personal.

- **DADO** que la película ya está en favoritos  
  **CUANDO** el usuario vuelve a presionar el botón  
  **ENTONCES** el sistema debe eliminarla de la lista.

---

##  Continuar reproducción

**COMO** usuario  
**QUIERO** continuar una película desde donde la dejé  
**PARA** no perder mi progreso de visualización.

### ✅ Criterios de aceptación

- **DADO** que el usuario dejó una película incompleta  
  **CUANDO** vuelve a reproducirla  
  **ENTONCES** el sistema debe ofrecer continuar desde el último minuto visto.

---

##  Gestionar suscripción

**COMO** usuario  
**QUIERO** elegir o cambiar mi plan de suscripción  
**PARA** acceder a diferentes beneficios del servicio.

### ✅ Criterios de aceptación

- **DADO** que el usuario accede a la sección de suscripciones  
  **CUANDO** selecciona un nuevo plan y confirma el pago  
  **ENTONCES** el sistema debe actualizar su suscripción.

- **DADO** que el pago es rechazado  
  **CUANDO** el usuario intenta confirmar el plan  
  **ENTONCES** el sistema debe informar el error de pago.

---

##  Calificar películas

**COMO** usuario  
**QUIERO** calificar películas con estrellas o puntuación  
**PARA** compartir mi opinión sobre el contenido.

### ✅ Criterios de aceptación

- **DADO** que el usuario terminó de ver una película  
  **CUANDO** selecciona una puntuación y la envía  
  **ENTONCES** el sistema debe guardar la calificación.

- **DADO** que el usuario ya calificó la película  
  **CUANDO** modifica su puntuación  
  **ENTONCES** el sistema debe actualizar la calificación anterior.

---

##  Recomendaciones personalizadas

**COMO** usuario  
**QUIERO** recibir recomendaciones de películas  
**PARA** descubrir contenido acorde a mis gustos.

### ✅ Criterios de aceptación

- **DADO** que el usuario posee historial de visualización  
  **CUANDO** ingresa al inicio de la plataforma  
  **ENTONCES** el sistema debe mostrar recomendaciones relacionadas a sus preferencias.

---

##  Control parental

**COMO** padre o tutor  
**QUIERO** configurar restricciones de contenido  
**PARA** evitar que menores accedan a películas inapropiadas.

### ✅ Criterios de aceptación

- **DADO** que el usuario accede a la configuración parental  
  **CUANDO** establece una edad límite  
  **ENTONCES** el sistema debe bloquear contenido superior a esa clasificación.

- **DADO** que un menor intenta reproducir contenido restringido  
  **CUANDO** selecciona la película  
  **ENTONCES** el sistema debe solicitar un PIN de seguridad.

---
