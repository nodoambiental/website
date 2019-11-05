# Portal-jekyll
Portal de Nodo Ambiental 2019 en Jekyll.

Este portal est? estructurado de manera que sea f?cilmente editable sin tocar c?digo y provea flexibilidad suficiente para las expansiones requeridas a corto plazo.

## Editando contenidos

Para agregar posts al blog, referir al post por defecto, contiene las instrucciones para darle el formato adecuado. Cabe destacar que el contenido del post es markdown y puede soportar toda la extensi?n y complejidad que sea requerida. Los post deber?n ser agregados a la carpeta `_posts`

Para agregar contenidos tanto a la p?gina inicial como los ?ndices de las subp?ginas, hay un conjunto de archivos en la carpeta `_data` con respectivos nombres refiriendo a cada cosa. Cada archivo contiene detalles de c?mo editar los contenidos para que el formato sea interpretado adecuadamente. Casi todos los datos est?n incorporados ah?. La barra de navegaci?n y un par de t?tulos est?n incorporados al `HTML` pero si fuera necesario es ismple incorporarlos como variables. 

En el archivo `index.markdown` presente en la ra?z, junto con este README, figuran algunas variables que modifican los textos presentes en la p?gina principal.

Por lo tanto lo ?nico directamente relacionado a los contenidos se encuentra en la carpeta `_data` y el archivo `index.markdown`.

Para agregar subp?ginas, referir a los detalles espec?ficos en los comentarios presentes en el archivo de contenidos referido a cada subp?gina. Por ejemplo, para saber como agregar un portal, en t?rminos de formato y disposici?n del archivo, `portals.yml` indica c?mo hacerlo.

## Hacia delante

## TODO
* Agregar una barr? de b?squeda y activar los sistemas de etiquetas y categor?as que est?n instalados pero no implementados todav?a.
* Cargar los contenidos; portales, proyectos, blog, etc.
* Agregar media queries para que el sitio sea amigable para m?vil.
* Ver c?mo agregar las im?genes, si en parallax o de otro modo.
* Hacer layouts de los posts
