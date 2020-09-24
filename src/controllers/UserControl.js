const Usermodel = require('../models/user');

module.exports = {
    async createUser(request,response) {
        const { username, email, password } = request.body;
    
        let user = await Usermodel.findOne({ username, email });
    
        if(!user){
            user = await Usermodel.create({
                username,
                email,
                password,
            })
    
            return response.json(user);
        }
        
        return response.status(400).json({message : 'erro no cadastro'});
    },

    async authUser (request,response) {
        const { username, password } = request.body;
    
        const user = await Usermodel.findOne({ username, password });
    
        if (!user) {
            return response.status(400).json({message : 'erro de autenticação'});
        }
        
        return response.json(user);
    }
}