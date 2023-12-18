# Editori WF

Документация
Данный проект позволяет создавать проекты по постройке домов.

**На 24-07-2023 существует три роли:**
1. Mittaus (измерение)
2. Комментатор
3. Админ


Вся основная работа в первой роли. 
Комментарии к табле comments прикладывает роль комментатора
Администратор может менять общие настройки едитора

**УСТАНОВКА:**
1. Скачайте данный репозиторий
2. Установите базу данных из папки DB к себе на локальный сервер в phpmyadmin. Рекомендуется к использованию программа Open Server
3. Подключите проект к базе данных в файлах vendor/config.php и config.php
4. Editor готов к пользованию

**Тестовые доступы:**
1. Измерение
    Jyri
    Ipah6Xae!
2. Комментирование
    duunari 
    Nakkimakkara456
3. Админитсрация
    Marko
    NakkiMakkara123


Вход через *Название сайта на локалке*/login.php


**КАК ПУШИТЬ?**
1. Загружайте актуальную базу данных в папку db
2. Пишите в readme.txt или нам напрямую, что сделано (что из сделанного проверять)
3. Закидывайте все файлы пушом в репозиторий


Косяк проекта - происходящее в php файлах, поэтому любезно предоставляем описание к функционалу каждого:

**Подключение к базе данных:**
Отредактируйте vendor/config.php


  
**Функционал:**

addcomment.php - Добавляет в базу данных комментарий (роль 2) 

ajaxupload.php - Загружает файлы в папку при загрузке нового проекта в new-project.php (роль 1) 

comment__kuittaus.php - Помечает комментарий сделанным (роль 2)

commentattachmentupload.php - Добавляет к комменатрию вложение (роль 2)

commentreport.php - При заходе, бросает на почту администрации рапорт о выполненных комментариях (роль 3)

get-added-users.php - Возвращает добавленных в проект пользователей в формате JSON. Требует project_id в качестве аргумента (POST) (роль 2)

getanswers.php - Возвращает ответы на комментарий в том же формате что и обычные комментарии. Требует answer_to и user в качестве аргументов (POST) (роль 2)

get-walls.php - Возвращает имена, описания, порядок установки и скрытие стен в формате JSON (роль 1 и 2)

kumoa.php - Отмена изменений из таблицы kumoalog. Принимает аргументы project_id и username (POST) (Роль 1)

updateproject.php - Пушит в базу данных обновленные данные проекта (роль 1)

update-walls.php - Позволяет изменять имена, описания, порядок установки и скрытие стен (роль 1)

upload.php - Старый загрузчик файлов (роль 1)

db/updatepohjat.php - Сохраняет и обновляет новые шаблоны помещений в базу данных (роль 1)

vendor/settings__update.php - обновляет настройки Администратора (роль 3)


**Части**
header.php - Шапка сайта, подключаются скрипты в фронт-енде

footer.php - Подвал сайта, подключаются скрипты и закрывается html (роль 3)

footer-post.php - Подвал сайта, подключаются скрипты и закрывается html (роль 1, 2)

+php файлы в папке 'templates'




levynakyma.php - Страница создания одной панели (будет публичным)

new-project.php - Здесь создается новый проект (роль 1)

post.php и составляющие в templates - главная страница проекта (роль 1 и 2)

register.php - страница регистрации пользователя, не работает 02-08-23

reset-password.php - страница обнуления пароля (роль 1, 2, 3)

welcome.php - главная страница для работы (роль 1 и 2)

welcome-marko.php - главная страница администратора (роль 3)

templates/commentator.php - Всплывающее окно комментирования точек (роль 2)

logout.php - Страница выхода

login.php - Страница входа 2

index.php - Страница входа 1

**ВАЖНО**
Соблюдать пропорцию 5миллиметров на 1 пиксель в drawarea (роль 1 и 2)

