
const date = '5-January-2000';
const api_path = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
let returnObject = {};
return new Promise((resolve, reject) => {
    let data = ''; let rs = {};
    https.get(api_path, res => {
        res.on('data', piece => {
            data += piece;
        });
        res.on('end', () => {
            data = JSON.parse(data);
            rs = data['data'];
            console.log(rs);
            if(rs.length > 0) {
                returnObject.open = rs[0].open;
                returnObject.high = rs[0].high;
                returnObject.low = rs[0].low;
                returnObject.close = rs[0].close;
            }
            resolve(returnObject);  
        });
        
    }).on('error', reject);
});