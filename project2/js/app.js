let howOldThisUser

function searchRealAge () {

    howOldThisUser = prompt('how old r u?', ''); 

    while (howOldThisUser == '' || howOldThisUser == null || isNaN(howOldThisUser)) {

        howOldThisUser = prompt('how old r u?, type pls number, if u dont type your age:) i hack u', ''); 

        while (howOldThisUser == '' || howOldThisUser == null || isNaN(howOldThisUser)) {

            alert('i warned you')

            howOldThisUser = prompt('ENTER YOUR AGE!!!', '')

            while (howOldThisUser == '' || howOldThisUser == null) {

                for (let i = 0; i < 99999; i++) {

                    alert('all right)');

                }

            }

        }
    }

    if (howOldThisUser == null || howOldThisUser == undefined) {
        console.log('this user hack this website!!!')
    } else if (howOldThisUser > 18 ) {
        console.log('u can sigh in:)')
    } else if (howOldThisUser < 18 ) {
        console.log('person very young')
    } else if (howOldThisUser > 50 ) {
        console.log('old person. wtf?')
    } else {

    } 

    const userDB = {
        realAgeThisPerson: howOldThisUser
    }
    
    console.log(userDB); 

}

searchRealAge() 