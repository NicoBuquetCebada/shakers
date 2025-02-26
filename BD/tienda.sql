CREATE DATABASE IF NOT EXISTS tienda;
USE tienda;

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `fecha_compra` date NOT NULL,
  `cantidad` int(11) DEFAULT 1,
  `tipo` varchar(100) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` text DEFAULT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `stock`) VALUES
(1, 'ZENKO IMPRIMACIÓN', 'Pintura acrílica de efecto luminoso en interior y exterior. Para conseguir efectos sobre cualquier superficie.', 4.75, 'https://madridpinturas.com/wp-content/uploads/2022/01/ZENKO-SPRAYS-scaled.jpg', 250),
(2, 'ZENKO METALIZADO', 'Pintura acrílica de efecto luminoso en interior y exterior. Para conseguir efectos sobre cualquier superficie.', 4.75, 'https://madridpinturas.com/wp-content/uploads/2022/01/ZENKO-SPRAYS-scaled.jpg', 246),
(3, 'BEISSIER AGUAPLAST', 'Pintura acrílica de efecto luminoso en interior y exterior. Para conseguir efectos sobre cualquier superficie.', 4.75, 'https://madridpinturas.com/wp-content/uploads/2022/01/BESSIER-SPRAYREPARAGOTELEAGUAPLAST-400ML.jpg', 245),
(4, 'PINTURA PLÁSTICA MATE', 'Pintura plástica monocapa lista para usar de muy fácil aplicación. Acabado mate que disimula las imperfecciones. Pintura al agua, sin olor, para todo tipo de paredes y techos.', 4.75, 'https://www.pinturasimcasa.com/wp-content/uploads/2020/03/colores-del-mundo-jpg.jpg', 250),
(5, 'PINTURA PLÁSTICA EXTRA MATE', 'Pintura acrílica de efecto luminoso en interior y exterior. Para conseguir efectos sobre cualquier superficie.', 4.75, 'https://www.pinturasimcasa.com/wp-content/uploads/2019/06/master-1024-s500-jpg.jpg', 250),
(6, 'ZENKO ESMALTE', 'Pintura acrílica de efecto luminoso en interior y exterior. Para conseguir efectos sobre cualquier superficie. - producto de oferta', 4.75, 'https://madridpinturas.com/wp-content/uploads/2022/01/ZENKO-SPRAYS-scaled.jpg', 250),
(7, 'HARDCORE', 'Lata de pintura acrilica en spray básica de 400ml, presión media apta para todo tipo de escenarios', 4.25, 'https://www.montanacolors.com/content/thumbs/1024/content/imgsxml/productos/1-hardcore879.jpg', 500),
(8, 'MTN 94', 'Lata de pintura acrilica en spray de 400ml, presión baja ideal para momentos tranquilos', 4.85, 'https://www.montanacolors.com/content/thumbs/1024/content/imgsxml/productos/1-mtn94288.jpg', 500),
(9, 'NITRO 2G', 'Lata de pintura acrilica en spray de 400ml, presión alta y una formula ideal para cubrir pigmentos complicados', 4.95, 'https://www.montanacolors.com/content/thumbs/1024/content/imgsxml/productos/nitro2g-400232.jpg', 500),
(10, 'POCKET', 'Lata de pintura acrilica en spray de tamaño reducido', 5.85, 'https://www.montanacolors.com/content/thumbs/1024/content/imgsxml/productos/montana-colors-aerosol-pintura-formato-pocket876.jpg', 500),
(11, "ZENKO FLUERESCENTE", "Pintura fluorescente acrílica mate de efecto luminoso en interior y exterior. Resistencia limitada a UV. Para conseguir efectos fluorescentes sobre cualquier superficie.", 4.75, "https://madridpinturas.com/wp-content/uploads/2022/01/ZENKO-SPRAYS-scaled.jpg", 250),
(12, 'PINTURA ANTI-CORROSIÓN', 'Imprimado de resistencia extrema con propiedades antioxidantes', 7.65, 'https://www.montanacolors.com/content/thumbs/1024/content/imgsxml/productos/mtnpro-anticorrosive-green120.jpg', 135);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `domicilio` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nickname` (`nickname`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `historial`
--
ALTER TABLE `historial`
  ADD CONSTRAINT `historial_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `historial_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`id`) ON DELETE CASCADE;
COMMIT;
