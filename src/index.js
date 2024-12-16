import "./styles/main.scss";
import Inputmask from "inputmask";
     // Ждём загрузки API Яндекс.Карт
        ymaps.ready(function () {
          // Создаём карту
          const map = new ymaps.Map("map", {
            center: [54.212956, 55.03057], // Центр карты (Москва)
            zoom: 7,
          });

          // Кастомный указатель
          const customIcon = {
            iconLayout: "default#image",
            iconImageHref:
              "https://img.icons8.com/?size=100&id=OBmVbH2qOGwK&format=png&color=000000", // Путь к вашей картинке
            iconImageSize: [50, 50], 
            iconImageOffset: [-25, -50], // Смещение, чтобы иконка была по центру
          };

          const placemark1 = new ymaps.Placemark(
            [53.5303, 49.3461],
            {
              balloonContent: "Это Тальяти",
            },
            customIcon
          );

          const placemark2 = new ymaps.Placemark(
            [55.6366, 51.8245],
            {
              balloonContent: "Это Нижнекамск",
            },
            customIcon
          );

          const placemark3 = new ymaps.Placemark(
            [52.964454, 63.133419],
            {
              balloonContent: "Это Рудный",
            },
            customIcon
          );

          map.geoObjects.add(placemark1);
          map.geoObjects.add(placemark2);
          map.geoObjects.add(placemark3);
          map.controls.remove("searchControl");
          map.controls.remove("zoomControl");
          map.controls.remove("geolocationControl");
          map.controls.remove("trafficControl");
          map.controls.remove("typeSelector");
          map.controls.remove("fullscreenControl");
          map.controls.remove("rulerControl");
          map.controls.remove("routeButtonControl");
        });

const phoneInput = document.querySelector("#phone");
Inputmask("(999)999-99-99").mask(phoneInput);
