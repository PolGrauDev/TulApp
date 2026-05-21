# TulApp

> **T**ender **U**n **L**azo **A**ctivo · Plataforma de apoyo solidario intergeneracional

---

## Descripción del proyecto

TULApp es una iniciativa de innovación social desarrollada en el marco del proyecto TULA. Su objetivo es facilitar el apoyo solidario entre generaciones en entornos rurales, conectando a personas mayores con jóvenes voluntarios de su misma comunidad para dar respuesta a necesidades cotidianas.

En un contexto marcado por el envejecimiento de la población, la despoblación y la brecha digital, TULApp ofrece una herramienta accesible basada en aplicaciones móviles. El proyecto promueve la colaboración, el acompañamiento y la inclusión social, con el objetivo de fortalecer los vínculos comunitarios y mejorar la calidad de vida de las personas mayores en el entorno rural.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Angular + TypeScript |
| UI móvil | Ionic |
| Estilos | SASS (BEM) |
| Autenticación | Firebase Auth |
| Base de datos | Supabase |

---

## Equipo

| Nombre | Contacto |
|---|---|
| Andrea Olivera | andrea.olivera@fundacionesplai.org |
| Nil Sánchez | nil.sanchez@fundacionesplai.org |
| Pol Grau | pol.grau@fundacionesplai.org |
| Sergi Piqué | sergi.pique@fundacionesplai.org |

---

## Funcionalidades entregadas en Sprint 1

### 👵 Perfil Vecino/a

Flujo completo para el usuario mayor que solicita ayuda.

- **Autenticación** — Registro e inicio de sesión con Firebase + Supabase
- **Inicio** — Pantalla de bienvenida con acceso rápido a las funciones principales
- **Categorías** — Listado de categorías de solicitud disponibles (compras, medicinas, compañía, trámites, traslados, otros)
- **Nueva solicitud** — Formulario reactivo con validación para crear una solicitud dentro de una categoría
- **Solicitudes** — Historial y estado de las solicitudes enviadas
- **Perfil** — Datos personales del vecino/a

### 🙋 Perfil Voluntario/a

Flujo completo para el usuario joven que ofrece ayuda.

- **Autenticación** — Registro e inicio de sesión independiente con Firebase + Supabase
- **Home** — Pantalla principal
- **Solicitudes** — Gestión de las solicitudes
- **Perfil** — Datos personales del voluntario/a

### 🎨 Sistema de diseño

Se han desarrollado **dos líneas de diseño** diferenciadas:

- **Diseño A** — Aplicado a la zona de autenticación y al perfil voluntario/a
<br>
<img width="376" height="812" alt="image" src="https://github.com/user-attachments/assets/5adf1696-44f8-4be3-a83a-6e7ab11e214f" />
<br>
<img width="286" height="636" alt="image" src="https://github.com/user-attachments/assets/b2d86d6a-7155-418e-8a53-52d36d9511e0" />
<br>
<img width="327" height="668" alt="image" src="https://github.com/user-attachments/assets/845e85c6-3ac3-481d-b301-02806496cf19" />
<br>

---

- **Diseño B** — Aplicado al perfil vecino/a
<br>
<img width="351" height="732" alt="image" src="https://github.com/user-attachments/assets/36b0300b-5e33-4d13-91e2-ee56adb1ea55" />
<br>
<img width="353" height="737" alt="image" src="https://github.com/user-attachments/assets/734aab0e-e2ba-4867-8697-b8792518673e" />
<br>
<img width="353" height="697" alt="image" src="https://github.com/user-attachments/assets/dd31e6cd-3278-43d8-a4a4-1c84bf8d07c9" />
<br>
<img width="353" height="692" alt="image" src="https://github.com/user-attachments/assets/dd270b66-48f1-40b5-ab38-1032290133ee" />
<br>
<img width="353" height="702" alt="image" src="https://github.com/user-attachments/assets/d7ad6ac0-e20a-46f8-8c29-deb071db3cd9" />

Ambos diseños comparten el mismo sistema de variables CSS para garantizar consistencia y facilitar el mantenimiento.

---

## Instalación y arranque

```bash
# Instalar dependencias
npm install

# Arrancar en modo desarrollo
ionic serve

# Arrancar en dispositivo Android
ionic capacitor run android

# Arrancar en dispositivo iOS
ionic capacitor run ios
```

---

## Variables de entorno

Crea un archivo `src/environments/environment.ts` con las credenciales de Firebase y Supabase:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'TU_API_KEY',
    authDomain: 'TU_DOMINIO.firebaseapp.com',
    projectId: 'TU_PROJECT_ID',
  },
  supabase: {
    url: 'https://TU_PROJECT.supabase.co',
    anonKey: 'TU_ANON_KEY',
  }
};
```

> ⚠️ Este archivo está en `.gitignore`. No subir credenciales al repositorio.

---

## Convenciones del proyecto

- **Componentes** — Standalone, con `inject()` para inyección de dependencias
- **Formularios** — Reactive Forms (`FormGroup` + `FormControl` tipado y `nonNullable`)
- **Estilos** — Metodología BEM, variables CSS
- **Suscripciones** — Gestionadas con `takeUntilDestroyed()` para evitar memory leaks
- **Constantes y tipos** — Definidos fuera del componente, candidatos a servicio propio

---
