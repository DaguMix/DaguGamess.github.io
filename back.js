// Ждем полной загрузки страницы
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Добавляем стили и анимацию для кнопки
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pulseBtn {
            0% { box-shadow: 0 0 0 0 rgba(160, 107, 255, 0.8); }
            70% { box-shadow: 0 0 0 15px rgba(160, 107, 255, 0); }
            100% { box-shadow: 0 0 0 0 rgba(160, 107, 255, 0); }
        }
        .back-hub-btn {
            position: fixed; top: 20px; left: 20px; z-index: 2147483647;
            background: linear-gradient(135deg, #a06bff, #6b3fcf);
            color: #fff; text-decoration: none; font-weight: 900; font-size: 16px;
            padding: 12px 24px; border-radius: 30px; border: 3px solid #fff;
            box-shadow: 0 0 20px rgba(160,107,255,0.8); font-family: sans-serif;
            display: flex; align-items: center; gap: 8px;
            animation: pulseBtn 1.5s infinite;
            transition: transform 0.2s;
        }
        .back-hub-btn:hover { transform: scale(1.1); background: linear-gradient(135deg, #b07cff, #7b4fdf); }
    `;
    document.head.appendChild(style);

    // 2. Создаем саму кнопку
    const btn = document.createElement('a');
    btn.href = "index.html"; // Ссылка на главную
    btn.className = "back-hub-btn";
    btn.innerHTML = "🏠 В Хаб";
    
    // 3. Добавляем кнопку на страницу
    document.body.appendChild(btn);
});
