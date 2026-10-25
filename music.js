// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    // 1. Создаем кнопку (всегда поверх всего)
    const btn = document.createElement('button');
    btn.innerHTML = '🎵 Музыка';
    btn.style.cssText = `
        position: fixed; top: 15px; right: 15px; z-index: 2147483647; 
        background: rgba(160, 107, 255, 0.9); color: #fff; border: 2px solid #fff; 
        padding: 10px 15px; border-radius: 30px; font-weight: bold; 
        font-family: sans-serif; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        transition: 0.2s;
    `;
    
    // 2. Создаем контейнер для плеера ВК
    const playerBox = document.createElement('div');
    playerBox.style.cssText = `
        position: fixed; top: 60px; right: 15px; z-index: 2147483646; 
        display: none; background: #111; border-radius: 10px; 
        box-shadow: 0 10px 30px rgba(0,0,0,0.8); overflow: hidden;
    `;
    
    // Внутренний div для виджета ВК
    const vkDiv = document.createElement('div');
    vkDiv.id = 'vk_playlist_646847425_6';
    playerBox.appendChild(vkDiv);

    document.body.appendChild(btn);
    document.body.appendChild(playerBox);

    let loaded = false;
    let isOpen = false;

    // Функция переключения плеера
    btn.onclick = (e) => {
        e.stopPropagation(); // Чтобы клик не засчитывался как действие в игре
        
        if (!isOpen) {
            playerBox.style.display = 'block';
            btn.innerHTML = '✖ Скрыть';
            btn.style.background = '#ff5b7f';
            
            // Загружаем плеер ВК только при первом открытии
            if (!loaded) {
                if (typeof VK !== 'undefined') {
                    VK.Widgets.Playlist("vk_playlist_646847425_6", 646847425, 6, "", {});
                }
                loaded = true;
            }
        } else {
            playerBox.style.display = 'none';
            btn.innerHTML = '🎵 Музыка';
            btn.style.background = 'rgba(160, 107, 255, 0.9)';
        }
        isOpen = !isOpen;
    };

    // Загружаем скрипт ВК
    const script = document.createElement('script');
    script.src = 'https://vk.ru/js/api/openapi.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);
});
