import users from '../models/UsersModel.js'

const login = async({email, password}) => {
    const user = await users.find();
    // if(dates!=null){
    //     return "esta vez si"
    // }

    for(let i=0; i<user.length; i++){
        const bEmail = user[i].email;
        const bPassword = user[i].password;

        if(bEmail === email && bPassword === password){
            return {ingreso: "Has ingresado"}
        }
        else{
            console.log('Error en las credenciales');
        }
    }

    // return result;
    

    


    
       
}

export {login} ;