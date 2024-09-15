// إضافة وظيفة التنقل إلى الرابط عند الضغط على زر "تحدث معي"
document.getElementById("talkToMeBtn").addEventListener("click", function() {
    window.location.href = "https://chatgpt.com/g/g-0qYC7XtjR";
});

// إعداد التمرير للانتقال إلى الشرائح المختلفة
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// التمرير لأسفل أو لأعلى للتنقل بين الشرائح
window.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        nextSlide(); // التمرير لأسفل
    } else {
        prevSlide(); // التمرير لأعلى
    }
});

// عرض الشريحة الأولى عند تحميل الصفحة
showSlide(currentSlide);
