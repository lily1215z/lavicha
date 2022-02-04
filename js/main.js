"use strict";
///подключение слайдера
$(".collection__slider").slick({
   arrows: true,
   slidesToShow: 4,
   responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
 });

$(".reviews__slider").slick({
  arrows: false,
  centerMode: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

///подключение слайдера в секции article
$(".article__slider").slick({
  arrows: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

///подключение подключение акордиона

const accordionItems = document.querySelectorAll('[data-accordion-item]');

accordionItems.forEach(item => {
  const button = item.querySelector('[data-accordion-button]');
  const icon = item.querySelector('[data-accordion-button-icon]');
  const content = item.querySelector('[data-accordion-content]');

  window.addEventListener('resize', () => {
    if (content.getAttribute('data-accordion-content') === 'open') {
      content.style.height = 'auto';

      const contentHeight = content.scrollHeight;
      content.style.height = `${contentHeight}px`;
    };
  });

  button.addEventListener('click', () => {
    if (content.getAttribute('data-accordion-content') !== 'open') {
      const contentHeight = content.scrollHeight;

      icon.setAttribute('data-accordion-button-icon', 'open');
      content.setAttribute('data-accordion-content', 'open');
      content.style.height = `${contentHeight}px`;
    } else {
      icon.setAttribute('data-accordion-button-icon', 'closed');
      content.setAttribute('data-accordion-content', 'closed');
      content.style.height = '0';
    };
  });
});
 
$('.select').each(function () {
  const _this = $(this),
    selectOption = _this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    duration = 450; // длительность анимации 

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $('<div>', {
    class: 'new-select',
    text: _this.children('option:disabled').text()
  }).insertAfter(_this);

  const selectHead = _this.next('.new-select');
  $('<div>', {
    class: 'new-select__list'
  }).insertAfter(selectHead);

  const selectList = selectHead.next('.new-select__list');
  for (let i = 1; i < selectOptionLength; i++) {
    $('<div>', {
      class: 'new-select__item',
      html: $('<span>', {
        text: selectOption.eq(i).text()
      })
    })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find('.new-select__item');
  selectList.slideUp(0);
  selectHead.on('click', function () {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(duration);

      selectItem.on('click', function () {
        let chooseItem = $(this).data('value');

        $('select').val(chooseItem).attr('selected', 'selected');
        selectHead.text($(this).find('span').text());

        selectList.slideUp(duration);
        selectHead.removeClass('on');
      });

    } else {
      $(this).removeClass('on');
      selectList.slideUp(duration);
    }
  });
});

var contents = $('.accordeon__content');
var titles = $('.accordeon__title');
titles.on('click', function () {
  var title = $(this);
  contents.filter(':visible').slideUp(function () {
    $(this).prev('.accordeon__title').removeClass('is-opened');
  });

  var content = title.next('.accordeon__content');

  if (!content.is(':visible')) {
    content.slideDown(function () { title.addClass('is-opened') });
  }
});

$('.card__slider-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.card__slider-down',
});

$('.card__slider-down').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.card__slider-top',
  dots: false,
  centerMode: false,
  arrows: false,
  variableWidth: true,
  focusOnSelect: true
});

//слайдер размера
$(".card__size-slider").slick({
  slidesToShow: 7,
  centerMode: true,
  responsive: [
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 5,
      }
    }
  ]
});


// open/close popUp
const btnPush = document.querySelector(".push");
const btnClose = document.querySelector(".basket__close");
const popUp = document.querySelector(".basket");

const wrapper = document.createElement('div');

if (btnPush) {
  btnPush.addEventListener("click", function () {
    popUp.style = "display: block";
    wrapper.className = 'wrapper1';
    document.body.appendChild(wrapper);
  });
}

if (btnClose) {
  btnClose.addEventListener("click", function () {
    popUp.style = "display: none";
    wrapper.remove();
  });
}

if (wrapper) {
  wrapper.addEventListener('click', () => {
    popUp.style = "display: none";
    wrapper.remove();
  });
}

// //====== загружает еще товары
//чтоб скрыть добавленные новые товары нужно к блоку добавить класс blogs__del
const more = document.querySelectorAll(".blogs__del");
const btnBlog = document.querySelector(".blogs__btn");
const loader = document.querySelector(".blogs__loader");
const blogBox = document.querySelector(".blogs__box-btn");

if (btnBlog) {
  btnBlog.addEventListener("click", function () {
    more.forEach((el) => {
      if (el.style.display === "block") {
        el.style.display = "none";
        btnBlog.innerHTML = "Загрузить еще 12";
        loader.style.display = "block";
        blogBox.style.paddingLeft = 50 + "px";
      } else {
        el.style.display = "block";
        btnBlog.innerHTML = "Скрыть";
        loader.style.display = "none";
        blogBox.style.paddingLeft = "0";
      }
    });
  });
}

function move() {
  const sliderMove = document.querySelector('.slider-move');
  let cardMove = document.querySelector('.card__title-move');
  if(window.innerWidth <= 800) {
    sliderMove.innerHTML = cardMove.innerHTML;
    cardMove.remove();
  }
}
move();

//third range
// const slider = document.getElementById('sliderPrice');
// const rangeMin = parseInt(slider.dataset.min);
// const rangeMax = parseInt(slider.dataset.max);
// const step = parseInt(slider.dataset.step);
// const filterInputs = document.querySelectorAll('input.filter__input');

// noUiSlider.create(slider, {
//   start: [rangeMin, rangeMax],
//   connect: true,
//   step: step,
//   range: {
//     'min': rangeMin,
//     'max': rangeMax
//   },

//   // make numbers whole
//   format: {
//     to: value => value,
//     from: value => value
//   }
// });

// // bind inputs with noUiSlider 
// slider.noUiSlider.on('update', (values, handle) => {
//   filterInputs[handle].value = values[handle];
// });

// filterInputs.forEach((input, indexInput) => {
//   input.addEventListener('change', () => {
//     slider.noUiSlider.setHandle(indexInput, input.value);
//   })
// });

// const sliderMove = document.querySelector('.slider-move');
// let cardItem = document.querySelector('.card__item');
// sliderMove.innerHTML = cardItem.innerHTML;
// cardItem.remove();



