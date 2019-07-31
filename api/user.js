const cookie = require('cookie');

module.exports = async (req, res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    res.status(200).json({jwt: cookies.jwt})
};