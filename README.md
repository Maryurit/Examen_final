Proyecto ´Rick and Morty

Una aplicacion que permite visualizar lso personajes de Rick and Morty con sus respectivos nombres

## Características

Visualización de tarjetas (`CardList`) con imagen, nombre y detalles según la API.
- Manejo de estado global con Zustand.
- Estilos responsivos con Bootstrap.

## Tecnologías utilizadas

⚛️ React
- 🟨 Zustand (estado global)
- 📦 Vite (entorno de desarrollo)
- 🎨 Bootstrap
- 🌐 Fetch API

## Estructura del proyecto

src/
├── components/
│   ├── Card.jsx
│   └── CardList.jsx
├── layout/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
├── pages/
│   ├── Home.jsx
│   ├── ItemList.jsx
│   └── Contact.jsx
├── store/
│   └── useItemStore.js
├── App.jsx
└── main.jsx

Pasos para usar:
1. git clone https://github.com/Maryurit/Examen_final 
2. npm install
3. npm install axios zustand bootstrap react-bootstrap
4. npm install react react-dom
5. npm install react-router-dom
6. npm run dev
