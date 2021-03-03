// Управление каруселью слайдера
$('.carousel').carousel({
    interval: 3000, // скорость cмены картинки в слайдере.
    keyboard: false, // возможность смены картинки с помщью стрелок на клавиатуре.
    wrap: true  // остановка карусели слайдера после прохода одного цикла, по умолчанию стоит true - без остановок.
})


//  Управление модальным окном
$(".modal").modal({
    show: false,  // не показывать модальное окно при запуске страницы.
    keyboard: false,  // запрет на выход из модального окна через кнопку Esc на клавиатуре.
    backdrop: "static"  // запрет на выход из модального окна путём нажатия ЛКМ на заднем плане. false - уберёт задний план вообще, но страница так и останется недоступной.
    
})