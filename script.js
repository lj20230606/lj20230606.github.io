// 照片相册切换
const photoNav = document.querySelector('.photo-nav');
const albums = document.querySelectorAll('.album');

photoNav.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName === 'A') {
    const albumId = e.target.getAttribute('href').substring(1);
    albums.forEach(album => {
      if (album.id === albumId) {
        album.classList.add('active');
      } else {
        album.classList.remove('active');
      }
    });
  }
});