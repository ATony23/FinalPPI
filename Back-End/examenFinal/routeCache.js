const NodeCache = require('node-cache');
const cache = new NodeCache();

module.exports = duration => (req, res, next) => {
    console.log('METHOD: ', req.method)
    if (req.method !== 'GET') {
        console.error('No se puede con métodos que no sean GET');
        return next();
    }

    const key = req.originalUrl;
    const cachedResponse = cache.get(key);

    if (cachedResponse) {
        console.log(`Caché existente para ${key}`);

        return res.send(cachedResponse)
    } else {
        console.log('Caché no existente para consulta ' + key);

        res.originalSend = res.send;
        res.send = body => {
            res.originalSend(body);
            cache.set(key, body, duration)
        };
        
        next();
    }
}