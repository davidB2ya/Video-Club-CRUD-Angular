import {connect} from '../config/conexion'

export const getMovies = async (req, res) => {
    // const obj = {'name': 'David', 'last_name': 'Bedoya'}
    // res.json(obj)
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM movie')
    // console.log(rows)
    res.json(rows)
}

export const getMovie = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM movie WHERE mov_id = ?',[
        req.params.id
    ])
    if(rows.length > 0) res.json(rows[0])
    else res.status(404)
    
}

export const saveMovie = async (req, res) => {
    const connection = await connect()
    const [results] = await connection.query(
        "INSERT INTO movie(mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country) VALUES(?, ?, ?, ?, ?, ?, ?)",
        [
        req.body.id,
        req.body.title, 
        req.body.year,
        req.body.time,
        req.body.lang, 
        req.body.rel,
        req.body.country,

    ])
    // console.log(results);
    res.json({
        id: results.insertId,
        ...req.body,
    })

}


export const updateMovie = async (req, res) => {
    const connection = await connect()
    const results = await connection.query("UPDATE movie SET ? WHERE mov_id = ?",[
        req.body,
        req.params.id
    ])
    // console.log(results)
    res.sendStatus(204);
}

export const deleteMovie = async (req, res) => {
    const connection = await connect();
    const results = await connection.query("DELETE from movie WHERE mov_id = ?" ,[
        req.params.id,
    ]);
    // console.log(results);
    res.sendStatus(204);
}   