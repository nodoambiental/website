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

* Para agregar imágenes, agregar una entrada que tenga como inicio la cadena de texto `+image`, seguido de la ubicación de la imagen:

```
- data: +image /assets/images/imagenDeEjemplo.jpg
```

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
title:  "Titulo del post"           # Siempre entre comillas.
date:   2019-09-17 00:17:39 -0300   # Con formato AAAA-MM-DD HH:MM y zona horaria.
categories: documentación post      # Categorías a las que pertenezca el post, separadas por espacio.
tags: Jekyll Docs                   # Etiquetas a las que pertenezca el post, separadas por espacio.
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

#### ¿Error de caracter unicode, qué es esto?

Jekyll soporta nativamente codificaciones de caracteres UTF-8. Esto quiere decir que se pueden introducir caracteres que no pertenezcan al conjunto de caracteres ASCII y el sistema los debe procesar sin problemas. En algunos sistemas, particularmente aquellos que utilizan Windows, la codifcación con la que se crean la mayoría de los archivos por defecto no comprende UTF-8. Es por esto que pueden ocurrir errores de compilación de caracteres inválidos _a pesar de que expresamente Jekyll los soporta_. Para solucionar este problema hay que cambiar la codificación del archivo a `65001` **sin encabezado**. La forma más práctica de cambiar esto bajo Windows es utilizar el programa `Notepad++`, que permite guardar archivos con codificaciones personalizadas. También hay que tener cuidado al momento de realizar la compilación que la ventana de la terminal que ejecuta la compilación tenga habilitado UTF-8. Esto se puede hacer mediante el comando `chcp 65001` en Windows.

#### YAML Importa

Otro detalle a tener en cuenta es que si bien podemos cometer errores en la escritura del contenido y simplemente van a generar un resultado incorrecto, errores de formato en el _front-matter_ de los archivos impedirá realizar la compilación del sitio. Así que hay que tener especial cuidado al momento de editar esta sección.

# Para desarrolladores

