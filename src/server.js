import { createServer, Model } from "miragejs"

createServer({
    models: {
        vans: Model,
        users: Model,
        transactions: Model,
        reviews: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple", hostId: "123" })
        server.create("van", { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged", hostId: "123" })
        server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury", hostId: "456" })
        server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple", hostId: "789" })
        server.create("van", { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", hostId: "789" })
        server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged", hostId: "123" })

        server.create("user", { id: "123", email: "b@b.com", password: "p123", name: "Bob" })
        
        server.create("transaction", { id: "1", price: '720',  date: '1/12/22', hostId: "123"})
        server.create("transaction", { id: "2", price: '560',  date: '10/11/22', hostId: "123"})
        server.create("transaction", { id: "3", price: '980',  date: '23/11/22', hostId: "123"})

        server.create('review', { id: "1",  user: 'Elliot', date: 'December 1, 2022', rating: "5", commentary: 'The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!'})
        server.create('review', { id: "2",  user: 'Sandy', date: 'November 23, 2022', rating: "5", commentary: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!'})
        server.create('review', { id: "3",  user: 'Marcos Paulo', date: 'February 17, 2022', rating: "4.2", commentary: 'Had a lot of fun with my family, but sometimes I felt a little dizzy.'})
        server.create('review', { id: "4",  user: 'Mary Duda', date: 'January 29, 2021', rating: "3.5", commentary: '<3.'})


    },

    routes() {
        this.namespace = "api"
        this.logging = false
        this.timing = 1000
        this.passthrough("https://firestore.googleapis.com/**")

        this.get("/vans", (schema, request) => {
            // throw new Error("This is an error")
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/vans", (schema, request) => {
            // Hard-code the hostId for now
            return schema.vans.where({ hostId: "123" })
        })

        this.get("/host/vans/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.vans.findBy({ id, hostId: "123" })
        })

        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😇
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                throw new Error("No user with those credentials found!")
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })

        this.get("/host/transactions", (schema, request) => {
            return schema.transactions.where({ hostId: "123" })
        })

        this.get("/host/reviews", (schema, request) => {
            return schema.reviews.all()
        })
    }
})