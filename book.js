// الحصول على زر "العودة للأعلى" باستخدام الـ ID الخاص به
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// إضافة مستمع حدث عند تمرير الصفحة (Scroll)
window.addEventListener('scroll', () => {
  // إذا تم النزول أكثر من 300 بكسل من أعلى الصفحة
  if (window.scrollY > 300) {
    // إظهار زر العودة للأعلى
    scrollToTopBtn.style.display = 'block';
  } else {
    // إخفاء الزر إذا لم يتم النزول 300 بكسل
    scrollToTopBtn.style.display = 'none';
  }
});

// إضافة مستمع حدث عند الضغط على زر العودة للأعلى
scrollToTopBtn.addEventListener('click', () => {
  // التمرير بسلاسة إلى أعلى الصفحة
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});





// الانتظار حتى يتم تحميل محتوى الصفحة بالكامل (DOM)
document.addEventListener("DOMContentLoaded", function () {
  // اختيار كل الروابط التي هي أبناء لعناصر تحتوي على الكلاس "dropdown"
  const dropdowns = document.querySelectorAll(".dropdown > a");

  // لكل رابط من هذه الروابط نضيف حدث عند النقر عليه
  dropdowns.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // منع التصرف الافتراضي للرابط (تجنب التنقل)

      const parent = this.parentElement; // العنصر الأب (القائمة المنسدلة)

      // إغلاق أي قائمة منسدلة مفتوحة أخرى غير هذه
      document.querySelectorAll(".dropdown.open").forEach(openDropdown => {
        if (openDropdown !== parent) {
          openDropdown.classList.remove("open");
        }
      });

      // تبديل حالة القائمة الحالية: إذا كانت مفتوحة تغلق، وإذا كانت مغلقة تفتح
      parent.classList.toggle("open");
    });
  });

  // إغلاق القائمة المنسدلة المفتوحة عند الضغط في أي مكان خارجها
  document.addEventListener("click", function(e) {
    const openDropdown = document.querySelector(".dropdown.open");
    // إذا كانت هناك قائمة مفتوحة والضغط كان خارج هذه القائمة
    if (openDropdown && !openDropdown.contains(e.target)) {
      openDropdown.classList.remove("open"); // أغلق القائمة
    }
  });
});




document.addEventListener('DOMContentLoaded', function () {
  // زر عرض المزيد/أقل
  const toggleButton = document.querySelector('.toggle-bio');
  const bio = document.querySelector('.author-bio');

  if (toggleButton && bio) {
    toggleButton.addEventListener('click', function () {
      bio.classList.toggle('expanded');
      this.textContent = bio.classList.contains('expanded') ? 'عرض أقل' : 'عرض المزيد';
    });
  }

  // منع الروابط من إعادة تحميل الصفحة
  document.querySelectorAll('.author-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
});








function addComment(event) {
  event.preventDefault();
  const textarea = event.target.commentText;
  const text = textarea.value.trim();
  if (!text) return;

  const commentsDiv = document.querySelector('.comments');
  const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = `<p><strong>مستخدم جديد:</strong> ${text}</p><span class="comment-date">${new Date().toISOString().split('T')[0]}</span>`;

  // إدراج التعليق الجديد قبل النموذج
  commentsDiv.insertBefore(newComment, event.target);

  // تفريغ النص بعد الإرسال
  textarea.value = '';
  return false;
}


