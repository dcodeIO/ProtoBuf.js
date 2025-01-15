import * as $protobuf from "../..";
import Long = require("long");
export interface IPackage {
    name?: (string|null);
    version?: (string|null);
    versionScheme?: (string|null);
    description?: (string|null);
    author?: (string|null);
    license?: (string|null);
    repository?: (Package.IRepository|null);
    bugs?: (string|null);
    homepage?: (string|null);
    keywords?: (string[]|null);
    main?: (string|null);
    bin?: ({ [k: string]: string }|null);
    scripts?: ({ [k: string]: string }|null);
    dependencies?: ({ [k: string]: string }|null);
    devDependencies?: ({ [k: string]: string }|null);
    types?: (string|null);
    cliDependencies?: (string[]|null);

    $unknownFields?: ReadonlyArray<Uint8Array>;
}

export class Package implements IPackage {
    constructor(properties?: IPackage);
    public name: string;
    public version: string;
    public versionScheme: string;
    public description: string;
    public author: string;
    public license: string;
    public repository?: (Package.IRepository|null);
    public bugs: string;
    public homepage: string;
    public keywords: string[];
    public main: string;
    public bin: { [k: string]: string };
    public scripts: { [k: string]: string };
    public dependencies: { [k: string]: string };
    public devDependencies: { [k: string]: string };
    public types: string;
    public cliDependencies: string[];
    public static create(properties?: IPackage): Package;
    public static encode(message: IPackage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPackage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Package;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Package;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Package;
    public static toObject(message: Package, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
}

export namespace Package {

    interface IRepository {
        type?: (string|null);
        url?: (string|null);

        $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Repository implements IRepository {
        constructor(properties?: Package.IRepository);
        public type: string;
        public url: string;
        public static create(properties?: Package.IRepository): Package.Repository;
        public static encode(message: Package.IRepository, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Package.IRepository, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Package.Repository;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Package.Repository;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Package.Repository;
        public static toObject(message: Package.Repository, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
    }
}
