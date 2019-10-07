---
layout: post
title:  "Bienvenido a Jekyll"
date:   2019-09-17 00:17:39 -0300
categories: bienvenido post 
---
Esto es el texto que figura en la tarjeta del post. No figurará en el texto completo de la pagina del post. Para tener mas información de como crear un post, entra a este.
<!--section-->

Para agregar un post debes crear un archivo `.markdown` en la carpeta `_posts` que tenga el siguiente formato en el nombre:

`AÑO-MES-DIA-TITULO.markdown`

Donde Año es un número de cuatro cifras, mes y dia de dos cifras y titulo es el nombre al que referencia el post, sin espacios.

Adentro del post debes agregar al principio la parte frontal del archivo. Esta va antes que nada y se delimita por tres guiones.

Dentro de la parte frontal incluirás variables que definirán el comportamiento del post:

```
---
layout: post
title: título
date: fecha del psot
categories: categorías
---
```

Por ejemplo, en este post la parte frontal es así:

```
---
layout: post
title:  "Bienvenido a Jekyll"
date:   2019-09-17 00:17:39 -0300
categories: bienvenido post 
---
```

Para que los demás posts se vean con el formato de éste deberás incluir la variable `layout: post` tal cual está, indicando que usarás el formato `post` para representar el contenido.
Las otras variables sirven para definir mejor la metadata del post.