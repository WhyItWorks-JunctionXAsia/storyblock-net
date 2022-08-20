/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "storyblock.storyblock";

export interface MsgCreateBook {
  creator: string;
  keplr: string;
  bookId: string;
  title: string;
  synopsis: string;
  createdAt: string;
}

export interface MsgCreateBookResponse {
  id: number;
}

export interface MsgCreateStory {
  creator: string;
  keplr: string;
  storyId: string;
  bookId: string;
  prevStoryId: string;
  height: string;
  title: string;
  body: string;
  createdAt: string;
}

export interface MsgCreateStoryResponse {
  retCode: number;
}

export interface MsgDoVote {
  creator: string;
  keplr: string;
  storyId: string;
}

export interface MsgDoVoteResponse {}

const baseMsgCreateBook: object = {
  creator: "",
  keplr: "",
  bookId: "",
  title: "",
  synopsis: "",
  createdAt: "",
};

export const MsgCreateBook = {
  encode(message: MsgCreateBook, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.keplr !== "") {
      writer.uint32(18).string(message.keplr);
    }
    if (message.bookId !== "") {
      writer.uint32(26).string(message.bookId);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.synopsis !== "") {
      writer.uint32(42).string(message.synopsis);
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBook {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBook } as MsgCreateBook;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.keplr = reader.string();
          break;
        case 3:
          message.bookId = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.synopsis = reader.string();
          break;
        case 6:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBook {
    const message = { ...baseMsgCreateBook } as MsgCreateBook;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgCreateBook): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.keplr !== undefined && (obj.keplr = message.keplr);
    message.bookId !== undefined && (obj.bookId = message.bookId);
    message.title !== undefined && (obj.title = message.title);
    message.synopsis !== undefined && (obj.synopsis = message.synopsis);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBook>): MsgCreateBook {
    const message = { ...baseMsgCreateBook } as MsgCreateBook;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgCreateBookResponse: object = { id: 0 };

export const MsgCreateBookResponse = {
  encode(
    message: MsgCreateBookResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBookResponse } as MsgCreateBookResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBookResponse {
    const message = { ...baseMsgCreateBookResponse } as MsgCreateBookResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateBookResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateBookResponse>
  ): MsgCreateBookResponse {
    const message = { ...baseMsgCreateBookResponse } as MsgCreateBookResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateStory: object = {
  creator: "",
  keplr: "",
  storyId: "",
  bookId: "",
  prevStoryId: "",
  height: "",
  title: "",
  body: "",
  createdAt: "",
};

export const MsgCreateStory = {
  encode(message: MsgCreateStory, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.keplr !== "") {
      writer.uint32(18).string(message.keplr);
    }
    if (message.storyId !== "") {
      writer.uint32(26).string(message.storyId);
    }
    if (message.bookId !== "") {
      writer.uint32(34).string(message.bookId);
    }
    if (message.prevStoryId !== "") {
      writer.uint32(42).string(message.prevStoryId);
    }
    if (message.height !== "") {
      writer.uint32(50).string(message.height);
    }
    if (message.title !== "") {
      writer.uint32(58).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(66).string(message.body);
    }
    if (message.createdAt !== "") {
      writer.uint32(74).string(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateStory {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateStory } as MsgCreateStory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.keplr = reader.string();
          break;
        case 3:
          message.storyId = reader.string();
          break;
        case 4:
          message.bookId = reader.string();
          break;
        case 5:
          message.prevStoryId = reader.string();
          break;
        case 6:
          message.height = reader.string();
          break;
        case 7:
          message.title = reader.string();
          break;
        case 8:
          message.body = reader.string();
          break;
        case 9:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStory {
    const message = { ...baseMsgCreateStory } as MsgCreateStory;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.keplr !== undefined && object.keplr !== null) {
      message.keplr = String(object.keplr);
    } else {
      message.keplr = "";
    }
    if (object.storyId !== undefined && object.storyId !== null) {
      message.storyId = String(object.storyId);
    } else {
      message.storyId = "";
    }
    if (object.bookId !== undefined && object.bookId !== null) {
      message.bookId = String(object.bookId);
    } else {
      message.bookId = "";
    }
    if (object.prevStoryId !== undefined && object.prevStoryId !== null) {
      message.prevStoryId = String(object.prevStoryId);
    } else {
      message.prevStoryId = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = String(object.height);
    } else {
      message.height = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    return message;
  },

  toJSON(message: MsgCreateStory): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.keplr !== undefined && (obj.keplr = message.keplr);
    message.storyId !== undefined && (obj.storyId = message.storyId);
    message.bookId !== undefined && (obj.bookId = message.bookId);
    message.prevStoryId !== undefined &&
      (obj.prevStoryId = message.prevStoryId);
    message.height !== undefined && (obj.height = message.height);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateStory>): MsgCreateStory {
    const message = { ...baseMsgCreateStory } as MsgCreateStory;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.keplr !== undefined && object.keplr !== null) {
      message.keplr = object.keplr;
    } else {
      message.keplr = "";
    }
    if (object.storyId !== undefined && object.storyId !== null) {
      message.storyId = object.storyId;
    } else {
      message.storyId = "";
    }
    if (object.bookId !== undefined && object.bookId !== null) {
      message.bookId = object.bookId;
    } else {
      message.bookId = "";
    }
    if (object.prevStoryId !== undefined && object.prevStoryId !== null) {
      message.prevStoryId = object.prevStoryId;
    } else {
      message.prevStoryId = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = "";
    }
    return message;
  },
};

const baseMsgCreateStoryResponse: object = { retCode: 0 };

export const MsgCreateStoryResponse = {
  encode(
    message: MsgCreateStoryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.retCode !== 0) {
      writer.uint32(8).int32(message.retCode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateStoryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateStoryResponse } as MsgCreateStoryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retCode = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStoryResponse {
    const message = { ...baseMsgCreateStoryResponse } as MsgCreateStoryResponse;
    if (object.retCode !== undefined && object.retCode !== null) {
      message.retCode = Number(object.retCode);
    } else {
      message.retCode = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateStoryResponse): unknown {
    const obj: any = {};
    message.retCode !== undefined && (obj.retCode = message.retCode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateStoryResponse>
  ): MsgCreateStoryResponse {
    const message = { ...baseMsgCreateStoryResponse } as MsgCreateStoryResponse;
    if (object.retCode !== undefined && object.retCode !== null) {
      message.retCode = object.retCode;
    } else {
      message.retCode = 0;
    }
    return message;
  },
};

const baseMsgDoVote: object = { creator: "", keplr: "", storyId: "" };

export const MsgDoVote = {
  encode(message: MsgDoVote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.keplr !== "") {
      writer.uint32(18).string(message.keplr);
    }
    if (message.storyId !== "") {
      writer.uint32(26).string(message.storyId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDoVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDoVote } as MsgDoVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.keplr = reader.string();
          break;
        case 3:
          message.storyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDoVote {
    const message = { ...baseMsgDoVote } as MsgDoVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.keplr !== undefined && object.keplr !== null) {
      message.keplr = String(object.keplr);
    } else {
      message.keplr = "";
    }
    if (object.storyId !== undefined && object.storyId !== null) {
      message.storyId = String(object.storyId);
    } else {
      message.storyId = "";
    }
    return message;
  },

  toJSON(message: MsgDoVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.keplr !== undefined && (obj.keplr = message.keplr);
    message.storyId !== undefined && (obj.storyId = message.storyId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDoVote>): MsgDoVote {
    const message = { ...baseMsgDoVote } as MsgDoVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.keplr !== undefined && object.keplr !== null) {
      message.keplr = object.keplr;
    } else {
      message.keplr = "";
    }
    if (object.storyId !== undefined && object.storyId !== null) {
      message.storyId = object.storyId;
    } else {
      message.storyId = "";
    }
    return message;
  },
};

const baseMsgDoVoteResponse: object = {};

export const MsgDoVoteResponse = {
  encode(_: MsgDoVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDoVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDoVoteResponse } as MsgDoVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDoVoteResponse {
    const message = { ...baseMsgDoVoteResponse } as MsgDoVoteResponse;
    return message;
  },

  toJSON(_: MsgDoVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDoVoteResponse>): MsgDoVoteResponse {
    const message = { ...baseMsgDoVoteResponse } as MsgDoVoteResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateBook(request: MsgCreateBook): Promise<MsgCreateBookResponse>;
  CreateStory(request: MsgCreateStory): Promise<MsgCreateStoryResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DoVote(request: MsgDoVote): Promise<MsgDoVoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateBook(request: MsgCreateBook): Promise<MsgCreateBookResponse> {
    const data = MsgCreateBook.encode(request).finish();
    const promise = this.rpc.request(
      "storyblock.storyblock.Msg",
      "CreateBook",
      data
    );
    return promise.then((data) =>
      MsgCreateBookResponse.decode(new Reader(data))
    );
  }

  CreateStory(request: MsgCreateStory): Promise<MsgCreateStoryResponse> {
    const data = MsgCreateStory.encode(request).finish();
    const promise = this.rpc.request(
      "storyblock.storyblock.Msg",
      "CreateStory",
      data
    );
    return promise.then((data) =>
      MsgCreateStoryResponse.decode(new Reader(data))
    );
  }

  DoVote(request: MsgDoVote): Promise<MsgDoVoteResponse> {
    const data = MsgDoVote.encode(request).finish();
    const promise = this.rpc.request(
      "storyblock.storyblock.Msg",
      "DoVote",
      data
    );
    return promise.then((data) => MsgDoVoteResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
