/// <summary>
/// JavaScript para el lienzo de redes sociales
/// </summary>
/// <createdate>10-10-2024</createdate>
/// <author>René López Morales</author>
/// <lastupdate>23-10-2025</lastupdate>

const jsLienzo = {
    botones: {
        btnTwitch: '#btnTwitch',
        btnKick2: '#btnKick', // Nuevo botón añadido
        btnYouTube: '#btnYouTube',
        btnTikTok: '#btnTikTok',
        btnInstagram: '#btnInstagram',
        btnDiscord: '#btnDiscord'
    },
    metodos: {
        CargarPaginas: function (event) {
            event.preventDefault();
            const id = event.currentTarget.id;
            console.log('Botón clickeado:', id); // Depuración
            const urls = {
                btnTwitch: 'https://www.twitch.tv/LEGOLASxd',
                btnKick: 'https://kick.com/legolasfk', // URL para el nuevo botón
                btnYouTube: 'https://www.youtube.com/@legolasfk',
                btnTikTok: 'https://www.tiktok.com/@legolasfk',
                btnInstagram: 'https://www.instagram.com/LEGOLASfk/',
                btnDiscord: 'https://discord.gg/LEGOLAS'
            };
            if (urls[id]) {
                console.log('Abriendo URL:', urls[id]); // Depuración
                window.open(urls[id], '_blank');
            } else {
                console.warn(`No se encontró URL para el botón: ${id}`);
            }
        }
    },
    eventos: function () {
        Object.values(jsLienzo.botones).forEach(selector => {
            console.log('Asignando evento a:', selector); // Depuración
            $(selector).on('click', jsLienzo.metodos.CargarPaginas);
        });
    }
};

$(function () {
    jsLienzo.eventos();
});