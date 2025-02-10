export const throttle = <T extends (...args: any[]) => void>(
    callee: T,
    timeout: number
): ((...args: Parameters<T>) => void) => {
    let timer: ReturnType<typeof setTimeout> | null = null
    let lastArgs: Parameters<T> | null = null

    return (...args: Parameters<T>): void => {
        lastArgs = args;

        if (!timer) {
            timer = setTimeout(() => {
                if (lastArgs) {
                    callee(...lastArgs)
                    lastArgs = null
                }
                clearTimeout(timer!)
                timer = null
            }, timeout)
        }
    };
};