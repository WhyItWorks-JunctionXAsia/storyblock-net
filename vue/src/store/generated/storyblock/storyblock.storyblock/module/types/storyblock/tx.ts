/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "storyblock.storyblock";

export interface MsgCreateBook {
  creator: string;
  title: string;
  synopsis: string;
  createdAt: string;
}

export interface MsgCreateBookResponse {}

const baseMsgCreateBook: object = {
  creator: "",
  title: "",
  synopsis: "",
  createdAt: "",
};

export const MsgCreateBook = {
  encode(message: MsgCreateBook, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.synopsis !== "") {
      writer.uint32(26).string(message.synopsis);
    }
    if (message.createdAt !== "") {
      writer.uint32(34).string(message.createdAt);
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
          message.title = reader.string();
          break;
        case 3:
          message.synopsis = reader.string();
          break;
        case 4:
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

const baseMsgCreateBookResponse: object = {};

export const MsgCreateBookResponse = {
  encode(_: MsgCreateBookResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBookResponse } as MsgCreateBookResponse;
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

  fromJSON(_: any): MsgCreateBookResponse {
    const message = { ...baseMsgCreateBookResponse } as MsgCreateBookResponse;
    return message;
  },

  toJSON(_: MsgCreateBookResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateBookResponse>): MsgCreateBookResponse {
    const message = { ...baseMsgCreateBookResponse } as MsgCreateBookResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateBook(request: MsgCreateBook): Promise<MsgCreateBookResponse>;
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
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
