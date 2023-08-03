let data = [
    {
        "nom": "James",
        "prenom": "Bond",
        "email": "et@bk",
        "matieres":"description1",
      
    },
    {
        "nom": "Sadio",
        "prenom": "Pele",
        "age": "vbjd@dorjhoij",
        "matieres": "descrip2",
        
    }]

    export const ajouterpersone = (req, res) => {
        const personneInfo = req.body
        // console.log('Body',req)
    
      
    
        const itExists = data.find(personne => personne.numero === personneInfo.numero)
        if (itExists) return res.status(422).json([{ key: 'numero', message: "L'avi existe deja" }])
        // data.push(studentInfo)
        data = [...data, personneInfo]
        res.status(200).json({ data, message: "L'avis ajoute avec succes" })
    }

    export const ListDesAvis = (req, res) => {
        if (!data.length) return res.status(200).json({ error: false, message: "Pas d'avis dans la liste" })
        res.status(200).json({ error: false, data, message: "List des avis" })
    }