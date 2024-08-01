import db from '../db.js'

// create not complete
export const createStudent = (req, res) => {
    const q = `
        INSERT INTO teacher(login_ID, staff_fname, staff_lname, staff_email, staff_mobile, staff_address, province, district, subdistrict, zipcode, sec_ID) VALUES (?,?,?,?,?,?,?,?,?,?,?)
        `
    const {
        login_ID,
        staff_fname,
        staff_lname,
        staff_email,
        staff_mobile,
        staff_address,
        province,
        district,
        subdistrict,
        zipcode,
        sec_ID,
    } = req.body;
    db.query(q, [
            login_ID,
            staff_fname,
            staff_lname,
            staff_email,
            staff_mobile,
            staff_address,
            province,
            district,
            subdistrict,
            zipcode,
            sec_ID,
        ],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(200).json({
                result
            });
        }
    );
};

// read all
export const readTeacherAll = (req, res) => {
    const sql = 'select * from teacher'
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json(err)
        return res.json(result)
    })
}

//read one
export const readTeacherOne = (req, res) => {
    const sql = 'select * from teacher where login_ID = ?'
    const {
        id
    } = req.params
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json(err)
        return res.json(result)
    })
}

//update 
export const updateTeacher = (req, res) => {
    const {
        id
    } = req.params
    const {
        staff_fname,
        staff_lname,
        staff_email,
        staff_mobile,
        staff_address,
        province,
        district,
        subdistrict,
        zipcode,
        sec_ID
    } = req.body
    const q = 'UPDATE `teacher` SET `staff_fname`= ?,`staff_lname`= ?,`staff_email`= ?,`staff_mobile`= ?,`staff_address`= ?,`province`= ?,`district`= ?,`subdistrict`= ?,`zipcode`= ?, sec_ID = ? WHERE login_ID = ?'

    db.query(q, [staff_fname,
        staff_lname, staff_email, staff_mobile, staff_address, province, district, subdistrict, zipcode, sec_ID, id
    ], (err, result) => {
        if (err) return res.status(500).json(err)
        return res.json(result)
    })
}