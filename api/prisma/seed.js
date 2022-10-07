import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const char = [
    {
        "photo": "https://ibb.co/Kb1JNPV",
        "firstName": "Dennis",
        "lastName": "Xavior",
        "email": "xavior@email.com"
    },
    {
        "photo": "https://ibb.co/4PkHDWh",
        "firstName": "Willard",
        "lastName": "Frank",
        "email": "frank@email.com"
    },
    {
        "photo": "https://ibb.co/qYsGxYz",
        "firstName": "Stanley",
        "lastName": "Orville",
        "email": "orville@email.com"
    },
    {
        "photo": "https://ibb.co/Wn5bQXP",
        "firstName": "Zackery",
        "lastName": "Yaakov",
        "email": "yaakov@email.com"
    },
    {
        "photo": "https://ibb.co/bJZFcbZ",
        "firstName": "Roy",
        "lastName": "Melvin",
        "email": "melvin@email.com"
    },
    {
        "photo": "https://ibb.co/x3F7cRR",
        "firstName": "William",
        "lastName": "Cardwell",
        "email": "cardwell@email.com"
    },
    {
        "photo": "https://ibb.co/DkCSWLY",
        "firstName": "Quincey",
        "lastName": "Karl",
        "email": "karl@email.com"
    },
    {
        "photo": "https://ibb.co/M6SS1XF",
        "firstName": "Kurt",
        "lastName": "Paul",
        "email": "paul@email.com"
    },
    {
        "photo": "https://ibb.co/2NtfGqY",
        "firstName": "Francis",
        "lastName": "Francisco",
        "email": "francisco@email.com"
    },
    {
        "photo": "https://ibb.co/nCzzWt0",
        "firstName": "Edwin",
        "lastName": "Alexander",
        "email": "alexander@email.com"
    },
    {
        "photo": "https://ibb.co/YfGF9Md",
        "firstName": "Theodore",
        "lastName": "Larry",
        "email": "larry@email.com"
    },
    {
        "photo": "https://ibb.co/ZfjTHNJ",
        "firstName": "Ian",
        "lastName": "Nathaniel",
        "email": "nathaniel@email.com"
    }
]

async function GenerateData () {
    const data = await prisma.char.createMany({
        data: char
    })

    return data
}

GenerateData().then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})