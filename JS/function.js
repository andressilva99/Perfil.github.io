document.addEventListener('DOMContentLoaded', function () {
    const datos = document.getElementById('datos');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    datos.addEventListener('click', function () {
        console.log("Boton oprimido datos");
        document.getElementById('bconocimiento').style.display = 'none';
        document.getElementById('beducacion').style.display = 'none';
        document.getElementById('bcontacto').style.display = 'none';
        document.getElementById('bexperiencia').style.display = 'none';
        document.getElementById('bdatos').style.display = 'block';
        // Cierra el menú desplegable Bootstrap
        navbarToggler.click();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const contacto = document.getElementById('contacto');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    contacto.addEventListener('click', function () {
        console.log("Boton oprimido contacto");
        document.getElementById('bconocimiento').style.display = 'none';
        document.getElementById('beducacion').style.display = 'none';
        document.getElementById('bdatos').style.display = 'none';
        document.getElementById('bexperiencia').style.display = 'none';
        document.getElementById('bcontacto').style.display = 'block';
        // Cierra el menú desplegable Bootstrap
        navbarToggler.click();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const experiencia = document.getElementById('experiencia');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    experiencia.addEventListener('click', function () {
        console.log("Boton oprimido experiencia");
        document.getElementById('bconocimiento').style.display = 'none';
        document.getElementById('beducacion').style.display = 'none';
        document.getElementById('bdatos').style.display = 'none';
        document.getElementById('bcontacto').style.display = 'none';
        document.getElementById('bexperiencia').style.display = 'block';
        // Cierra el menú desplegable Bootstrap
        navbarToggler.click();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const educacion = document.getElementById('educacion');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    educacion.addEventListener('click', function () {
        console.log("Boton oprimido educacion");
        document.getElementById('bconocimiento').style.display = 'none';
        document.getElementById('bdatos').style.display = 'none';
        document.getElementById('bcontacto').style.display = 'none';
        document.getElementById('bexperiencia').style.display = 'none';
        document.getElementById('beducacion').style.display = 'block';    
        // Cierra el menú desplegable Bootstrap
        navbarToggler.click();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const conocimiento = document.getElementById('conocimiento');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    conocimiento.addEventListener('click', function () {
        console.log("Boton oprimido conocimiento");
        document.getElementById('bdatos').style.display = 'none';
        document.getElementById('bcontacto').style.display = 'none';
        document.getElementById('bexperiencia').style.display = 'none';
        document.getElementById('beducacion').style.display = 'none';
        document.getElementById('bconocimiento').style.display = 'block';    
        // Cierra el menú desplegable Bootstrap
        navbarToggler.click();
    });
});

