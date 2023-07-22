const pool = require('../database')
const notes = async (req, res)=>{
    const [rows] = await pool.query('SELECT * from notes');
    res.render("notes",{
        data:rows
    });

}



module.exports = notes