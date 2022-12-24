listGroups = [
    {
        id: 1,
        id_insturktora: 1,
        brojKandidata: 10
    },
    {
        id: 2,
        id_insturktora: 4,
        brojKandidata: 11
    },
    {
        id: 3,
        id_insturktora: 5,
        brojKandidata: 4
    },
    {
        id: 4,
        id_insturktora: 5,
        brojKandidata: 4
    }
]

const getAllGroups = async (req,res,next) => {
    try {
        res.status(200).json(listGroups);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllGroups
}