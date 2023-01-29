import MovieApiService from './fetchMovieApi';
import { paginationMarkUp } from './pagination.js';
import no_image from '../images/no-image.jpg';
const refs = {
  formEl: document.querySelector('.js-header-form'),
  divEl: document.querySelector('.js-main-gallery'),
  paginationBox: document.querySelector('.pagination'),
  targetPage: document.querySelector('.targetPage'),
  formMessage: document.querySelector('.header-form__message')
};

// МАЯК для кнопок пагінації, щоб знати, який фетч запускати: на тренти, чи по пошуку
let searchMarkPagination = 'trending';
// Змінна для ситуації, коли після пошуку воддиться недійсне значення і натискаються кнопки пагінації
let lastInput = ''
const movieApiService = new MovieApiService();

saveGenresToLocalStorage();

refs.formEl.addEventListener('submit', onSearch);
refs.paginationBox.addEventListener('click', Onclick);

// Функція натискання на кнопки  пагінації
function Onclick(evt) {
  if (evt.target.textContent == '...') {
    return;
  }
  if (evt.target.nodeName !== 'P') {
    return;
  }
  clearMarkup();
  console.log(evt.target.textContent);
  let currentPage = evt.target.textContent;
  
  if (evt.target.textContent == '>>') {
    currentPage = Number(refs.targetPage.textContent);
    currentPage += 1;
  }

  if (evt.target.textContent == '<<') {
    currentPage = Number(refs.targetPage.textContent);
    currentPage -= 1;
  }

  movieApiService.newCurrentPage = currentPage;

  // перевіряємо, що ми шукаємо при натисканні на кнопки пагінації по МАЯКУ.
  // В майбутньому вивести в окрему функцію

  if (searchMarkPagination === 'trending') {
    movieApiService.getTrendingMovies().then(data => {
      saveTrendingToLocalStorage(data);
      createMainMarkup(data.results);
      paginationMarkUp(currentPage, data.total_pages);
    });
  }
  if (searchMarkPagination === 'search') {
    movieApiService.searchMovies().then(data => {
      saveTrendingToLocalStorage(data);
      createMainMarkup(data.results);
      paginationMarkUp(currentPage, data.total_pages);
    });
  }
  
}

movieApiService.getTrendingMovies().then(data => {
  movieApiService.resetCurrentPage();
  saveTrendingToLocalStorage(data);
  createMainMarkup(data.results);
 
  // При запуску сторіник малюємо пагінацію
  paginationMarkUp(1, data.total_pages);
});

function onSearch(evt) {
  evt.preventDefault();
  // Якщо нічого не введено, виводимо помилку і зупиняємо функцію
  if (evt.currentTarget.elements.searchQuery.value.trim() === '') {
    refs.formMessage.insertAdjacentHTML('beforeend',
    'Sorry, you need to enter something');
    setTimeout(() => {
        refs.formMessage.innerHTML = '';
    }, 2000);
    return;
  }

  // Оновлюємо значення поточної сторінки через сетер класу MovieApiService
  movieApiService.resetCurrentPage(); 

  movieApiService.value = evt.currentTarget.elements.searchQuery.value;
  
  movieApiService.searchMovies().then(data => {
              
      // Перевіряємо чи запит вернувся пустим
              if (data.results.length === 0) {
                refs.formMessage.insertAdjacentHTML('beforeend',
                  'Search result not successfull.Enter the correct movie name');
                  // Очищуємо поле інпуту
                  evt.target.elements.searchQuery.value = ''
                // Сет таймаут для повідомлення 
                setTimeout(() => {
                  refs.formMessage.innerHTML = '';
                }, 2000);
                // Через те, що запит прийшов ПОРОЖНІМ movieApiService.value перезаписуємо 
                // значенням lastInput, щоб якщо після помилки натиснути на кнопки пагінації, 
                // запит ішов по останньому вдалому значенню інпута, тобто lastInput
                movieApiService.value = lastInput;
                // Зупиняємо функцію
                return;
              }
    // ЗАПИТ ПРИЙШОВ НЕ ПОРОЖНІМ
    // Змінюємо маяк на "пошук", щоб при натисканні на пагінацію, запит йшов по пошуку
    searchMarkPagination = 'search';
     // Очищаємо розмітку
    clearMarkup();
    saveTrendingToLocalStorage(data);
    createMainMarkup(data.results);
    // При пошуку фільмів малюємо пагінацію
    paginationMarkUp(1, data.total_pages);
    // Через те, що запит прийшов З ДАНИМИ, можемо перезаписувати lastInput вдалим значенням інпута
    lastInput = evt.target.elements.searchQuery.value;
    evt.target.elements.searchQuery.value = '';
  });

}

