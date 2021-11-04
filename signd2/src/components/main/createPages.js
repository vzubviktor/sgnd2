// this function is a standart page constructor that allows us to construct and display pages 
// based on total pages and display the page numbers forward based on current page that user selects 



export const createPages = (pages, pagesCount, currentPage) =>{
    if(pagesCount >10) {
        if(currentPage >5){
            for (let i = currentPage-4; i <= currentPage+5; i++){
                pages.push(i);
                if (i === pagesCount) break
            }
        }
        else{
            for (let i = 1; i <= 10; i++){
                pages.push(i);
                if (i === pagesCount) break
            }
        }
     }
     else{
         for (let i = 1; i <= pagesCount; i++){
             pages.push(i)
         }
         
     }
}