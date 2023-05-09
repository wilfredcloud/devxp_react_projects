export type CardProps = {
    padding?: number
    borderRadius?: number
}

export type FlexProps = {
    toRow?: boolean
    toColumn?: boolean
    children?: React.ReactNode
    justifyContent?: string
    alignItems?: string
    gap?: number
    padding?: number
    borderBottom?: string
    width?: string
}

export type TypographyProps = {
    fontName?: string
    fontSize?: number
    fontWeight?: number
    textAlign?: string
    overFlow?: string
    color?: string
    margin?: number
}

export type InputProps = {
    placeholder: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type DummyDataProps = {
    date: string
    title: string
    description: string
    id: number
}[]
