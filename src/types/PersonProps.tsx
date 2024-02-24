export type PersonProps = {
    person?: {
        avatar: string,
        details: {
            city: string,
            company: string,
            position: string
        },
        id: number,
        name:string
    }
}