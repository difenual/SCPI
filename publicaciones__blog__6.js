document.addEventListener('DOMContentLoaded', function () {
    // Simula obtener datos de un servidor o base de datos
    var publicaciones = [
        
        {
            titulo: '¿Cómo identificar si un Proceso de Contratación está obligado o no a implementar los Documentos Tipo expedidos por la Agencia Nacional de Contratación Pública – Colombia Compra Eficiente? (Sara Nuñez 05/03/2024)',
            contenido: 'La implementación de los documentos tipo que emitió la Agencia Nacional de Contratación Pública - Colombia Compra Eficiente es un reto para las entidades estatales y para los oferentes que quieren participar en estos procesos de contratación. Por esa razón, explicaré algunas reglas que faciliten a los partícipes del Sistema de Compra Pública a identificar a cuáles procesos de contratación se les aplica los documentos tipo expedidos por la ANCP-CCE.<br><br><b>A) Verificar si la entidad estatal que adelanta el proceso de contratación tiene la obligación de implementar los documentos tipo</b><br><br>Según el artículo 1 de la Ley 2022 de 2020, las entidades obligadas a implementar los documentos tipo son las sometidas al Estatuto General de Contratación Pública -EGCP-. En otras palabras, las entidades cuyo régimen de contratación sea especial no estarán obligadas a implementar los documentos tipo.<br>El artículo 56 de la Ley 2195 de 2022 contempla la posibilidad de extender la obligatoriedad de los documentos tipo a las entidades sujetas a regímenes especiales cuando las entidades estatales sujetas al Estatuto General de Contratación Pública (EGCP) celebren contratos o convenios interadministrativos con otras entidades estatales, patrimonios autónomos, o personas naturales o jurídicas de derecho privado cuyo régimen de contratación sea especial. Esto implica que si las entidades estatales exceptuadas, los patrimonios autónomos, o las personas naturales o jurídicas de derecho privado desean ser adjudicatarios de dichos contratos, deben someterse a un proceso de selección en el que se apliquen los documentos tipo expedidos por la Agencia, ya que se trata de un contrato con una entidad sujeta al Estatuto General de Contratación Pública.<br>Así las cosas, el primer paso para identificar si el proceso de contratación está obligado o no a implementar los documentos tipo es determinar  si la Entidad que adelanta el proceso tiene el deber de adoptarlos ya sea: i) por ser una entidad sometida al Estatuto General de Contratación Pública EGCP o ii) cuando la entidad sometida al régimen especial celebra un contrato interadministrativo con una entidad sometida al EGCP y con ocasión a este contrato interadministrativo requiere la adquisición de un bien, obra o servicio que esté cobijado por un documento tipo.<br><br><b>B)	Identificar los sectores de la economía a los cuales aplica actualmente los documentos tipo</b><br><br>El segundo paso es identificar los sectores de la economía que ya usan los documentos tipo. A continuación, se enuncian los sectores a los cuales, hasta la fecha, iniciaron su implementación:<br><br>-	Transporte<br>-	Agua Potable y Saneamiento Básico<br>- Infraestructura de Edificaciones (Educativo, hospitalario y cultura, recreación y deporte)<br>- Catastro con enfoque multipropósito<br><br>Conforme a lo anterior, las entidades estatales cuyo objetivo misional esté relacionado con alguno de estos sectores, tienen una alta probabilidad de estar obligadas a implementar los documentos tipo expedidos por la ANCP-CCE. A modo de ejemplo, la Secretaría de Educación del Distrito tiene como misión: “<i>garantizar la educación de calidad para los niños y jóvenes de la ciudad de Bogotá</i>” Efectivamente, el objeto misional tiene una relación con el sector de infraestructura educativa, y, por tanto, tal y como se explicará más adelante, si la Entidad adelanta una obra que esté identificada en la “Matriz 1 – Experiencia” tendrá la obligación de adelantar el proceso de contratación mediante el documento tipo. Lo anterior debido a que el proyecto a ejecutar tiene relación con el sector de infraestructura educativa.<br>Lo mismo sucede con los oferentes interesados a presentarse a estos procesos. Las empresas, cuyo objeto social se enfoque a algún sector enunciado, pueden participar en procesos de contratación obligados a implementar los documentos tipo adoptados por la ANCP-CCE. Situación que les atribuye una ventaja competitiva en el proceso, porque las reglas incluidas en los pliegos de condiciones tipo tiene como propósito incentivar la participación de varios oferentes.<br><br><b>C) Determinar la modalidad de selección que ya implementa los documentos tipo.</b><br><br>El tercer paso consiste en reconocer las modalidades de selección que, de acuerdo a la ANCP -CCE, ya adoptaron los documentos tipo. El Estatuto General de Contratación Pública de Contratación Pública crea diferentes modalidades para seleccionar a los contratistas, éstas son: licitación pública, selección abreviada de menor cuantía, concurso de méritos abiertos, mínima cuantía y la contratación directa.<br>La ANCP-CCE al momento de adoptar documentos tipo lo realiza de manera progresiva y gradual, esto es, acogiéndolos por cada modalidad de selección. Por esa razón, la Entidad oferente deberá identificar la modalidad de selección que aplica el documento tipo para el respectivo proceso de contratación y verificar si efectivamente la modalidad de selección sigue vigente.<br>Hasta la fecha, los documentos tipo para el sector de infraestructura de transporte se han implementado para las diferentes modalidades de selección: i) licitación de obra pública, ii) selección abreviada de menor cuantía, iii) mínima cuantía, iv) concurso de méritos para proyectos de interventoría de obra pública y v) concurso de méritos para proyectos de consultoría de estudios y diseños de ingeniería. Sin embargo, para los sectores de infraestructura de agua potable y saneamiento básico e infraestructura social no se han implementado los documentos tipo para todas las modalidades de selección, sino, únicamente para dos o tres modalidades.<br>En otras palabras, si la ANCP-CCE aún no ha expedido un documento tipo para la modalidad de selección que requiere adelantar el proceso, la Entidad no estará obligada a implementar el documento tipo. En todo caso, la entidad pública tendrá la facultad de decidir si los acoge como una buena práctica contractual.',
            imagen: 'blog__6.jpg'
        }
    ];


    



    var listaPublicaciones = document.getElementById('lista-publicaciones');

    // Iterar sobre las publicaciones y crear elementos HTML para cada una
    publicaciones.forEach(function (publicacion, index) {
        var article = document.createElement('article');
        var titulo = document.createElement('h3');
        var contenido = document.createElement('p');
        var imagen = document.createElement('img');
        var shareDiv = document.createElement('div');
        var facebookBtn = document.createElement('a');
        var twitterBtn = document.createElement('a');
        var linkedinBtn = document.createElement('a');
        var compartirTitulo = document.createElement('h4');
        
                
        titulo.textContent = publicacion.titulo;
        contenido.innerHTML = publicacion.contenido;
        imagen.src = publicacion.imagen;

        imagen.classList.add('publicaciones__imagenes');
             
        // Agregar clases y atributos necesarios para los botones de compartir
        
        facebookBtn.classList.add('share-button', 'share-facebook');
        facebookBtn.innerHTML = '<i class="fab fa-facebook-f"></i>';

        twitterBtn.classList.add('share-button', 'share-twitter');
        twitterBtn.innerHTML = '<i class="fa-brands fa-x-twitter"></i>';
        
        linkedinBtn.classList.add('share-button', 'share-linkedin');
        linkedinBtn.innerHTML = '<i class="fab fa-linkedin-in"></i>';

        // Agregar botones de compartir al contenedor div
        shareDiv.appendChild(facebookBtn);
        shareDiv.appendChild(twitterBtn);
        shareDiv.appendChild(linkedinBtn);

        compartirTitulo.textContent = '¡Si te gustó este artículo puedes compartirlo en tus redes sociales!';

              
        // Agregar contenido y botones al artículo
        article.appendChild(titulo);
        article.appendChild(contenido);
        article.appendChild(imagen);
        article.appendChild(compartirTitulo);
        article.appendChild(shareDiv);

        // Agregar clase para aplicar estilos específicos
        article.classList.add('blog-post');

        // Agregar identificador único para cada publicación
        article.id = 'post-' + index;

        // Agregar artículo a la lista de publicaciones
        listaPublicaciones.appendChild(article);
    });

    // Obtener todos los botones de compartir
    var shareButtons = document.querySelectorAll('.share-button');

    // Iterar sobre cada botón y agregar un evento de clic
    shareButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // Obtener la URL de la página actual
            var url = window.location.href;

            // Obtener el título de la publicación actual
            var titulo = button.parentNode.parentNode.querySelector('h3').textContent;

            // Obtener la red social correspondiente al botón
            var socialNetwork = button.classList.contains('share-facebook') ? 'facebook' :
                                 button.classList.contains('share-twitter') ? 'twitter' :
                                 button.classList.contains('share-linkedin') ? 'linkedin' : '';

            // Generar el enlace de compartir según la red social
            var shareUrl = '';
            switch (socialNetwork) {
                case 'facebook':
                    shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
                    break;
                case 'twitter':
                    shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(titulo);
                    break;
                case 'linkedin':
                    shareUrl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(titulo);
                    break;
                default:
                    break;
            }

            // Abrir una ventana emergente para compartir
            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });
});