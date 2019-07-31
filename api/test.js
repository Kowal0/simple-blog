module.exports = async (req, res) => {
    const data = [
        {text1: 'test data', text2: 'another test data'}
    ];

    res.status(200).json(data);
};