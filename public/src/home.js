function getTotalBooksCount(books) {
  return books.length;
}


function getTotalAccountsCount(accounts) {
  return accounts.length;
}


function getBooksBorrowedCount(books) { 
  let result = 0;
  for (let id in books){
    books[id].borrows.forEach((book) => {       //forEach()//
      if (book.returned === false) result += 1;
    });
  }
  return result;
}


function getMostCommonGenres(books) {
  const genresRepeated = books.map((book) => book.genre);   //map()//
  const final = genresRepeated.reduce((genreAndCounts, genre) => {   //reduce()//
      let result = {};
      if (!genreAndCounts.some((genreCount) => genreCount["name"] === genre)) {   //some()//
        result = { name: genre, count: 1 };
        genreAndCounts.push(result);
      }
      else {
        const found = genreAndCounts.find((genreCount) => genreCount["name"] === genre);
        found.count++;
      }
      return genreAndCounts;
    }, []);

  final.sort((a, b) => b.count - a.count);
  const actual = final.slice(0, 5);
  return actual;
}


function getMostPopularBooks(books) {
  const newArray = books.map((book) => {   //Arrow Function//
    let result = { name: book.title, count: book.borrows.length };   //Object Shorthand//
    return result;
  });
  newArray.sort((a, b) => b.count - a.count);
  const final = newArray.slice(0, 5);
  return final;
}


function getMostPopularAuthors(books, authors) {
  const result = [];
  authors.forEach((author) => {
    const nameAndCount = { name: `${author.name.first} ${author.name.last}`, count: 0 }   //Template Literals//
    books.forEach((book) => {
      if (book.authorId === author.id) {
        nameAndCount.count += book.borrows.length;
      }
    });
    result.push(nameAndCount);
  });
  result.sort((a, b) => b.count - a.count);
  const final = result.slice(0, 5);
  return final;
}





module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
