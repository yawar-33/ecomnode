const dbConn = require('../config/config')

module.exports = {
  async findAllcompanies(req, res) {
    var sql =
      'SELECT ' +
      'company.company_id AS companyId, ' +
      'company.company_name AS companyName,' +
      'company_type.company_type_name AS companyType,' +
      'improvement_plan.improvement_plan_name AS planName,' +
      'improvement_plan.improvement_plan_desc AS planDes,' +
      'improvement_plan_type.improvement_plan_type_name AS planNameType,' +
      'improvement_plan_type.improvement_plan_type_desc AS planDesType ' +
      'FROM company ' +
      'LEFT JOIN company_type ON company.company_type_id = company_type.company_type_id ' +
      'LEFT JOIN improvement_plan ON company.company_id = improvement_plan.company_id ' +
      'LEFT JOIN improvement_plan_type ON improvement_plan.improvement_plan_type_id = improvement_plan_type.improvement_plan_type_id ' +
      'LEFT JOIN goal ON improvement_plan.improvement_plan_id = goal.improvement_plan_id'

    dbConn.query(sql, function (err, rows) {
      if (err) {
        res.status(400).send({ err })
      } else {
        res.status(200).send({ rows })
      }
    })
  },

  async saveCompanyType(req, res) {
    let data = {
      company_type_name: req.body.company_type_name,
    }
    var sql = 'INSERT INTO company_type SET ?'

    dbConn.query(sql, data, (error, data) => {
      if (error) {
        res.status(400).send({ error })
      } else {
        res.status(200).send({ data })
      }
    })
  },

  async getCompanyById(req, res) {
    let id = req.params.id
    id
    dbConn.query(
      'SELECT * FROM company WHERE company_id = ' + id,
      (error, data) => {
        if (error) {
          res.status(400).send({ error })
        } else {
          res.status(200).send({ data })
        }
      },
    )
  },

  async updateCompany(req, res) {
      
    let sql = `UPDATE company SET company_name='${req.body.company_name}' WHERE company_id=${req.body.company_id}; SELECT  * FROM company WHERE company_id=${req.body.company_id};`

    dbConn.query(sql, (error, rows) => {
      if (error) {
        res.status(400).send({ error })
      } else {
        let data = rows[1]
        res.status(200).send({ data })
      }
    })
  },
}
