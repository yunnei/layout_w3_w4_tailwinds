
$(document).ready(() => {
  $('.menu-btn').click((e) => {
    e.preventDefault();
    $('.menu-list').slideToggle();
  })
});