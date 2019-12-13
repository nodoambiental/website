# Portal-jekyll

Portal de Nodo Ambiental 2019 en Jekyll.

Este portal está estructurado de manera que sea fácilmente editable sin tocar código y provea flexibilidad suficiente para las expansiones requeridas a corto plazo.

Jekyll provee una plataforma flexible y poderosa que genera sitios totalmente estáticos. Un sitio estático es aquel que solamente sirve archivos y no requiere de ninguna clase de procesamiento en el servidor, ya que todo se realiza en el navegador de quien visualize el sitio. esto permite abaratar costos de hosting y simplificar enormemente la distribución y subida del sitio puesto que solamente es necesario copiar los contenidos al hosting que lo sirva.

## Estructura

### Estructura externa

Este sitio está estructurado de acuerdo a los lineamientos básicos que requiere Jekyll, junto con un par de carpetas adicionales donde reside el contenido;

Dentro de la carpeta `_site` se encuentra el sitio web completo compilado. Este es el sitio que será expuesto en la web y que contiene todo lo necesario para ser visualizado. 

Las otras carpetas y archivos, tanto en la raíz como en subcarpetas, representan el código fuente que debe ser procesado antes de poder visualizarse en la web. Este proceso es el _compilado_ del código. 

### Compilando este sitio

Para compilar el código fuente de esta web hace falta installar **Ruby**, y el administrador de paquetes **Bundler**.

