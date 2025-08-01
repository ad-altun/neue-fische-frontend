import type { TitleProps } from "../types/AppTypes"

export default function Title({ title, subtitle }: TitleProps) {
    return (
        <div>
            <h1>{title} : </h1>
            <h2>{subtitle} : </h2>
        </div>
    )
}