Este sitio utiliza a [Jekyll](https://jekyllrb.com/docs/) como generador de sitio estático, a [Bulma](https://bulma.io/documentation/), [Lunr](https://lunrjs.com/) como motor de búsqueda, [Modernizr](https://modernizr.com/docs/) como librería de compatibilidad, [Anime.JS](https://animejs.com/documentation) como librería de animaciones, [JQuery](https://jquery.com/) como libreria extensora de funcionalidad, [JQuery Waypoints](http://imakewebthings.com/waypoints/guides/getting-started/) y algo de código a medida.

## Estructura interna

La estructura interna del sitio está separada entre los `assets`, archivos estáticos, las plantillas y los bloques de código.

### Plantillas

Las plantillas en Jekyll son código que se compila a una estructura del sitio. Jekyll utiliza un sistema de plantillas llamado [Liquid](https://es.shopify.com/blog/liquid-lenguaje-para-la-creacion-de-plantillas-en-shopify). Este sistema de plantillas permite generar código en función de una entrada y que no sea todo estático y fijo.

El sitio está separado en 15 plantillas, en orden alfabético:

#### blog.html

Esta plantilla toma la lista de posts ubicada en `_posts`, quebrando en tres columnas (separados en filas de tres tarjetas) todos los posts. El código relevante es:

```
{% for post in site.posts %}
    {% if forloop.index == 0 %}
        <div class="tile is-ancestor">
    {% endif %}

    {% assign modulo_check = forloop.index0 | modulo: 3 %}

    {% if modulo_check == 0 %}
        </div>
        <div class="tile is-ancestor">
    {% endif %}

    ...

{% endfor %}
```

#### categories.html

Esta plantilla toma la lista de categorías del sitio, quebrando en tres columnas (separados en filas de tres tarjetas) todos los posts. El código relevante es (similar al de `blog`):

```
{% for category in site.categories %}

    ...

    {% for post in category[1] %}
        {% if forloop.index == 0 %}
            <div class="tile is-ancestor">
        {% endif %}

        {% assign modulo_check = forloop.index0 | modulo: 3 %}

        {% if modulo_check == 0 %}
            </div>
            <div class="tile is-ancestor">
        {% endif %}

        ...

    {% endfor %}

    ...

{% endfor %}
```

#### contact.html

Esta plantilla provee un formulario de contacto simple mediante `POST`. Modificar a necesidad y apuntar al backend que procese el formulario.

#### contactsuccess.html

Esta plantilla provee una página de condición de éxito del formulario de contacto. Debe ser retornada con un código `301` como condición de éxito en el backend.

#### default.html

Esta es la plantilla base que incluye el encabezado con toda los metadatos necesarios, la navegación, y el pie de página. Más detalles de cada componente se pueden ver en la sección de Bloques Básicos. Esta plantilla se usa como base la cual será extendida por las demás plantillas, por lo que cualquier modificación aquí se verá reflejada globalmente en el sitio.

#### home.html

Esta plantilla provee la página principal del sitio web. Incluye bloques que proveen a cada sección de la página. 

#### infograph.html

Esta plantilla provee de formato a las publicaciones de infografía. Realiza una sanitización cruda del nombre del vínculo a la imagen:

```
...

<a href="/assets/images/infograph/
    {{page.title | remove: " " | replace: "á","a" | 
    replace: "é","e" | replace: "í","i" | replace: "ó","o" | 
    replace: "ú","u" | replace: "ñ","n"}}.png">

...
```

Esto es así porque la función de `url_escape` de jekyll por algún motivo no funciona, así que esto sirve como atajo para resolverlo.

Las otras secciones proveen el contenido (sin el extracto que aparece en la tarjeta):

```
{{ content | remove: page.excerpt }}
```

Y la bibliografía:

```
{% bibliography --cited_in_order %}
```

#### portals.html

Esta plantilla lee todos los portales presentes en `_data/portals.yml` y genera las tarjetas adecuadas, con la misma estructura de tres columnas vista previamente, enlazando a los archivos pertinentes:

```
{% assign portals = site.data.portals %}

{% for portal in portals %}
    {% if forloop.index == 0 %}
        <div class="tile is-ancestor">
    {% endif %}

    {% assign modulo_check = forloop.index0 | modulo: 3 %}

    {% if modulo_check == 0 %}
        </div>
        <div class="tile is-ancestor">
    {% endif %}

    ...

    <a href="{{portal.name}}.html">

    ...

{% endfor %}
```

#### post.html

Esta plantilla provee el contenido de un post abierto, removiendo el extracto de la tarjeta:

```
{{ content | remove: page.excerpt }}
```

Y agregando la bibliografía

```
{% bibliography --cited_in_order %}
```

#### project.html

Esta plantilla provee el contenido de una página básica que no sea un post. En realidad esto no debería llamarse project, ya que es una plantilla genérica, pero quedó así como legado de código previo que solo lo utilizaba para los proyectos. En el futuro esto será diferente.

#### search.html

Esta plantilla provee la búsqueda según lo que especifica [la documentación de Lunr](https://lunrjs.com/guides/getting_started.html). El código relevante para la creación del índice es:

```
  window.store = {
    {% for page in site.pages %}
      "{{ page.url | slugify }}": {
        "title": "{{ page.title | xml_escape }}",
        "author": "{{ page.author | xml_escape }}",
        "category": "{{ page.category | xml_escape }}",
        "content": {{ page.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ page.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
```

La búsqueda en sí se carga desde `assets/js/search.js`

#### services.html, services2.html, services3.html

Estas plantillas proveen las tarjetas expansibles en dos columnas de las subpáginas de servicios.

#### tags.html

Esta plantilla provee la página de etiquetas y separa los post relevantes en tres columnas utilizando la misma estructura que las otras plantillas:

```
{% for tag in site.tags %}

    ...

    {% for post in tag[1] %}
        {% if forloop.index == 0 %}
            <div class="tile is-ancestor">
        {% endif %}

        {% assign modulo_check = forloop.index0 | modulo: 3 %}

        {% if modulo_check == 0 %}
            </div>
            <div class="tile is-ancestor">
        {% endif %}
    {% endfor %}

    ...

{% endfor %}

```

### Bloques básicos

Los bloques básicos son pedazos sueltos de código que son insertos tal cual están dentro de donde sean invocados mediante el comando  `{% include NOMBRE.html %}` siendo NOMBRE el nombre del archivo encontrado en la carpeta `_includes`. Los siete bloques utilizados, en orden alfabético:

#### about.html

Genera un acordión y las entradas relacionadas según las lea de `_data/about.yml`. El código relevante es:

```
{% assign about = site.data.about %}

{% for element in about %}

    ...

        {% for item in element.content %}

        ...

        {% endfor %}

    ...

{% endfor %}

```

#### footer.html

Este bloque genera el pie de página de acuerdo a los datos que lea de `_data/footer.yml` y `_data/social.yml`, además de agregar la carga de todos los scripts necesarios. El código relevante es:

```
{% assign text = site.data.footer %}
{% assign social = site.data.social %}

{% for element in text %}

    ...

        {{element.content}}

        {% if forloop.index0 == 0 %}

            <br />

            {% for item in social %}
                <a href="{{item.element[1].link}}"><i class="fab fa-{{item.element[0].icon}} footer-social"></i></a>
            {% endfor %}
        {% endif %}

    ...

{% endfor %}

```

#### head.html

Este bloque carga todos los metadatos y favicons.

#### navigation.html

Este bloque genera el menú de navegación, con un simple switch para eliminar el botón de contacto en la página de contacto:

```
{% if {{page.path}} == "contact.markdown" or {{page.path}} == "contactsuccess.markdown" %}

    {% else %}
    
    ...

{% endif %}
```

#### projects.html

Este bloque genera todas las tarjetas de los proyectos (en una sola columna) junto con todos sus objetivos, de acuerdo a los datos que lea de `_data/projects.yml`. El código relevante es:

```
{% assign projects = site.data.projects %}
{% for project in projects %}

    ...

    {% for element in project.target %}

        {{element.content}}

    {% endfor %}

    ...

{% endfor %}
```

#### services.html 

Este bloque genera todas las tarjetas de los servicios (en una sola columna), de acuerdo a los datos que lea de `_data/services.yml`. El código relevante es:

```
{% assign services = site.data.services %}
{% for service in services %}

    ...

    {{ service.content }}

    ...

{% endfor %}
```

#### team.html

Este bloque genera todas las tarjetas de los miembros del equipo (en tres o más columnas), de acuerdo a los datos que lea de `_data/team.yml`. El código relevante es:

```
{% assign team = site.data.team %}
{% assign columns = 3 %}
{% assign column_sizing = 12 | divided_by: columns %}

{% for person in team %}
    {% if forloop.index == 0 %}
        <div class="tile is-ancestor">
    {% endif %}

    {% assign modulo_check = forloop.index0 | modulo: columns %}

    {% if modulo_check == 0 %}
        </div>
        <div class="tile is-ancestor">
    {% endif %}

    ...

{% endfor %}
```

### Estilo

Este sitio utiliza como base de estilo al provisto por [Bulma](https://bulma.io/documentation/) y utiliza el kit de [Font Awesome 5](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) y [Poppins](https://fonts.google.com/specimen/Poppins) como fuente, servida localmente.

Todo el contenido de estilo se encuentra repartido entre la carpeta `_sass` y la carpeta `assets/css`. Jekyll tiene un preprocesador de `SASS` por lo tanto se puede explotar todo el potencial de Bulma. En esta página de deja todo más o menos como viene, pero se puede modificar libremente a la necesidad que se tenga.

El estilo básico es `style.css`, que a su vez carga a:

```
bulma.css
fonts.css
solid.css  /* Font Awesome Solid */
brands.css  /* Font Awesome Brands */
```

A su vez, algunas subpáginas utilizan estilos específicos, como `search.css` utilizada por la página de búsqueda, `project.css` utilizada por casi todas las subpáginas, `contact.css` utilziada por el formulario de contacto y `blog.css` utilizada por el blog.

En general el estilo es auto-descriptivo, hay algunas reglas específicas para clases que genera Bulma, y para las clases utilizadas para cada cosa.

### JavaScript

Todo el código (exceptuando dependencias) se encuentra repartido entre `script.js`, `search.js` y `services.js`.

#### services.js

Este script simplemente expande y contrae las tarjetas expansibles de los servicios, agregando o quitando una clase, `.expanded` y `.contracted`.

#### search.js

Este código es una leve modificación de [el que se puede ver aquí](https://learn.cloudcannon.com/jekyll/jekyll-search-using-lunr-js/).

#### script.js

Este es el principal código de la página, y está dividido en seis partes:

* Navegación:

La navegación utilizada por bulma requiere `JS` para funcionar. Inicia expandida para dar soporte a clientes sin JavaScript.

* Hashtags:

Este código usa una expresión regular para buscar en la página toda aparición de un hashtag dentro de un bloque de texto, e inserta un hipervínculo hacia la página de etiquetas.

* Animaciones:

Agrega animaciones a todas las tarjetas utilizando `anime.js`. Waypoints se encarga de que las tarjetas aparezcan cuando la parte visible del DOM avance, animando la entrada de la tarjeta en función de la posición en pantalla.

* Acordeón:

Expande y contrae los elementos del acordeón que figura en la página principal.

* Colores aleatorios en tarjetas:

Genera pares de colores dentro de una paleta determinada y asigna una gradiente lineal como imagen de fondo, utilizando los pares de colores, aplicando este fondo a todas las tarjetas presentes.

### Dependencias

Este sitio depende de:

* Bulma v0.7.5
* AnimeJS v3.1.0
* JQuery v3.4.1
* Modernizr v3.6.0
* Lunr v2.3.8
* Waypoints v4.0.1
* Jekyll v4.0.0 (subdependencias figuran en `Gemfile`)

## Hacia delante

... El futuro!