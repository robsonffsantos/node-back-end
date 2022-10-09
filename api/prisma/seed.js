import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const char = [
    {
        "photo": "https://i.ibb.co/2WbT89c/Player-105.png",
        "firstName": "Dennis",
        "lastName": "Xavior",
        "email": "xavior@email.com"
    },
    {
        "photo": "https://i.ibb.co/3BKn81g/Player-26.png",
        "firstName": "Willard",
        "lastName": "Frank",
        "email": "frank@email.com"
    },
    {
        "photo": "https://i.ibb.co/Jj7LCjN/Player-39.png",
        "firstName": "Stanley",
        "lastName": "Orville",
        "email": "orville@email.com"
    },
    {
        "photo": "https://i.ibb.co/LSRLMyJ/Player-80.png",
        "firstName": "Zackery",
        "lastName": "Yaakov",
        "email": "yaakov@email.com"
    },
    {
        "photo": "https://i.ibb.co/M64fFB4/Player-101.png",
        "firstName": "Roy",
        "lastName": "Melvin",
        "email": "melvin@email.com"
    },
    {
        "photo": "https://i.ibb.co/zN64L00/Player-111.png",
        "firstName": "William",
        "lastName": "Cardwell",
        "email": "cardwell@email.com"
    },
    {
        "photo": "https://i.ibb.co/ftpPFQ9/Player-115.png",
        "firstName": "Quincey",
        "lastName": "Karl",
        "email": "karl@email.com"
    },
    {
        "photo": "https://i.ibb.co/rs00pWD/Player-135.png",
        "firstName": "Kurt",
        "lastName": "Paul",
        "email": "paul@email.com"
    },
    {
        "photo": "https://i.ibb.co/Srn9FN7/Player-141.png",
        "firstName": "Francis",
        "lastName": "Francisco",
        "email": "francisco@email.com"
    },
    {
        "photo": "https://i.ibb.co/YZpprwW/Player-150.png",
        "firstName": "Edwin",
        "lastName": "Alexander",
        "email": "alexander@email.com"
    },
    {
        "photo": "https://i.ibb.co/NWzdhPN/Player-5.png",
        "firstName": "Theodore",
        "lastName": "Larry",
        "email": "larry@email.com"
    },
    {
        "photo": "https://i.ibb.co/9pDYwGv/Player-3.png",
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