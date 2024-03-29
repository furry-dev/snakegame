### Запуск проекта "Змейка" с использованием Vite

Этот проект представляет собой простую игру "Змейка", написанную на TypeScript с использованием Vite в качестве инструмента сборки.

### Установка зависимостей

1. Убедитесь, что у вас установлен Node.js. [Скачать Node.js](https://nodejs.org/)

2. Откройте терминал в корне проекта и выполните команду для установки зависимостей:

    ```bash
    npm install
    ```

### Запуск проекта

1. В терминале выполните команду для запуска проекта:

    ```bash
    npm run dev
    ```

2. Откройте ваш браузер и перейдите по адресу который отобразится в командной строке.

3. Вы увидите стартовый экран игры "Змейка". Нажмите кнопку "Start", чтобы начать игру.

### Управление

- Используйте стрелки на клавиатуре (Вверх, Вниз, Влево, Вправо) для управления движением змейки.

### Правила игры

- Змейка управляется игроком и должна собирать еду, представленную яблоками.
- Когда змейка съедает яблоко, она растет и получает очки.
- Игра завершается, если змейка сталкивается с самой собой или краем игрового поля.

[//]: # (### Пауза и Рестарт)

[//]: # ()
[//]: # (- Вы можете поставить игру на паузу, нажав клавишу "Space".)

[//]: # (- Чтобы начать игру заново после завершения, обновите страницу.)

### Запись рекорда

- Ваш текущий рекорд отображается на стартовом экране.
- Рекорд обновляется, когда вы набираете больше очков, чем предыдущий максимум.

### Сборка проекта

- Чтобы собрать проект, в терминале выполните команду:

    ```bash
    npm run build
    ```

Это создаст оптимизированную версию проекта в папке `docs`, которую вы можете развернуть на веб-сервере.
