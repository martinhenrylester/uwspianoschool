$(window).ready(updateHeight);
$(window).resize(updateHeight);

function updateHeight()
{
    var header = $('header');
    var width = header.width();
    var newWidth = 500;

    if(width > 767 && width <= 1150) {
      newWidth = 650;
    } else if(width > 1150 && width <= 1335) {
      newWidth = 750;
    } else if(width > 1335 && width <= 1435) {
      newWidth = 800;
    } else if(width > 1435) {
      newWidth = 900;
    }

    header.css('height', newWidth + 'px');
}
