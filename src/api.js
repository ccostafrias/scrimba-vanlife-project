export async function getVans() {
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getVan(id) {
    const res = await fetch(`/api/vans/${id}`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans() {
    const res = await fetch("/api/host/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVan(id) {
    const res = await fetch(`/api/host/vans/${id}`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )

    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }


    return data
}

export async function getHostTransactions() {
    const res = await fetch("/api/host/transactions")
    if (!res.ok) {
        throw {
            message: "Failed to fetch transactions", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.transactions
}

export async function getReviews() {
    const res = await fetch("/api/host/reviews")
    if (!res.ok) {
        throw {
            message: "Failed to fetch reviews", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.reviews
}