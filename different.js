// system number 1
// for( let i=11; i<=20; i++)
// {
//     if( i%2===1){
//         console.log(i);
//     }
// }

// system number 2 
// for( let i=11; i<=20; i++)
// {
//     if( i%2!==0){
//         console.log(i);
//     }
// }




// ৫ দিয়ে বিভাজ্য সংখ্যা বের করার প্রোগ্রম

// for( let i= 1; i<=30; i++)
// {
//     if(  i % 5===0 ||i%3===0 ){
//         console.log(i);

//     } 
    
    
    
// }





// 3 and 5 দিয়ে ভাগ যায় এমন সংখ্যার প্রোগ্রাম

// for( let i= 1; i<=30; i++){
//     if(i%5==0 && i%3===0){
//         console.log(i);
//     }
// }





// ১-২০ পর্যন্ত সংখাগুলোর ৩ দিয়ে ভিভাজ্য সংখ্যা গুলো কে বের করে এদের সাম(যোগফল ) বের কর 
 
let sum= 0;
for( let i= 1; i<=20; i++){
    if(i%3===0){
        console.log(i);
        sum= sum+i;
        

    }
    
    
 }
 console.log('sum is:', sum);
