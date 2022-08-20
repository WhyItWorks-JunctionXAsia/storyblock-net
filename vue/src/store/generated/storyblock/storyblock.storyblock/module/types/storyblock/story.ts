/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "storyblock.storyblock";

export interface Story {
  creator: string;
  id: number;
  storyId: string;
  bookId: string;
  prevStoryId: string;
  height: string;
  title: string;
  body: string;
  createdAt: string;
}

const baseStory: object = {
  creator: "",
  id: 0,
  storyId: "",
  bookId: "",
  prevStoryId: "",
  height: "",
  title: "",
  body: "",
  createdAt: "",
};

export const Story = {
  encode(message: Story, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
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

  decode(input: Reader | Uint8Array, length?: number): Story {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStory } as Story;
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

  fromJSON(object: any): Story {
    const message = { ...baseStory } as Story;
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

  toJSON(message: Story): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
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

  fromPartial(object: DeepPartial<Story>): Story {
    const message = { ...baseStory } as Story;
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
