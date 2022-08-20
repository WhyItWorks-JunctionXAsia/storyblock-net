/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "storyblock.storyblock";

export interface Book {
  creator: string;
  id: number;
  keplr: string;
  bookId: string;
  title: string;
  synopsis: string;
  createdAt: string;
}

const baseBook: object = {
  creator: "",
  id: 0,
  keplr: "",
  bookId: "",
  title: "",
  synopsis: "",
  createdAt: "",
};

export const Book = {
  encode(message: Book, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.keplr !== "") {
      writer.uint32(26).string(message.keplr);
    }
    if (message.bookId !== "") {
      writer.uint32(34).string(message.bookId);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.synopsis !== "") {
      writer.uint32(50).string(message.synopsis);
    }
    if (message.createdAt !== "") {
      writer.uint32(58).string(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Book {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBook } as Book;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.keplr = reader.string();
          break;
        case 4:
          message.bookId = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.synopsis = reader.string();
          break;
        case 7:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Book {
    const message = { ...baseBook } as Book;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.keplr !== undefined && object.keplr !== null) {
      message.keplr = String(object.keplr);
    } else {
      message.keplr = "";
    }
    if (object.bookId !== undefined && object.bookId !== null) {
      message.bookId = String(object.bookId);
    } else {
      message.bookId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.synopsis !== undefined && object.synopsis !== null) {
      message.synopsis = String(object.synopsis);
    } else {
      message.synopsis = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    return message;
  },

  toJSON(message: Book): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.keplr !== undefined && (obj.keplr = message.keplr);
    message.bookId !== undefined && (obj.bookId = message.bookId);
    message.title !== undefined && (obj.title = message.title);
    message.synopsis !== undefined && (obj.synopsis = message.synopsis);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Book>): Book {
    const message = { ...baseBook } as Book;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.keplr !== undefined && object.keplr !== null) {
      message.keplr = object.keplr;
    } else {
      message.keplr = "";
    }
    if (object.bookId !== undefined && object.bookId !== null) {
      message.bookId = object.bookId;
    } else {
      message.bookId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.synopsis !== undefined && object.synopsis !== null) {
      message.synopsis = object.synopsis;
    } else {
      message.synopsis = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
