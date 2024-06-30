const shortcutsData = {
    common: [
        { url: 'https://www.google.com', name: 'Google' },
        { url: 'https://www.youtube.com', name: 'YouTube' },
        { url: 'https://www.bilibili.com/index.html', name: 'bilibili' },
        { url: 'https://chatgpt.com/', name: 'ChatGPT' }
    ],
    leisure: [
        { url: 'https://www.netflix.com', name: 'Netflix' },
        { url: 'https://www.spotify.com', name: 'Spotify' },
        { url: 'https://ani.gamer.com.tw/', name: '動畫瘋' }
    ],
    games: [
        { url: 'https://store.steampowered.com', name: 'Steam' },
        { url: 'https://www.epicgames.com', name: 'Epic Games' }
    ],
    learning: [
        { url: 'https://leetcode.com/', name: 'Leetcode' },
        { url: 'https://www.geogebra.org/graphing', name: 'GeoGebra' }
    ],
    other: [
        { url: 'https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5', name: 'Wikipedia' },
        { url: 'https://www.reddit.com', name: 'Reddit' },
        { url: 'https://x.com/home', name: 'Twitter' }
    ]
};

function updateShortcuts(category) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // 清空現有捷徑
    shortcutsData[category].forEach(shortcut => {
        const a = document.createElement('a');
        a.href = shortcut.url;
        a.className = 'shortcut';
        a.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${new URL(shortcut.url).hostname}" alt="${shortcut.name}"><span>${shortcut.name}</span>`; // get icon
        container.appendChild(a);
    });
}

// 初始化顯示常用捷徑
updateShortcuts('common');