const imageFiles = [
  'IMG_5795.jpg',
  '9999.jpg',
  'DTHI2077.jpg',
  'IMG_5795.jpg'
];

function displayImages() {
  const carousel = document.getElementById('imageCarousel');
  imageFiles.forEach((fileName, index) => {
    const div = document.createElement('div');
    div.className = 'image-item';
    div.style.backgroundImage = `url("${fileName}")`;
    div.style.animationDelay = `${index * 0.2}s`;
    carousel.appendChild(div);
  });
}

.image-item {
    flex: 0 0 150px;      /* ความกว้างเท่ากันทุกภาพ */
    height: 150px;        /* ความสูงเท่ากัน = สี่เหลี่ยม */

    scroll-snap-align: center;

    background-size: cover;      /* ไม่ยืด ครอปแทน */
    background-position: center; /* จัดกึ่งกลาง */
    background-repeat: no-repeat;

    border-radius: 10px;
    overflow: hidden;            /* รูปไม่ล้นกรอบ */

    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);

    opacity: 0;
    transform: scale(0.8);
    animation: fadeInScale 1s forwards;
}

//ยืดตามจอ
.image-item {
    flex: 0 0 30vw;
    max-width: 160px;
    height: 30vw;
    max-height: 160px;
    ...
}
