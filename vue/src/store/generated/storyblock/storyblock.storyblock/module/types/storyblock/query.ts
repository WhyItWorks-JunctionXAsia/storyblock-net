/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../storyblock/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Book } from "../storyblock/book";
import { Story } from "../storyblock/story";
import { Vote } from "../storyblock/vote";

export const protobufPackage = "storyblock.storyblock";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryBooksRequest {
  pagination: PageRequest | undefined;
}

export interface QueryBooksResponse {
  Book: Book[];
  pagination: PageResponse | undefined;
}

export interface QueryStoriesRequest {
  bookId: string;
  pagination: PageRequest | undefined;
}

export interface QueryStoriesResponse {
  book: Book | undefined;
  Story: Story[];
  pagination: PageResponse | undefined;
}

export interface QueryVotesRequest {
  bookId: string;
  pagination: PageRequest | undefined;
}

export interface QueryVotesResponse {
  book: Book | undefined;
  Vote: Vote[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryBooksRequest: object = {};

export const QueryBooksRequest = {
  encode(message: QueryBooksRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBooksRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBooksRequest } as QueryBooksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBooksRequest {
    const message = { ...baseQueryBooksRequest } as QueryBooksRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryBooksRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBooksRequest>): QueryBooksRequest {
    const message = { ...baseQueryBooksRequest } as QueryBooksRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryBooksResponse: object = {};

export const QueryBooksResponse = {
  encode(
    message: QueryBooksResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Book) {
      Book.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBooksResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBooksResponse } as QueryBooksResponse;
    message.Book = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Book.push(Book.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBooksResponse {
    const message = { ...baseQueryBooksResponse } as QueryBooksResponse;
    message.Book = [];
    if (object.Book !== undefined && object.Book !== null) {
      for (const e of object.Book) {
        message.Book.push(Book.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryBooksResponse): unknown {
    const obj: any = {};
    if (message.Book) {
      obj.Book = message.Book.map((e) => (e ? Book.toJSON(e) : undefined));
    } else {
      obj.Book = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBooksResponse>): QueryBooksResponse {
    const message = { ...baseQueryBooksResponse } as QueryBooksResponse;
    message.Book = [];
    if (object.Book !== undefined && object.Book !== null) {
      for (const e of object.Book) {
        message.Book.push(Book.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryStoriesRequest: object = { bookId: "" };

export const QueryStoriesRequest = {
  encode(
    message: QueryStoriesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.bookId !== "") {
      writer.uint32(10).string(message.bookId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryStoriesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStoriesRequest } as QueryStoriesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bookId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStoriesRequest {
    const message = { ...baseQueryStoriesRequest } as QueryStoriesRequest;
    if (object.bookId !== undefined && object.bookId !== null) {
      message.bookId = String(object.bookId);
    } else {
      message.bookId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryStoriesRequest): unknown {
    const obj: any = {};
    message.bookId !== undefined && (obj.bookId = message.bookId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStoriesRequest>): QueryStoriesRequest {
    const message = { ...baseQueryStoriesRequest } as QueryStoriesRequest;
    if (object.bookId !== undefined && object.bookId !== null) {
      message.bookId = object.bookId;
    } else {
      message.bookId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryStoriesResponse: object = {};

export const QueryStoriesResponse = {
  encode(
    message: QueryStoriesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.book !== undefined) {
      Book.encode(message.book, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.Story) {
      Story.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryStoriesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStoriesResponse } as QueryStoriesResponse;
    message.Story = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.book = Book.decode(reader, reader.uint32());
          break;
        case 2:
          message.Story.push(Story.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStoriesResponse {
    const message = { ...baseQueryStoriesResponse } as QueryStoriesResponse;
    message.Story = [];
    if (object.book !== undefined && object.book !== null) {
      message.book = Book.fromJSON(object.book);
    } else {
      message.book = undefined;
    }
    if (object.Story !== undefined && object.Story !== null) {
      for (const e of object.Story) {
        message.Story.push(Story.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryStoriesResponse): unknown {
    const obj: any = {};
    message.book !== undefined &&
      (obj.book = message.book ? Book.toJSON(message.book) : undefined);
    if (message.Story) {
      obj.Story = message.Story.map((e) => (e ? Story.toJSON(e) : undefined));
    } else {
      obj.Story = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStoriesResponse>): QueryStoriesResponse {
    const message = { ...baseQueryStoriesResponse } as QueryStoriesResponse;
    message.Story = [];
    if (object.book !== undefined && object.book !== null) {
      message.book = Book.fromPartial(object.book);
    } else {
      message.book = undefined;
    }
    if (object.Story !== undefined && object.Story !== null) {
      for (const e of object.Story) {
        message.Story.push(Story.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVotesRequest: object = { bookId: "" };

export const QueryVotesRequest = {
  encode(message: QueryVotesRequest, writer: Writer = Writer.create()): Writer {
    if (message.bookId !== "") {
      writer.uint32(10).string(message.bookId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryVotesRequest } as QueryVotesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bookId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesRequest {
    const message = { ...baseQueryVotesRequest } as QueryVotesRequest;
    if (object.bookId !== undefined && object.bookId !== null) {
      message.bookId = String(object.bookId);
    } else {
      message.bookId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVotesRequest): unknown {
    const obj: any = {};
    message.bookId !== undefined && (obj.bookId = message.bookId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest {
    const message = { ...baseQueryVotesRequest } as QueryVotesRequest;
    if (object.bookId !== undefined && object.bookId !== null) {
      message.bookId = object.bookId;
    } else {
      message.bookId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVotesResponse: object = {};

export const QueryVotesResponse = {
  encode(
    message: QueryVotesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.book !== undefined) {
      Book.encode(message.book, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.Vote) {
      Vote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryVotesResponse } as QueryVotesResponse;
    message.Vote = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.book = Book.decode(reader, reader.uint32());
          break;
        case 2:
          message.Vote.push(Vote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesResponse {
    const message = { ...baseQueryVotesResponse } as QueryVotesResponse;
    message.Vote = [];
    if (object.book !== undefined && object.book !== null) {
      message.book = Book.fromJSON(object.book);
    } else {
      message.book = undefined;
    }
    if (object.Vote !== undefined && object.Vote !== null) {
      for (const e of object.Vote) {
        message.Vote.push(Vote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVotesResponse): unknown {
    const obj: any = {};
    message.book !== undefined &&
      (obj.book = message.book ? Book.toJSON(message.book) : undefined);
    if (message.Vote) {
      obj.Vote = message.Vote.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.Vote = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse {
    const message = { ...baseQueryVotesResponse } as QueryVotesResponse;
    message.Vote = [];
    if (object.book !== undefined && object.book !== null) {
      message.book = Book.fromPartial(object.book);
    } else {
      message.book = undefined;
    }
    if (object.Vote !== undefined && object.Vote !== null) {
      for (const e of object.Vote) {
        message.Vote.push(Vote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Books items. */
  Books(request: QueryBooksRequest): Promise<QueryBooksResponse>;
  /** Queries a list of Stories items. */
  Stories(request: QueryStoriesRequest): Promise<QueryStoriesResponse>;
  /** Queries a list of Votes items. */
  Votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "storyblock.storyblock.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Books(request: QueryBooksRequest): Promise<QueryBooksResponse> {
    const data = QueryBooksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "storyblock.storyblock.Query",
      "Books",
      data
    );
    return promise.then((data) => QueryBooksResponse.decode(new Reader(data)));
  }

  Stories(request: QueryStoriesRequest): Promise<QueryStoriesResponse> {
    const data = QueryStoriesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "storyblock.storyblock.Query",
      "Stories",
      data
    );
    return promise.then((data) =>
      QueryStoriesResponse.decode(new Reader(data))
    );
  }

  Votes(request: QueryVotesRequest): Promise<QueryVotesResponse> {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "storyblock.storyblock.Query",
      "Votes",
      data
    );
    return promise.then((data) => QueryVotesResponse.decode(new Reader(data)));
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
