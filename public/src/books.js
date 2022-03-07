function findAuthorById(authors, id) {
  let result = null;
  result = authors.find((author) => author.id === id);   //Arrow function, find()//
  return result;
}

function findBookById(books, id) {
  let result = null;
  result = books.find((book) => book.id === id);   //Arrow function, find()//
  return result;
}


//
function partitionBooksByBorrowedStatus(books) {
  const checkedOut = getCurrentlyCheckedOut(books);  // --> Reference helper function "getCurrentlyCheckedOut" below  //
  const returned = getReturned(books);               // -->  Reference helper function "getReturned" below  //
  const result = [];
    result.push(checkedOut);
    result.push(returned);
  return result;  // Both arrays are inside the result array //
}

function getCurrentlyCheckedOut(books) {   //Helper function, returns an array of book objects that are currently checked out.//
  let result = [];
  for (let id in books){
    if (books[id].borrows[0].returned === false) result.push(books[id]);
    }
  return result;
}

function getReturned(books) {   //Helper function, returns an array of book objects that have been returned.//
  let result = [];
  for (let id in books){
    if (books[id].borrows[0].returned === true) result.push(books[id]);
    }
  return result;
}
//



function getBorrowersForBook({borrows}, accounts) {   //Destructured Parameter//
  let result = [];
  for (let i = 0; i < borrows.length; i++) {
    if (i === 10) { break };
    accounts.find((account) => {                    //find()//
      if (account.id === borrows[i].id) {
        result.push({...account, returned: borrows[i].returned});   //Spread Operator//
      }
    });
  }
  return result;
}







module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
