function formatDate() {
    let date = new Date

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mon = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    let yy = date.getFullYear();

    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    let hours = date.getHours() % 12
    let ampm = (date.getHours() < 12) ? 'am' : 'pm'
    let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
    let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()

    document.querySelector(".Date h1").innerHTML = 'Cегодня: ' + days[date.getDay()] + ' ' + dd + ' ' + mon[date.getMonth() + 1] + ' ' + yy + '\n' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}


setInterval( formatDate, 150)
