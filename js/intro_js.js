// animation inspired by https://vivianle05.github.io/339finalproject/main.html
document.addEventListener('DOMContentLoaded', function() {
    const imageItems = document.querySelectorAll('.image-item');
    console.log("card animation is loaded");

    // Function to apply the 3D transform
    function rotateElement(event, element) {
        const boundingClientRect = element.getBoundingClientRect();
        const centerX = boundingClientRect.left + boundingClientRect.width / 2;
        const centerY = boundingClientRect.top + boundingClientRect.height / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        const rotateY = (30 * mouseX) / (boundingClientRect.width / 2);
        const rotateX = -(30 * mouseY) / (boundingClientRect.height / 2);

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    // Apply event listeners to each image item
    imageItems.forEach(item => {
        item.addEventListener('mousemove', function(e) {
            rotateElement(e, this);
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
});
