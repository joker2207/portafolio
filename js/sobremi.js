// Espera a que se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Animación de las barras de progreso
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            // Guarda el valor final
            const finalValue = bar.style.width;
            
            // Inicializa la barra a 0%
            bar.style.width = '0%';
            bar.textContent = '0%';
            
            // Anima la barra hasta su valor final
            setTimeout(() => {
                bar.style.width = finalValue;
                bar.textContent = finalValue;
            }, 300);
        });
    }
    
    // Función para verificar si un elemento está en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Anima las barras cuando la sección stack está en el viewport
    function checkStackVisibility() {
        const stackSection = document.getElementById('stack');
        if (stackSection && isElementInViewport(stackSection)) {
            animateProgressBars();
            // Quita el evento scroll una vez que se ha animado
            window.removeEventListener('scroll', checkStackVisibility);
        }
    }
    
    // Inicialmente checa si la sección ya está visible
    checkStackVisibility();
    
    // Agrega el evento scroll para checar cuando la sección sea visible
    window.addEventListener('scroll', checkStackVisibility);
    
    // Agrega efectos de hover a los elementos de tecnología
    const tecnologias = document.querySelectorAll('.tecnologia');
    tecnologias.forEach(tech => {
        tech.addEventListener('mouseenter', function() {
            // Añade una clase para destacar el elemento en hover
            this.classList.add('tecnologia-hover');
            
            // Obtiene la barra de progreso dentro de esta tecnología
            const progressBar = this.querySelector('.progress-bar');
            if (progressBar) {
                // Guarda el valor actual
                const currentValue = progressBar.style.width;
                
                // Pequeña animación de la barra al hacer hover
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = currentValue;
                }, 200);
            }
        });
        
        tech.addEventListener('mouseleave', function() {
            // Quita la clase de hover
            this.classList.remove('tecnologia-hover');
        });
    });
    
    // Smooth scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});