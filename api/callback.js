const axios = require('axios');

module.exports = async (req, res) => {
    const requestBody = {
        grant_type:'authorization_code',
        client_id: 'SQlewqkgLFSMwLKT9s5rtTHTwMt0Jq3L',
        client_secret: 'dmGmvAH_fG-R5ME2BNX68VMUlPG13y6JGm22mGM_vxJq0MNNCzwLiQUktP9cxDHk',
        redirect_uri: 'http://localhost:3000/api/callback',
        code: req.query.code
    };

    try {
        const response = await axios.post('https://dev-dfeuc1-x.eu.auth0.com/oauth/token', requestBody);
        res.status(200).send(response.data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
    
};