Para instalar `Ruby` en la plataforma en la que se esté trabajando se pueden seguir las instrucciones en la [documentación oficial](https://www.ruby-lang.org/es/documentation/installation/). Para instalar `Bundler` se pueden seguir las instrucciones de su [documentación oficial](https://bundler.io/es/).

Una vez instalado, se pueden instalar todas las dependencias ejecutando desde una línea de comandos, en la carpeta raíz del sitio el comando 

```
bundle install
```

Para despues compilar con 

```
bundle exec jekyll build
```

La compilación local para realizar modificaciones en vivo puede realizarse con el comando

```
bundle exec jekyll serve
```

Que generará un acceso al sitio desde la dirección `localhost:4000`. Este sitio se actualiza en vivo y las modificaciones realizadas al guardar un archivo pueden verse simplemente recargando la página.

### Jerarquía del sitio

El código fuente del sitio está separado en dos partes importantes:

* Las plantillas y código de formato y estilo
* El contenido modificable por el usuario

Las plantillas, código de formato y estilo reside dentro de estas carpetas y archivos (todo relativo a la raíz de este repositorio), y no se lo debe tocar (a menos que sepas lo que estás haciendo):

```
_includes/
_layouts/
_sass/
assets/css/
assets/js/
pages/blog/
pages/portals/main.markdown
404.html
search.markdown
search.json
Gemfile
Gemfile.lock
package-lock.json
_config.yml
.gitignore
```

Por otro lado, el contenido modificable de manera segura por el usuario reside en:

```
_data/
_posts/
_bibliograpy/
pages/documentation/
pages/portals/
pages/projects/
pages/services/
assets/images/
assets/icon
index.markdown
```

#### Data

En la carpeta `_data` se encuentran los contenidos editables por el usuario visibles en la página principal. Cada uno de los archivos `.yml` contiene partes del contenido, formateados como `YAML` [(se puede ver más aquí)](https://learnxinyminutes.com/docs/es-es/yaml-es/), separadas por temática o función.

#### Posts

En la carpeta `_posts` se encuentran los post íntegros y completos que van a ser visibles en la sección del Blog. Cada post es un archivo `.markdown` que contiene un _front-matter_ formateado como `YAML` y un contenido principal formateado como `Markdown` [(se puede ver más aquí)](https://markdown.es/sintaxis-markdown/).

#### Bibliografía

En la carpeta `_bibliography` se encuentra un archivo llamado `references.bib` que contiene la lista de todas las entradas bibliográficas empleadas en el sitio. Este archivo debe contener las entradas de acuerdo al formato estándar de bibliografías de LaTeX. Más información de cómo es conformada una cita en formato `.bib` puede verse [aquí](http://logistica.fime.uanl.mx/miguel/docs/BibTeX.pdf#subsection.2.2), y una herramienta online para generar las entradas puede encontrarse [aquí](https://truben.no/latex/bibtex/).

#### Portales

Dentro de la carpeta `pages/portals` se encuentran los post íntegros y completos que van a ser visibles cuando alguien entre en una de las tarjetas visibles en la sección Portales. Como en los posts, cada post es un archivo `.markdown` que contiene un _front-matter_ formateado como `YAML` y un contenido principal formateado como `Markdown`.

#### Documentación

Dentro de la carpeta `pages/documentation` se encuentra el contenido visible al entrar alguien en la sección Documentación. Como en los posts, documentación es un archivo `.markdown` que contiene un _front-matter_ formateado como `YAML` y un contenido principal formateado como `Markdown`.

#### Proyectos

Dentro de la carpeta `pages/projects` se encuentran los post íntegros y completos que van a ser visibles cuando alguien entre en una de las tarjetas visibles en la sección Proyectos. Como en los posts, cada post es un archivo `.markdown` que contiene un _front-matter_ formateado como `YAML` y un contenido principal formateado como `Markdown`.

#### Servicios

Dentro de la carpeta `pages/services` se encuentran los post íntegros y completos que van a ser visibles cuando alguien entre en una de las tarjetas visibles en la sección Servicios. Como en los posts, cada post es un archivo `.markdown` que contiene un _front-matter_ formateado como `YAML` y un contenido principal formateado como `Markdown`.

#### Imágenes

Dentro de la carpeta `asset/images` se encuentran las imágenes a las que vinculan las demás páginas dentro del sitio. Si bien las imágenes pueden colocarse en cualquier lugar, es mejor adherirse al estándar de ponerlas dentro de esta carpeta para mantener el orden.

#### Íconos

Dentro de la carpeta `asset/icon` se encuentran las imágenes que son visibles como el ícono de la página en el navegador. Estos íconos fueron generados a base de una imagen madre, subida a [este servicio](https://www.favicon-generator.org/). Para cambiarlo simplemente generar los íconos con ese servicio y sobreescribir los que están persentes en esta carpeta.

#### Índice principal

En el archivo `index.markdown` encontrado en la raíz del repositorio se encuentran variables que definen contenidos generales de la página principal del sitio. Este archivo es muy importante porque si bien no tiene contenido en sí, algunas de las variables definidas en el _front-matter_ son muy significativas para la estructura del sitio.

## Editando

Editar este sitio es muy simple y puede realizarse desde cualquier editor de texto. Simplemente hay que seguir las reglas detalladas por los estándares a los que se apega la estructura de este sitio, con cuidado de no introducir código `YAML`, `Markdown` o `BibTeX` inválido. Se recomienda editar utilizando un editor de texto que soporte resaltado de sintaxis, como ser [Visual Studio Code](https://code.visualstudio.com/) o [Sublime Text](https://www.sublimetext.com/).

### Contenido editable por el usuario

Como se detalló en la sección de Estructura, hay una parte que está diseñada para ser editable por el usuario. Si bien cada archivo tiene un comentario explicando con detenimiento cómo editarlo, se detalla aquí también:

#### Data

En la carpeta `_data` se encuentran siete archivos editables, todos en formato `YAML`:

##### about.yml | Acerca de

* Para modificar el orden de aparición de los elementos en el acordeón, simplemente reorganizarlos, el orden en la página refleja el presente en el archivo.

* Caracteres unicode son aceptados sin inconvenientes, por lo que agregar acentos o caracteres especiales no representa inconvenientes.

* Para agregar elementos al acordeón simplemente agregar otra entrada.

* Para eliminar elementos del acordeón simplemente eliminar la entrada.

* Para agregar mas detalles en cada entrada agregar sub-entradas llamadas `data` como figura en las actuales.

##### footer.yml | Pie de página

* Para modificar el orden de aparición simplemente reorganizar las entradas; el orden en la página, de izquierda a derecha refleja el presente en el archivo.

* Para agregar o quitar columnas simplemente agregar o quitar entradas.

* Caracteres unicode son aceptados sin inconvenientes, por lo que agregar acentos o caracteres especiales no representa inconvenientes.

##### social.yml | Pie de página - Vínculos sociales

* El ícono corresponde a la librería de íconos de Font Awesome 5 Free Solid, puede encontrarse la lista completa [aquí](https://fontawesome.com/icons?s=solid).

* Para modificar el orden de aparición simplemente reorganizar las entradas, el orden en la página refleja el presente en este archivo, de izquierda a derecha.

* Caracteres unicode son aceptados sin inconvenientes, por lo que agregar acentos o caracteres especiales no representa inconvenientes.

* Para agregar o quitar elementos simplemente agregar o quitar entradas.

* El link debe figurar con la ruta completa; de la forma "https://www.ejemplo.com"

##### portals.yml | Portales

* Para modificar el orden de aparición simplemente reorganizar los elementos, el orden en la página refleja el presente en este archivo.

* Caracteres unicode son aceptados sin inconvenientes, por lo que agregar acentos o caracteres especiales no representa inconvenientes.

* El ícono corresponde a la librería de íconos de Font Awesome 5 Free Solid, puede encontrarse la lista completa [aquí](https://fontawesome.com/icons?s=solid).

* El archivo al que vincula cada tarjeta debe tener **exactamente el mismo nombre** que figura en la tarjeta, en formato `.markdown` y encontrarse en `pages/portals/`.

##### projects.yml | Proyectos

* Para modificar el orden de aparición simplemente reorganizar los elementos, el orden en la página refleja el presente en este archivo.

* Caracteres unicode son aceptados sin inconvenientes, por lo que agregar acentos o caracteres especiales no representa inconvenientes.

* El ícono corresponde a la librería de íconos de Font Awesome 5 Free Solid, puede encontrarse la lista completa [aquí](https://fontawesome.com/icons?s=solid).

* El archivo al que vincula cada tarjeta debe tener **exactamente el mismo nombre** que figura en la tarjeta, en formato `.markdown` y encontrarse en `pages/projects/`.

* Para agregar objetivos adicionar un ítem a la lista llamada `target`, llamado `content`, tal como figura en los proyectos presentes.

* Para eliminar objetivos simplemente removerlos de la lista llamada `target`.

##### services.yml | Servicios

* Para modificar el orden de aparición simplemente reorganizar los elementos, el orden en la página refleja el presente en este archivo.

* Caracteres unicode son aceptados sin inconvenientes, por lo que agregar acentos o caracteres especiales no representa inconvenientes.

* El ícono corresponde a la librería de íconos de Font Awesome 5 Free Solid, puede encontrarse la lista completa [aquí](https://fontawesome.com/icons?s=solid).

* El archivo al que vincula cada tarjeta debe tener **exactamente el mismo nombre** que figura en la tarjeta, en formato `.markdown` y encontrarse en `pages/services/`.

##### team.yml | Equipo

* Las imágenes deberán tener **exactamente el mismo nombre** que figura en la lista, y estar en formato `.png`, ubicadas en `assets/images/team/`.

* Para modificar el orden de aparición simplemente reorganizar los elementos, el orden en la página refleja el presente en este archivo.

* Caracteres unicode son aceptados sin inconvenientes, por lo que agregar acentos o caracteres especiales no representa inconvenientes.


### Posts

Para agregar un post se debe crear un archivo `.markdown` en la carpeta `_posts` que tenga el siguiente formato en el nombre:

```
AÑO-MES-DIA-TITULO.markdown
```

Donde AÑO es un número de cuatro cifras, MES y DIA se indican con dos cifras y TITULO es el nombre al que referencia el post, sin espacios.

Una vez creado, la edición de un post está separada en dos partes. La edición de las variables presentes en el _front-matter_ y la edición del contenido en sí.

#### Front-Matter

El _front-matter_ deberá ir siempre al inicio del archivo, y será abierto por tres guiones y cerrado por tres guiones:

```
---
# Front Matter va aquí
---
```

Aquí irán variables `YAML` que definirán el comportamiento del post. La variable mas importante es `layout`, que le indica a Jekyll como leer el archivo y procesarlo. Para los posts regulares el layout siempre deberá ser `post`:

```
---
layout: post
---
```

Para agregar el título, la fecha de muestra y demás metadatos se agregan las variables pertinentes:

```
---
layout: post
title:  "Titulo del post" # Siempre entre comillas.
date:   2019-09-17 00:17:39 -0300 # Con formato AAAA-MM-DD HH:MM y zona horaria.
categories: documentación post # Categorías a las que pertenezca el post, separadas por espacio.
tags: Jekyll Docs # Etiquetas a las que pertenezca el post, separadas por espacio.
---
```
#### Contenido

Una vez cerrado el _front-matter_ inicia el contenido del archivo. Los post contienen un texto de muestra que figurará en la tarjeta del post. Este texto va a ser el que se encuentre antes del divisor de contenido `<!--section-->`, o en su defecto el primer párrafo del contenido.

Por lo tanto el contenido sería más o menos así:


```

Esto es el texto que figura en la tarjeta del post.

<!--section-->

Este es el contenido que se va a mostrar cuando se ingrese al post. 
El texto que figura en la tarjeta no figurará aquí si fue separado con el divisor de contenido.
```

El resto del contenido puede ser formateado con formato `Markdown`, y será procesado por Jekyll al momento de la compilación.

#### Infografías

Existe una plantilla especial para los post de infografías. Para utilizar esta plantilla especial, se debe cambiar el layout de `post` a `infograph`:

```
---
layout: infograph
---
```

Y agregar una variable especial llamada `img_text`. Esta variable contiene el texto que figurará en la infografía como resumen o descripción breve. No es lo mismo que el texto que figurará en la tarjeta del post. Esta variable, como es texto y puede llegar a ser muy descriptivo, es mejor declararla como una variable _multilínea_ de acuerdo a los estándares que define `YAML`:

```
---
layout: infograph
img_text: |
  Este es el texto que figura en la infografía.
  Cada nueva oración debe ir siempre separada del borde izquierdo (en el editor de texto)
  por dos espacios en blanco, como aquí. De lo contrario no se podrá procesar exitosamente el sitio.
  Puede tener varias líneas, sin inconveniente, y utilizar cualquier caracter, incluso los caracteres especiales para YAML :;'"@.
---
```

Se recomienda también que en las infografías se utilice una imagen como texto de tarjeta, de manera que sea identificable visualmente en la lista de posts. Para hacer esto se debe utilizar el divisor de contenido:

```
![texto alternativo](/assets/images/infograph/nombredelaimagen.png)

<!--section-->

Este es el contenido que se va a mostrar cuando se ingrese al post. 
El texto que figura en la tarjeta no figurará aquí si fue separado con el divisor de contenido.
```

Como se puede ver en el ejemplo, la imagen debe estar dentro de la carpeta `assets/images/infograph`, y además debe ser nombrada bajo ciertas reglas:

Las imágenes deben tener **exactamente el mismo nombre que el título del post**, con otras condiciones: **sin los espacios, sin los acentos y reemplazando la `ñ` con la `n`**.

Por ej: "Temática de los ñus" -> "Tematicadelosnus"

Se deben respetar las capitalizaciones del título.

De esta manera todos los vínculos funcionaran adecuadamente.


### Bibliografía


La bibliografía se encuentra en el archivo `references.bib` que reside en la carpeta `_bibliography` en la raíz del repositorio. 

Esta bibliografía deberá ser formateada en formato `BibTex`, y es monolítica; es decir que _toda_ la bibliografía del sitio, sin importar donde sea citada, deberá figurar en este archivo. Más información de cómo es conformada una cita en formato `.bib` puede verse [aquí](http://logistica.fime.uanl.mx/miguel/docs/BibTeX.pdf#subsection.2.2), y una herramienta online para generar las entradas puede encontrarse [aquí](https://truben.no/latex/bibtex/).

Un ejemplo de cita en este formato sería:

```
@book{ruby,
  title     = {The Ruby Programming Language},
  author    = {Flanagan, David and Matsumoto, Yukihiro},
  year      = {2008},
  publisher = {O'Reilly Media}
}
```

Para citar una entrada existente en la bibliografía, en el lugar donde se desea que se incluya la cita (estilo APA) se deberá ingresar este código:

```
{% cite NOMBRE %}
```

Siendo NOMBRE el nombre dado en la entrada correspondiente. Todas las citas incluidas en un post o documento aparecerán con el formato adecuado en el pie de la página bajo un indicador de referencias.

### Portales

Los portales se desarrollan como un post normal, con la diferencia de que deben tener **exactamente el mismo nombre** que figura en la entrada correspondiente en `_data/portals.yml`, en formato `.markdown` y encontrarse en `pages/portals/`.

Otra diferencia con los posts es que la plantilla a utilizar no es `post`, es `project`, y carecen de divisor de contenido. Un ejemplo de archivo de portal entonces puede ser:

```
---
layout: project
title: Título del Portal
categories: categoría
tags: etiquetas portal proyectos
---

# Contenido

Contenido del portal

...
```

### Documentación

La documentación del sitio se desarrolla como un post normal, con la diferencia de que el archivo está predefinido como `pages/documentation/main.markdown`

El _front-matter_ del archivo debe dejarse como está, y modificar el contenido a la necesidad que se tenga.

### Proyectos

Los proyectos se desarrollan como un post normal, con la diferencia de que deben tener **exactamente el mismo nombre** que figura en la entrada correspondiente en `_data/projects.yml`, en formato `.markdown` y encontrarse en `pages/projects/`.

Otra diferencia con los posts es que la plantilla a utilizar no es `post`, es `project`, y carecen de divisor de contenido. Un ejemplo de archivo de portal entonces puede ser:

```
---
layout: project
title: Título del Proyecto
categories: categoría
tags: etiquetas proyectos
---

# Contenido

Contenido del proyecto

...
```

### Servicios

Los servicios deben tener **exactamente el mismo nombre** que figura en la entrada correspondiente en `_data/services.yml`, en formato `.markdown` y encontrarse en `pages/services/`.

Existen tres plantillas base para los servicios, modificando el objetivo al cual apunta cada una. Estas plantillas son `services`, `services2` y `services3`, que tienen cierto contenido incorporado. Estas plantillas son modificables pero están fuera del alcance de la modificación por el usuario final.

El _front-matter_ de los servicios además de la plantilla a utilizar incorpora los nombres de las tarjetas y el contenido expansible, en una variable multilínea. Además, el contenido en sí de la página, que es visible _arriba_ de las tarjetas expansibles.

Un ejemplo de esto sería:

```
---
layout: services
title: Servicios
organizaciones_icon: users-cog
organizaciones: |
  lorem ipsum dolor
  sit amet et doraem denestratum.
escuelas_icon: graduation-cap
escuelas: |
  lorem ipsum dolor
  sit amet et doraem denestratum.
---

#### Organizaciones y escuelas

contenido
...
```

Servicios es el sector menos editable del sitio debido a la complejidad inherente que tiene la representación de las subpáginas de servicios y está hecho de esta manera para reducir la complejidad expuesta en los archivos modificables.

### Índice principal

El índice principal es el archivo `index.markdown` que figura en la raíz del repositorio. Este archivo contiene variables `YAML` que definen parte de contenido suelto en la página principal, además de la plantilla base, `home`. En este archivo, la variable `layout: home` no debe ser modificada.

### Hashtags

El sitio soporta el uso de hastags, simplemente escribiendo el caracter `#` antes de una palabra (sin espacio). El hashtag automáticamente se transformará en un hipervínculo espeialmente formateado que lleve a la página de etiquetas. De esta manera si ingreso en el hipervínculo generado al escribir #jekyll me redirigirá a etiquetas, la sección de jekyll.

### Consideraciones especiales al momento de editar los archivos

#### ¿Error de caracter unicode, que es esto?

Jekyll soporta nativamente codificaciones de caracteres UTF-8. Esto quiere decir que se pueden introducir caracteres que no pertenezcan al conjunto de caracteres ASCII y el sistema los debe procesar sin problemas. En algunos sistemas, particularmente aquellos que utilizan Windows, la codifcación con la que se crean la mayoría de los archivos por defecto no comprende UTF-8. Es por esto que pueden ocurrir errores de compilación de caracteres inválidos _a pesar de que expresamente Jekyll los soporta_. Para solucionar este problema hay que cambiar la codificación del archivo a `65001` **sin encabezado**. La forma más práctica de cambiar esto bajo Windows es utilizar el programa `Notepad++`, que permite guardar archivos con codificaciones personalizadas. También hay que tener cuidado al momento de realizar la compilación que la ventana de la terminal que ejecuta la compilación tenga habilitado UTF-8. Esto se puede hacer mediante el comando `chcp 65001` en Windows.

#### YAML Importa

Otro detalle a tener en cuenta es que si bien podemos cometer errores en la escritura del contenido y simplemente van a generar un resultado incorrecto, errores de formato en el _front-matter_ de los archivos impedirá realizar la compilación del sitio. Así que hay que tener especial cuidado al momento de editar esta sección.

## Estructura interna

### Plantillas

### Bloques básicos

### Estilo

### Dependencias

## Hacia delante