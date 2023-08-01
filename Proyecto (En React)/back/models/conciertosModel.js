var pool = require('./bd');

async function getConciertos() {
    var query = 'select * from conciertos';
    var rows = await pool.query(query);
    return rows;
}

async function insertConcierto(obj) {
    try {
        var query = 'insert into conciertos set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteConciertoById(id) {
    var query = 'delete from conciertos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getConciertoById(id) {
    var query = 'select * from conciertos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function updateConciertoById(obj, id) {
    try {
        var query = 'update conciertos set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getConciertos, insertConcierto, deleteConciertoById, getConciertoById, updateConciertoById }