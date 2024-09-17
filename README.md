# Задание для TS FullStack стажёра

## Инструкция по запуску

1. Копируем данные из .env.default -> .env
2. Вставить свой CATS_API_KEY (либо можно воспользоваться этим **live_XcjkVupugkXsKAJud19j4Jmdu2FI6Xh02M1lHB7PsMfqxO6Dxm4jlDmBF7E5dFWJ**)
3. Запустить docker compose up
4. Перейти к [фронтенду](http://localhost:8080) (Убедись, что сервер запущен и FRONTEND_PORT равен 20000 <- его можно поменять в .env)

## Нюансы

Я чуть-чуть переделал api бекенда, чтобы ключ от Cats Api хранился на беке, а не на фронте.

Доку по запросам можно посмотреть с помощью [swagger'а](http://localhost:20000/api) (Убедись, что сервер запущен и SERVER_PORT равен 20000 <- его можно поменять в .env)
