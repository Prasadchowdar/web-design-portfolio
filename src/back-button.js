// Back Button - Works via localStorage flag set by main index
(function () {
    // Check if we're on a template subpage (not the main index)
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html' || path.endsWith('index.html') === false) {
        return;
    }

    // If we're in a template folder, add the back button
    if (path.includes('/src/')) {
        const btn = document.createElement('a');
        btn.href = '/';
        btn.innerHTML = '← Back to Templates';
        btn.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 9999;
            padding: 12px 20px;
            background: rgba(0, 0, 0, 0.9);
            color: #fff;
            text-decoration: none;
            border-radius: 30px;
            font-family: 'Segoe UI', sans-serif;
            font-size: 14px;
            font-weight: 600;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
        `;

        btn.onmouseenter = function () {
            this.style.background = 'rgba(66, 133, 244, 1)';
            this.style.transform = 'translateX(-5px)';
            this.style.boxShadow = '0 6px 25px rgba(66, 133, 244, 0.5)';
        };
        btn.onmouseleave = function () {
            this.style.background = 'rgba(0, 0, 0, 0.9)';
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        };

        // Wait for body to be ready
        if (document.body) {
            document.body.appendChild(btn);
        } else {
            document.addEventListener('DOMContentLoaded', function () {
                document.body.appendChild(btn);
            });
        }
    }
})();
