
 const numbers = [2, 22, 12, 17, 18, 39, 129];
 const arraySum = (numbers) => {
     let sum = 0;
     numbers.array.forEach((num) => {
         sum += num;
     });
     return sum;
 };
 console.log(arraySum, (numbers));

//Exercise 2
 const book = {}
 book.title = "Totol Money Makeover"
 book.pages = "237"
 book.readCount = "1"
 book.info = () => {
    return `${book.title}, ${book.pages}, pages, Read ${book.readCount} times. `;
 };
console.log(book.info());