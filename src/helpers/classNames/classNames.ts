export const classNames = (cls: string, options?: Record<string, boolean>, additional: Array<string | undefined> = []):string => {
    return [
        cls,
        ...additional?.filter(Boolean),
        ...Object.entries(options)
            .filter(([_, value]) => Boolean(value))
            .map(([className]: [string, boolean | string | undefined]) => className),

    ].join(' ')
}