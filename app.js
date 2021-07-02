const bookName = document.querySelector('#bookName');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('#btn-submit');
const bookList = document.querySelector('.mainTable');
const form = document.querySelector('#book-form')

btn.addEventListener('click', function(){

    if(bookName.value == ''){
        alert('Enter Book Name')
        bookName.focus()
    } else if(author.value == ''){
        alert('Enter Author Name')
        author.focus()
    } else if(year.value == ''){
        alert('Enter Publishing Year')
        year.focus()
    }
     else {
        const newRow = document.createElement('tr')

        const newBookName = document.createElement('th');
        newBookName.innerHTML = bookName.value;
        newRow.appendChild(newBookName)

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor)

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear)
        
        bookList.appendChild(newRow)
        form.reset()

    }
})