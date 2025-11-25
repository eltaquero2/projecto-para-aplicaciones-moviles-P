# React + Supabase App

Este proyecto es un ejemplo sencillo de una aplicación hecha en **React** que se conecta a una base de datos en **Supabase**.

Incluye:
- Lectura de productos desde la base de datos
- Inserción de nuevos productos
- Eliminación de productos
- UI básica usando TailwindCSS

## 🚀 Tecnologías

- React
- Supabase (Base de datos y API)
- TailwindCSS

## 📁 Estructura

```
src/
 ├── ProductosApp.jsx   # Componente principal con CRUD
 └── ...otros archivos
```

## ▶️ Cómo ejecutar

1. Instala dependencias:

```
npm install
```

2. Inicia el servidor de desarrollo:

```
npm run dev
```

3. Abre tu navegador en:

```
http://localhost:5173
```

## 🔧 Configuración de Supabase

Edita tu URL y Public API Key en:

```
ProductosApp.jsx
```

Busca esta sección:

```js
const supabase = createClient(
  "https://tusupabaseurl.supabase.co",
  "clave-publica-ficticia"
);
```

Reemplázalo con tus credenciales reales.

## 📜 Licencia

Libre uso.
