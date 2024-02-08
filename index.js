function validatePassword(email,password){
    const validEmail = "2100712809@mubs.ac.ug";
    const validPassword = "21/U/12809/PS@2024";
    if(email === validEmail && password === validPassword){
        console.log('User email is ${email}, login successfully');
           
    } else{
        console.log("Incorrect user password");
    }

}
validatePassword("2100712809@mubs.ac.ug", "21/U/12809/PS" )