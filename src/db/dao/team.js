const conn = require('../connection')
const { team } = require('../model/team')

const teamSchema = conn.Schema(team)
const teamModel = conn.model('Team', teamSchema)

module.exports = {
    selectAll: async () => {
        return await teamModel.find()
    },
    insert: async (team) => {
        team = new teamModel(team)
        await team.save()
    },
    delete: async (team) => {
        await teamModel.deleteOne({name: team}).exec()
    }
}
