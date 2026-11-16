import React, { useState } from 'react';

/**
 * Componente: VitrinaPaquetesReact
 * Proyecto: Luxury Go Travel Agency
 * Descripción: Componente interactivo desarrollado en React (JSX) para la gestión y 
 * filtrado dinámico de paquetes turísticos, aplicando estados locales (useState) 
 * y un diseño optimizado con fondo blanco profesional y alta accesibilidad.
 */
const VitrinaPaquetesReact = () => {
    // 1. Declaración del estado local para controlar la categoría activa en la vitrina
    const [categoriaActual, setCategoriaActual] = useState('Todos');

    // 2. Base de datos simulada de los servicios y paquetes turísticos de la agencia
    const catalogoPaquetes = [
        { id: 1, destino: 'Caribe de Lujo', tipo: 'Playa', precio: '$2,500 USD', detalle: 'Resort todo incluido con acceso privado.' },
        { id: 2, destino: 'París Romántico', tipo: 'Lunas de miel', precio: '$3,800 USD', detalle: 'Experiencia boutique y cenas exclusivas.' },
        { id: 3, destino: 'Ecoturismo en el Amazonas', tipo: 'Ecoturismo', precio: '$1,900 USD', detalle: 'Aventura guiada con estándares de confort.' }
    ];

    // 3. Función manejadora de eventos para actualizar el estado al hacer clic en un filtro
    const cambiarFiltro = (nuevoTipo) => {
        setCategoriaActual(nuevoTipo);
    };

    // 4. Filtrado inteligente de los elementos según el estado actual (Renderizado condicional)
    const paquetesFiltrados = categoriaActual === 'Todos' 
        ? catalogoPaquetes 
        : catalogoPaquetes.filter(item => item.tipo === categoriaActual);

    // 5. Estructura visual de la interfaz utilizando JSX y un fondo blanco limpio y accesible
    return (
        <div style={{ backgroundColor: '#FFFFFF', color: '#333333', padding: '40px', fontFamily: 'serif', minHeight: '100vh' }}>
            
            {/* Encabezado con la identidad de marca */}
            <header style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ color: '#B8860B', fontSize: '2.5rem', marginBottom: '10px' }}>Luxury Go Travel Agency</h1>
                <p style={{ fontStyle: 'italic', color: '#D4AF37', fontSize: '1.2rem' }}>"Diseñamos recuerdos, creamos exclusividad."</p>
            </header>

            {/* Barra de navegación / Botones interactivos conectados al estado */}
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
                {['Todos', 'Playa', 'Lunas de miel', 'Ecoturismo'].map((categoria) => (
                    <button 
                        key={categoria}
                        onClick={() => cambiarFiltro(categoria)}
                        style={{
                            backgroundColor: categoriaActual === categoria ? '#D4AF37' : '#F8F9FA',
                            color: categoriaActual === categoria ? '#FFFFFF' : '#333333',
                            border: '1px solid #D4AF37',
                            padding: '10px 20px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {categoria}
                    </button>
                ))}
            </nav>

            {/* Cuadrícula de despliegue dinámico (Cards de servicios) */}
            <main style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
                {paquetesFiltrados.map((paquete) => (
                    <div 
                        key={paquete.id} 
                        style={{ 
                            border: '1px solid #E0E0E0', 
                            padding: '25px', 
                            borderRadius: '8px', 
                            width: '280px', 
                            backgroundColor: '#FAFAFA',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)'
                        }}
                    >
                        <h3 style={{ color: '#B8860B', marginBottom: '10px' }}>{paquete.destino}</h3>
                        <p style={{ color: '#666666', fontSize: '0.9rem', marginBottom: '15px' }}>{paquete.detalle}</p>
                        <p style={{ color: '#333333', fontWeight: 'bold' }}>Categoría: {paquete.tipo}</p>
                        <p style={{ color: '#B8860B', fontWeight: 'bold', fontSize: '1.1rem', marginTop: '10px' }}>Desde: {paquete.precio}</p>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default VitrinaPaquetesReact;