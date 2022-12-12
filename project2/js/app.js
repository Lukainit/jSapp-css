function searchRealAge () {

    let howOldThisUser = +prompt('how old r u?', ''); 

    if (howOldThisUser >= 18) {
        console.log('u can sigh in:)')  
    } else if (howOldThisUser < 18 ) {
        console.log('person very young')
    } else if (howOldThisUser <= 100 ) {
        console.log('old person. wtf?')
    } else {
        console.log('error404')
    } 

    const userDB = {
        realAgeThisPerson: howOldThisUser
    }; 

    console.log(userDB); 

    
    
}; 

searchRealAge();  



