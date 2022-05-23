const database = require("../libs/database");
const bcrypt = require("bcrypt")

class User {
    constructor(data) {
        this.username= data.username
        this.email = data.email
        this.password = data.password
        this.data = data
    }

    atributosExisten() {
        return this.email && this.password && this.username
    }

    longitudDeEsMenorA(string, n) {
        return string.length < n
    }

    validate() {
        if(!this.atributosExisten()) {
            return {
                message: "No se completaron todos los campos",
                validated: false
            }
        }
        if(this.longitudDeEsMenorA(this.username, 3)) {
            return {
                message: "El usuario debe tener más de 3 caracteres",
                validated: false
            }
        }
        return {validated: true}
    }

    async save() {
        const data = {
            username: this.username,
            email: this.email,
            password: await this.encrypt(this.password)
        }

        try {
            const result = await database.query(
                "INSERT INTO users(??) VALUES(?)",
                [Object.keys(data), Object.values(data)]
            )

            console.log(result);

            delete data.password
            data.id = result.insertId

            return {
                user:data,
                success:true,
                message:"Usuario registrado correctamente"
            }

        } catch (error) {
            return error
        }
    }

    async login() {
        const result = await database.query("SELECT * FROM users WHERE email = ?", [this.email])
        const user = result[0]
        console.log(result[0])
        //console.log(this.password)
        if (user) {
            if(await this.compare(this.password, user.password)) {
                delete user.password
                return {
                    success: true,
                    user,
                    message: "Usuario correcto"
                }
            }else {
                return {
                    success: false,
                    message: "Credenciales incorrectas"
                }
            }

        }

        return {
            success: false,
            message: "Usuario no registrado"
        }

    }

    async encrypt(string) {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(string, salt)

        return hash
    }

    async compare(string, hash) {
        return await bcrypt.compare(string, hash, function(err,res){
            if(err){
                console.log("error de bcrypt compare:", err)
            }
        })
    }
}

module.exports = User