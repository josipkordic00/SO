const pool = require('../../database')
const appo = async (req, res)=>{
    const [rows] = await pool.query('SELECT * from termin');
    res.render("appo",{
        data:rows
    });

}



module.exports = appo