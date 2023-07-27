const pool = require('../../database')
const user = async (req, res)=>{
    const [rows] = await pool.query('SELECT * from user');
    res.render("user",{
        data:rows
    });

}



module.exports = user