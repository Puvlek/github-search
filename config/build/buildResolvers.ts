import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            assets: path.resolve(__dirname, "src/assets"),
            widgets: path.resolve(__dirname, "src/widgets"),
            entities: path.resolve(__dirname, "src/entities"),
            shared: path.resolve(__dirname, "src/shared"),
        },
    }
}
