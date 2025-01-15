import * as $protobuf from "../../..";
import Long = require("long");
export namespace vector_tile {

    interface ITile {
        layers?: (vector_tile.Tile.ILayer[]|null);

        $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Tile implements ITile {
        constructor(properties?: vector_tile.ITile);
        public layers: vector_tile.Tile.ILayer[];
        public static create(properties?: vector_tile.ITile): vector_tile.Tile;
        public static encode(message: vector_tile.ITile, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: vector_tile.ITile, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): vector_tile.Tile;
        public static toObject(message: vector_tile.Tile, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Tile {

        enum GeomType {
            UNKNOWN = 0,
            POINT = 1,
            LINESTRING = 2,
            POLYGON = 3
        }

        interface IValue {
            stringValue?: (string|null);
            floatValue?: (number|null);
            doubleValue?: (number|null);
            intValue?: (number|Long|null);
            uintValue?: (number|Long|null);
            sintValue?: (number|Long|null);
            boolValue?: (boolean|null);

            $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        class Value implements IValue {
            constructor(properties?: vector_tile.Tile.IValue);
            public stringValue: string;
            public floatValue: number;
            public doubleValue: number;
            public intValue: (number|Long);
            public uintValue: (number|Long);
            public sintValue: (number|Long);
            public boolValue: boolean;
            public static create(properties?: vector_tile.Tile.IValue): vector_tile.Tile.Value;
            public static encode(message: vector_tile.Tile.IValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: vector_tile.Tile.IValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile.Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile.Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): vector_tile.Tile.Value;
            public static toObject(message: vector_tile.Tile.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;

            public $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        interface IFeature {
            id?: (number|Long|null);
            tags?: (number[]|null);
            type?: (vector_tile.Tile.GeomType|null);
            geometry?: (number[]|null);

            $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        class Feature implements IFeature {
            constructor(properties?: vector_tile.Tile.IFeature);
            public id: (number|Long);
            public tags: number[];
            public type: vector_tile.Tile.GeomType;
            public geometry: number[];
            public static create(properties?: vector_tile.Tile.IFeature): vector_tile.Tile.Feature;
            public static encode(message: vector_tile.Tile.IFeature, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: vector_tile.Tile.IFeature, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile.Feature;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile.Feature;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): vector_tile.Tile.Feature;
            public static toObject(message: vector_tile.Tile.Feature, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;

            public $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        interface ILayer {
            version: number;
            name: string;
            features?: (vector_tile.Tile.IFeature[]|null);
            keys?: (string[]|null);
            values?: (vector_tile.Tile.IValue[]|null);
            extent?: (number|null);

            $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        class Layer implements ILayer {
            constructor(properties?: vector_tile.Tile.ILayer);
            public version: number;
            public name: string;
            public features: vector_tile.Tile.IFeature[];
            public keys: string[];
            public values: vector_tile.Tile.IValue[];
            public extent: number;
            public static create(properties?: vector_tile.Tile.ILayer): vector_tile.Tile.Layer;
            public static encode(message: vector_tile.Tile.ILayer, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: vector_tile.Tile.ILayer, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile.Layer;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile.Layer;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): vector_tile.Tile.Layer;
            public static toObject(message: vector_tile.Tile.Layer, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;

            public $unknownFields?: ReadonlyArray<Uint8Array>;
        }
    }
}
