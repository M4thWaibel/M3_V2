// Abre o modal com a imagem clicada
function openImageModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex';  // flex para alinhar ao centro
    modalImage.src = imgElement.src;
}
  
// Fecha o modal ao clicar no X ou fora da imagem
function closeImageModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function(){
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
      const imgs = carousel.querySelectorAll('img');
      let currentIndex = 0;
      imgs[currentIndex].classList.add('active');
      const interval = carousel.getAttribute('data-interval') || 3000;
      
      setInterval(() => {
        imgs[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % imgs.length;
        imgs[currentIndex].classList.add('active');
      }, interval);
    });
});