function createMainMarkup(dataArray) {
  const oneMarkup = obj => {
    // Функція для вибору жанрів з локал сторадж + умову на кількість жанрів
    checkGenresById(obj);
    // Записуємо дані рейтингу
    const ratingValue = obj.vote_average.toFixed(1);
    // Записуємо дату випуску
    const year = obj.release_date || obj.first_air_date || '';
    // Постер
    const START_URL = 'https://image.tmdb.org/t/p/w500';
    let posterSrc = '';
    if (obj.poster_path) {
      posterSrc = `${START_URL}${obj.poster_path}`    
    } else {
      posterSrc = no_image;
    }

    return ` <li class="card-wraper" id="${obj.id}">
       <img class="card-img" src="${posterSrc}" alt="${obj.title || obj.name}" />
       <div class="card-title">${obj.title || obj.name}</div>
      <div class="wraper">
         <div class="card-genre-wraper">
           <div class="card-genre">${checkGenresById(obj)}</div>
         </div>
         <div class="card-year">${year.slice(0, 4)}</div>
         <div class="card-rating-wraper"><div class="card-rating">${ratingValue}</div></div>
       </div>
     </li>`;
  };

  const markup = dataArray.map(oneMarkup).join('');
  refs.divEl.insertAdjacentHTML('beforeend', markup);
}

// Функція збереження отриманих даних ЖАНРІВ фільмів в локалсторадж
function saveGenresToLocalStorage() {
  movieApiService.getGenres().then(data => {
    // console.log(data.genres)
    localStorage.setItem('GENRES_DATA_KEY', JSON.stringify(data.genres));
  });
}
// Функція збереження отриманих даних фільмів в ТРЕНДІ в локалсторадж
function saveTrendingToLocalStorage(data) {
  localStorage.setItem('TRENDING_DATA_KEY', JSON.stringify(data.results));
}

// // Функція збереження отриманих даних фільмів по ПОШУКУ в локалсторадж
// function saveSearchResultToLocalStorage(data) {
//   localStorage.setItem('SEARCH_RESULT_DATA_KEY', JSON.stringify(data.results));
// }
// Функція вибору потрібних жанрів  + умову на кількість жанрів
export function checkGenresById(obj) {
  const savedGenresData = localStorage.getItem('GENRES_DATA_KEY');
  const parseGenresData = JSON.parse(savedGenresData);
  let genresArr = [];

  const genresIds = obj.genre_ids;

  for (const parseGenre of parseGenresData) {
    if (genresIds.includes(parseGenre.id)) {
      genresArr.push(parseGenre.name);
    }
  }
  // console.log(genresArr)

  let genresStr = '';
  if (genresArr.length === 0) {
    genresStr = 'Unknown genre';
  } else if (genresArr.length <= 2) {
    genresStr = genresArr.join(', ');
  } else {
    genresArr.splice(2, genresArr.length);
    genresStr = genresArr.join(', ') + ', Other';
  }
  return genresStr;
}
// Функція очистки маркапу
export function clearMarkup() {
  refs.divEl.innerHTML = '';
}