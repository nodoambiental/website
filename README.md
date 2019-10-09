# Portal-jekyll
Portal de Nodo Ambiental 2019 en Jekyll.

Este portal está estructurado de manera que sea fácilmente editable sin tocar código y provea flexibilidad suficiente para las expansiones requeridas a corto plazo.

## Editando contenidos

Para agregar posts al blog, referir al post por defecto, contiene las instrucciones para darle el formato adecuado. Cabe destacar que el contenido del post es markdown y puede soportar toda la extensión y complejidad que sea requerida. Los post deberán ser agregados a la carpeta `_posts`

Para agregar contenidos tanto a la página inicial como los índices de las subpáginas, hay un conjunto de archivos en la carpeta `_data` con respectivos nombres refiriendo a cada cosa. Cada archivo contiene detalles de cómo editar los contenidos para que el formato sea interpretado adecuadamente. Casi todos los datos están incorporados ahí. La barra de navegación y un par de títulos están incorporados al `HTML` pero si fuera necesario es ismple incorporarlos como variables. 

En el archivo `index.markdown` presente en la raíz, junto con este README, figuran algunas variables que modifican los textos presentes en la página principal.

Por lo tanto lo único directamente relacionado a los contenidos se encuentra en la carpeta `_data` y el archivo `index.markdown`.

Para agregar subpáginas, referir a los detalles específicos en los comentarios presentes en el archivo de contenidos referido a cada subpágina. Por ejemplo, para saber como agregar un portal, en términos de formato y disposición del archivo, `portals.yml` indica cómo hacerlo.

## Hacia delante

En el futuro hay que agregar una barrá de búsqueda y activar los sistemas de etiquetas y categorías que están instalados pero no implementados todavía.

