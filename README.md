# FarmaStock · Instrucciones de arranque

## 1. Requisitos

- Java 21
- Node.js 18 o superior
- MySQL 8 y MySQL Workbench

## 2. Base de datos (Workbench)

Solo la primera vez.

1. Abre Workbench y conéctate a tu instancia local.
2. Menú **File → Open SQL Script…** y elige `src/main/resources/database.sql`.
3. Pulsa el rayo (**Execute**) para ejecutar todo el script.
4. Refresca el panel **Schemas** y comprueba que existe la base `farmastock` con estas tablas:
   `authorities`, `clientes`, `farmaceutico`, `medicamentos` y `users`.

> El script borra y recrea esas tablas. No lo ejecutes sobre datos que quieras conservar.

## 3. Configuración del backend

Crea un archivo `.env` en la raíz del repositorio con el usuario y la clave con los que te conectas en Workbench:

```properties
DB_URL=jdbc:mysql://localhost:3306/farmastock
DB_USERNAME=TU_USUARIO
DB_PASSWORD=TU_CLAVE
```

## 4. Arrancar el backend

Terminal 1, desde la raíz del repositorio:

```bash
./mvnw spring-boot:run
```

Espera a ver `Started FarmaStockApplication` en el log. El backend escucha en el puerto **8080**, que debe estar libre.

## 5. Arrancar el frontend

Terminal 2:

```bash
cd farmastock-frontend
npm install      # solo la primera vez
npm run dev
```

Abre en el navegador: <http://localhost:5173>

## 6. Usuarios de prueba

| Usuario | Clave | Rol          | Qué ve                                              |
|---------|-------|--------------|-----------------------------------------------------|
| `pedro` | `123` | Farmacéutico | Medicamentos (con edición), farmacéuticos y clientes |
| `juan`  | `123` | Cliente      | Solo la lista de medicamentos                       |

## 7. Problemas frecuentes

| Síntoma | Causa probable | Solución |
|---|---|---|
| `BindException: La dirección ya se está usando` | El puerto 8080 está ocupado | Cierra la otra instancia del backend (terminal o IDE) |
| La web dice "No se puede conectar con el servidor" | El backend no está arrancado | Revisa la terminal 1 |
| "Usuario o clave incorrectos" | La tabla `users` no tiene los usuarios de prueba | Vuelve a ejecutar `database.sql` |
| Error 500 al cargar medicamentos | Un formato de la base no existe en el enum `FormatoMedicamento` | Ejecuta `database.sql` de nuevo o corrige ese valor |
| `Table '...' doesn't exist` | El nombre de tabla no coincide con la entidad | Usa `database.sql` del repositorio |

## 8. Notas

- Usa solo datos de prueba: la configuración de seguridad actual es para demostración (claves sin cifrar y sin reglas de escritura para clientes y farmacéuticos).
- Para parar los servicios, pulsa `Ctrl+C` en cada terminal.
``` 
