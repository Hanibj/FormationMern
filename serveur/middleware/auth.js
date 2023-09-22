const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
try {
const TOKEN = req.headers.authorization.split(' ')[1];
const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
const userId = decodedToken.userId;
const token = req.headers.authorization.split(' ')[1];
const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
const userId = decodedToken.userId;
req.auth = {
userId: userId
};
next();
} catch {
res.status(401).json({
error: new Error('Invalid request!')
});
}
};