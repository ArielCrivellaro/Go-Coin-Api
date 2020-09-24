const axios = require('axios');

module.exports = {
    async top10 (request,response) {  
        const ApiResponse = await axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD');
    
        const { Data } = ApiResponse.data;
    
        const coinArray = Data.map(data => {
            const coinName = data.CoinInfo.FullName
            const coinPrice = data.DISPLAY.USD.PRICE
    
            const coin = { coinName, coinPrice }
    
            return coin;
        });
         
        return response.json(coinArray);
    },

    async myCoin(request,response) {
        const {coinType} = request.query;
        
        const ApiResponse = await axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coinType}&tsym=BRL&limit=4`);
    
        if (ApiResponse.data.Response === "Error")
        {
            return response.status(400).json({message: 'erro na requisição'});
        }
        
        const coinData = ApiResponse.data.Data.Data;

        return response.json(coinData);
    }
}