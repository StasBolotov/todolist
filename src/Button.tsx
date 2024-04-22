export type buttonPropsType = {
    title: string
}
export const Button = ({title}: buttonPropsType) => {
    return (
        <button>
            <span>{title}</span>
        </button>
    )
}