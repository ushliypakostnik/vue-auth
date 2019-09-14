Vue cli based frontend boilerplate
==================================

Описание
--------

Основанная на Vue cli реализация Progressive Web App клиента с модулем полноценной аунтефикации через [Backend API](https://github.com/ushliypakostnik/express-auth) со стилизацией c помощью SCSS.


Юзеркейсы:
----------

Пользователь может быть авторизован или не авторизован в системе.

Неавторизованному пользователю показывается два поля ввода: адреса электронной почты и пароля, а также три кнопки - входа через Facebook или ВКонтакте, и кнопка входа с помощью валидных данных почты и пароля.

Ниже стартовой формы показывается ссылка позволяющая переключиться на форму восстановления пароля, состоящую из только одного контрола ввода электронной почты и кнопки для ее отправки.

Пользователь который ввел валидный электронный адрес и пароль будет авторизован в системе. Если пользователя с указанным адресом не существует в базе - он будет добавлен.

Адрес электронной почты пользователя впервые авторизовавшегося в системе через социальную сеть, также будет добавлен в базу. Он сможет создать пароль при первой же попытке обычного входа по паролю со своей электронной почты.

Каждый новый пользователь получает статус неверифицированного и на указанный им почтовый ящик отправляется письмо с предложением подтвердить регистрацию. При переходе по ссылке в письме пользователь получает аутентификацию, верифицируется, и оказывается во внутреннем интерфейсе, аккаунте.

При попытке восстановления пароля на указанный адрес электронной почты отправляется письмо, в том случае, если пользователь с такой почтой уже зарегистрирован в базе. При переходе по ссылке с такого письма пользователь получает аутентификацию и оказывается на специальной форме из двух полей ввода пароля и кнопки, позволяющих создать новый пароль. При отправке двух совпадающих валидных паролей пользователь окажется во внутреннем интерфейсе, аккаунте. Его пароль будет изменен или создан, если ранее он входил только через социальные аккаунты.

Во внутреннем интерфейсе, аккаунте пользователь видит адрес электронной почты, статус верификации, кнопку выхода из системы. Если пользователь не верифицирован он также видит кнопку повторной отправки письма для подтверждения регистрации с сообщением под ней предлагающим это сделать.

Во всех возможных и необходимых случаях в правильных местах интерфейс показывает информативные сообщения об успехе или провале действий совершаемых пользователем.

При переходе между состояниями, страницами, во время действий требующих ожидания ответа от сервера пользователю показывается анимированный лоадер.


Features:
---------

* Локализация клиента на два языка: русский и английский

* Темезиция клиента на два темы: ночную и дневную


Deploy
------

Установка зависимостей npm packages

    $ npm install

Запуск сервера для разработки
-----------------------------

    $ npm run serve

    http://localhost:3000/

Cборка
------

Сборка проекта в продакшен, в папку /dist

    $ npm build

Тесты
-----

Запуск тестов

    $ npm test

Запуск cтатического анализатора ES

    $ npm run lint

Запуск cтатического анализатора стилей

    $ npm run stylelint


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
