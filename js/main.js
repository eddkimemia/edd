    // Live time in header
    function updateTime() {
      const el = document.getElementById('live-time');
      if (!el) return;
      const now = new Date();
      const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit',
                     timeZone: 'Africa/Nairobi', hour12: false };
      el.textContent = 'EAT ' + now.toLocaleTimeString('en-KE', opts);
    }
    updateTime();
    setInterval(updateTime, 1000);

    // Typing effect on terminal intro
    document.addEventListener('DOMContentLoaded', () => {
      const lines = document.querySelectorAll('.terminal-intro .t-output');
      lines.forEach((line, i) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(4px)';
        line.style.transition = `opacity 0.4s ease ${0.3 + i * 0.15}s, transform 0.4s ease ${0.3 + i * 0.15}s`;
        setTimeout(() => {
          line.style.opacity = '1';
          line.style.transform = 'translateY(0)';
        }, 50);
      });

      // Subtle entrance for project items
      const items = document.querySelectorAll('.project-item, .exp-item');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });

      items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(8px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(item);
      });
    });
