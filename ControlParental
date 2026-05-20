# hu10_control_parental.py

def es_contenido_permitido(pelicula, perfil):
    """HU-10: Filtro lógico que bloquea películas PG-13 y R si el modo infantil está activo."""
    if perfil["control_parental"]["activo"]:
        if pelicula["edad"] in ["R", "PG-13"]:
            return False
    return True

def configurar_control_parental(perfil):
    """HU-10: Interfaz para activar/desactivar el bloqueo y cambiar el PIN."""
    print("\n🛡️ --- HU-10: Panel de Control Parental ---")
    estado_actual = "ACTIVADO" if perfil["control_parental"]["activo"] else "DESACTIVADO"
    print(f"Estado actual: {estado_actual}")
    
    pin_ingresado = input("Introduce el PIN de seguridad: ")
    if pin_ingresado != perfil["control_parental"]["pin"]:
        print("❌ PIN incorrecto. Acceso denegado.")
        return False
        
    print("\n1. Activar Filtro Infantil (Bloquear contenido PG-13 y R)")
    print("2. Desactivar Filtro Infantil (Acceso total)")
    print("3. Cambiar PIN de seguridad")
    opc = input("Selecciona una opción: ").strip()
    
    if opc == "1":
        perfil["control_parental"]["activo"] = True
        print("🔒 Control Parental ACTIVADO. Restricción de edad en marcha.")
    elif opc == "2":
        perfil["control_parental"]["activo"] = False
        print("🔓 Control Parental DESACTIVADO. Catálogo completo abierto.")
    elif opc == "3":
        nuevo_pin = input("Introduce tu nuevo PIN de 4 dígitos: ").strip()
        if len(nuevo_pin) == 4 and nuevo_pin.isdigit():
            perfil["control_parental"]["pin"] = nuevo_pin
            print("✅ PIN actualizado correctamente.")
        else:
            print("⚠️ PIN inválido. Debe constar de 4 números.")
            
    return True
