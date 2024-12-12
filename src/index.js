import "./styles/main.scss";

     // Ждём загрузки API Яндекс.Карт
        ymaps.ready(function () {
            // Создаём карту
            var map = new ymaps.Map('map', {
                center: [55.7558, 37.6173], // Центр карты (Москва)
                zoom: 4
            });

            var placemark1 = new ymaps.Placemark([55.7558, 37.6173], {
                balloonContent: 'Это Москва'
            });

            var placemark2 = new ymaps.Placemark([59.9343, 30.3351], {
                balloonContent: 'Это Санкт-Петербург'
            });

            var placemark3 = new ymaps.Placemark([55.0084, 82.9357], {
                balloonContent: 'Это Новосибирск'
            });

            map.geoObjects.add(placemark1);
            map.geoObjects.add(placemark2);
            map.geoObjects.add(placemark3);
        });


