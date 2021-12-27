$(function () {
  $(".select_")
    .change(function () {
      var str = "";
      $(".select_ option:selected").each(function () {
        str += $(this).text() + " ";
        console.log(str);
      });
    })
    .change();
  $(".first__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
});

const defaultSelect = () => {
  const element1 = document.querySelector(".city-select");
  const choices_1 = new Choices(element1, {
    searchEnabled: false,
    placeholder: false,
    itemSelectText: "",
  });
  const element2 = document.querySelector(".select_");
  const choices_2 = new Choices(element2, {
    searchEnabled: false,
    placeholder: false,
    itemSelectText: "",
  });
};
defaultSelect();
