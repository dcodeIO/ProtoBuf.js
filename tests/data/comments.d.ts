import * as $protobuf from "../..";
import Long = require("long");
export interface ITest1 {
    field1?: (string|null);
    field2?: (number|null);
    field3?: (boolean|null);

    $unknownFields?: ReadonlyArray<Uint8Array>;
}

export class Test1 implements ITest1 {
    constructor(properties?: ITest1);
    public field1: string;
    public field2: number;
    public field3: boolean;
    public static create(properties?: ITest1): Test1;
    public static encode(message: ITest1, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ITest1, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Test1;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Test1;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Test1;
    public static toObject(message: Test1, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
}

export interface ITest2 {

    $unknownFields?: ReadonlyArray<Uint8Array>;
}

export class Test2 implements ITest2 {
    constructor(properties?: ITest2);
    public static create(properties?: ITest2): Test2;
    public static encode(message: ITest2, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ITest2, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Test2;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Test2;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Test2;
    public static toObject(message: Test2, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
}

export enum Test3 {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5
}
