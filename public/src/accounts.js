function findAccountById(accounts, id) {
  let result = null;
  result = accounts.find((account) => account.id === id);   //find()//
  return result;
}


function sortAccountsByLastName(accounts) {
  let result = [];
  result = accounts.sort((accountA, accountB) =>   //sort()//
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);  //Ternary Operator//
  return result;
}


function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let result = 0;
  for (let id in books){             //for/in loop//
    const borrowedBooks = books[id].borrows.filter((book) =>   //filter()//
      book.id === accountId);
    result += borrowedBooks.length;
  }
  return result;
}




function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
    books.filter((book) => {
      if (book.borrows.some((borrow) => borrow.id === account.id && borrow.returned === false)) {
        result.push(book);
      }
    });
  result.map((book) => {      //map()//
    const author = authors.find((author) => author.id === book.authorId);
    book.author = author;
  });
  return result;
}





module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
