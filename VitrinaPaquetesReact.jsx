<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vitrina Turística - Luxury Go Travel Agency</title>
    <!-- Librerías de React y Babel para ejecución directa en el navegador vía CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <!-- Google Fonts para tipografía elegante -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        body { 
            margin: 0; 
            padding: 0; 
            background-color: #F8F9FA; 
            color: #111111; 
            font-family: 'Plus Jakarta Sans', sans-serif;
            -webkit-font-smoothing: antialiased;
        }
        h1, h2, h3, .serif-font {
            font-family: 'Playfair Display', serif;
        }
        /* Accesibilidad: Focus visible para navegación por teclado */
        button:focus-visible, a:focus-visible {
            outline: 3px solid #D4AF37;
            outline-offset: 3px;
        }
    </style>
</head>
<body>
    <!-- Contenedor raíz donde React montará el componente -->
    <div id="root"></div>

    <!-- Script con tipo 'text/babel' para permitir la compilación de JSX en el navegador -->
    <script type="text/babel">
        // Extracción del Hook useState desde la librería global de React
        const { useState } = React;

        // Componente funcional principal de la vitrina turística
        const VitrinaPaquetesReact = () => {
            // Declaración del estado 'categoriaActual' con valor inicial 'Todos'
            // 'setCategoriaActual' es la función que actualiza el estado al hacer clic en los filtros
            const [categoriaActual, setCategoriaActual] = useState('Todos');

            // Catálogo estructurado de experiencias exclusivas de la agencia
            const catalogoPaquetes = [
                { 
                    id: 1, 
                    destino: 'Caribe de Lujo', 
                    categoria: 'Caribe y experiencias de playa', 
                    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
                    fallbackImagen: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
                    descripcion: 'Un santuario de tranquilidad y sofisticación donde el mar cristalino se encuentra con el confort absoluto. Diseñado para quienes buscan desconectarse sin sacrificar la elegancia.',
                    configuracionServicios: 'Componentes y servicios configurados a la medida según la cotización y requerimientos del viajero.',
                    inversion: 'Tarifa sujeta a cotización personalizada y temporada.',
                    whatsappLink: 'https://wa.me/573115947467?text=Hola,%20deseo%20cotizar%20la%20experiencia%20Caribe%20de%20Lujo'
                },
                { 
                    id: 2, 
                    destino: 'París Romántico y Lunas de Miel', 
                    categoria: 'Experiencias Internacionales', 
                    imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
                    fallbackImagen: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
                    descripcion: 'El romance y la historia convertidos en un viaje inolvidable. Cenas exclusivas, estancias boutique seleccionadas y una curadoría de experiencias sin fricciones logísticas.',
                    configuracionServicios: 'Componentes y servicios configurados a la medida según la cotización y requerimientos del viajero.',
                    inversion: 'Valores sujetos a configuración de vuelos y fechas seleccionadas.',
                    whatsappLink: 'https://wa.me/573115947467?text=Hola,%20deseo%20asesoría%20para%20Experiencias%20Internacionales'
                },
                { 
                    id: 3, 
                    destino: 'Conexión Familiar y Entretenimiento', 
                    categoria: 'Viajes Familiares', 
                    imagen: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
                    fallbackImagen: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
                    descripcion: 'Creamos momentos memorables para todas las edades eliminando el estrés de la planificación. Logística impecable para que la única preocupación sea disfrutar en familia.',
                    configuracionServicios: 'Componentes y servicios configurados a la medida según la cotización y requerimientos del viajero.',
                    inversion: 'Cotización calculada a la medida según integrantes y fechas.',
                    whatsappLink: 'https://wa.me/573115947467?text=Hola,%20deseo%20planear%20un%20Viaje%20Familiar'
                },
                { 
                    id: 4, 
                    destino: 'Ecoturismo y Paisajes de Autor', 
                    categoria: 'Colombia y Destinos Nacionales', 
                    imagen: 'https://images.unsplash.com/photo-1590603706096-30d866a9a08e?auto=format&fit=crop&w=800&q=80',
                    fallbackImagen: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
                    descripcion: 'Descubre la riqueza de nuestra tierra con una perspectiva de lujo sostenible, guías especializados y estancias que respetan y enaltecen el entorno natural.',
                    configuracionServicios: 'Componentes y servicios configurados a la medida según la cotización y requerimientos del viajero.',
                    inversion: 'Tarifas dinámicas basadas en los componentes seleccionados.',
                    whatsappLink: 'https://wa.me/573115947467?text=Hola,%20deseo%20consultar%20Destinos%20Nacionales'
                }
            ];

            // Listado de categorías disponibles para la barra de navegación
            const categoriasFiltro = [
                'Todos', 
                'Caribe y experiencias de playa', 
                'Experiencias Internacionales', 
                'Viajes Familiares', 
                'Colombia y Destinos Nacionales'
            ];

            // Filtrado dinámico del catálogo según la categoría seleccionada en el estado
            const paquetesFiltrados = categoriaActual === 'Todos' 
                ? catalogoPaquetes 
                : catalogoPaquetes.filter(item => item.categoria === categoriaActual);

            // Función para manejar errores de carga de imágenes con una URL de respaldo
            const handleImageError = (e, fallbackUrl) => {
                if (e.target.src !== fallbackUrl) {
                    e.target.src = fallbackUrl;
                }
            };

            // Renderizado de la estructura visual mediante JSX
            return (
                <div style={{ backgroundColor: '#F8F9FA', color: '#111111', padding: '40px 15px', minHeight: '100vh', boxSizing: 'border-box' }}>
                    
                    {/* Encabezado Institucional de la Agencia */}
                    <header style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px auto' }}>
                        <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '3px', color: '#B8860B', fontWeight: '600' }}>
                            EXPERIENCIAS DE VIAJE SELECCIONADAS
                        </span>
                        <h1 style={{ color: '#111111', fontSize: 'clamp(2rem, 5vw, 3rem)', margin: '15px 0 10px 0', letterSpacing: '-0.5px' }}>
                            LUXURY GO TRAVEL AGENCY
                        </h1>
                        <p style={{ fontStyle: 'italic', color: '#B8860B', fontSize: 'clamp(1rem, 3vw, 1.25rem)', margin: 0, fontWeight: '400' }}>
                            "Diseñamos recuerdos, creamos exclusividad."
                        </p>
                    </header>

                    {/* Barra de navegación con botones interactivos y mapeo dinámico (.map) */}
                    <nav aria-label="Filtro de categorías de viaje" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto 40px auto' }}>
                        {categoriasFiltro.map((cat) => (
                            <button 
                                key={cat}
                                onClick={() => setCategoriaActual(cat)} // Actualiza el estado con la categoría seleccionada
                                aria-pressed={categoriaActual === cat}
                                style={{
                                    backgroundColor: categoriaActual === cat ? '#D4AF37' : '#FFFFFF',
                                    color: categoriaActual === cat ? '#FFFFFF' : '#333333',
                                    border: categoriaActual === cat ? '1px solid #D4AF37' : '1px solid #E2E8F0',
                                    padding: '10px 18px',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    borderRadius: '30px',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.88rem',
                                    boxShadow: categoriaActual === cat ? '0 4px 12px rgba(212, 175, 55, 0.3)' : '0 2px 5px rgba(0,0,0,0.02)'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </nav>

                    {/* Contenedor principal de tarjetas generado dinámicamente con .map */}
                    <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 340px))', justifyContent: 'center', gap: '25px', maxWidth: '1200px', margin: '0 auto' }}>
                        {paquetesFiltrados.map((paquete) => (
                            <article 
                                key={paquete.id} 
                                style={{ 
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    border: '1px solid #EEEDEC',
                                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.04)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                            >
                                <div>
                                    {/* Contenedor de la fotografía con manejo de errores y texto alternativo */}
                                    <div style={{ position: 'relative', height: '210px', overflow: 'hidden', backgroundColor: '#e2e8f0' }}>
                                        <img 
                                            src={paquete.imagen} 
                                            alt={`Fotografía representativa de ${paquete.destino}`}
                                            onError={(e) => handleImageError(e, paquete.fallbackImagen)}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                        />
                                        <div style={{ 
                                            position: 'absolute', 
                                            top: '15px', 
                                            left: '15px', 
                                            backgroundColor: 'rgba(0, 0, 0, 0.75)', 
                                            color: '#D4AF37', 
                                            padding: '6px 12px', 
                                            borderRadius: '20px', 
                                            fontSize: '0.73rem', 
                                            fontWeight: '600',
                                            letterSpacing: '1px',
                                            textTransform: 'uppercase'
                                        }}>
                                            {paquete.categoria}
                                        </div>
                                    </div>

                                    {/* Información textual de la tarjeta */}
                                    <div style={{ padding: '22px' }}>
                                        <h2 className="serif-font" style={{ color: '#111111', fontSize: '1.35rem', margin: '0 0 10px 0' }}>
                                            {paquete.destino}
                                        </h2>
                                        <p style={{ color: '#555555', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '18px' }}>
                                            {paquete.descripcion}
                                        </p>
                                        
                                        <div style={{ backgroundColor: '#FAF9F6', padding: '12px', borderRadius: '8px', marginBottom: '18px', borderLeft: '3px solid #D4AF37' }}>
                                            <p style={{ color: '#111111', fontSize: '0.8rem', margin: '0 0 4px 0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                                Configuración del Viaje:
                                            </p>
                                            <p style={{ color: '#666666', fontSize: '0.83rem', margin: 0, lineHeight: '1.5' }}>
                                                {paquete.configuracionServicios}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pie de tarjeta con nota de inversión y botón de llamada a la acción (WhatsApp) */}
                                <div style={{ padding: '0 22px 22px 22px' }}>
                                    <p style={{ color: '#888888', fontSize: '0.83rem', fontStyle: 'italic', marginBottom: '16px', textAlign: 'center' }}>
                                        {paquete.inversion}
                                    </p>
                                    <a 
                                        href={paquete.whatsappLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        aria-label={`Solicitar cotización por WhatsApp para ${paquete.destino}`}
                                        style={{ 
                                            display: 'block',
                                            backgroundColor: '#111111', 
                                            color: '#D4AF37', 
                                            textAlign: 'center', 
                                            padding: '13px', 
                                            borderRadius: '6px', 
                                            fontWeight: '600', 
                                            textDecoration: 'none',
                                            letterSpacing: '0.5px',
                                            fontSize: '0.88rem',
                                            border: '1px solid #111111',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.backgroundColor = '#D4AF37';
                                            e.currentTarget.style.color = '#FFFFFF';
                                            e.currentTarget.style.borderColor = '#D4AF37';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.backgroundColor = '#111111';
                                            e.currentTarget.style.color = '#D4AF37';
                                            e.currentTarget.style.borderColor = '#111111';
                                        }}
                                    >
                                        SOLICITAR COTIZACIÓN
                                    </a>
                                </div>
                            </article>
                        ))}
                    </main>

                    {/* Pie de página institucional */}
                    <footer style={{ textAlign: 'center', marginTop: '60px', color: '#777777', fontSize: '0.85rem', borderTop: '1px solid #E2E8F0', paddingTop: '25px' }}>
                        <p style={{ margin: '0 0 5px 0', fontWeight: '500', color: '#333' }}>Luxury Go Travel Agency · Colombia</p>
                        <p style={{ margin: 0 }}>Canal Oficial WhatsApp: 311 5947467</p>
                    </footer>
                </div>
            );
        };

        // Montaje del componente React en el DOM utilizando ReactDOM
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<VitrinaPaquetesReact />);
    </script>
</body>
</html>
