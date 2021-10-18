const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const { tvShows, categories } = require('./repository');

const filterItems = (items, field, filter) => {
  return items.filter((item) => item[field] === filter);
};

const sortItems = (items, field) => {
  return items.sort((a, b) => a[field] - b[field]);
};

const main = () => {
  console.log('Iniciando projeto...\n');
  rl.question(
    'Você deseja encontrar uma série por categoria? (S/N) ',
    (useCategory) => {
      if (useCategory.toLowerCase() === 's') {
        const categoriesStr = categories.join('/ ');
        console.log(`Essas são as categorias disponíveis: \n${categoriesStr}`);
        rl.question('Qual categoria você escolhe? ', (category) => {
          const filteredTvShows = filterItems(tvShows, 'category', category);
          const orderedTvShows = sortItems(filteredTvShows, 'seasons');
          console.table(orderedTvShows);
          rl.close();
        });
      } else if (useCategory.toLowerCase() === 'n') {
        console.log('Essas são as séries disponíveis: ');
        console.table(sortItems(tvShows, 'seasons'));
        rl.close();
      } else {
        console.log('Opção inválida!');
        rl.close();
      }
    }
  );
};

main();
